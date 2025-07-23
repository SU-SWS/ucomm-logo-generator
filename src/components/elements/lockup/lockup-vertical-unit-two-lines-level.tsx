import LockupLogo from "@components/elements/lockup/lockup-logo"
import {LockupProps} from "@components/elements/lockup/lockup"

// No equivalent in site's lockup
const LockupVerticalUnitTwoLinesLevel = ({line1, line2, line3, siteName, logoUrl}: LockupProps) => {
  return (
    <div className="py-10">
      <div className="flex flex-col">
        <div className="pb-[30px]">
          <LockupLogo logoUrl={logoUrl} siteName={siteName} />
        </div>

        <div className="self-start text-[84px] font-normal leading-none text-black">{line1 || siteName}</div>
        <div className="self-start text-[84px] font-normal leading-none text-black">{line2 || line2}</div>
        <div className="self-start pt-[31px] text-[66px] italic text-black">{line3 || line3}</div>
      </div>
    </div>
  )
}
export default LockupVerticalUnitTwoLinesLevel
