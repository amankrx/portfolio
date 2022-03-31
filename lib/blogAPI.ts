import path from "path"
import fs from "fs"
import { sync } from "glob"
import matter from "gray-matter"
import readingTime from "reading-time"

const POSTS_PATH = path.join(process.cwd(), "posts")

export const getSlugs = (): string[] => {
  const paths = sync(`${POSTS_PATH}/*.mdx`)

  return paths.map((path) => {
    const parts = path.split("/")
    const fileName = parts[parts.length - 1]
    const [slug] = fileName.split(".")
    return slug
  })
}

export const getRecentPosts = () => {
  const posts = getSlugs()
    .map((slug) => getPostFromSlug(slug))
    .sort((a, b) => {
      if (a.meta.date > b.meta.date) return 1
      if (a.meta.date < b.meta.date) return -1
      return 0
    })
    .reverse()
  return posts
}

interface Post {
  content: string
  meta: PostMeta
  headings: { text: string; level: number }[]
}

export interface PostMeta {
  title: string
  excerpt: string
  slug: string
  tags: string[]
  date: string
  keywords: string
  readingTime: number
}

export function getHeadings(source: string) {
  // Thanks to Josh W Comeau for this code
  const headingLines = source.split("\n").filter((line) => {
    return line.match(/^###*\s/)
  })

  // Transform the string '## Some text' into an object
  // with the shape '{ text: 'Some text', level: 2 }'
  return headingLines.map((raw) => {
    const text = raw.replace(/^###*\s/, "")
    // I only care about h2 and h3.
    // If I wanted more levels, I'd need to count the
    // number of #s.
    const level = raw.slice(0, 3) === "###" ? 3 : 2

    return { text, level }
  })
}

export const getPostFromSlug = (slug: string): Post => {
  const postPath = path.join(POSTS_PATH, `${slug}.mdx`)
  const source = fs.readFileSync(postPath)
  const { content, data } = matter(source)
  const headings = getHeadings(content)

  return {
    headings,
    content,
    meta: {
      slug,
      excerpt: data.excerpt ?? "",
      title: data.title ?? slug,
      tags: (data.tags ?? []).sort(),
      date: (data.date ?? new Date()).toString(),
      keywords: data.keywords ?? "",
      readingTime: Math.round(readingTime(content).minutes),
    },
  }
}
