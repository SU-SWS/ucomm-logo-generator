"use client"

import {LockupProps} from "@components/elements/lockup/lockup"
import {useLayoutEffect, useRef, useState} from "react"
import {LockupSvg, LockupTextarea, LockupWordmark} from "@components/elements/lockup/lockup-svg"

// No equivalent in site's lockup
const LockupVerticalUnit = ({line1}: LockupProps) => {
  const svgHeight = 36
  const svgRef = useRef<SVGSVGElement>(null)
  const textRef = useRef<SVGTextElement>(null)

  const [width, setWidth] = useState(175)
  useLayoutEffect(() => {
    const svgClientHeight = Math.round(svgRef.current?.getBoundingClientRect().height || 0)
    const textWidth = Math.round(textRef.current?.getBoundingClientRect().width || 0)

    setWidth(Math.max(75, Math.round(textWidth / (svgClientHeight / svgHeight))))
  }, [line1])

  return (
    <LockupSvg ref={svgRef} width={width} height={svgHeight}>
      <LockupWordmark />
      <LockupTextarea ref={textRef} fontSize="12.75">
        <text x={0} y={31}>
          {line1}
        </text>
      </LockupTextarea>
    </LockupSvg>
  )
}
export default LockupVerticalUnit
