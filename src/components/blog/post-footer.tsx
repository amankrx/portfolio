// src/components/blog/post-footer.tsx
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import Link from 'next/link';

interface PostFooterProps {
  title: string;
  slug: string;
}

export function PostFooter({ title, slug }: PostFooterProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
      <Button variant="ghost" asChild>
        <Link href="/blog">← Back to blog</Link>
      </Button>
      <Button variant="default" asChild>
        <Link
          href={`https://twitter.com/intent/tweet?text=Check out this post: ${title}&url=${encodeURIComponent(
            `${siteConfig.url}/blog/${slug}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Share on Twitter
        </Link>
      </Button>
    </div>
  );
}
