import LockupLogo from "@components/elements/lockup/lockup-logo"
import {LockupProps} from "@components/elements/lockup/lockup"

const LockupR = ({line5, siteName, logoUrl}: LockupProps) => {
  return (
    <div className="py-10">
      <div className="flex flex-col gap-4 lg:flex-row">
        <div>
          <LockupLogo logoUrl={logoUrl} siteName={siteName} />
          <div className="mt-4 font-normal uppercase">{line5}</div>
        </div>
      </div>
    </div>
  )
}
export default LockupR
