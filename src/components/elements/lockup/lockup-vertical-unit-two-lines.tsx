"use client"

import {LockupProps} from "@components/elements/lockup/lockup-selection"
import {LockupSvg, LockupTextarea, LockupWordmark, useVerticalLogo} from "@components/elements/lockup/lockup-svg"

const LockupVerticalUnitTwoLines = ({line1, line2}: LockupProps) => {
  const svgHeight = 44
  const [svgRef, textRef, width] = useVerticalLogo(svgHeight, line1, line2)

  return (
    <LockupSvg ref={svgRef} width={width} height={svgHeight}>
      <LockupWordmark />
      <g ref={textRef}>
        <LockupTextarea ref={textRef} style={{fontSize: "10.5px"}} x={0} y={29.75}>
          {line1}
        </LockupTextarea>
        <LockupTextarea style={{fontSize: "10.5px"}} x={0} y={41}>
          {line2}
        </LockupTextarea>
      </g>
    </LockupSvg>
  )
}
export default LockupVerticalUnitTwoLines
