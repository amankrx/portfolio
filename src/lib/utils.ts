// src/lib/utils.ts

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Post, Project, WorkExperience } from 'generated/content';
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

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
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function sortProjects(projects: Project[]): Project[] {
  return [...projects].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
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
    {} as Record<string, number>,
  );
}

export function sortTagsByCount(tags: Record<string, number>): string[] {
  return Object.entries(tags)
    .sort(([, a], [, b]) => b - a)
    .map(([tag]) => tag);
}

export function getDuration(startDate: string, endDate?: string): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  return `${start.toLocaleDateString('en-US', { month: 'short' })} ${start.getFullYear()} - ${end.toLocaleDateString('en-US', { month: 'short' })} ${end.getFullYear()}`;
}

export function sortWorkExperience(
  workExperience: WorkExperience[],
): WorkExperience[] {
  return [...workExperience].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
  );
}

export function sortBlogPostsByFeatured(blogPosts: Post[]): Post[] {
  return [...blogPosts].sort((a, b) => Number(b.featured) - Number(a.featured));
}

export function sortProjectsByFeatured(projects: Project[]): Project[] {
  return [...projects].sort((a, b) => Number(b.featured) - Number(a.featured));
}
