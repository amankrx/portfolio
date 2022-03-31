import type { NextPage } from "next"
import HomePage from "../components/Home"
import Meta from "../components/Meta"

const Home: NextPage = () => {
  return (
    <div>
      <Meta title="Aman - Home" />
      <HomePage />
    </div>
  )
}

export default Home
