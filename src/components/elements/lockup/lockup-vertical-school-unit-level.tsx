"use client"

import {LockupProps} from "@components/elements/lockup/lockup-selection"
import {
  LockupLine,
  LockupSvg,
  LockupTextarea,
  LockupWordmark,
  useVerticalLogo,
} from "@components/elements/lockup/lockup-svg"

const LockupVerticalSchoolUnitLevel = ({line1, line2, line3, line4}: LockupProps) => {
  const svgHeight = 77
  const [svgRef, textRef, width] = useVerticalLogo(svgHeight, line1, line2, line3, line4)
  return (
    <LockupSvg ref={svgRef} width={width} height={svgHeight}>
      <LockupWordmark />
      <LockupLine x1={72.61} y1={37.16} x2={0.98} y2={37.16} />

      <g ref={textRef}>
        <LockupTextarea ref={textRef} style={{fontWeight: 600}} x={0} y={31}>
          {line1?.toUpperCase()}
        </LockupTextarea>

        <LockupTextarea style={{fontSize: "10.5px"}} x={0} y={52}>
          {line2}
        </LockupTextarea>

        <LockupTextarea style={{fontSize: "10.5px"}} x={0} y={63.25}>
          {line3}
        </LockupTextarea>

        <LockupTextarea style={{fontStyle: "italic", fontSize: "8.25px"}} x={0} y={74.3}>
          {line4}
        </LockupTextarea>
      </g>
    </LockupSvg>
  )
}
export default LockupVerticalSchoolUnitLevel
