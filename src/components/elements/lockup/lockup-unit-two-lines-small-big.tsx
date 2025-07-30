"use client"

import {LockupProps} from "@components/elements/lockup/lockup"
import {useLayoutEffect, useRef, useState} from "react"
import {LockupSvg, LockupTextarea, LockupWordmark} from "@components/elements/lockup/lockup-svg"

// Option B in site's lockup
const LockupUnitTwoLinesBigSmall = ({line1, line2}: LockupProps) => {
  const textRef = useRef<SVGTextElement>(null)
  const [width, setWidth] = useState(175)
  useLayoutEffect(() => {
    setWidth(Math.round(Math.round(textRef.current?.getBoundingClientRect().width || 0) / 4.8 + 85))
  }, [line1, line2])

  return (
    <LockupSvg width={width} height={20}>
      <LockupWordmark />
      <line stroke="#231f20" strokeMiterlimit="10" strokeWidth=".6px" x1="76.08" y1="16.62" x2="76.08" y2=".25" />
      <LockupTextarea ref={textRef} fontSize="7px">
        <text x={80.13} y={5.36}>
          {line1}
        </text>
      </LockupTextarea>
      <LockupTextarea fontSize="10.5px">
        <text x={80.13} y={15.86}>
          {line2}
        </text>
      </LockupTextarea>
    </LockupSvg>
  )
}
export default LockupUnitTwoLinesBigSmall
