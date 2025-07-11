import LockupLogo from "@components/elements/lockup/lockup-logo"
import {LockupProps} from "@components/elements/lockup/lockup"

// No equivalent in site's lockup
const LockupVerticalSchoolUnit = ({line1, line2, siteName, logoUrl}: LockupProps) => {
  return (
    <div className="py-10">
      <div className="flex gap-4">
        <div className="mb-4 flex gap-4">
          <LockupLogo logoUrl={logoUrl} siteName={siteName} />
          <div className="w-[1px] shrink-0 bg-black" />
        </div>
        <div className="type-4 self-end font-normal text-black">{line1 || siteName}</div>
        <div className="type-4 self-end font-normal text-black">{line2 || line2}</div>
      </div>
    </div>
  )
}
export default LockupVerticalSchoolUnit
