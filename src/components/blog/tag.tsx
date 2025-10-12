// src/components/blog/tag.tsx
import Link from 'next/link';
import { slug } from 'github-slugger';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface TagProps {
  tag: string;
  current?: boolean;
  count?: number;
}

export function Tag({ tag, current, count }: TagProps) {
  const tagSlug = slug(tag);
  const href = current ? '/blog' : `/blog?tag=${tagSlug}`;

  return (
    <Link
      className={cn('inline-flex items-center transition-all hover:scale-105')}
      href={href}
    >
      <Badge
        variant={current ? 'default' : 'secondary'}
        className={cn(
          'rounded-md transition-colors',
          current
            ? 'bg-primary hover:bg-primary/90'
            : 'bg-primary/10 hover:bg-primary/20',
        )}
      >
        {tag} {count ? `(${count})` : null}
      </Badge>
    </Link>
  );
}
