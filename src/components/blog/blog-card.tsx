// src/components/blog/blog-card.tsx
import { Post } from 'generated/content';
import { formatDate } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { LuCalendar, LuClock } from 'react-icons/lu';
import { IoMdArrowForward } from 'react-icons/io';
import Link from 'next/link';
import { Tag } from '@/components/blog/tag';
import { blogConfig } from '@/config/blog';

interface PostCardProps {
  post: Post;
}

export function BlogCard({ post }: PostCardProps) {
  const { slug, title, description, date, tags, metadata } = post;

  const truncatedDescription =
    description && description.length > blogConfig.maxDescriptionLength
      ? `${description.substring(0, blogConfig.maxDescriptionLength)}...`
      : description;

  return (
    <Card className="group flex h-full flex-col overflow-hidden border-primary/10 transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
      <div className="via-primary/3 pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <CardHeader className="relative flex-none space-y-4">
        <div className="space-y-3">
          <Link
            href={`/${slug}`}
            className="inline-block text-xl font-bold tracking-tight transition-colors group-hover:text-primary md:text-2xl"
          >
            {title}
          </Link>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Tag key={tag} tag={tag} />
              ))}
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="relative flex-grow">
        {truncatedDescription && (
          <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            {truncatedDescription}
          </p>
        )}
      </CardContent>

      <CardFooter className="relative flex-none border-t border-primary/10 pt-6">
        <div className="flex w-full flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <LuCalendar className="h-4 w-4" />
              <time dateTime={date}>{formatDate(date)}</time>
            </div>
            <span className="hidden text-muted-foreground/50 md:inline">•</span>
            <div className="flex items-center gap-1.5">
              <LuClock className="h-4 w-4" />
              <span>{metadata.readingTime} min</span>
            </div>
          </div>

          <Link
            href={`/${slug}`}
            className="group/link inline-flex items-center gap-1 text-sm font-medium text-primary transition-all hover:gap-2"
          >
            Read more
            <IoMdArrowForward className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
