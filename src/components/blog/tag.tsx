// src/components/blog/tag.tsx
import Link from 'next/link';
import { slug } from 'github-slugger';
import { badgeVariants } from '@/components/ui/badge';
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
      className={cn(
        badgeVariants({
          variant: current ? 'default' : 'secondary',
        }),
        'no-underline rounded-md hover:opacity-80 transition-all',
      )}
      href={href}
    >
      {tag} {count ? `(${count})` : null}
    </Link>
  );
}
