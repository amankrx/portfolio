import React from "react"
import { Box } from "@chakra-ui/react"
import Link from "next/link"
import { PostMeta } from "../lib/blogAPI"

const BlogListPage = ({ posts }: { posts: PostMeta[] }) => {
  return (
    <Box>
      {posts.map((post) => (
        <Box key={post.slug}>
          <Link href={`/blog/${post.slug}`}>
            <a>{post.title}</a>
          </Link>
          <p>{post.excerpt}</p>
        </Box>
      ))}
    </Box>
  )
}

export default BlogListPage
