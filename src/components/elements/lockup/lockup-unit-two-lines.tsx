import LockupLogo from "@components/elements/lockup/lockup-logo"
import {LockupProps} from "@components/elements/lockup/lockup"

// Option B in site's lockup
const LockupUnitTwoLines = ({line1, line2, siteName, logoUrl}: LockupProps) => {
  return (
    <div className="py-10">
      <div className="flex gap-[18px]">
        <div className="flex max-h-[90px] gap-[24px] self-end">
          <LockupLogo logoUrl={logoUrl} siteName={siteName} />
        </div>
        <div className="w-[1px] shrink-0 bg-black" />
        <div className="relative bottom-[-20px] flex flex-col self-end">
          <div className="relative top-[-25px] text-[84px] font-normal leading-none text-black">
            {line1 || siteName}
          </div>
          <div className="relative top-[-3px] text-[84px] font-normal leading-none text-black">{line2 || line2}</div>
        </div>
      </div>
    </div>
  )
}
export default LockupUnitTwoLines
