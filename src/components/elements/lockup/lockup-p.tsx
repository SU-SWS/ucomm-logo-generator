import LockupLogo from "@components/elements/lockup/lockup-logo"
import {LockupProps} from "@components/elements/lockup/lockup"

const LockupP = ({line1, line4, siteName, logoUrl}: LockupProps) => {
  return (
    <div className="py-10">
      <div className="flex flex-col gap-4 lg:flex-row">
        <div>
          <LockupLogo logoUrl={logoUrl} siteName={siteName} />
          <div className="type-2 mt-1 font-semibold uppercase">{line4}</div>
        </div>

        <div className="w-[1px] shrink-0 bg-black" />
        <div className="type-2 mt-auto font-normal">{line1 || siteName}</div>
      </div>
    </div>
  )
}
export default LockupP
