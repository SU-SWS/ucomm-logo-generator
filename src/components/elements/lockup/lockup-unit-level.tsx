import LockupLogo from "@components/elements/lockup/lockup-logo"
import {LockupProps} from "@components/elements/lockup/lockup"

// Option D in site's lockup
const LockupUnitLevel = ({line1, line2, siteName, logoUrl}: LockupProps) => {
  return (
    <div className="py-10">
      <div className="flex gap-4">
        <div className="mb-4 flex gap-4">
          <LockupLogo logoUrl={logoUrl} siteName={siteName} />
          <div className="w-[1px] shrink-0 bg-black" />
        </div>

        <div className="type-4 self-end font-normal text-black">{line1 || siteName}</div>
        <div className="type-3 self-end font-normal italic text-black">{line2 || siteName}</div>
      </div>
    </div>
  )
}
export default LockupUnitLevel
