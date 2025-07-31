"use client"

import {LockupProps} from "@components/elements/lockup/lockup"
import {LockupSvg, LockupTextarea, LockupWordmark, useVerticalLogo} from "@components/elements/lockup/lockup-svg"

const LockupVerticalUnit = ({line1}: LockupProps) => {
  const svgHeight = 36
  const [svgRef, textRef, width] = useVerticalLogo(svgHeight, line1)

  return (
    <LockupSvg ref={svgRef} width={width} height={svgHeight}>
      <LockupWordmark />
      <LockupTextarea ref={textRef} style={{fontSize: "12.75px"}} x={0} y={31}>
        {line1}
      </LockupTextarea>
    </LockupSvg>
  )
}
export default LockupVerticalUnit
