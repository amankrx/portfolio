// src/lib/utils.ts

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Post } from '#site/content';
import { slug } from 'github-slugger';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export function getPostsByTagSlug(posts: Array<Post>, tag: string) {
  return posts.filter((post) => {
    if (!post.tags) return false;
    const slugifiedTags = post.tags.map((tag) => slug(tag));
    return slugifiedTags.includes(tag);
  });
}

export function sortPosts(posts: Post[]): Post[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getAllTags(posts: Post[]): Record<string, number> {
  return posts.reduce(
    (acc, post) => {
      if (post.published && post.tags) {
        post.tags.forEach((tag) => {
          acc[tag] = (acc[tag] || 0) + 1;
        });
      }
      return acc;
    },
    {} as Record<string, number>
  );
}

export function sortTagsByCount(tags: Record<string, number>): string[] {
  return Object.entries(tags)
    .sort(([, a], [, b]) => b - a)
    .map(([tag]) => tag);
}
