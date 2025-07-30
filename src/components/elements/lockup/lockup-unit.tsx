"use client"

import {LockupProps} from "@components/elements/lockup/lockup"
import {useLayoutEffect, useRef, useState} from "react"
import {LockupSvg, LockupTextarea, LockupWordmark} from "@components/elements/lockup/lockup-svg"

const LockupUnit = ({line1}: LockupProps) => {
  const textRef = useRef<SVGTextElement>(null)
  const [width, setWidth] = useState(175)
  useLayoutEffect(() => {
    setWidth(Math.round(Math.round(textRef.current?.getBoundingClientRect().width || 0) / 4.4 + 85))
  }, [line1])

  return (
    <LockupSvg width={width} height={20}>
      <LockupWordmark />

      <line stroke="#231f20" strokeMiterlimit="10" strokeWidth=".6px" x1="76.24" y1=".21" x2="76.24" y2="15.21" />
      <LockupTextarea ref={textRef} fontSize="12px">
        <text x="79.51" y="15.15">
          {line1}
        </text>
      </LockupTextarea>
    </LockupSvg>
  )
}
export default LockupUnit
