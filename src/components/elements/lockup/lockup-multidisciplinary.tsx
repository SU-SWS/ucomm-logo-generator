"use client"

import {LockupProps} from "@components/elements/lockup/lockup"
import {
  LockupLine,
  LockupSvg,
  LockupTextarea,
  LockupWordmark,
  useHorizontalLogo,
} from "@components/elements/lockup/lockup-svg"

const LockupMultidisciplinary = ({line1, line2}: LockupProps) => {
  const svgHeight = 34
  const [svgRef, textRef, wordmarkRef, width] = useHorizontalLogo(svgHeight, line1)

  return (
    <LockupSvg ref={svgRef} width={width} height={svgHeight}>
      <LockupWordmark ref={wordmarkRef} />
      <LockupLine x1={76.14} y1={15.27} x2={76.14} y2={0.27} />
      <LockupTextarea ref={textRef} style={{fontSize: "12.75px"}} x={79.67} y={15.14}>
        {line1}
      </LockupTextarea>
      <LockupTextarea style={{fontSize: "8.25px", fontWeight: 600}} x={-0.53} y={29.2}>
        {line2?.toUpperCase()}
      </LockupTextarea>
    </LockupSvg>
  )
}
export default LockupMultidisciplinary
