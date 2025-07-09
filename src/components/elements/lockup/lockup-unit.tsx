import LockupLogo from "@components/elements/lockup/lockup-logo"
import {LockupProps} from "@components/elements/lockup/lockup"

const LockupUnit = ({line1, siteName, logoUrl}: LockupProps) => {
  return (
    <div className="py-10">
      <div className="flex gap-[18px]">
        <div className="flex max-h-[90px] gap-[24px]">
          <LockupLogo logoUrl={logoUrl} siteName={siteName} />
          <div className="w-[6px] shrink-0 bg-black" />
        </div>

        <div className="relative top-[15px] self-end text-[84px] font-normal text-black">{line1 || siteName}</div>
      </div>
    </div>
  )
}
export default LockupUnit
