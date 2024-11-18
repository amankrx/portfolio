// src/components/blog/post-card.tsx
import { Post } from '@/types/blog';
import { formatDate } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Calendar } from 'lucide-react';
import Link from 'next/link';
import { Tag } from '@/components/blog/tag';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const { slug, title, description, date, tags } = post;

  return (
    <Card className="group transition-colors hover:border-primary/50">
      <CardHeader className="space-y-4">
        <div>
          <Link
            href={`/${slug}`} // Changed from /${slug} to /blog/${slug}
            className="inline-block text-2xl font-bold tracking-tight transition-colors group-hover:text-primary"
          >
            {title}
          </Link>
          {tags && tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Tag key={tag} tag={tag} />
              ))}
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {description && (
          <p className="leading-relaxed text-muted-foreground">{description}</p>
        )}
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t pt-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <time dateTime={date}>{formatDate(date)}</time>
        </div>
        <Link
          href={`/${slug}`} // Changed from /${slug} to /blog/${slug}
          className="text-sm font-medium text-primary hover:text-primary/80"
        >
          Read more →
        </Link>
      </CardFooter>
    </Card>
  );
}
