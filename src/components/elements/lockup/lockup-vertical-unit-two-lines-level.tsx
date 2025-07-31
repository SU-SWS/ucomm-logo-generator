"use client"

import {LockupProps} from "@components/elements/lockup/lockup"
import {LockupSvg, LockupTextarea, LockupWordmark, useVerticalLogo} from "@components/elements/lockup/lockup-svg"

const LockupVerticalUnitTwoLinesLevel = ({line1, line2, line3}: LockupProps) => {
  const svgHeight = 54
  const [svgRef, textRef, width] = useVerticalLogo(svgHeight, line1, line2, line3)

  return (
    <LockupSvg ref={svgRef} width={width} height={svgHeight}>
      <LockupWordmark />
      <g ref={textRef}>
        <LockupTextarea style={{fontSize: "10.5px"}} x={0} y={29.67}>
          {line1}
        </LockupTextarea>
        <LockupTextarea style={{fontSize: "10.5px"}} x={0} y={41}>
          {line2}
        </LockupTextarea>
        <LockupTextarea style={{fontSize: "8.25px", fontStyle: "italic"}} x={0} y={52}>
          {line3}
        </LockupTextarea>
      </g>
    </LockupSvg>
  )
}
export default LockupVerticalUnitTwoLinesLevel
