import LockupLogo from "@components/elements/lockup/lockup-logo"
import {LockupProps} from "@components/elements/lockup/lockup"

const LockupT = ({line1, line2, line3, line4, siteName, logoUrl}: LockupProps) => {
  return (
    <div className="py-10">
      <LockupLogo logoUrl={logoUrl} siteName={siteName} />
      <div className="type-2 mt-1 border-b border-black font-semibold uppercase">{line4}</div>
      <div className="font-normal">
        <div className="type-2">{line1 || siteName}</div>
        <div className="type-2">{line2}</div>
        <div className="type-0 italic">{line3}</div>
      </div>
    </div>
  )
}
export default LockupT
