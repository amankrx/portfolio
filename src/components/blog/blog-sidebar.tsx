// src/components/blog/blog-sidebar.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getAllTags, sortTagsByCount } from '@/lib/utils';
import { Tag } from '@/components/blog/tag';
import { posts } from '#site/content';

interface BlogSidebarProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function BlogSidebar({ searchParams }: BlogSidebarProps) {
  const params = searchParams;
  const tagParam = params?.tag;
  const selectedTag = typeof tagParam === 'string' ? tagParam : undefined;

  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <aside className="col-span-12 lg:col-span-4">
      <Card className="sticky top-24">
        <CardHeader>
          <CardTitle>Tags</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {sortedTags.map((tag) => (
            <Tag
              key={tag}
              tag={tag}
              count={tags[tag]}
              current={selectedTag === tag}
            />
          ))}
        </CardContent>
      </Card>
    </aside>
  );
}
