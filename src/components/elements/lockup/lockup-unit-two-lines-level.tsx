import LockupLogo from "@components/elements/lockup/lockup-logo"
import {LockupProps} from "@components/elements/lockup/lockup"

// Option E in site's lockup
const LockupUnitTwoLinesLevel = ({line1, line2, line3, siteName, logoUrl}: LockupProps) => {
  return (
    <div className="py-10">
      <div className="flex gap-4">
        <div className="mb-4 flex gap-4">
          <LockupLogo logoUrl={logoUrl} siteName={siteName} />
          <div className="w-[1px] shrink-0 bg-black" />
        </div>

        <div className="flex flex-col self-end">
          <div className="type-4 font-normal text-black">{line1 || siteName}</div>
          <div className="type-4 font-normal text-black">{line2 || line2}</div>
          <div className="type-4 font-normal text-black">{line3 || line3}</div>
        </div>
      </div>
    </div>
  )
}
export default LockupUnitTwoLinesLevel
