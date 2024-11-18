// src/components/blog/blog-content.tsx
import { posts } from '#site/content';
import { blogConfig } from '@/config/blog';
import { PostCard } from '@/components/blog/post-card';
import { QueryPagination } from '@/components/query-pagination';
import { sortPosts } from '@/lib/utils';
import { Suspense } from 'react';

interface BlogContentProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function BlogContent({ searchParams }: BlogContentProps) {
  // Filter out unpublished posts first
  const publishedPosts = posts.filter((post) => post.published);
  const params = await searchParams;
  const pageParam = params?.page;
  const tagParam = params?.tag;

  const page = typeof pageParam === 'string' ? Number(pageParam) : 1;
  const currentPage = Math.max(1, page);
  const selectedTag = typeof tagParam === 'string' ? tagParam : undefined;

  // Process posts
  const filteredPosts = selectedTag
    ? publishedPosts.filter((post) => post.tags?.includes(selectedTag))
    : publishedPosts;
  const sortedPosts = sortPosts(filteredPosts);
  const totalPages = Math.ceil(sortedPosts.length / blogConfig.postsPerPage);

  // Get current page posts
  const displayPosts = sortedPosts.slice(
    (currentPage - 1) * blogConfig.postsPerPage,
    currentPage * blogConfig.postsPerPage
  );

  if (currentPage > totalPages) {
    return (
      <div className="col-span-12 lg:col-span-8">
        <h2 className="text-2xl font-bold">Page not found</h2>
        <p className="mt-4">This page does not exist.</p>
      </div>
    );
  }

  return (
    <div className="col-span-12 lg:col-span-8">
      <Suspense fallback={<div>Loading posts...</div>}>
        {displayPosts.length > 0 ? (
          <div className="space-y-10">
            {displayPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
            <QueryPagination totalPages={totalPages} className="justify-end" />
          </div>
        ) : (
          <p className="text-muted-foreground">No posts found.</p>
        )}
      </Suspense>
    </div>
  );
}
