"use client"

import {LockupProps} from "@components/elements/lockup/lockup"
import {
  LockupLine,
  LockupSvg,
  LockupTextarea,
  LockupWordmark,
  useHorizontalLogo,
} from "@components/elements/lockup/lockup-svg"

const LockupUnit = ({line1}: LockupProps) => {
  const svgHeight = 20

  const [svgRef, textRef, wordmarkRef, width] = useHorizontalLogo(svgHeight, line1)

  return (
    <LockupSvg ref={svgRef} width={width} height={svgHeight}>
      <LockupWordmark ref={wordmarkRef} />

      <LockupLine x1={76.24} y1={0.21} x2={76.24} y2={15.21} />
      <LockupTextarea ref={textRef} fontSize="12px">
        <text x={79.51} y={15.15}>
          {line1}
        </text>
      </LockupTextarea>
    </LockupSvg>
  )
}
export default LockupUnit
