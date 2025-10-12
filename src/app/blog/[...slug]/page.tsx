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
import TableOfContents from '@/components/table-of-contents';

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

  return {
    title: `${post.title}`,
    description: post.description,
    authors: { name: siteConfig.author.name },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `${siteConfig.url}/${post.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

const PostPage = async ({ params }: PostPageProps) => {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <div className="relative flex min-h-full w-full flex-col bg-background">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-40 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative flex-1">
        <div className="py-8 lg:py-12">
          <div className="container mx-auto">
            <div className="relative flex justify-center">
              <div className="flex w-full max-w-[1280px] flex-col xl:flex-row xl:gap-8">
                {/* Left sidebar - Table of Contents */}
                <aside className="hidden w-[240px] shrink-0 xl:block">
                  <div className="sticky top-[calc(var(--header-height)+4rem)] max-h-[calc(100vh-var(--header-height)-8rem)] overflow-y-auto">
                    <TableOfContents toc={post.toc} />
                  </div>
                </aside>

                {/* Center content */}
                <main className="w-full min-w-0 px-4 sm:px-6 xl:max-w-[800px] xl:px-0">
                  <div className="animate-fade-in-up animation-delay-0 opacity-0">
                    <PostNavigation className="mb-8" />
                  </div>

                  <article className="animate-fade-in-up animation-delay-100 opacity-0">
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
                    </div>
                  </article>
                </main>
              </div>
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
