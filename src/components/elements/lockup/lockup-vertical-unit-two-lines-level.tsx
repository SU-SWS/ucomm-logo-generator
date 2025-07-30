"use client"

import {LockupProps} from "@components/elements/lockup/lockup"
import {useLayoutEffect, useRef, useState} from "react"
import {LockupSvg, LockupTextarea, LockupWordmark} from "@components/elements/lockup/lockup-svg"

// No equivalent in site's lockup
const LockupVerticalUnitTwoLinesLevel = ({line1, line2, line3}: LockupProps) => {
  const svgHeight = 54
  const svgRef = useRef<SVGSVGElement>(null)
  const textRef = useRef<SVGTextElement>(null)

  const [width, setWidth] = useState(175)
  useLayoutEffect(() => {
    const svgClientHeight = Math.round(svgRef.current?.getBoundingClientRect().height || 0)
    const textWidth = Math.round(textRef.current?.getBoundingClientRect().width || 0)

    setWidth(Math.max(75, Math.round(textWidth / (svgClientHeight / svgHeight))))
  }, [line1, line2, line3])

  return (
    <LockupSvg ref={svgRef} width={width} height={svgHeight}>
      <LockupWordmark />
      <LockupTextarea ref={textRef} fontSize="10.5px">
        <text x={0} y={29.67}>
          {line1}
        </text>
        <text x={0} y={41}>
          {line2}
        </text>
      </LockupTextarea>
      <LockupTextarea fontSize="8.25px" fontStyle="italic">
        <text x={0} y={52}>
          {line3}
        </text>
      </LockupTextarea>
    </LockupSvg>
  )
}
export default LockupVerticalUnitTwoLinesLevel
