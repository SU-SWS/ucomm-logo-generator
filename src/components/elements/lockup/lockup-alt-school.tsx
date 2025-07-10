import LockupLogo from "@components/elements/lockup/lockup-logo"
import {LockupProps} from "@components/elements/lockup/lockup"

// No equivalent in site's lockup
const LockupAltSchool = ({line1, line2, siteName, logoUrl}: LockupProps) => {
  return (
    <div className="py-10">
      <div className="flex gap-[18px]">
        <div className="flex gap-[24px] self-end">
          <LockupLogo logoUrl={logoUrl} siteName={siteName} />
          <div className="w-[1px] shrink-0 bg-black" />
        </div>

        <div className="relative bottom-[-21px] self-end text-[120px] font-semibold uppercase leading-none text-black">
          {line1 || siteName}
        </div>
      </div>
      <div className="self-end pt-[25px] text-[102px] font-normal text-black">{line2 || line2}</div>
    </div>
  )
}
export default LockupAltSchool
