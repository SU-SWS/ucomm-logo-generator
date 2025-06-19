import {NextResponse} from "next/server"
import {readFileSync} from "node:fs"
import {ImageMagick, initializeImageMagick, MagickColor, MagickFormat} from "@imagemagick/magick-wasm"
import path from "path"

export const revalidate = 604800
export const maxDuration = 60

export const POST = async (request: Request) => {
  const data = await request.json()
  const imgArray: Array<number> = []
  Object.keys(data.image).map(key => imgArray.push(data.image[key]))
  const imgData = Uint8Array.from(imgArray)

  const wasmLocation = path.resolve("node_modules/@imagemagick/magick-wasm/dist/magick.wasm")
  const wasmBytes = readFileSync(wasmLocation)

  await initializeImageMagick(wasmBytes)

  const imagePromise = new Promise<Blob>(res => {
    ImageMagick.read(imgData, image => {
      image.format = MagickFormat.Eps
      image.backgroundColor = new MagickColor("transparent")
      image.write(epsImg => res(new Blob([epsImg])))
    })
  })

  return NextResponse.json({eps: await (await imagePromise).text()})
}
