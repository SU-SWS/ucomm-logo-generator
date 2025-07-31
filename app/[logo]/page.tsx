import {LockupSelection, LockupOption} from "@components/elements/lockup/lockup-selection"

// https://vercel.com/docs/functions/runtimes#max-duration
export const maxDuration = 60
export const dynamicParams = false

type PageProps = {
  params: Promise<{logo: LockupOption}>
}

const Page = async (props: PageProps) => {
  const params = await props.params
  return <LockupSelection lockupChoice={params.logo} />
}

export const generateStaticParams = async (): Promise<Array<{logo: LockupOption}>> => {
  return [
    {logo: "unit"},
    {logo: "unit_2_line"},
    {logo: "unit_level"},
    {logo: "unit_2_lines_big_small"},
    {logo: "unit_2_lines_level"},
    {logo: "school"},
    {logo: "alt_school"},
    {logo: "multidisciplinary"},
    {logo: "vertical_unit"},
    {logo: "vertical_unit_2_lines"},
    {logo: "vertical_2_lines_level"},
    {logo: "vertical_school"},
    {logo: "vertical_school_unit"},
    {logo: "vertical_school_unit_level"},
  ]
}

export default Page
