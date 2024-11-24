// src/lib/utils.ts

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Post, Project } from 'generated/content';

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

export function sortPosts(blog_posts: Post[]): Post[] {
  return [...blog_posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function sortProjects(projects: Project[]): Project[] {
  return [...projects].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getAllTags(blog_posts: Post[]): Record<string, number> {
  return blog_posts.reduce(
    (acc, blog_post) => {
      if (blog_post.published && blog_post.tags) {
        blog_post.tags.forEach((tag) => {
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
