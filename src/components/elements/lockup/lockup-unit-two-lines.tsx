"use client"

import {LockupProps} from "@components/elements/lockup/lockup"
import {useLayoutEffect, useRef, useState} from "react"
import {LockupSvg, LockupTextarea, LockupWordmark} from "@components/elements/lockup/lockup-svg"

// Option B in site's lockup
const LockupUnitTwoLines = ({line1, line2}: LockupProps) => {
  const textRef = useRef<SVGTextElement>(null)
  const [width, setWidth] = useState(175)
  useLayoutEffect(() => {
    setWidth(Math.round(Math.round(textRef.current?.getBoundingClientRect().width || 0) / 4.4 + 80))
  }, [line1, line2])
  return (
    <LockupSvg width={width} height={22}>
      <LockupWordmark transform="translate(0,3)" />

      <line stroke="#231f20" strokeMiterlimit="10" strokeWidth=".6px" x1="76.24" y1=".21" x2="76.24" y2="19" />
      <LockupTextarea ref={textRef} fontSize="10.5px">
        <text x="79.75" y="8.1">
          {line1}
        </text>
        <text x="79.51" y="18.25">
          {line2}
        </text>
      </LockupTextarea>
    </LockupSvg>
  )
}
export default LockupUnitTwoLines
