'use client';

import { FaGithub, FaBookOpen } from 'react-icons/fa';
import { IoMdArrowForward } from 'react-icons/io';
import { Button } from '@/components/ui/button';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { siteConfig } from '@/config/site';
import { sortBlogPostsByFeatured, sortProjectsByFeatured } from '@/lib/utils';
import { blogs, projects } from 'generated/content';

export default function HomePage() {
  const featuredProjects = sortProjectsByFeatured(projects).slice(0, 3);
  const recentPosts = sortBlogPostsByFeatured(blogs).slice(0, 3);

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background">
      {/* Hero Section */}
      <section className="container flex min-h-[calc(100vh-16rem)] flex-col items-center justify-center space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            Systems Engineer crafting reliable solutions with Rust. Passionate
            about zero-knowledge proofs and open-source development.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="/about">
              About Me <IoMdArrowForward className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">
              <MdEmail className="mr-2 h-4 w-4" />
              Get in Touch
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container py-20">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">
            Featured Projects
          </h2>
          <Button variant="ghost" asChild>
            <Link href="https://github.com">
              <FaGithub className="mr-2 h-4 w-4" />
              View GitHub
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <Card key={project.slug} className="flex flex-col p-6">
              <h3 className="mb-2 text-xl font-semibold">
                <Link
                  href={`/work/${project.slug}`}
                  className="hover:text-primary"
                >
                  {project.title}
                </Link>
              </h3>
              <p className="mb-4 flex-grow text-muted-foreground">
                {project.description}
              </p>
              <div className="space-y-4">
                <Link
                  href={`/work/${project.slug}`}
                  className="text-sm font-medium text-primary hover:text-primary/80"
                >
                  View Project ➔
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="container py-20">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Recent Posts</h2>
          <Button variant="ghost" asChild>
            <Link href="/blog">
              <FaBookOpen className="mr-2 h-4 w-4" />
              View All Posts
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {recentPosts.map((post) => (
            <Card key={post.slug} className="flex flex-col p-6">
              <h3 className="mb-2 text-xl font-semibold">
                <Link href={post.slug} className="hover:text-primary">
                  {post.title}
                </Link>
              </h3>
              <p className="mb-4 flex-grow text-muted-foreground">
                {post.description}
              </p>
              {/* Read More Link */}
              <Link
                href={`/${post.slug}`}
                className="text-sm font-medium text-primary hover:text-primary/80"
              >
                Read more ➔
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
