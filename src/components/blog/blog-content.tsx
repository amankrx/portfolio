// src/components/blog/blog-content.tsx
import { blogs, Post } from 'generated/content';
import { blogConfig } from '@/config/blog';
import { BlogCard } from '@/components/blog/blog-card';
import { QueryPagination } from '@/components/query-pagination';
import { sortPosts } from '@/lib/utils';
import { Suspense } from 'react';

interface BlogContentProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function BlogContent({ searchParams }: BlogContentProps) {
  const publishedPosts = blogs.filter((post: Post) => post.published);
  const params = searchParams;
  const pageParam = params?.page;
  const tagParam = params?.tag;

  const page = typeof pageParam === 'string' ? Number(pageParam) : 1;
  const currentPage = Math.max(1, page);
  const selectedTag = typeof tagParam === 'string' ? tagParam : undefined;

  const filteredPosts = selectedTag
    ? publishedPosts.filter((post) => post.tags?.includes(selectedTag))
    : publishedPosts;
  const sortedPosts = sortPosts(filteredPosts);
  const totalPages = Math.ceil(sortedPosts.length / blogConfig.postsPerPage);

  const displayPosts = sortedPosts.slice(
    (currentPage - 1) * blogConfig.postsPerPage,
    currentPage * blogConfig.postsPerPage
  );

  if (currentPage > totalPages) {
    return (
      <div>
        <h2 className="text-2xl font-bold">Page not found</h2>
        <p className="mt-4">This page does not exist.</p>
      </div>
    );
  }

  return (
    <Suspense fallback={<div>Loading posts...</div>}>
      {displayPosts.length > 0 ? (
        <div className="space-y-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {displayPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          <QueryPagination
            totalPages={totalPages}
            className="flex justify-center"
          />
        </div>
      ) : (
        <p className="text-muted-foreground">No posts found.</p>
      )}
    </Suspense>
  );
}
