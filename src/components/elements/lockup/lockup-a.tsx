import LockupLogo from "@components/elements/lockup/lockup-logo"
import {LockupProps} from "@components/elements/lockup/lockup"

const LockupA = ({line1, line5, siteName, logoUrl}: LockupProps) => {
  return (
    <div className="py-10">
      <div className="flex gap-4">
        <div className="mb-4 flex gap-4">
          <LockupLogo logoUrl={logoUrl} siteName={siteName} />
          <div className="w-[1px] shrink-0 bg-black" />
        </div>

        <div className="type-4 relative top-1 self-end font-normal text-black">{line1 || siteName}</div>
      </div>

      {line5 && <div className="border-t border-black font-semibold uppercase lg:border-t-0">{line5}</div>}
    </div>
  )
}
export default LockupA
