// types/post.ts
import { ReactElement } from 'react';

export interface Post {
  title: string;
  description: string;
  date: string;
  slug: string;
  content: ReactElement; // Updated type
  readingTime?: string;
  tags?: string[];
}
