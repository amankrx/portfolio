// app/not-found.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { IoMdArrowBack } from 'react-icons/io';
import { MdHome } from 'react-icons/md';

export default function NotFound() {
  return (
    <div className="relative flex min-h-[calc(100vh-8rem)] items-center bg-background">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 right-1/3 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container relative px-4 py-12">
        <div className="mx-auto max-w-2xl space-y-10 text-center">
          {/* 404 Number with gradient */}
          <div className="animate-fade-in-up animation-delay-0 opacity-0">
            <h1 className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text pb-4 text-9xl font-bold tracking-tight text-transparent md:text-[12rem]">
              404
            </h1>
          </div>

          {/* Error message */}
          <div className="animate-fade-in-up animation-delay-100 space-y-4 opacity-0">
            <h2 className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text pb-2 text-3xl font-bold tracking-tight text-transparent md:text-4xl">
              Page Not Found
            </h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-primary to-primary/60" />
          </div>

          {/* Description */}
          <div className="animate-fade-in-up animation-delay-200 opacity-0">
            <p className="mx-auto max-w-md text-lg text-muted-foreground">
              The page you&#39;re looking for doesn&#39;t exist or has been
              moved. get you back on track.
            </p>
          </div>

          {/* Action buttons */}
          <div className="animate-fade-in-up animation-delay-300 flex flex-col gap-4 opacity-0 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              asChild
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              <Link href="/">
                <MdHome className="relative z-10 mr-2 h-5 w-5" />
                <span className="relative z-10">Go Home</span>
                <span className="absolute inset-0 -z-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="group border-primary/20 transition-all hover:border-primary/40 hover:bg-primary/5 hover:shadow-lg"
            >
              <Link href="/blog">
                <IoMdArrowBack className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
                View Blog
              </Link>
            </Button>
          </div>

          {/* Help message */}
          <div className="animate-fade-in-up animation-delay-400 opacity-0">
            <div className="via-primary/3 space-y-4 rounded-2xl border border-primary/10 bg-gradient-to-br from-primary/5 to-transparent p-8 backdrop-blur-sm">
              <h3 className="text-lg font-semibold">
                Looking for something specific?
              </h3>
              <p className="text-sm text-muted-foreground">
                If you think this page should exist or need help finding what
                you&#39;re looking for, feel free to reach out. I&#39;m always
                happy help!
              </p>
              <Button
                size="default"
                asChild
                className="group relative overflow-hidden border-primary/20 bg-transparent transition-all hover:bg-primary/5"
                variant="outline"
              >
                <Link href="/contact">
                  Get in Touch
                  <IoMdArrowBack className="ml-2 h-4 w-4 rotate-180 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
