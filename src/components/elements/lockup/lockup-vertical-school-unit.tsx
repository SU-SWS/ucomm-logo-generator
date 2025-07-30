"use client"

import {LockupProps} from "@components/elements/lockup/lockup"
import {
  LockupLine,
  LockupSvg,
  LockupTextarea,
  LockupWordmark,
  useVerticalLogo,
} from "@components/elements/lockup/lockup-svg"

// No equivalent in site's lockup
const LockupVerticalSchoolUnit = ({line1, line2, line3}: LockupProps) => {
  const svgHeight = 66
  const [svgRef, textRef, width] = useVerticalLogo(svgHeight, line1, line2, line3)

  return (
    <LockupSvg ref={svgRef} width={width} height={svgHeight}>
      <LockupWordmark />
      <LockupLine x1={71.87} y1={37.5} x2={0.24} y2={37.5} />

      <LockupTextarea ref={textRef} fontSize="12px" fontWeight={600}>
        <text x={0} y={31.34}>
          {line1?.toUpperCase()}
        </text>
      </LockupTextarea>
      <LockupTextarea fontSize="10.5px">
        <text style={{fontSize: "10.5px"}} x={0} y={52.31}>
          {line2}
        </text>

        <text x={0} y={63.561}>
          {line3}
        </text>
      </LockupTextarea>
    </LockupSvg>
  )
}
export default LockupVerticalSchoolUnit
