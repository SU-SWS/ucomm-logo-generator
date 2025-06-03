"use client"
import LockupA from "@components/elements/lockup/lockup-a"
import LockupB from "@components/elements/lockup/lockup-b"
import LockupD from "@components/elements/lockup/lockup-d"
import LockupE from "@components/elements/lockup/lockup-e"
import LockupH from "@components/elements/lockup/lockup-h"
import LockupI from "@components/elements/lockup/lockup-i"
import LockupM from "@components/elements/lockup/lockup-m"
import LockupO from "@components/elements/lockup/lockup-o"
import LockupP from "@components/elements/lockup/lockup-p"
import LockupR from "@components/elements/lockup/lockup-r"
import LockupS from "@components/elements/lockup/lockup-s"
import LockupT from "@components/elements/lockup/lockup-t"
import LockupLogo from "@components/elements/lockup/lockup-logo"
import Link from "next/link"
import Button from "@components/elements/button"
import {toPng, toJpeg, toSvg} from "html-to-image"
import {useId, useRef, useState} from "react"
import downloadjs from "downloadjs"
import {useDebounceCallback} from "usehooks-ts"
import JSZip from "jszip"

export type LockupProps = {
  line1?: string
  line2?: string
  line3?: string
  line4?: string
  line5?: string
  siteName?: string
  logoUrl?: string
}
type ImageFormats = "png" | "svg+xml" | "jpeg" | "zip"

export const Lockup = ({lockupOption = "a"}) => {
  const ref = useRef<HTMLDivElement>(null)
  const previewRef = useRef<HTMLDivElement>(null)
  const id = useId()
  const [line1, setLine1State] = useState("")
  const setLine1 = useDebounceCallback(setLine1State, 500)
  const [line2, setLine2State] = useState("")
  const setLine2 = useDebounceCallback(setLine2State, 500)
  const [line3, setLine3State] = useState("")
  const setLine3 = useDebounceCallback(setLine3State, 500)
  const [line4, setLine4State] = useState("")
  const setLine4 = useDebounceCallback(setLine4State, 500)
  const [line5, setLine5State] = useState("")
  const setLine5 = useDebounceCallback(setLine5State, 500)

  const downloadLogo = (format: ImageFormats) => {
    if (!ref.current) return
    const element = ref.current
    let image: Promise<string> | undefined
    let filename = "logo.png"
    switch (format) {
      case "zip": {
        const zip = new JSZip()
        toPng(element)
          .then(dataUrl => zip.file("logo.png", dataUrl.replace("data:image/png;base64,", ""), {base64: true}))
          .then(() =>
            toJpeg(element, {backgroundColor: "white"})
              .then(dataUrl => zip.file("logo.jpeg", dataUrl.replace("data:image/jpeg;base64,", ""), {base64: true}))
              .then(() =>
                zip.generateAsync({type: "blob"}).then(content => downloadjs(content, "logos.zip", "application/x-zip"))
              )
          )
          .catch(_e => console.warn("An error happened creating images or zip file."))
        return
      }

      case "png":
        image = toPng(ref.current)
        break

      case "svg+xml":
        image = toSvg(ref.current, {type: "image/svg+xml"})
        filename = "logo.svg"
        break

      case "jpeg":
        image = toJpeg(ref.current, {backgroundColor: "white"})
        filename = "logo.jpeg"
        break
    }
    if (image === undefined) return
    void image.then(imageUrl => downloadjs(imageUrl, filename, `image/${format}`))
  }

  return (
    <div className="m-20">
      <div ref={ref} className="w-fit p-2">
        <LockupElement
          lockupOption={lockupOption}
          line1={line1}
          line2={line2}
          line3={line3}
          line4={line4}
          line5={line5}
        />
      </div>

      <form className="mb-10">
        <div className="flex items-center gap-5">
          <label htmlFor={id + "-line1"}>Line 1</label>
          <input id={id + "-line1"} onChange={e => setLine1(e.target.value)} />
        </div>
        <div className="flex items-center gap-5">
          <label htmlFor={id + "-line2"}>Line 2</label>
          <input id={id + "-line2"} onChange={e => setLine2(e.target.value)} />
        </div>
        <div className="flex items-center gap-5">
          <label htmlFor={id + "-line3"}>Line 3</label>
          <input id={id + "-line3"} onChange={e => setLine3(e.target.value)} />
        </div>
        <div className="flex items-center gap-5">
          <label htmlFor={id + "-line4"}>Line 4</label>
          <input id={id + "-line4"} onChange={e => setLine4(e.target.value)} />
        </div>
        <div className="flex items-center gap-5">
          <label htmlFor={id + "-line5"}>Line 5</label>
          <input id={id + "-line5"} onChange={e => setLine5(e.target.value)} />
        </div>
      </form>
      <div className="flex gap-5">
        <Button onClick={downloadLogo.bind(null, "png")}>Download PNG</Button>

        <Button onClick={downloadLogo.bind(null, "svg+xml")}>Download SVG</Button>

        <Button onClick={downloadLogo.bind(null, "jpeg")}>Download JPG</Button>

        <Button onClick={downloadLogo.bind(null, "zip")}>Download ZIP</Button>
      </div>
      <div ref={previewRef} />
    </div>
  )
}

export const LockupElement = ({
  lockupOption = "a",
  line1,
  line2,
  line3,
  line4,
  line5,
}: LockupProps & {
  lockupOption: string
}) => {
  const lockupProps: LockupProps = {
    line1: line1,
    line2: line2,
    line3: line3,
    line4: line4,
    line5: line5,
    siteName: "Stanford",
    logoUrl: undefined,
  }
  if (!lockupOption) {
    return (
      <div className="py-10">
        <Link href="/" className="flex no-underline" prefetch={false}>
          <div className="self-end">
            <div className="mr-2 border-black pr-2 lg:inline-block lg:border-r">
              <LockupLogo {...lockupProps} />
            </div>
            <div className="type-2 font-normal text-black lg:inline-block">{"University"}</div>
          </div>
        </Link>
      </div>
    )
  }

  switch (lockupOption) {
    case "a":
      return <LockupA {...lockupProps} />

    case "b":
      return <LockupB {...lockupProps} />

    case "d":
      return <LockupD {...lockupProps} />

    case "e":
      return <LockupE {...lockupProps} />

    case "h":
      return <LockupH {...lockupProps} />

    case "i":
      return <LockupI {...lockupProps} />

    case "m":
      return <LockupM {...lockupProps} />

    case "o":
      return <LockupO {...lockupProps} />

    case "p":
      return <LockupP {...lockupProps} />

    case "r":
      return <LockupR {...lockupProps} />

    case "s":
      return <LockupS {...lockupProps} />

    case "t":
      return <LockupT {...lockupProps} />

    case "none":
    default:
      return (
        <div className="py-10">
          <Link href="/" className="flex flex-col gap-4 no-underline lg:flex-row">
            <LockupLogo {...lockupProps} />
          </Link>
        </div>
      )
  }
}
export default Lockup
