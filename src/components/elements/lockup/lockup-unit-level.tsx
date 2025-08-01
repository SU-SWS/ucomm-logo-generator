"use client"

import {LockupProps} from "@components/elements/lockup/lockup-selection"
import {
  LockupLine,
  LockupSvg,
  LockupTextarea,
  LockupWordmark,
  useHorizontalLogo,
} from "@components/elements/lockup/lockup-svg"

const LockupUnitLevel = ({line1, line2}: LockupProps) => {
  const svgHeight = 22
  const [svgRef, textRef, , wordmarkRef, width] = useHorizontalLogo(svgHeight, line1, line2)

  return (
    <LockupSvg ref={svgRef} width={width} height={svgHeight}>
      <LockupWordmark ref={wordmarkRef} transform="translate(0,3.5)" />
      <LockupLine x1={76.25} y1={0.25} x2={76.25} y2={18.84} />

      <g ref={textRef}>
        <LockupTextarea x={79.85} y={9}>
          {line1}
        </LockupTextarea>
        <LockupTextarea style={{fontSize: "8.25px", fontStyle: "italic"}} x={79.85} y={19}>
          {line2}
        </LockupTextarea>
      </g>
    </LockupSvg>
  )
}
export default LockupUnitLevel
