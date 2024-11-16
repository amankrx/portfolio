export interface Post {
  content: string;
  meta: PostMeta;
  headings: { text: string; level: number }[];
}

export interface PostMeta {
  title: string;
  excerpt: string;
  slug: string;
  tags: string[];
  date: string;
  keywords: string;
  readingTime: number;
}
