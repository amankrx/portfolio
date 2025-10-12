// src/app/blog/page.tsx
import { Metadata } from 'next';
import { BlogHeader } from '@/components/blog/blog-header';
import { BlogContent } from '@/components/blog/blog-content';
import { TagFilter } from '@/components/blog/tag-filter';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Blog',
  description: `${siteConfig.name}'s blog`,
};

interface BlogPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const resolvedSearchParams = await searchParams;

  return (
    <div className="relative min-h-screen bg-background">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-40 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <section className="container relative max-w-6xl px-4 py-16 md:py-20">
        <BlogHeader />
        <div className="mt-12 space-y-8">
          <div className="animate-fade-in-up animation-delay-200 flex justify-center opacity-0 md:justify-end">
            <TagFilter searchParams={resolvedSearchParams} />
          </div>
          <BlogContent searchParams={resolvedSearchParams} />
        </div>
      </section>
    </div>
  );
}
