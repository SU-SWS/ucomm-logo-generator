import LockupLogo from "@components/elements/lockup/lockup-logo"
import {LockupProps} from "@components/elements/lockup/lockup"

// No equivalent in site's lockup
const LockupVerticalSchool = ({line1, siteName, logoUrl}: LockupProps) => {
  return (
    <div className="py-10">
      <div className="flex flex-col">
        <div className="pb-[33px]">
          <LockupLogo logoUrl={logoUrl} siteName={siteName} />
        </div>

        <div className="self-start text-[72px] font-normal font-semibold uppercase tracking-wide text-black">
          {line1 || siteName}
        </div>
      </div>
    </div>
  )
}
export default LockupVerticalSchool
