import LockupLogo from "@components/elements/lockup/lockup-logo"
import {LockupProps} from "@components/elements/lockup/lockup"

// Option B in site's lockup
const LockupUnitTwoLinesBigSmall = ({line1, line2, siteName, logoUrl}: LockupProps) => {
  return (
    <div className="py-10">
      <div className="flex gap-[18px]">
        <div className="flex max-h-[90px] gap-[24px] self-end">
          <LockupLogo logoUrl={logoUrl} siteName={siteName} />
        </div>
        <div className="w-[1px] shrink-0 bg-black" />

        <div className="relative top-[-10px] flex flex-col self-end">
          <div className="text-[55px] font-normal text-black">{line1 || siteName}</div>
          <div className="relative top-[32px] text-[84px] font-normal text-black">{line2 || line2}</div>
        </div>
      </div>
    </div>
  )
}
export default LockupUnitTwoLinesBigSmall
