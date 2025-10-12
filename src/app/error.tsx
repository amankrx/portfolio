'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MdHome, MdRefresh } from 'react-icons/md';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="relative flex min-h-[calc(100vh-8rem)] items-center bg-background">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 right-1/3 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container relative px-4 py-16">
        <div className="mx-auto max-w-2xl space-y-12 text-center">
          {/* 500 Number with gradient */}
          <div className="animate-fade-in-up animation-delay-0 opacity-0">
            <h1 className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text pb-4 text-9xl font-bold tracking-tight text-transparent md:text-[12rem]">
              500
            </h1>
          </div>

          {/* Error message */}
          <div className="animate-fade-in-up animation-delay-100 space-y-4 opacity-0">
            <h2 className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text pb-2 text-3xl font-bold tracking-tight text-transparent md:text-4xl">
              Something Went Wrong
            </h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-primary to-primary/60" />
          </div>

          {/* Description */}
          <div className="animate-fade-in-up animation-delay-200 opacity-0">
            <p className="mx-auto max-w-md text-lg text-muted-foreground">
              We encountered an unexpected error. Don&#39;t worry, it&#39;s not
              your fault. Try refreshing the page or head back home.
            </p>
          </div>

          {/* Action buttons */}
          <div className="animate-fade-in-up animation-delay-300 flex flex-col gap-4 opacity-0 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              onClick={reset}
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              <MdRefresh className="relative z-10 mr-2 h-5 w-5 transition-transform group-hover:rotate-180" />
              <span className="relative z-10">Try Again</span>
              <span className="absolute inset-0 -z-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 transition-opacity group-hover:opacity-100" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="group border-primary/20 transition-all hover:border-primary/40 hover:bg-primary/5 hover:shadow-lg"
            >
              <Link href="/">
                <MdHome className="mr-2 h-5 w-5" />
                Go Home
              </Link>
            </Button>
          </div>

          {/* Error details for development */}
          {process.env.NODE_ENV === 'development' && error.message && (
            <div className="animate-fade-in-up animation-delay-400 opacity-0">
              <div className="space-y-3 rounded-2xl border border-destructive/20 bg-destructive/5 p-6 text-left backdrop-blur-sm">
                <h3 className="text-sm font-semibold text-destructive">
                  Error Details (Development Only)
                </h3>
                <pre className="overflow-auto rounded-lg bg-background/50 p-4 text-xs text-muted-foreground">
                  {error.message}
                </pre>
                {error.digest && (
                  <p className="text-xs text-muted-foreground">
                    Error Digest: {error.digest}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Help message */}
          <div className="animate-fade-in-up animation-delay-400 opacity-0">
            <div className="via-primary/3 space-y-4 rounded-2xl border border-primary/10 bg-gradient-to-br from-primary/5 to-transparent p-8 backdrop-blur-sm">
              <h3 className="text-lg font-semibold">Need Help?</h3>
              <p className="text-sm text-muted-foreground">
                If this error persists, please let me know. I&#39;ll look into
                it and get things fixed as soon as possible.
              </p>
              <Button
                size="default"
                asChild
                className="group relative overflow-hidden border-primary/20 bg-transparent transition-all hover:bg-primary/5"
                variant="outline"
              >
                <Link href="/contact">Report Issue</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
