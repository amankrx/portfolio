// src/components/blog/post-navigation.tsx
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface PostNavigationProps {
  showDesktopNav?: boolean;
}

export function PostNavigation({ showDesktopNav = true }: PostNavigationProps) {
  return (
    <>
      {showDesktopNav && (
        <Link
          href="/blog"
          className="absolute left-[-200px] top-14 hidden xl:inline-flex"
        >
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            See all posts
          </Button>
        </Link>
      )}
      <div className="flex items-center space-x-2 xl:hidden">
        <Button variant="ghost" className="gap-2" asChild>
          <Link href="/blog">
            <ArrowLeft className="h-4 w-4" />
            See all posts
          </Link>
        </Button>
      </div>
    </>
  );
}
