import Lockup from "@components/elements/lockup/lockup"

export const maxDuration = 60

const Home = async () => {
  "use cache"

  return (
    <article>
      <h1 className="sr-only" id="page-title">
        Site name
      </h1>
      <Lockup />
    </article>
  )
}

export default Home
