import React from "react"
import { PostMeta } from "../lib/blogAPI"
import { Box, Heading, Center, Flex, Divider } from "@chakra-ui/react"
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
        <Flex fontSize="sm">
          <Flex mt={0.5} mr={1}>
            <FiClock />
          </Flex>
          {props.readingTime} min read
        </Flex>
        <Divider orientation="vertical" mx={1} />
        &bull;
        <Divider orientation="vertical" mx={1} />
        <Box as="time" fontSize="sm">
          {props.date}
        </Box>
      </Flex>
      <hr />
    </Box>
  )
}

export default BlogHeader
