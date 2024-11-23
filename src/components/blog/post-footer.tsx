import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import Link from 'next/link';

interface PostFooterProps {
  title: string;
  slug: string;
}

export function PostFooter({ title, slug }: PostFooterProps) {
  return (
    <footer className="w-full rounded-lg bg-primary/5 shadow-md dark:bg-primary/10">
      <div className="container mx-auto px-4 py-8 sm:px-6 xl:max-w-[800px]">
        <div className="space-y-6 text-center sm:text-left">
          <p className="text-lg">
            Enjoyed the read? Help spread the word by sharing this article on{' '}
            <Link
              href={`https://twitter.com/intent/tweet?text=Check out this insightful post: ${title}&url=${encodeURIComponent(
                `${siteConfig.url}/blog/${slug}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline hover:text-primary"
            >
              Twitter
            </Link>
            .
          </p>

          <p className="text-lg">
            Found value in this content?{' '}
            <Link
              href="/support"
              className="font-medium underline hover:text-primary"
            >
              Consider supporting my work
            </Link>{' '}
            to fuel more in-depth articles and projects.
          </p>

          <p className="text-lg">
            Have thoughts or questions?{' '}
            <Link
              href="/contact"
              className="font-medium underline hover:text-primary"
            >
              I&apos;m just a message away
            </Link>
            .
          </p>

          <p className="italic text-gray-600">Keep exploring, keep learning!</p>

          <p className="text-lg font-semibold text-primary">
            – {siteConfig.author}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
            <Button variant="ghost" asChild className="rounded-lg">
              <Link href="/blog">← Back to blog</Link>
            </Button>
            <Button variant="default" asChild className="rounded-lg">
              <Link
                href={`https://twitter.com/intent/tweet?text=Check out this insightful post: ${title}&url=${encodeURIComponent(
                  `${siteConfig.url}/blog/${slug}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Share on Twitter
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
