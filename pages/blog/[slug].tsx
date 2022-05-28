import React from "react"
import type { GetStaticProps, GetStaticPaths } from "next"
import { Box, Flex, Container } from "@chakra-ui/react"
import Meta from "../../src/components/Meta"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeHighlight from "rehype-highlight"
import remarkGfm from "remark-gfm"
import { getPostFromSlug, getSlugs, PostMeta } from "../../src/lib/blogAPI"
import "highlight.js/styles/monokai-sublime.css"
import moment from "moment"
import MobileLayout from "../../src/layouts/MobileLayout"
import SideLayout from "../../src/layouts/SideLayout"
import TableOfContents from "../../src/components/TableOfContents"
import BlogHeader from "../../src/components/BlogHeader"

interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>
  meta: PostMeta
  headings: { text: string; id: string; level: number }[]
}

export default function PostPage({ post }: { post: MDXPost }) {
  if (post.meta.readingTime <= 5) {
    return (
      <Container maxW="3xl">
        <Meta
          title={post.meta.title}
          description={post.meta.excerpt}
          keywords={post.meta.keywords}
        />
        <Box as="article" mx="auto">
          <BlogHeader
            title={post.meta.title}
            date={moment(post.meta.date).format("MMMM D, YYYY")}
            tags={post.meta.tags}
            readingTime={post.meta.readingTime}
            slug={post.meta.slug}
            excerpt={post.meta.excerpt}
            keywords={post.meta.keywords}
          />
          <Flex>
            <MobileLayout>
              <MDXRemote {...post.source} components={{}} />
            </MobileLayout>
          </Flex>
        </Box>
      </Container>
    )
  } else {
    return (
      <Container maxW="7xl">
        <Meta
          title={post.meta.title}
          description={post.meta.excerpt}
          keywords={post.meta.keywords}
        />
        <Box as="article" mx="auto">
          <BlogHeader
            title={post.meta.title}
            date={moment(post.meta.date).format("MMMM D, YYYY")}
            tags={post.meta.tags}
            readingTime={post.meta.readingTime}
            slug={post.meta.slug}
            excerpt={post.meta.excerpt}
            keywords={post.meta.keywords}
          />
          <Flex>
            <MobileLayout>
              <MDXRemote {...post.source} components={{}} />
            </MobileLayout>
            <SideLayout>
              <TableOfContents>{post.headings}</TableOfContents>
            </SideLayout>
          </Flex>
        </Box>
      </Container>
    )
  }
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
