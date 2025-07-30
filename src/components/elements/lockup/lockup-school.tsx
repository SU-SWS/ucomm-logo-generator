"use client"

import {LockupProps} from "@components/elements/lockup/lockup"
import {useLayoutEffect, useRef, useState} from "react"
import {LockupSvg, LockupTextarea, LockupWordmark} from "@components/elements/lockup/lockup-svg"

// No equivalent in site's lockup
const LockupSchool = ({line1}: LockupProps) => {
  const textRef = useRef<SVGTextElement>(null)
  const [width, setWidth] = useState(175)
  useLayoutEffect(() => {
    setWidth(Math.round(Math.round(textRef.current?.getBoundingClientRect().width || 0) / 6.5 + 85))
  }, [line1])
  return (
    <LockupSvg width={width} height={16}>
      <LockupWordmark />
      <line stroke="#231f20" strokeMiterlimit="10" strokeWidth=".6px" x1="76.23" y1="15.17" x2="76.23" y2=".17" />
      <LockupTextarea ref={textRef} fontSize="15px" fontWeight={600}>
        <text x={80.49} y={15.04}>
          {line1?.toUpperCase()}
        </text>
      </LockupTextarea>
    </LockupSvg>
  )
}
export default LockupSchool
