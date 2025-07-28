"use client"

import LockupUnit from "@components/elements/lockup/lockup-unit"
import Button from "@components/elements/button"
import {useId, useRef, useState} from "react"
import downloadjs from "downloadjs"
import {useDebounceCallback} from "usehooks-ts"
import SelectList from "@components/elements/select-list"
import {clsx} from "clsx"
import LockupUnitTwoLines from "@components/elements/lockup/lockup-unit-two-lines"
import LockupUnitTwoLinesBigSmall from "@components/elements/lockup/lockup-unit-two-lines-small-big"
import LockupUnitLevel from "@components/elements/lockup/lockup-unit-level"
import LockupUnitTwoLinesLevel from "@components/elements/lockup/lockup-unit-two-lines-level"
import LockupSchool from "@components/elements/lockup/lockup-school"
import LockupAltSchool from "@components/elements/lockup/lockup-alt-school"
import LockupMultidisciplinary from "@components/elements/lockup/lockup-multidisciplinary"
import LockupVerticalUnit from "@components/elements/lockup/lockup-vertical-unit"
import LockupVerticalUnitTwoLines from "@components/elements/lockup/lockup-vertical-unit-two-lines"
import LockupVerticalUnitTwoLinesLevel from "@components/elements/lockup/lockup-vertical-unit-two-lines-level"
import LockupVerticalSchool from "@components/elements/lockup/lockup-vertical-school"
import LockupVerticalSchoolUnit from "@components/elements/lockup/lockup-vertical-school-unit"
import LockupVerticalSchoolUnitLevel from "@components/elements/lockup/lockup-vertical-school-unit-level"

export type LockupProps = {
  line1?: string
  line2?: string
  line3?: string
  line4?: string
  siteName?: string
  logoUrl?: string
}
export type LockupOption =
  | "unit"
  | "unit_2_line"
  | "unit_level"
  | "unit_2_lines_big_small"
  | "unit_2_lines_level"
  | "school"
  | "alt_school"
  | "multidisciplinary"
  | "vertical_unit"
  | "vertical_unit_2_lines"
  | "vertical_2_lines_level"
  | "vertical_school"
  | "vertical_school_unit"
  | "vertical_school_unit_level"

