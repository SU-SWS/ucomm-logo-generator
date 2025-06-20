import StanfordWordMark from "@components/images/stanford-wordmark"

const LockupLogo = ({logoUrl, siteName = ""}: {logoUrl?: string; siteName?: string}) => {
  return (
    <>
      {logoUrl && (
        <picture>
          <img src={logoUrl} alt={`${siteName} Logo`} className="h-auto max-h-[35px] max-w-[400px] object-contain" />
        </picture>
      )}
      {!logoUrl && <StanfordWordMark className="block h-[62px] w-auto text-cardinal-red no-underline" />}
    </>
  )
}

export default LockupLogo
