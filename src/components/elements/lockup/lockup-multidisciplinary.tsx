"use client"

import {LockupProps} from "@components/elements/lockup/lockup"
import {useLayoutEffect, useRef, useState} from "react"
import {LockupSvg, LockupTextarea, LockupWordmark} from "@components/elements/lockup/lockup-svg"

// Option A in site's lockup
const LockupMultidisciplinary = ({line1, line2}: LockupProps) => {
  const textRef = useRef<SVGTextElement>(null)
  const [width, setWidth] = useState(175)
  useLayoutEffect(() => {
    setWidth(Math.round(Math.round(textRef.current?.getBoundingClientRect().width || 0) / 3.5 + 85))
  }, [line1])

  return (
    <LockupSvg width={width} height={34}>
      <LockupWordmark />
      <line stroke="#231f20" strokeMiterlimit="10" strokeWidth=".6px" x1="76.14" y1="15.27" x2="76.14" y2=".27" />
      <LockupTextarea fontSize="12.75px">
        <text ref={textRef} x={79.67} y={15.14}>
          {line1}
        </text>
      </LockupTextarea>
      <LockupTextarea fontSize="8.25px" fontWeight={600}>
        <text x={-0.53} y={29.2}>
          {line2?.toUpperCase()}
        </text>
      </LockupTextarea>
    </LockupSvg>
  )
}
export default LockupMultidisciplinary
