"use client"

import {LockupProps} from "@components/elements/lockup/lockup"
import {useLayoutEffect, useRef, useState} from "react"
import {LockupSvg, LockupTextarea, LockupWordmark} from "@components/elements/lockup/lockup-svg"

// Option D in site's lockup
const LockupUnitLevel = ({line1, line2}: LockupProps) => {
  const textRef = useRef<SVGTextElement>(null)
  const [width, setWidth] = useState(175)
  useLayoutEffect(() => {
    setWidth(Math.round(Math.round(textRef.current?.getBoundingClientRect().width || 0) / 2.5 + 85))
  }, [line1])

  return (
    <LockupSvg width={width} height={22}>
      <LockupWordmark transform="translate(0,3.5)" />
      <line stroke="#231f20" strokeMiterlimit="10" strokeWidth=".6px" x1="76.25" y1=".25" x2="76.25" y2="18.84" />

      <LockupTextarea ref={textRef}>
        <text x={79.85} y={8}>
          {line1}
        </text>
      </LockupTextarea>
      <LockupTextarea fontSize="8.25px" fontStyle="italic">
        <text x={80.73} y={19}>
          {line2}
        </text>
      </LockupTextarea>
    </LockupSvg>
  )
}
export default LockupUnitLevel
