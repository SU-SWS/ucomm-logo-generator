import LockupLogo from "@components/elements/lockup/lockup-logo"
import {LockupProps} from "@components/elements/lockup/lockup"

// No equivalent in site's lockup
const LockupVerticalUnitTwoLines = ({line1, line2, siteName, logoUrl}: LockupProps) => {
  return (
    <div className="py-10">
      <div className="flex flex-col">
        <div className="pb-[30px]">
          <LockupLogo logoUrl={logoUrl} siteName={siteName} />
        </div>

        <div className="self-start text-[84px] font-normal leading-none text-black">{line1 || siteName}</div>
        <div className="self-start text-[84px] font-normal leading-none text-black">{line2 || line2}</div>
      </div>
    </div>
  )
}
export default LockupVerticalUnitTwoLines
