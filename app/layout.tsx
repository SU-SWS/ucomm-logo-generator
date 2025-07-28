import "../src/styles/index.css"
import {sourceSans3, stanford} from "../src/styles/typography/fonts"
import {twJoin} from "tailwind-merge"
import {Metadata} from "next"

export const metadata: Metadata = {
  title: "Stanford Logo Generator",
}

const RootLayout = async ({children}: {children: React.ReactNode}) => {
  return (
    <html lang="en" className={twJoin(sourceSans3.className, stanford.variable)}>
      <body>
        <nav aria-label="Skip Links">
          <a href="#main-content" className="skiplink">
            Skip to main content
          </a>
        </nav>
        <div>{children}</div>
      </body>
    </html>
  )
}
export default RootLayout
