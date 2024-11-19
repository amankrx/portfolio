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
import { posts } from '#site/content';
import { useRouter } from 'next/navigation';
import { Tag } from 'lucide-react';

interface TagFilterProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export function TagFilter({ searchParams }: TagFilterProps) {
  const router = useRouter();
  const params = searchParams;
  const tagParam = params?.tag;
  const selectedTag = typeof tagParam === 'string' ? tagParam : undefined;

  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  const handleValueChange = (value: string) => {
    if (value === 'all') {
      router.push('/blog');
    } else {
      router.push(`/blog?tag=${value}`);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Tag className="h-4 w-4" />
        Filter:
      </div>
      <Select value={selectedTag || 'all'} onValueChange={handleValueChange}>
        <SelectTrigger className="w-[180px] border-none bg-transparent px-2 shadow-none hover:bg-accent focus:ring-0 focus:ring-offset-0">
          <SelectValue placeholder="All Tags" />
        </SelectTrigger>
        <SelectContent align="end" className="max-h-[200px]">
          <SelectItem value="all" className="font-medium">
            All Tags
          </SelectItem>
          {sortedTags.map((tag) => (
            <SelectItem
              key={tag}
              value={tag}
              className="flex items-center justify-between"
            >
              <span>{tag}</span>
              <span className="ml-2 text-xs text-muted-foreground">
                ({tags[tag]})
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
