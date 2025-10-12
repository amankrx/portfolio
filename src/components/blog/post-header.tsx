// src/components/blog/post-header.tsx
import { LuCalendar, LuClock } from 'react-icons/lu';
import { formatDate } from '@/lib/utils';
import { Tag } from './tag';

interface PostHeaderProps {
  title: string;
  date: string;
  readingTime?: number;
  tags?: string[];
}

export function PostHeader({
  title,
  date,
  readingTime = 0,
  tags,
}: PostHeaderProps) {
  return (
    <div className="space-y-8">
      {/* Title Section */}
      <div className="space-y-4">
        <h1 className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text pb-2 text-4xl font-bold tracking-tight text-transparent md:text-5xl">
          {title}
        </h1>
      </div>

      {/* Meta Information */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 transition-colors hover:text-primary">
            <LuCalendar className="h-4 w-4" />
            <time dateTime={date}>{formatDate(date)}</time>
          </div>
          <span className="text-muted-foreground/50">•</span>
          <div className="flex items-center gap-2 transition-colors hover:text-primary">
            <LuClock className="h-4 w-4" />
            <span>{readingTime} min read</span>
          </div>
        </div>

        {tags?.length ? (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
