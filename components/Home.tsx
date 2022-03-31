import React from "react"
import { Box, Flex, Spacer, Container, Heading } from "@chakra-ui/react"
import DETAILS from "../lib/personalDetails"
import MobileLayout from "../layouts/MobileLayout"
import SideLayout from "../layouts/SideLayout"

const HomePage = () => {
  return (
    <Box>
      <Container maxW="7xl">
        <h1>
          Hey, I&apos;m {DETAILS.firstName} {DETAILS.lastName}!
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
          deserunt beatae aliquid ipsum facilis consequuntur enim alias sint
          eveniet praesentium sunt inventore velit, fugit ad reprehenderit
          ratione amet laboriosam delectus.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
          deserunt beatae aliquid ipsum facilis consequuntur enim alias sint
          eveniet praesentium sunt inventore velit, fugit ad reprehenderit
          ratione amet laboriosam delectus.
        </p>
        <hr />
      </Container>
      <Flex>
        <MobileLayout>
          <Heading as="h2" size="xl">
            Recent Posts
          </Heading>
          <p>
            Lorem ipsum dolor sit, <strong>Hi there aman</strong>amet
            consectetur adipisicing <u>underline</u>elit. Voluptatum deserunt
            beatae aliquid ipsum facilis consequuntur enim alias sint eveniet
            praesentium sunt inventore Ch<sub>var</sub> = hgvelit, fugit ad
            reprehenderit <i>hjhghjgh</i> ratione amet laboriosam{" "}
            <a>Hi there</a> delectus.
          </p>
          <code>
            2<sup>2</sup> = 4<sub>54</sub>
          </code>
          <pre>
            <code>let var = 5;</code>
            <code>let var = 5;</code>
            <code>let var = 5;</code>
            <code>let var = 5;</code>
            <code>let var = 5;</code>
            <code>let var = 5;</code>
            <code>let var = 5;</code>
            <code>let var = 5;</code>
            <code>let var = 5;</code>
          </pre>
          <p>
            Lorem ipsum dolor sit, <strong>Hi there aman</strong>amet
            consectetur adipisicing <u>underline</u>elit. Voluptatum deserunt
            beatae aliquid ipsum facilis consequuntur enim alias sint eveniet
            praesentium sunt inventore Ch<sub>var</sub> = hgvelit, fugit ad
            reprehenderit <i>hjhghjgh</i> ratione amet laboriosam{" "}
            <a>Hi there</a> delectus.
          </p>
          <code>
            2<sup>2</sup> = 4<sub>54</sub>
          </code>
          <pre>
            <code>let var = 5;</code>
            <code>let var = 5;</code>
            <code>let var = 5;</code>
            <code>let var = 5;</code>
            <code>let var = 5;</code>
            <code>let var = 5;</code>
            <code>let var = 5;</code>
            <code>let var = 5;</code>
            <code>let var = 5;</code>
          </pre>
          <p>
            Lorem ipsum dolor sit, <strong>Hi there aman</strong>amet
            consectetur adipisicing <u>underline</u>elit. Voluptatum deserunt
            beatae aliquid ipsum facilis consequuntur enim alias sint eveniet
            praesentium sunt inventore Ch<sub>var</sub> = hgvelit, fugit ad
            reprehenderit <i>hjhghjgh</i> ratione amet laboriosam{" "}
            <a>Hi there</a> delectus.
          </p>
          <code>
            2<sup>2</sup> = 4<sub>54</sub>
          </code>
          <pre>
            <code>let var = 5;</code>
            <code>let var = 5;</code>
            <code>let var = 5;</code>
            <code>let var = 5;</code>
            <code>let var = 5;</code>
            <code>let var = 5;</code>
            <code>let var = 5;</code>
            <code>let var = 5;</code>
            <code>let var = 5;</code>
          </pre>
        </MobileLayout>
        <Spacer />
        <SideLayout>
          <Heading as="h2" size="lg">
            Top Posts
          </Heading>
          <p>
            Lorem ipsum dolor sit, <strong>Hi there aman</strong>amet
            consectetur adipisicing <u>underline</u>elit. Voluptatum deserunt
            beatae aliquid ipsum facilis consequuntur enim alias sint eveniet
            praesentium sunt inventore Ch<sub>var</sub> = hgvelit, fugit ad
            reprehenderit <i>hjhghjgh</i> ratione amet laboriosam{" "}
            <a>Hi there</a> delectus.
          </p>
        </SideLayout>
      </Flex>
    </Box>
  )
}

export default HomePage
