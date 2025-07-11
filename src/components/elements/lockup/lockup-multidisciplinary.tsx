import LockupLogo from "@components/elements/lockup/lockup-logo"
import {LockupProps} from "@components/elements/lockup/lockup"

// Option A in site's lockup
const LockupMultidisciplinary = ({line1, line2, siteName, logoUrl}: LockupProps) => {
  return (
    <div className="py-10">
      <div className="flex gap-[18px]">
        <div className="flex gap-[24px] self-end">
          <LockupLogo logoUrl={logoUrl} siteName={siteName} />
          <div className="w-[1px] shrink-0 bg-black" />
        </div>

        <div className="flex flex-col self-end">
          <div className="relative bottom-[-26px] text-[102px] font-normal text-black">{line1 || siteName}</div>
        </div>
      </div>
      <div className="self-end pt-[25px] text-[66px] font-semibold text-black">{line2 || line2}</div>
    </div>
  )
}
export default LockupMultidisciplinary
