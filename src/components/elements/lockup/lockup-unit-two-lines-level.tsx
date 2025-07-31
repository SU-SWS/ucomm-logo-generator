"use client"

import {LockupProps} from "@components/elements/lockup/lockup-selection"
import {
  LockupLine,
  LockupSvg,
  LockupTextarea,
  LockupWordmark,
  useHorizontalLogo,
} from "@components/elements/lockup/lockup-svg"

const LockupUnitTwoLinesLevel = ({line1, line2, line3}: LockupProps) => {
  const svgHeight = 34
  const [svgRef, textRef, wordmarkRef, width] = useHorizontalLogo(svgHeight, line1, line2, line3)
  return (
    <LockupSvg ref={svgRef} width={width} height={svgHeight}>
      <LockupWordmark ref={wordmarkRef} transform="translate(0,15)" />
      <LockupLine x1={76.25} y1={0.32} x2={76.25} y2={30.26} />
      <g ref={textRef}>
        <LockupTextarea style={{fontSize: "10.5px"}} x={79.84} y={8.01}>
          {line1}
        </LockupTextarea>
        <LockupTextarea style={{fontSize: "10.5px"}} x={79.84} y={19.26}>
          {line2}
        </LockupTextarea>
        <LockupTextarea style={{fontSize: "8.25px", fontStyle: "italic"}} x={80.54} y={30.34}>
          {line3}
        </LockupTextarea>
      </g>
    </LockupSvg>
  )
}
export default LockupUnitTwoLinesLevel
