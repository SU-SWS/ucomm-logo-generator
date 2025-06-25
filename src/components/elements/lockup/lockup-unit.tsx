import LockupLogo from "@components/elements/lockup/lockup-logo"
import {LockupProps} from "@components/elements/lockup/lockup"

const LockupUnit = ({line1, siteName, logoUrl}: LockupProps) => {
  return (
    <div className="py-10">
      <div className="flex gap-[27px]">
        <div className="mb-4 flex gap-[27px]">
          <LockupLogo logoUrl={logoUrl} siteName={siteName} />
          <div className="w-[6px] shrink-0 bg-black" />
        </div>

        <div className="relative top-[8px] self-end text-[102px] font-normal text-black">{line1 || siteName}</div>
      </div>
    </div>
  )
}
export default LockupUnit
