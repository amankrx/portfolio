import type { NextPage } from "next"
import Meta from "../components/Meta"

import AboutPage from "../components/About"

const Contact: NextPage = () => {
  return (
    <div>
      <Meta title="More about me" />
      <AboutPage />
    </div>
  )
}

export default Contact
