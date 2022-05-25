import { getRecentPosts, PostMeta } from "../../src/lib/blogAPI"
import BlogListPage from "../../src/components/BlogList"
import Meta from "../../src/components/Meta"
import { generateRSS } from "../../src/lib/rss"

export default function Home({ posts }: { posts: PostMeta[] }) {
  return (
    <div>
      <Meta title="Aman's Blog" />
      <h1>/blog</h1>
      <BlogListPage posts={posts} />
    </div>
  )
}

export async function getStaticProps() {
  const posts = getRecentPosts().map((post) => post.meta)

  await generateRSS()

  return { props: { posts } }
}
