import React from "react"
import type { GetStaticProps, GetStaticPaths } from "next"
import { Box, Heading, Center, Flex, Container } from "@chakra-ui/react"
import Meta from "../../components/Meta"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeHighlight from "rehype-highlight"
import remarkGfm from "remark-gfm"
import { getPostFromSlug, getSlugs, PostMeta } from "../../lib/blogAPI"
import "highlight.js/styles/github-dark.css"
import moment from "moment"
import MobileLayout from "../../layouts/MobileLayout"
import SideLayout from "../../layouts/SideLayout"
import TableOfContents from "../../components/TableOfContents"

interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>
  meta: PostMeta
  headings: { text: string; level: number }[]
}

export default function PostPage({ post }: { post: MDXPost }) {
  return (
    <Container maxW="7xl">
      <Meta
        title={post.meta.title}
        description={post.meta.excerpt}
        keywords={post.meta.keywords}
      />
      <Box as="article" mx="auto">
        <Box as="header" mb={8}>
          <Center mb={8}>
            <Heading as="h1" size="2xl">
              {post.meta.title}
            </Heading>
          </Center>
          <Flex justify="space-between" align="center">
            <Box>
              <Box as="time" fontSize="sm">
                {moment(post.meta.date).format("MMMM DD, YYYY")}
              </Box>
              <Box fontSize="sm">{post.meta.readingTime} min read</Box>
            </Box>
          </Flex>
          <hr />
        </Box>
        <Flex>
          <MobileLayout>
            <MDXRemote {...post.source} components={{}} />
          </MobileLayout>
          <SideLayout>
            <h3>Table of Contents</h3>
            <TableOfContents>{post.headings}</TableOfContents>
          </SideLayout>
        </Flex>
      </Box>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string }
  const { content, meta, headings } = getPostFromSlug(slug)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
        remarkGfm,
      ],
    },
  })

  return { props: { post: { source: mdxSource, meta, headings } } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
