import React from "react"
import { Box } from "@chakra-ui/react"
import DETAILS from "../lib/personalDetails"

const AboutPage = () => {
  return (
    <Box>
      <h1>/about</h1>
      <h2>About Me:</h2>
      <Box>
        <p>
          Hi, I&apos;m {DETAILS.firstName} {DETAILS.lastName}. I&apos;m a
          software engineer with a passion for building things that people love.
        </p>
        <p>
          I&apos;m currently working at{" "}
          <a href="https://www.pivotal.io/">Pivotal</a> as a{" "}
          <a href="https://www.pivotal.io/careers/engineering/">
            Software Engineer
          </a>
          .
        </p>
        <p>
          I&apos;m a{" "}
          <a href="https://www.linkedin.com/in/amanshahid/">
            <i>full-stack</i>
          </a>{" "}
          developer with a passion for building things that people love.
        </p>
      </Box>
    </Box>
  )
}

export default AboutPage
