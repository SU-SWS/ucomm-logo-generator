import LockupLogo from "@components/elements/lockup/lockup-logo"
import {LockupProps} from "@components/elements/lockup/lockup"

const LockupUnit = ({line1, siteName, logoUrl}: LockupProps) => {
  return (
    <div className="py-10">
      <div className="flex gap-[3px]">
        <div className="mb-4 flex gap-[4.5px]">
          <LockupLogo logoUrl={logoUrl} siteName={siteName} />
          <div className="w-[1px] shrink-0 bg-black" />
        </div>

        <div className="type-4 relative top-[3px] self-end font-normal text-black">{line1 || siteName}</div>
      </div>
    </div>
  )
}
export default LockupUnit
