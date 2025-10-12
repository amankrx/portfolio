// src/app/blog/page.tsx
import { Metadata } from 'next';
import { BlogHeader } from '@/components/blog/blog-header';
import { BlogContent } from '@/components/blog/blog-content';
import { TagFilter } from '@/components/blog/tag-filter';
import { siteConfig } from '@/config/site';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Blog - Software Engineering, Rust, and System Design',
  description: `Read ${siteConfig.name}'s blog about backend development, distributed systems, Rust programming, and software engineering best practices.`,
  keywords: [
    'software engineering blog',
    'rust programming',
    'backend development',
    'distributed systems',
    'system design',
    'tech blog',
    'programming tutorials',
    'developer blog',
  ],
  openGraph: {
    title: 'Blog - Software Engineering & Development',
    description: `Read ${siteConfig.name}'s blog about backend development, distributed systems, Rust programming, and software engineering best practices.`,
    type: 'website',
    url: `${siteConfig.url}/blog`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Software Engineering & Development',
    description: `Read ${siteConfig.name}'s blog about backend development, distributed systems, Rust programming, and software engineering best practices.`,
  },
  alternates: {
    canonical: `${siteConfig.url}/blog`,
    types: {
      'application/rss+xml': `${siteConfig.url}/rss.xml`,
    },
  },
};

interface BlogPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const resolvedSearchParams = await searchParams;

  // Blog collection structured data
  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `${siteConfig.name}'s Blog`,
    description: `Articles about software engineering, Rust programming, distributed systems, and backend development by ${siteConfig.name}`,
    url: `${siteConfig.url}/blog`,
    author: {
      '@type': 'Person',
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Person',
      name: siteConfig.author.name,
    },
  };

  // Breadcrumb structured data
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteConfig.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${siteConfig.url}/blog`,
      },
    ],
  };

  return (
    <>
      {/* JSON-LD structured data */}
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

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
    </>
  );
}