export const Lockup = ({
  allowChoice = false,
  lockupChoice = "unit",
}: {
  allowChoice?: boolean
  lockupChoice?: LockupOption
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const previewRef = useRef<HTMLDivElement>(null)
  const id = useId()
  const [lockupOption, setLockupOption] = useState<LockupOption>(lockupChoice)
  const [line1, setLine1State] = useState("")
  const setLine1 = useDebounceCallback(setLine1State, 500)
  const [line2, setLine2State] = useState("")
  const setLine2 = useDebounceCallback(setLine2State, 500)
  const [line3, setLine3State] = useState("")
  const setLine3 = useDebounceCallback(setLine3State, 500)
  const [line4, setLine4State] = useState("")
  const setLine4 = useDebounceCallback(setLine4State, 500)

  const downloadLogo = () => {
    const convertImage = async () => {
      const logo = document.getElementById("generated-logo")

      const res = await fetch("/api/convert", {
        method: "POST",
        body: JSON.stringify({image: logo?.outerHTML, height: logo?.clientHeight, width: logo?.clientWidth}),
      })
      if (!res.ok) throw new Error("Failed")
      downloadjs(await res.blob(), "generated-logos.zip")
    }

    convertImage().catch(_e => console.warn("Something failed"))
  }

  return (
    <div className="m-20">
      {allowChoice && (
        <>
          <p>Please select a logo style:</p>
          <SelectList
            label="Logo Style"
            required
            options={[
              {value: "unit", label: "Unit (1 Line)"},
              {value: "unit_2_line", label: "Unit (2 Lines)"},
              {value: "unit_level", label: "Unit + Level (1 Line)"},
              {value: "unit_2_lines_big_small", label: "Unit (2 Lines, Small/Big)"},
              {value: "unit_2_lines_level", label: "Unit (2 Lines) + Level"},
              {value: "school", label: "School Only"},
              {value: "alt_school", label: "Alt School + Unit (1 Line)"},
              {value: "multidisciplinary", label: "Multidisciplinary (or long school name)"},
              {value: "vertical_unit", label: "Vertical - Unit"},
              {value: "vertical_unit_2_lines", label: "Vertical - Unit (2 Lines)"},
              {value: "vertical_2_lines_level", label: "Vertical - Unit (2 Lines) + Level"},
              {value: "vertical_school", label: "Vertical - School"},
              {value: "vertical_school_unit", label: "Vertical - School + Unit (2 Lines)"},
              {value: "vertical_school_unit_level", label: "Vertical - School + Unit + Level"},
            ]}
            defaultValue="unit"
            onChange={(_e, value) => setLockupOption(value as LockupOption)}
          />
        </>
      )}

      <div ref={ref} className="p-2 [&_svg]:h-[100px]">
        <LockupElement lockupOption={lockupOption} line1={line1} line2={line2} line3={line3} line4={line4} />
      </div>
      <form className="mb-10">
        <div className="mb-10 flex items-center gap-5">
          <label htmlFor={id + "-line1"}>Line 1</label>
          <input
            className="p-25 h-[40px] w-[250px] text-3xl"
            id={id + "-line1"}
            onChange={e => setLine1(e.target.value)}
          />
        </div>
        <div
          className={clsx("mb-10 flex items-center gap-5", {
            hidden: ["unit", "school", "vertical_unit", "vertical_school"].includes(lockupOption),
          })}
        >
          <label htmlFor={id + "-line2"}>Line 2</label>
          <input
            className="p-25 h-[40px] w-[250px] text-3xl"
            id={id + "-line2"}
            onChange={e => setLine2(e.target.value)}
          />
        </div>
        <div
          className={clsx("mb-10 flex items-center gap-5", {
            hidden: ![
              "unit_2_lines_level",
              "vertical_2_lines_level",
              "vertical_school_unit",
              "vertical_school_unit_level",
            ].includes(lockupOption),
          })}
        >
          <label htmlFor={id + "-line3"}>Line 3</label>
          <input
            className="p-25 h-[40px] w-[250px] text-3xl"
            id={id + "-line3"}
            onChange={e => setLine3(e.target.value)}
          />
        </div>
        <div
          className={clsx("mb-10 flex items-center gap-5", {
            hidden: !["vertical_school_unit_level"].includes(lockupOption),
          })}
        >
          <label htmlFor={id + "-line4"}>Line 4</label>
          <input
            className="p-25 h-[40px] w-[250px] text-3xl"
            id={id + "-line4"}
            onChange={e => setLine4(e.target.value)}
          />
        </div>
      </form>
      <div className="flex gap-5">
        <Button onClick={downloadLogo}>Download ZIP</Button>
      </div>
      <div ref={previewRef} />
    </div>
  )
}

export const LockupElement = ({
  lockupOption = "unit",
  line1,
  line2,
  line3,
  line4,
}: LockupProps & {
  lockupOption: LockupOption
}) => {
  const lockupProps: LockupProps = {
    line1: line1,
    line2: line2,
    line3: line3,
    line4: line4,
  }

  switch (lockupOption) {
    case "unit":
      return <LockupUnit {...lockupProps} />

    case "unit_2_line":
      return <LockupUnitTwoLines {...lockupProps} />

    case "unit_level":
      return <LockupUnitLevel {...lockupProps} />

    case "unit_2_lines_big_small":
      return <LockupUnitTwoLinesBigSmall {...lockupProps} />

    case "unit_2_lines_level":
      return <LockupUnitTwoLinesLevel {...lockupProps} />

    case "school":
      return <LockupSchool {...lockupProps} />

    case "alt_school":
      return <LockupAltSchool {...lockupProps} />

    case "multidisciplinary":
      return <LockupMultidisciplinary {...lockupProps} />

    case "vertical_unit":
      return <LockupVerticalUnit {...lockupProps} />

    case "vertical_unit_2_lines":
      return <LockupVerticalUnitTwoLines {...lockupProps} />

    case "vertical_2_lines_level":
      return <LockupVerticalUnitTwoLinesLevel {...lockupProps} />

    case "vertical_school":
      return <LockupVerticalSchool {...lockupProps} />

    case "vertical_school_unit":
      return <LockupVerticalSchoolUnit {...lockupProps} />

    case "vertical_school_unit_level":
      return <LockupVerticalSchoolUnitLevel {...lockupProps} />
  }
}
export default Lockup
