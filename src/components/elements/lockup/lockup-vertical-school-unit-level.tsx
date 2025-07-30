"use client"

import {LockupProps} from "@components/elements/lockup/lockup"
import {useLayoutEffect, useRef, useState} from "react"
import {LockupLine, LockupSvg, LockupTextarea, LockupWordmark} from "@components/elements/lockup/lockup-svg"

// No equivalent in site's lockup
const LockupVerticalSchoolUnitLevel = ({line1, line2, line3, line4}: LockupProps) => {
  const svgHeight = 77
  const svgRef = useRef<SVGSVGElement>(null)
  const textRef = useRef<SVGTextElement>(null)

  const [width, setWidth] = useState(175)
  useLayoutEffect(() => {
    const svgClientHeight = Math.round(svgRef.current?.getBoundingClientRect().height || 0)
    const textWidth = Math.round(textRef.current?.getBoundingClientRect().width || 0)

    setWidth(Math.max(75, Math.round(textWidth / (svgClientHeight / svgHeight))))
  }, [line1, line2, line3, line4])

  return (
    <LockupSvg ref={svgRef} width={width} height={svgHeight}>
      <LockupWordmark />
      <LockupLine x1={72.61} y1={37.16} x2={0.98} y2={37.16} />

      <LockupTextarea ref={textRef} fontWeight={600}>
        <text x={0} y={31}>
          {line1?.toUpperCase()}
        </text>
      </LockupTextarea>
      <LockupTextarea fontSize="10.5px">
        <text style={{fontSize: "10.5px"}} x={0} y={52}>
          {line2}
        </text>
        <text style={{fontSize: "10.5px"}} x={0} y={63.25}>
          {line3}
        </text>
      </LockupTextarea>
      <LockupTextarea fontSize="8.25px" fontStyle="italic">
        <text style={{fontStyle: "italic", fontSize: "8.25px"}} x={0} y={74.3}>
          {line4}
        </text>
      </LockupTextarea>
    </LockupSvg>
  )
}
export default LockupVerticalSchoolUnitLevel
