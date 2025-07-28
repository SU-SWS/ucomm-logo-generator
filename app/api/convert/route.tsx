import {NextResponse} from "next/server"
import sharp from "sharp"
import JSZip from "jszip"

export const dynamic = "force-dynamic"
export const maxDuration = 60

/*
Formats:
EPS - Regular
EPS - Black
EPS - White

JPG - Regular

PNG - Regular
PNG - Black
PNG - White
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
