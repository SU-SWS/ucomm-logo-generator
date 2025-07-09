import LockupLogo from "@components/elements/lockup/lockup-logo"
import {LockupProps} from "@components/elements/lockup/lockup"

// Option E in site's lockup
const LockupUnitTwoLinesLevel = ({line1, line2, line3, siteName, logoUrl}: LockupProps) => {
  return (
    <div className="py-10">
      <div className="flex gap-[18px]">
        <div className="flex gap-[24px] self-end">
          <LockupLogo logoUrl={logoUrl} siteName={siteName} />
        </div>
        <div className="w-[6px] shrink-0 bg-black" />

        <div className="flex flex-col self-end">
          <div className="text-[84px] font-normal leading-none text-black">{line1 || siteName}</div>
          <div className="text-[84px] font-normal leading-none text-black">{line2 || line2}</div>
          <div className="relative top-[10px] text-[66px] italic text-black">{line3 || line3}</div>
        </div>
      </div>
    </div>
  )
}
export default LockupUnitTwoLinesLevel
