import React from "react"
import { PostMeta } from "../lib/blogAPI"
import ViewCounter from "./ViewCounter"
import { Box, Heading, Center, Flex, Divider, Hide } from "@chakra-ui/react"
import { FiClock } from "react-icons/fi"

const BlogHeader = (props: PostMeta) => {
  return (
    <Box as="header" mb={8}>
      <Center mb={8}>
        <Heading as="h1" size="2xl">
          {props.title}
        </Heading>
      </Center>
      <Flex align="center" justifyContent="center">
        <Hide below="sm">
          <Flex fontSize="sm">
            <Flex mt={0.5} mr={1}>
              <FiClock />
            </Flex>
            {props.readingTime} min read
          </Flex>
          <Divider orientation="vertical" mx={1} />
          &bull;
          <Divider orientation="vertical" mx={1} />
        </Hide>
        <Box as="time" fontSize="sm">
          {props.date}
        </Box>
        <Hide below="sm">
          <Divider orientation="vertical" mx={1} />
          &bull;
          <Divider orientation="vertical" mx={1} />
          <Box fontSize="sm">
            <ViewCounter slug={props.slug} />
          </Box>
        </Hide>
      </Flex>
      <hr />
    </Box>
  )
}

export default BlogHeader
