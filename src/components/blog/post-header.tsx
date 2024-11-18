// src/components/blog/post-header.tsx
import { Calendar, Clock } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import { Tag } from './tag';

interface PostHeaderProps {
  title: string;
  date: string;
  readingTime?: string;
  tags?: string[];
  description?: string;
}

export function PostHeader({
  title,
  date,
  readingTime = '5 min read',
  tags,
}: PostHeaderProps) {
  return (
    <div className="space-y-10">
      {/* Title Section */}
      <div className="space-y-4">
        <h1 className="font-heading bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent lg:text-5xl">
          {title}
        </h1>
      </div>

      {/* Meta Information */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 transition-colors hover:text-primary">
            <Calendar className="h-4 w-4" />
            <time dateTime={date}>{formatDate(date)}</time>
          </div>
          <div className="flex items-center gap-2 transition-colors hover:text-primary">
            <Clock className="h-4 w-4" />
            <span>{readingTime}</span>
          </div>
        </div>

        {tags?.length ? (
          <div className="-mt-2 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
