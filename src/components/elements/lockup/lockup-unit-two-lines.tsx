"use client"

import {LockupProps} from "@components/elements/lockup/lockup"
import {
  LockupLine,
  LockupSvg,
  LockupTextarea,
  LockupWordmark,
  useHorizontalLogo,
} from "@components/elements/lockup/lockup-svg"

// Option B in site's lockup
const LockupUnitTwoLines = ({line1, line2}: LockupProps) => {
  const svgHeight = 22
  const [svgRef, textRef, wordmarkRef, width] = useHorizontalLogo(svgHeight, line1, line2)

  return (
    <LockupSvg ref={svgRef} width={width} height={22}>
      <LockupWordmark ref={wordmarkRef} transform="translate(0,3)" />

      <LockupLine x1={76.24} y1={0.21} x2={76.24} y2={19} />
      <LockupTextarea ref={textRef} fontSize="10.5px">
        <text x={79.75} y={8.1}>
          {line1}
        </text>
        <text x={79.51} y={18.25}>
          {line2}
        </text>
      </LockupTextarea>
    </LockupSvg>
  )
}
export default LockupUnitTwoLines
