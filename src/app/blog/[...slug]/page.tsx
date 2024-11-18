// src/app/blog/[...slug]/page.tsx
import { posts } from '#site/content';
import { MDXContent } from '@/components/mdx-components';
import { notFound } from 'next/navigation';
import '@/styles/mdx.css';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { Separator } from '@/components/ui/separator';
import { PostHeader } from '@/components/blog/post-header';
import { PostNavigation } from '@/components/blog/post-navigation';
import { PostFooter } from '@/components/blog/post-footer';
import TableOfContents from '@/components/blog/table-of-contents';

interface PostPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

async function getPostFromParams(params: PostPageProps['params']) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug?.join('/');
  return posts.find((post) => post.slugAsParams === slug);
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set('title', post.title);

  return {
    title: `${post.title} | ${siteConfig.name}`,
    description: post.description,
    authors: { name: siteConfig.author },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: post.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <div className="container relative py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PostNavigation className="mb-8" />

        <div className="grid grid-cols-1 items-start justify-center gap-8 lg:grid-cols-[minmax(auto,800px)_240px]">
          <article>
            <div className="flex flex-col space-y-10">
              <PostHeader
                title={post.title}
                date={post.date}
                tags={post.tags}
                description={post.description}
              />

              <Separator className="h-px bg-primary/10" />

              <div className="prose prose-lg max-w-none dark:prose-invert">
                <MDXContent code={post.body} />
              </div>

              <Separator className="h-px bg-primary/10" />

              <PostFooter title={post.title} slug={post.slugAsParams} />
            </div>
          </article>

          <aside className="relative z-0 hidden h-full lg:block">
            <TableOfContents />
          </aside>
        </div>
      </div>
    </div>
  );
}
