import LockupLogo from "@components/elements/lockup/lockup-logo"
import {LockupProps} from "@components/elements/lockup/lockup"

// No equivalent in site's lockup
const LockupVerticalUnit = ({line1, siteName, logoUrl}: LockupProps) => {
  return (
    <div className="py-10">
      <div className="flex flex-col gap-[30px]">
        <div>
          <LockupLogo logoUrl={logoUrl} siteName={siteName} />
        </div>

        <div className="self-start text-[102px] font-normal text-black">{line1 || siteName}</div>
      </div>
    </div>
  )
}
export default LockupVerticalUnit
