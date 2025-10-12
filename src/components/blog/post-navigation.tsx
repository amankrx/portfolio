// src/components/blog/post-navigation.tsx
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { IoMdArrowBack } from 'react-icons/io';

interface PostNavigationProps {
  className?: string;
}

export function PostNavigation({ className }: PostNavigationProps) {
  return (
    <div className={cn('flex w-full justify-start', className)}>
      <Button
        variant="ghost"
        asChild
        className="group -ml-2 hover:bg-primary/5"
      >
        <Link href="/blog">
          <IoMdArrowBack className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          See all posts
        </Link>
      </Button>
    </div>
  );
}
