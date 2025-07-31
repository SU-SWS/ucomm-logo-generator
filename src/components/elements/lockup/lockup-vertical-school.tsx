"use client"

import {LockupProps} from "@components/elements/lockup/lockup"
import {LockupSvg, LockupTextarea, LockupWordmark, useVerticalLogo} from "@components/elements/lockup/lockup-svg"

const LockupVerticalSchool = ({line1}: LockupProps) => {
  const svgHeight = 34
  const [svgRef, textRef, width] = useVerticalLogo(svgHeight, line1)

  return (
    <LockupSvg ref={svgRef} width={width} height={svgHeight}>
      <LockupWordmark />
      <LockupTextarea ref={textRef} style={{fontWeight: 600}} fontWeight={600} x={0} y={31}>
        {line1?.toUpperCase()}
      </LockupTextarea>
    </LockupSvg>
  )
}
export default LockupVerticalSchool
