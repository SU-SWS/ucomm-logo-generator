"use client"

import {LockupProps} from "@components/elements/lockup/lockup"
import {useLayoutEffect, useRef, useState} from "react"
import {LockupSvg, LockupTextarea, LockupWordmark} from "@components/elements/lockup/lockup-svg"

// No equivalent in site's lockup
const LockupVerticalSchool = ({line1}: LockupProps) => {
  const textRef = useRef<SVGTextElement>(null)
  const [width, setWidth] = useState(175)
  useLayoutEffect(() => {
    setWidth(Math.max(75, Math.round(Math.round(textRef.current?.getBoundingClientRect().width || 0) / 3)))
  }, [line1])

  return (
    <LockupSvg width={width} height={34}>
      <LockupWordmark />
      <LockupTextarea ref={textRef} fontSize="12px" fontWeight={600}>
        <text x={0} y={31}>
          {line1?.toUpperCase()}
        </text>
      </LockupTextarea>
    </LockupSvg>
  )
}
export default LockupVerticalSchool
