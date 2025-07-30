"use client"

import {LockupProps} from "@components/elements/lockup/lockup"
import {useLayoutEffect, useRef, useState} from "react"
import {LockupSvg, LockupTextarea, LockupWordmark} from "@components/elements/lockup/lockup-svg"

const LockupAltSchool = ({line1, line2}: LockupProps) => {
  const textRef = useRef<SVGTextElement>(null)
  const [width, setWidth] = useState(175)
  useLayoutEffect(() => {
    setWidth(Math.round(Math.round(textRef.current?.getBoundingClientRect().width || 0) / 2.5 + 85))
  }, [line1])

  return (
    <LockupSvg width={width} height={34}>
      <LockupWordmark />
      <line stroke="#231f20" strokeMiterlimit="10" strokeWidth=".6px" x1="76.44" y1="15.32" x2="76.44" y2=".32" />
      <LockupTextarea ref={textRef} fontSize="18px" fontWeight={600}>
        <text x={80.67} y={15.19}>
          {line1}
        </text>
      </LockupTextarea>

      <LockupTextarea fontSize="12.75px">
        <text x={-0.51} y={30.4}>
          {line2}
        </text>
      </LockupTextarea>
    </LockupSvg>
  )
}
export default LockupAltSchool
