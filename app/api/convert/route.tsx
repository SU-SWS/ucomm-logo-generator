import {NextResponse} from "next/server"
import sharp from "sharp"
import JSZip from "jszip"
import CloudConvert from "cloudconvert"
import {convertImageSchema} from "@zod/schema"
import opentype from "opentype.js"
import {testLogo} from "./test-logo"

export const dynamic = "force-dynamic"
export const maxDuration = 60

/*
Formats:
EPS - Regular :check:
EPS - Black :check:
EPS - White :check:

JPG - Regular :check:

PNG - Regular :check:
PNG - Black :check:
PNG - White :check:
 */
export const POST = async (request: Request) => {
  // TODO: Add in some type of checker like JWT or something.
  let svgImageString = "",
    imageWidth = 0,
    imageHeight = 0

  try {
    const postData = await request.json()
    const requestData = convertImageSchema.parse(postData)
    svgImageString = requestData.image
    imageWidth = requestData.width
    imageHeight = requestData.height
  } catch (error) {
    if (error instanceof Error) console.error(error.message)
    return new NextResponse("Invalid", {status: 400})
  }

  // Grab all the <text>...</text> elements.
  const textMatch = svgImageString.matchAll(/<text.*?\/text>/g)

  // Convert <text> elements into <path> SVG elements to avoid font family issues.
  for (const textElement of textMatch) {
    const textString = textElement[0].match(/>(.*)</)

    // No text exists in the element. Remove the element and move on.
    if (!textString || textString[1].length === 0) {
      svgImageString = svgImageString.replace(textElement[0], "")
      continue
    }

    // Check if font-style: italic exists on the element.
    const isItalic = /italic/.test(textElement[0])

    // Grab the font styles that will determine the font file we load later.
    const fontSize = textElement[0].match(/font-size: ([\d.]+)px/)
    const fontWeight = textElement[0].match(/font-weight: (\d+)/)

    // Offset coordinates.
    const xCoord = textElement[0].match(/ x="([\d.-]+)"/)
    const yCoord = textElement[0].match(/ y="([\d.-]+)"/)

    // X and Y coordinates of the starting text within the SVG.
    const translateX = parseFloat(xCoord?.[1] || "0")
    const translateY = parseFloat(yCoord?.[1] || "0")

    const weight = fontWeight ? fontWeight[1] : 400
    const fontStyle = isItalic ? "italic" : "normal"
    const fontFile = `https://cdn.jsdelivr.net/npm/@fontsource/source-sans-3@5.2.8/files/source-sans-3-latin-${weight}-${fontStyle}.woff`

    const fontWoff = await fetch(fontFile, {cache: "force-cache"})
    const fontBuffer = await fontWoff.arrayBuffer()
    const font = opentype.parse(fontBuffer)
    const textSvg = font.getPath(textString[1], translateX, translateY, fontSize?.[1] ? parseFloat(fontSize[1]) : 12, {
      letterSpacing: 0,
    })
    svgImageString = svgImageString.replace(textElement[0], textSvg.toSVG(3))
  }

  const logoFile = Buffer.from(svgImageString)

  // Scale the image for better PNG and JPEG images.
  const generatedSize = {width: imageWidth * 5, height: imageHeight * 5}

  // Create the zip and add the original SVG.
  const zipFile = new JSZip()
  zipFile.file("logo.svg", logoFile)

  // Create Black PNG file & add to zip.
  const blackPng = await sharp(logoFile).resize(generatedSize).greyscale().linear(0, 1.5).png({colors: 2}).toBuffer()
  zipFile.file("black-logo.png", blackPng, {base64: true})

  // Create White PNG file & add to zip.
  const whitePng = await sharp(logoFile)
    .resize(generatedSize)
    .greyscale()
    .linear(0, 1.5)
    .negate({alpha: false})
    .png({colors: 2})
    .toBuffer()
  zipFile.file("white-logo.png", whitePng, {base64: true})

  // Create regular PNG file & add to zip.
  const png = await sharp(logoFile).resize(generatedSize).png().toBuffer()
  zipFile.file("logo.png", png, {base64: true})

  // Create JPEG file & add to zip.
  const jpg = await sharp(logoFile).resize(generatedSize).flatten({background: "#fff"}).jpeg().toBuffer()
  zipFile.file("logo.jpeg", jpg, {base64: true})

  // Modify the SVG by replacing any fill or stroke properties on elements. This is the fastest way to change the image
  // without loosing/changing any vectors.
  const blackSvg = Buffer.from(logoFile.toString().replaceAll(/(fill|stroke)="#.*?"/g, '$1="#000000"'))
  const whiteSvg = Buffer.from(logoFile.toString().replaceAll(/(fill|stroke)="#.*?"/g, '$1="#ffffff"'))

  // Call the Cloud convert to convert all 3 SVG files in parallel.
  const epsFiles = await Promise.all([
    getEpsFile(logoFile.toString("base64")),
    getEpsFile(blackSvg.toString("base64")),
    getEpsFile(whiteSvg.toString("base64")),
  ])
  if (epsFiles[0]) zipFile.file("logo.eps", epsFiles[0])
  if (epsFiles[1]) zipFile.file("black-logo.eps", epsFiles[1])
  if (epsFiles[2]) zipFile.file("white-logo.eps", epsFiles[2])

  // Return the zip as a blob for the browser to download.
  const generatedFile = await zipFile.generateAsync({type: "blob"})
  return new NextResponse(generatedFile, {
    status: 200,
    headers: new Headers({
      "content-disposition": `attachment; filename=logos.zip`,
      "content-type": "application/zip",
      "content-length": generatedFile.size + "",
    }),
  })
}

const getEpsFile = async (imageBase64: string) => {
  // No API key?
  if (!process.env.CLOUD_CONVERT_KEY) return

  const useSandbox = !!process.env.CLOUD_CONVERT_SANDBOX

  if (useSandbox) imageBase64 = new Buffer(testLogo).toString("base64")

  const cloudConvert = new CloudConvert(process.env.CLOUD_CONVERT_KEY, useSandbox)

  let job = await cloudConvert.jobs.create({
    tasks: {
      "upload-logo": {
        operation: "import/base64",
        file: imageBase64,
        filename: "logo.svg",
      },
      "convert-logo": {
        operation: "convert",
        input: "upload-logo",
        input_format: "svg",
        output_format: "eps",
        text_to_path: true,
      },
      "export-logo": {
        operation: "export/url",
        input: "convert-logo",
      },
    },
  })

  // Wait for job completion, then grab the exported URL after the conversion.
  job = await cloudConvert.jobs.wait(job.id)
  const file = cloudConvert.jobs.getExportUrls(job)[0]

  if (file?.url) {
    // Fetch the file contents and return it as a buffer, so it can be easily added to the ZIP.
    const epsFile = await fetch(file.url).then(res => res.blob())
    return Buffer.from(await epsFile.arrayBuffer())
  }
}
