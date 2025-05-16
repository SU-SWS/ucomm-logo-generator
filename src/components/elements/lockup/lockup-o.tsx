import LockupLogo from "@components/elements/lockup/lockup-logo"
import {LockupProps} from "@components/elements/lockup/lockup"

const LockupO = ({line4, siteName, logoUrl}: LockupProps) => {
  return (
    <div className="py-10">
      <LockupLogo logoUrl={logoUrl} siteName={siteName} />
      <div className="type-2 mt-1 font-semibold uppercase">{line4}</div>
    </div>
  )
}
export default LockupO
