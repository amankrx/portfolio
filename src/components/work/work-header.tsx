import React from 'react';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaLinkedin, FaDownload } from 'react-icons/fa';

export function WorkHeader() {
  return (
    <div className="animate-fade-in-up animation-delay-0 space-y-8 opacity-0">
      <div className="space-y-4">
        <h1 className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-6xl">
          Work
        </h1>
        <div className="h-1 w-20 rounded-full bg-gradient-to-r from-primary to-primary/60" />
      </div>

      <p className="max-w-3xl text-lg text-muted-foreground md:text-xl">
        Explore my professional journey and the projects I&#39;ve built along
        the way. From crafting backend systems to tackling real-world
        challenges, here&#39;s what I&#39;ve been up to.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Button
          size="lg"
          asChild
          className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 transition-all hover:shadow-lg hover:shadow-primary/25"
        >
          <Link href={siteConfig.links.linkedin.url} target="_blank">
            <FaLinkedin className="relative z-10 mr-2 h-4 w-4" />
            <span className="relative z-10">LinkedIn</span>
            <span className="absolute inset-0 -z-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
        </Button>
        <Button
          size="lg"
          variant="outline"
          asChild
          className="group border-primary/20 transition-all hover:border-primary/40 hover:bg-primary/5 hover:shadow-lg"
        >
          <Link href={siteConfig.links.resume.url} target="_blank">
            <FaDownload className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            Resume
          </Link>
        </Button>
      </div>
    </div>
  );
}
