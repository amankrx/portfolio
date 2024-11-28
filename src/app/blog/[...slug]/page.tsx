// src/app/blog/[...slug]/page.tsx
import { blogs, Post } from 'generated/content';
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

export async function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slugAsParams.split('/') }));
}

async function getPostFromParams(params: PostPageProps['params']) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug?.join('/');
  return blogs.find((post: Post) => post.slugAsParams === slug);
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
    title: `${post.title}`,
    description: post.description,
    authors: { name: siteConfig.author.name },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `${siteConfig.url}/${post.slug}`,
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
    <div className="flex min-h-full w-full flex-col">
      <div className="flex-1">
        <div className="py-6 lg:py-10">
          <div className="container mx-auto">
            <div className="relative flex flex-col justify-center xl:flex-row">
              {/* Left sidebar - Table of Contents */}
              <aside className="hidden w-[240px] shrink-0 xl:block">
                <div className="sticky top-[calc(var(--header-height)+4rem)] max-h-[calc(100vh-var(--header-height)-8rem)] overflow-y-auto">
                  <TableOfContents toc={post.toc} />
                </div>
              </aside>

              {/* Center content */}
              <main className="w-full min-w-0 px-4 sm:px-6 xl:max-w-[800px]">
                <PostNavigation className="mb-8" />

                <article>
                  <div className="flex flex-col space-y-8">
                    <PostHeader
                      title={post.title}
                      date={post.date}
                      tags={post.tags}
                      readingTime={post.metadata.readingTime}
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
                  </div>
                </article>
              </main>

              {/* Right sidebar - Likes */}
              <aside className="hidden w-[200px] shrink-0 xl:block">
                <div className="sticky top-[calc(var(--header-height)+4rem)] h-[calc(100vh-var(--header-height)-8rem)]">
                  <div className="flex h-full items-center justify-center">
                    <PostMetrics slug={post.slugAsParams} />
                  </div>
                </div>
              </aside>
            </div>
            {/* Mobile Table of Contents */}
            <div className="mt-8 xl:hidden">
              <TableOfContents toc={post.toc} />
            </div>
          </div>
        </div>
      </div>

      <PostFooter title={post.title} slug={post.slugAsParams} />
    </div>
  );
};

export default PostPage;
