import fs from "fs"

import { Feed } from "feed"

import { getRecentPosts } from "./blogAPI"
import moment from "moment"

export async function generateRSS() {
  const baseUrl = "https://www.amankrx.com"
  const posts = getRecentPosts()
  const author = {
    name: "Aman Kumar",
    email: "amankr1619@gmail.com",
    link: baseUrl,
  }
  const feed = new Feed({
    title: "Aman Kumar's Blog",
    description:
      "Aman Kumar's development blog. Currently, I'm writing about my journey through the Google Summer of Code program.",
    id: baseUrl,
    link: baseUrl,
    copyright: `All rights given ${new Date().getFullYear()}, Aman Kumar`,
    updated: new Date(),
    generator: "Feed for Node.js",
    feedLinks: {
      rss2: `${baseUrl}/rss/feed.xml`,
      json: `${baseUrl}/rss/feed.json`,
      atom: `${baseUrl}/rss/atom.xml`,
    },
    author,
  })

  posts.forEach((post) => {
    feed.addItem({
      title: post.meta.title,
      id: `${baseUrl}/blog/${post.meta.slug}`,
      link: `${baseUrl}/blog/${post.meta.slug}`,
      description: post.meta.excerpt,
      content: post.content,
      author: [author],
      contributor: [author],
      date: new Date(moment(post.meta.date).format("YYYY-MM-DD")),
    })
  })
  fs.mkdirSync("./public/rss", { recursive: true })
  fs.writeFileSync("./public/rss/feed.xml", feed.rss2())
  fs.writeFileSync("./public/rss/atom.xml", feed.atom1())
  fs.writeFileSync("./public/rss/feed.json", feed.json1())
}
