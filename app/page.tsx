import LockupSelection from "@components/elements/lockup/lockup-selection"

export const maxDuration = 60

const Home = async () => {
  return (
    <article>
      <h1 className="sr-only" id="page-title">
        Site name
      </h1>
      <LockupSelection allowChoice />
    </article>
  )
}

export default Home
