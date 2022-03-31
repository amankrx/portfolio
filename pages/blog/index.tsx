import { getRecentPosts, PostMeta } from "../../lib/blogAPI"
import BlogListPage from "../../components/BlogList"
import Meta from "../../components/Meta"

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

  return { props: { posts } }
}
