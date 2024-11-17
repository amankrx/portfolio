// src/lib/posts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import type { Post } from '@/types/post';
import readingTime from 'reading-time';
import { MDXComponents } from '@/lib/mdx-components';
import { mdxOptions } from './mdx-config';

const postsDirectory = path.join(process.cwd(), 'src/posts');

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data: frontMatter, content } = matter(fileContents);
    const { minutes } = readingTime(content);

    const { content: compiledContent } = await compileMDX({
      source: content,
      components: MDXComponents,
      options: mdxOptions,
    });

    return {
      slug,
      content: compiledContent,
      title: frontMatter.title,
      date: frontMatter.date,
      description: frontMatter.description,
      tags: frontMatter.tags,
      readingTime: `${Math.ceil(minutes)} min read`,
    };
  } catch (error) {
    console.error(`Error getting post ${slug}:`, error);
    return null;
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const files = fs.readdirSync(postsDirectory);
  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith('.mdx'))
      .map(async (file) => {
        const slug = file.replace(/\.mdx$/, '');
        const post = await getPostBySlug(slug);
        return post;
      })
  );

  return posts
    .filter((post): post is Post => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
