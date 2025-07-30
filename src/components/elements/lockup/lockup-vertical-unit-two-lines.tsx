"use client"

import {LockupProps} from "@components/elements/lockup/lockup"
import {useLayoutEffect, useRef, useState} from "react"
import {LockupSvg, LockupTextarea, LockupWordmark} from "@components/elements/lockup/lockup-svg"

// No equivalent in site's lockup
const LockupVerticalUnitTwoLines = ({line1, line2}: LockupProps) => {
  const textRef = useRef<SVGTextElement>(null)
  const [width, setWidth] = useState(175)
  useLayoutEffect(() => {
    setWidth(Math.max(75, Math.round(Math.round(textRef.current?.getBoundingClientRect().width || 0) / 1.7)))
  }, [line1, line2])

  return (
    <LockupSvg width={width} height={44}>
      <LockupWordmark />
      <LockupTextarea ref={textRef} fontSize="10.5px">
        <text x={0} y={29.75}>
          {line1}
        </text>
        <text x={0} y={41}>
          {line2}
        </text>
      </LockupTextarea>
    </LockupSvg>
  )
}
export default LockupVerticalUnitTwoLines
