import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

interface PostNavigationProps {
  className?: string;
}

export function PostNavigation({ className }: PostNavigationProps) {
  return (
    <div className={cn('flex justify-start w-full', className)}>
      <Link
        href="/blog"
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'gap-2 text-muted-foreground hover:text-primary'
        )}
      >
        <ChevronLeft className="h-4 w-4" />
        See all posts
      </Link>
    </div>
  );
}
