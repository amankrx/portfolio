import type { NextPage } from "next"
import Meta from "../src/components/Meta"

import ContactPage from "../src/components/Contact"

const Contact: NextPage = () => {
  return (
    <div>
      <Meta title="Contact Me" />
      <ContactPage />
    </div>
  )
}

export default Contact
