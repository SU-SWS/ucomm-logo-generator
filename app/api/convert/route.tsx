import {NextResponse} from "next/server"
import sharp from "sharp"
import JSZip from "jszip"
import CloudConvert from "cloudconvert"

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
  const postData = await request.json()

  const logoFile = Buffer.from(postData.image)
  const generatedSize = {width: postData.width * 5, height: postData.height * 5}

  const zipFile = new JSZip()
  zipFile.file("logo.svg", logoFile)

  // Create Black file.
  const blackPng = await sharp(logoFile).resize(generatedSize).greyscale().linear(0, 1.5).png({colors: 2}).toBuffer()
  zipFile.file("black-logo.png", blackPng, {base64: true})

  // Create White PNG file.
  const whitePng = await sharp(logoFile)
    .resize(generatedSize)
    .greyscale()
    .linear(0, 1.5)
    .negate({alpha: false})
    .png({colors: 2})
    .toBuffer()
  zipFile.file("white-logo.png", whitePng, {base64: true})

  // Create regular PNG file.
  const png = await sharp(logoFile).resize(generatedSize).png().toBuffer()
  zipFile.file("logo.png", png, {base64: true})

  // Create JPEG file.
  const jpg = await sharp(logoFile).resize(generatedSize).flatten({background: "#fff"}).jpeg().toBuffer()
  zipFile.file("logo.jpeg", jpg, {base64: true})

  const blackSvg = Buffer.from(logoFile.toString().replaceAll(/(fill|stroke)="#.*?"/g, '$1="#000000"'))
  const whiteSvg = Buffer.from(logoFile.toString().replaceAll(/(fill|stroke)="#.*?"/g, '$1="#ffffff"'))

  const epsFiles = await Promise.all([
    getEpsFile(logoFile.toString("base64")),
    getEpsFile(blackSvg.toString("base64")),
    getEpsFile(whiteSvg.toString("base64")),
  ])

  if (epsFiles[0]) zipFile.file("logo.eps", epsFiles[0])
  if (epsFiles[1]) zipFile.file("black-logo.eps", epsFiles[1])
  if (epsFiles[2]) zipFile.file("white-logo.eps", epsFiles[2])

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
  if (!process.env.CLOUD_CONVERT_KEY) return
  const cloudConvert = new CloudConvert(process.env.CLOUD_CONVERT_KEY, !!process.env.CLOUD_CONVERT_SANDBOX)

  let job = await cloudConvert.jobs.create({
    tasks: {
      "upload-my-file": {
        operation: "import/base64",
        file: imageBase64,
        filename: "logo.svg",
      },
      "convert-my-file": {
        operation: "convert",
        input: "upload-my-file",
        input_format: "svg",
        output_format: "eps",
        text_to_path: true,
      },
      "export-my-file": {
        operation: "export/url",
        input: "convert-my-file",
      },
    },
  })

  // Wait for job completion
  job = await cloudConvert.jobs.wait(job.id)
  const file = cloudConvert.jobs.getExportUrls(job)[0]

  if (file?.url) {
    const epsFile = await fetch(file.url).then(res => res.blob())
    return Buffer.from(await epsFile.arrayBuffer())
  }
}
