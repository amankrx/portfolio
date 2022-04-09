import HomePage from "../components/Home"
import Meta from "../components/Meta"
import { getRecentPosts, PostMeta } from "../lib/blogAPI"

const Home = ({ posts }: { posts: PostMeta[] }) => {
  return (
    <div>
      <Meta title="Aman - Home" />
      <HomePage posts={posts} />
    </div>
  )
}

export async function getStaticProps() {
  const posts = getRecentPosts()
    .map((post) => post.meta)
    .slice(0, 5)

  return { props: { posts } }
}

export default Home
