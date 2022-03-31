import type { NextPage } from "next"
import Meta from "../components/Meta"
import WorkPage from "../components/Work"

const Work: NextPage = () => {
  return (
    <div>
      <Meta title="My Work experience and Projects" />
      <WorkPage />
    </div>
  )
}

export default Work
