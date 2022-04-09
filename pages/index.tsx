import HomePage from "../src/components/Home"
import Meta from "../src/components/Meta"
import { getRecentPosts, PostMeta } from "../src/lib/blogAPI"

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
