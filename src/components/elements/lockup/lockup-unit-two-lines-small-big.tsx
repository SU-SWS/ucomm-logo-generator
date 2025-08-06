"use client"

import {LockupProps} from "@components/elements/lockup/lockup-selection"
import {
  LockupLine,
  LockupSvg,
  LockupTextarea,
  LockupWordmark,
  useHorizontalLogo,
} from "@components/elements/lockup/lockup-svg"

const LockupUnitTwoLinesBigSmall = ({line1, line2}: LockupProps) => {
  const svgHeight = 22
  const [svgRef, textRef, , wordmarkRef, width] = useHorizontalLogo(svgHeight, line1, line2)

  return (
    <LockupSvg ref={svgRef} width={width} height={svgHeight}>
      <LockupWordmark ref={wordmarkRef} />
      <LockupLine x1={76.08} y1={15.32} x2={76.08} y2={0.25} />
      <g ref={textRef}>
        <LockupTextarea style={{fontSize: "7px"}} x={80.13} y={5.36}>
          {line1}
        </LockupTextarea>
        <LockupTextarea style={{fontSize: "10.5px"}} x={80.13} y={15.32}>
          {line2}
        </LockupTextarea>
      </g>
    </LockupSvg>
  )
}
export default LockupUnitTwoLinesBigSmall
