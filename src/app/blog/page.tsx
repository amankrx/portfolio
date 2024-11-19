// src/app/blog/page.tsx
import { Metadata } from 'next';
import { BlogHeader } from '@/components/blog/blog-header';
import { BlogContent } from '@/components/blog/blog-content';
import { TagFilter } from '@/components/blog/tag-filter';

export const metadata: Metadata = {
  title: 'Blog | Aman Kumar',
  description: "Aman Kumar's blog",
};

interface BlogPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const resolvedSearchParams = await searchParams;

  return (
    <section className="container max-w-6xl py-10">
      <BlogHeader />
      <div className="mt-8 space-y-6">
        <div className="flex justify-center md:justify-end">
          <TagFilter searchParams={resolvedSearchParams} />
        </div>
        <BlogContent searchParams={resolvedSearchParams} />
      </div>
    </section>
  );
}
