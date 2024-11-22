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
import PostMetrics from '@/components/blog/post-metrics';

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

const PostPage = async ({ params }: PostPageProps) => {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <div className="relative py-6 lg:py-10">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row justify-center relative">
          {/* Left sidebar - Table of Contents */}
          <aside className="hidden xl:block w-[240px] shrink-0">
            <div className="sticky top-[calc(var(--header-height)+4rem)] max-h-[calc(100vh-var(--header-height)-8rem)] overflow-y-auto">
              <TableOfContents />
            </div>
          </aside>

          {/* Center content */}
          <main className="w-full px-4 sm:px-6 xl:max-w-[800px] min-w-0">
            <PostNavigation className="mb-8" />

            <article>
              <div className="flex flex-col space-y-10">
                <PostHeader
                  title={post.title}
                  date={post.date}
                  tags={post.tags}
                  readingTime={post.readingTime}
                />

                <Separator className="h-px bg-primary/10" />

                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <MDXContent code={post.body} />
                </div>

                <Separator className="h-px bg-primary/10" />

                {/* Mobile/Tablet likes */}
                <div className="xl:hidden">
                  <PostMetrics slug={post.slugAsParams} />
                </div>

                <PostFooter title={post.title} slug={post.slugAsParams} />
              </div>
            </article>
          </main>

          {/* Right sidebar - Likes */}
          <aside className="hidden xl:block w-[200px] shrink-0">
            <div className="sticky top-[calc(var(--header-height)+4rem)] h-[calc(100vh-var(--header-height)-8rem)]">
              <div className="flex items-center justify-center h-full">
                <PostMetrics slug={post.slugAsParams} />
              </div>
            </div>
          </aside>
        </div>

        {/* Mobile Table of Contents */}
        <div className="xl:hidden mt-8">
          <TableOfContents />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
