// src/config/blog.ts

import { BlogConfig } from '@/types/blog';

export const blogConfig: BlogConfig = {
  postsPerPage: 5,
  maxDescriptionLength: 160,
  ogImageSize: {
    width: 1200,
    height: 630,
  },
} as const;
