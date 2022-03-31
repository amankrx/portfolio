import React from "react"
import { Box } from "@chakra-ui/react"
import DETAILS from "../lib/personalDetails"

const WorkPage = () => {
  return (
    <Box>
      <h1>/work</h1>
      <h2>Work Experience:</h2>
      <Box>
        {DETAILS.experience.map((exp) => (
          <Box key={exp.company}>
            <h3>{exp.company}</h3>
            <p>{exp.title}</p>
            <p>
              {exp.startDate} - {exp.endDate}
            </p>
            <p>{exp.summary}</p>
            <ul>
              {exp.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default WorkPage
