// src/types/blog.ts
export interface Post {
  slug: string;
  slugAsParams: string;
  title: string;
  description?: string;
  date: string;
  published: boolean;
  tags?: string[];
  body: string;
}

export interface BlogConfig {
  postsPerPage: number;
  maxDescriptionLength: number;
  ogImageSize: {
    width: number;
    height: number;
  };
}
