// src/components/blog/tag-filter.tsx
'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { getAllTags, sortTagsByCount } from '@/lib/utils';
import { blogs } from 'generated/content';
import { useRouter } from 'next/navigation';
import { LuFilter } from 'react-icons/lu';

interface TagFilterProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export function TagFilter({ searchParams }: TagFilterProps) {
  const router = useRouter();
  const params = searchParams;
  const tagParam = params?.tag;
  const selectedTag = typeof tagParam === 'string' ? tagParam : undefined;

  const tags = getAllTags(blogs);
  const sortedTags = sortTagsByCount(tags);

  const handleValueChange = (value: string) => {
    if (value === 'all') {
      router.push('/blog');
    } else {
      router.push(`/blog?tag=${value}`);
    }
  };

  return (
    <div className="flex items-center gap-3 rounded-lg border border-primary/10 bg-card/50 px-4 py-2 backdrop-blur-sm">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <LuFilter className="h-4 w-4" aria-hidden="true" />
        <span className="font-medium">Filter:</span>
      </div>
      <Select
        value={selectedTag || 'all'}
        onValueChange={handleValueChange}
        aria-label="Filter blog posts by tag"
      >
        <SelectTrigger
          className="w-[180px] border-none bg-transparent px-2 shadow-none hover:bg-accent focus:ring-0 focus:ring-offset-0"
          aria-label="Select tag to filter posts"
        >
          <SelectValue placeholder="All Tags" />
        </SelectTrigger>
        <SelectContent align="end" className="max-h-[300px]">
          <SelectItem value="all" className="font-medium">
            All Tags
          </SelectItem>
          {sortedTags.map((tag) => (
            <SelectItem
              key={tag}
              value={tag}
              className="flex items-center justify-between"
            >
              <div className="flex w-full items-center justify-between">
                <span>{tag}</span>
                <span className="ml-4 text-xs text-muted-foreground">
                  {tags[tag]}
                </span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
