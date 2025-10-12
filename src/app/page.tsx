'use client';

import { FaGithub, FaBookOpen, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoMdArrowForward } from 'react-icons/io';
import { Button } from '@/components/ui/button';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { siteConfig } from '@/config/site';
import { sortBlogPostsByFeatured, sortProjectsByFeatured } from '@/lib/utils';
import { blogs, projects } from 'generated/content';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const featuredProjects = sortProjectsByFeatured(projects).slice(0, 3);
  const recentPosts = sortBlogPostsByFeatured(blogs).slice(0, 3);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-background">
      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute h-96 w-96 rounded-full bg-primary/5 blur-3xl transition-transform duration-1000 ease-out"
          style={{
            top: '10%',
            left: '10%',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
        <div
          className="absolute h-96 w-96 rounded-full bg-primary/5 blur-3xl transition-transform duration-1000 ease-out"
          style={{
            bottom: '10%',
            right: '10%',
            transform: `translate(${-mousePosition.x * 0.01}px, ${-mousePosition.y * 0.01}px)`,
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="container relative flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center space-y-12 text-center">
        {/* Floating social links */}
        <div className="fixed left-8 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-4 lg:flex">
          <Link
            href={siteConfig.links.github.url}
            target="_blank"
            className="group rounded-full bg-primary/10 p-3 transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground hover:shadow-lg"
          >
            <FaGithub className="h-5 w-5" />
          </Link>
          <Link
            href={siteConfig.links.linkedin.url}
            target="_blank"
            className="group rounded-full bg-primary/10 p-3 transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground hover:shadow-lg"
          >
            <FaLinkedin className="h-5 w-5" />
          </Link>
          <Link
            href={siteConfig.links.x.url}
            target="_blank"
            className="group rounded-full bg-primary/10 p-3 transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground hover:shadow-lg"
          >
            <FaXTwitter className="h-5 w-5" />
          </Link>
        </div>

        <div className="animate-fade-in-up animation-delay-0 space-y-6 opacity-0">
          <div className="inline-block rounded-full border border-primary/20 bg-gradient-to-r from-primary/10 to-primary/5 px-4 py-2 text-sm font-medium backdrop-blur-sm">
            ✨ Building systems that scale, perform, and endure
          </div>
          <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
            Hi, I&#39;m{' '}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              {siteConfig.name}
            </span>
          </h1>
          <p className="mx-auto max-w-[700px] text-xl text-muted-foreground sm:text-2xl">
            Software Engineer specializing in distributed systems, Rust, and
            cloud infrastructure.
          </p>
        </div>

        <div className="animate-fade-in-up animation-delay-100 flex flex-col gap-4 opacity-0 sm:flex-row">
          <Button
            size="lg"
            asChild
            className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            <Link href="/about">
              <span className="relative z-10">About Me</span>
              <IoMdArrowForward className="relative z-10 ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              <span className="absolute inset-0 -z-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="group border-primary/20 transition-all hover:border-primary/40 hover:bg-primary/5 hover:shadow-lg"
          >
            <Link href="/contact">
              <MdEmail className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Get in Touch
            </Link>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm">Scroll to explore</span>
            <div className="h-8 w-[2px] bg-gradient-to-b from-primary to-transparent" />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container relative py-24">
        <div className="animate-fade-in-up animation-delay-0 mb-12 space-y-4 text-center opacity-0">
          <h2 className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-[600px] text-lg text-muted-foreground">
            A glimpse into what I’ve been building lately
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => {
            const delayClass = `animation-delay-${Math.min(900, 100 + index * 100)}`;
            return (
              <Card
                key={project.slug}
                className={`animate-fade-in-up group relative overflow-hidden border-primary/10 p-6 opacity-0 transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 ${delayClass}`}
              >
                {/* Gradient overlay on hover */}
                <div className="via-primary/3 absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <h3 className="mb-3 text-2xl font-semibold transition-colors group-hover:text-primary">
                    <Link href={`/work/${project.slug}`}>{project.title}</Link>
                  </h3>
                  <p className="mb-6 text-muted-foreground">
                    {project.description}
                  </p>

                  <Link
                    href={`/work/${project.slug}`}
                    className="group/link inline-flex items-center gap-1 text-sm font-medium text-primary transition-all hover:gap-2"
                  >
                    View Project
                    <IoMdArrowForward className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="group border-primary/20 transition-all hover:border-primary/40 hover:bg-primary/5 hover:shadow-lg"
          >
            <Link href="/work">
              View All Projects
              <IoMdArrowForward className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="container relative py-24">
        <div className="animate-fade-in-up animation-delay-0 mb-12 space-y-4 text-center opacity-0">
          <h2 className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
            Latest Posts
          </h2>
          <p className="mx-auto max-w-[600px] text-lg text-muted-foreground">
            Notes and reflections from my journey in software engineering
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post, index) => {
            const delayClass = `animation-delay-${Math.min(900, 100 + index * 100)}`;
            return (
              <Card
                key={post.slug}
                className={`animate-fade-in-up group relative overflow-hidden border-primary/10 p-6 opacity-0 transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 ${delayClass}`}
              >
                <div className="via-primary/3 absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  {post.date && (
                    <time className="mb-3 block text-sm text-muted-foreground">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  )}

                  <h3 className="mb-3 text-xl font-semibold transition-colors group-hover:text-primary">
                    <Link href={post.slug}>{post.title}</Link>
                  </h3>

                  <p className="mb-6 line-clamp-3 text-muted-foreground">
                    {post.description}
                  </p>

                  {post.tags && post.tags.length > 0 && (
                    <div className="mb-6 flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs transition-all group-hover:scale-105 group-hover:border-primary/50"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <Link
                      href={`/${post.slug}`}
                      className="group/link inline-flex items-center gap-1 text-sm font-medium text-primary transition-all hover:gap-2"
                    >
                      Read more
                      <IoMdArrowForward className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                    {post.metadata?.readingTime && (
                      <span className="text-xs text-muted-foreground">
                        {post.metadata.readingTime} min read
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="group border-primary/20 transition-all hover:border-primary/40 hover:bg-primary/5 hover:shadow-lg"
          >
            <Link href="/blog">
              <FaBookOpen className="mr-2 h-4 w-4" />
              View All Posts
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
