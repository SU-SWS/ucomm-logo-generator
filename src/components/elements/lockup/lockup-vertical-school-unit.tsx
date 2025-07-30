"use client"

import {LockupProps} from "@components/elements/lockup/lockup"
import {useLayoutEffect, useRef, useState} from "react"
import {LockupSvg, LockupTextarea, LockupWordmark} from "@components/elements/lockup/lockup-svg"

// No equivalent in site's lockup
const LockupVerticalSchoolUnit = ({line1, line2, line3}: LockupProps) => {
  const textRef = useRef<SVGTextElement>(null)
  const [width, setWidth] = useState(175)
  useLayoutEffect(() => {
    setWidth(Math.max(75, Math.round(Math.round(textRef.current?.getBoundingClientRect().width || 0) / 1.4)))
  }, [line1, line2, line3])

  return (
    <LockupSvg width={width} height={66}>
      <LockupWordmark />
      <line stroke="#231f20" strokeMiterlimit="10" strokeWidth=".6px" x1="71.87" y1="37.5" x2=".24" y2="37.5" />

      <LockupTextarea ref={textRef} fontSize="12px" fontWeight={600}>
        <text x={0} y={31.34}>
          {line1?.toUpperCase()}
        </text>
      </LockupTextarea>
      <LockupTextarea fontSize="10.5px">
        <text style={{fontSize: "10.5px"}} x={0} y={52.31}>
          {line2}
        </text>

        <text x={0} y={63.561}>
          {line3}
        </text>
      </LockupTextarea>
    </LockupSvg>
  )
}
export default LockupVerticalSchoolUnit
