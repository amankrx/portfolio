// src/app/blog/page.tsx
import { Metadata } from 'next';
import { BlogHeader } from '@/components/blog/blog-header';
import { BlogContent } from '@/components/blog/blog-content';
import { BlogSidebar } from '@/components/blog/blog-sidebar';

export const metadata: Metadata = {
  title: 'Blog | Your Name',
  description: 'Thoughts, stories and ideas.',
};

interface BlogPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  return (
    <section className="container max-w-6xl py-10">
      <BlogHeader />
      <div className="grid grid-cols-1 gap-10 mt-8 lg:grid-cols-12">
        <BlogContent searchParams={searchParams} />
        <BlogSidebar searchParams={searchParams} />
      </div>
    </section>
  );
}
