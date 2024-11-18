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
  description,
}: PostHeaderProps) {
  return (
    <div className="space-y-8">
      {/* Title Section */}
      <div className="space-y-4">
        <h1 className="font-heading text-4xl font-bold tracking-tight lg:text-5xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          {title}
        </h1>
      </div>

      {/* Meta Information */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 hover:text-primary transition-colors">
            <Calendar className="h-4 w-4" />
            <time dateTime={date}>{formatDate(date)}</time>
          </div>
          <div className="flex items-center gap-2 hover:text-primary transition-colors">
            <Clock className="h-4 w-4" />
            <span>{readingTime}</span>
          </div>
        </div>

        {tags?.length ? (
          <div className="flex flex-wrap gap-2 -mt-2">
            {tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
