import LockupLogo from "@components/elements/lockup/lockup-logo"
import {LockupProps} from "@components/elements/lockup/lockup"

const LockupE = ({line1, line2, line3, siteName, logoUrl}: LockupProps) => {
  return (
    <div className="py-10">
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="mt-auto">
          <LockupLogo logoUrl={logoUrl} siteName={siteName} />
        </div>

        <div className="w-[1px] shrink-0 bg-black" />
        <div className="font-normal">
          <div className="type-2">{line1 || siteName}</div>
          <div className="type-2">{line2 || siteName}</div>
          <div className="type-0 italic">{line3}</div>
        </div>
      </div>
    </div>
  )
}
export default LockupE
