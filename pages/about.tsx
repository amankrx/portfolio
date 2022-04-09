import type { NextPage } from "next"
import Meta from "../src/components/Meta"

import AboutPage from "../src/components/About"

const Contact: NextPage = () => {
  return (
    <div>
      <Meta title="More about me" />
      <AboutPage />
    </div>
  )
}

export default Contact
