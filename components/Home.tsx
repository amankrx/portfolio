import React from "react"
import {
  Box,
  Flex,
  Container,
  Heading,
  Divider,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import DETAILS from "../lib/personalDetails"
import { PostMeta } from "../lib/blogAPI"
import NextLink from "next/link"
import moment from "moment"
import { FiClock } from "react-icons/fi"

const HomePage = ({ posts }: { posts: PostMeta[] }) => {
  const mediumText = useColorModeValue("textMediumLight", "textMediumDark")
  return (
    <Container maxW={"3xl"}>
      <h1>
        Hey, I&apos;m {DETAILS.firstName} {DETAILS.lastName}!
      </h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
        deserunt beatae aliquid ipsum facilis consequuntur enim alias sint
        eveniet praesentium sunt inventore velit, fugit ad reprehenderit ratione
        amet laboriosam delectus.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
        deserunt beatae aliquid ipsum facilis consequuntur enim alias sint
        eveniet praesentium sunt inventore velit, fugit ad reprehenderit ratione
        amet laboriosam delectus.
      </p>
      <hr />
      <Heading as="h2" size="xl">
        Recent Posts
      </Heading>
      <Box>
        {posts.map((post) => (
          <Box key={post.slug} my={4} pr={4} py={2} borderRadius={4}>
            <NextLink href={`/blog/${post.slug}`} passHref>
              <Heading
                as="h3"
                size="lg"
                cursor="pointer"
                mb={0}
                _hover={{
                  color: "brand",
                  textDecoration: "none",
                }}
              >
                {post.title}
              </Heading>
            </NextLink>
            <Flex>
              <Text fontSize="sm" color={mediumText}>
                {moment(post.date).format("MMMM Do, YYYY")}
              </Text>
              <Text fontSize="sm" color={mediumText}>
                <Flex ml={1}>
                  <Divider orientation="vertical" mx={1} />
                  &bull;
                  <Divider orientation="vertical" mx={1} />
                  <Flex mr={1} mt={0.5}>
                    <FiClock />
                  </Flex>
                  {post.readingTime} min read
                </Flex>
              </Text>
            </Flex>
            <Text fontSize="md" color={mediumText}>
              {post.excerpt} {". "}
              <NextLink href={`/blog/${post.slug}`} passHref>
                Read more
              </NextLink>
            </Text>
          </Box>
        ))}
      </Box>
    </Container>
  )
}

export default HomePage
