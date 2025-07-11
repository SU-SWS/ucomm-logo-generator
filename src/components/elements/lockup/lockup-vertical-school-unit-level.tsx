import LockupLogo from "@components/elements/lockup/lockup-logo"
import {LockupProps} from "@components/elements/lockup/lockup"

// No equivalent in site's lockup
const LockupVerticalSchoolUnitLevel = ({line1, line2, line3, line4, siteName, logoUrl}: LockupProps) => {
  return (
    <div className="py-10">
      <div className="flex flex-col">
        <div className="pb-[33px]">
          <LockupLogo logoUrl={logoUrl} siteName={siteName} />
        </div>
        <div className="self-start text-[72px] font-normal font-semibold uppercase tracking-wide text-black">
          {line1 || siteName}
        </div>
        <div className="mb-[26px] mt-[16px] h-[1px] max-w-[429px] shrink-0 bg-black" />
        <div className="self-start text-[84px] font-normal leading-none text-black">{line2 || line2}</div>
        <div className="self-start text-[84px] font-normal leading-none text-black">{line3 || line3}</div>
        <div className="self-start pt-[2px] text-[72px] italic text-black">{line4 || line4}</div>
      </div>
    </div>
  )
}
export default LockupVerticalSchoolUnitLevel
