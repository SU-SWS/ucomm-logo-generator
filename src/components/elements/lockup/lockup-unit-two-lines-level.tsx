"use client"

import {LockupProps} from "@components/elements/lockup/lockup"
import {useLayoutEffect, useRef, useState} from "react"
import {LockupSvg, LockupTextarea, LockupWordmark} from "@components/elements/lockup/lockup-svg"

// Option E in site's lockup
const LockupUnitTwoLinesLevel = ({line1, line2, line3}: LockupProps) => {
  const textRef = useRef<SVGTextElement>(null)
  const [width, setWidth] = useState(175)
  useLayoutEffect(() => {
    setWidth(Math.round(Math.round(textRef.current?.getBoundingClientRect().width || 0) / 2.5 + 85))
  }, [line1])

  return (
    <LockupSvg width={width} height={34}>
      <LockupWordmark transform="translate(0,15)" />
      <line stroke="#231f20" strokeMiterlimit="10" strokeWidth=".6px" x1="76.25" y1=".32" x2="76.25" y2="30.26" />
      <LockupTextarea ref={textRef} fontSize="10.5px">
        <text x={79.84} y={8.01}>
          {line1}
        </text>
        <text x={79.84} y={19.26}>
          {line2}
        </text>
      </LockupTextarea>
      <LockupTextarea fontSize="8.25px" fontStyle="italic">
        <text x={80.54} y={30.34}>
          {line3}
        </text>
      </LockupTextarea>
    </LockupSvg>
  )
}
export default LockupUnitTwoLinesLevel
