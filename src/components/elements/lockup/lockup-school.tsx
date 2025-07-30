"use client"

import {LockupProps} from "@components/elements/lockup/lockup"
import {
  LockupLine,
  LockupSvg,
  LockupTextarea,
  LockupWordmark,
  useHorizontalLogo,
} from "@components/elements/lockup/lockup-svg"

// No equivalent in site's lockup
const LockupSchool = ({line1}: LockupProps) => {
  const svgHeight = 16
  const [svgRef, textRef, wordmarkRef, width] = useHorizontalLogo(svgHeight, line1)

  return (
    <LockupSvg ref={svgRef} width={width} height={svgHeight}>
      <LockupWordmark ref={wordmarkRef} />
      <LockupLine x1={76.23} y1={15.17} x2={76.23} y2={0.17} />
      <LockupTextarea ref={textRef} fontSize="15px" fontWeight={600}>
        <text x={80.49} y={15.04}>
          {line1?.toUpperCase()}
        </text>
      </LockupTextarea>
    </LockupSvg>
  )
}
export default LockupSchool
