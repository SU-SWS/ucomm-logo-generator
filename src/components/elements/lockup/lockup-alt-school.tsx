"use client"

import {LockupProps} from "@components/elements/lockup/lockup"
import {
  LockupLine,
  LockupSvg,
  LockupTextarea,
  LockupWordmark,
  useHorizontalLogo,
} from "@components/elements/lockup/lockup-svg"

const LockupAltSchool = ({line1, line2}: LockupProps) => {
  const svgHeight = 34
  const [svgRef, textRef, wordmarkRef, width] = useHorizontalLogo(svgHeight, line1, line2)

  return (
    <LockupSvg ref={svgRef} width={width} height={svgHeight}>
      <LockupWordmark ref={wordmarkRef} />
      <LockupLine x1={76.44} y1={15.32} x2={76.44} y2={0.32} />
      <LockupTextarea ref={textRef} fontSize="18px" fontWeight={600}>
        <text x={80.67} y={15.19}>
          {line1}
        </text>
      </LockupTextarea>

      <LockupTextarea fontSize="12.75px">
        <text x={-0.51} y={30.4}>
          {line2}
        </text>
      </LockupTextarea>
    </LockupSvg>
  )
}
export default LockupAltSchool
