'use client';

import { ArrowRight, Github, BookOpen, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { useProfile } from '@/context/profile-context';

// Featured projects to showcase
const featuredProjects = [
  {
    title: 'Encrypted File System',
    description:
      'A secure file system implementation in Rust with zero-knowledge proofs',
    tags: ['Rust', 'Cryptography', 'Systems'],
    link: '#',
  },
  {
    title: 'Game Engine Components',
    description: 'Collection of reusable components for the Bevy game engine',
    tags: ['Rust', 'Bevy', 'GameDev'],
    link: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'Personal website built with Next.js and Typescript',
    tags: ['Next.js', 'TypeScript', 'React'],
    link: '#',
  },
];

// Recent blog posts (you would typically fetch these)
const recentPosts = [
  {
    title: 'Understanding Zero-Knowledge Proofs',
    date: '2024-03-15',
    readTime: '5 min read',
    slug: '/blog/understanding-zkp',
  },
  {
    title: 'Building Reliable Systems with Rust',
    date: '2024-03-10',
    readTime: '8 min read',
    slug: '/blog/rust-reliable-systems',
  },
  {
    title: 'Game Development with Bevy',
    date: '2024-03-05',
    readTime: '6 min read',
    slug: '/blog/bevy-game-dev',
  },
];

export default function HomePage() {
  const { profile } = useProfile();

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background">
      {/* Hero Section */}
      <section className="container flex min-h-[calc(100vh-16rem)] flex-col items-center justify-center space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            {profile.personal.first_name} {profile.personal.last_name}
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            Systems Engineer crafting reliable solutions with Rust. Passionate
            about zero-knowledge proofs and open-source development.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="/about">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">
              <Mail className="mr-2 h-4 w-4" />
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
              <Github className="mr-2 h-4 w-4" />
              View GitHub
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <Card key={project.title} className="flex flex-col p-6">
              <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
              <p className="mb-4 flex-grow text-muted-foreground">
                {project.description}
              </p>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link}
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
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
              <BookOpen className="mr-2 h-4 w-4" />
              View All Posts
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {recentPosts.map((post) => (
            <Card key={post.title} className="flex flex-col p-6">
              <div className="mb-4 flex items-center space-x-2 text-sm text-muted-foreground">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                <Link href={post.slug} className="hover:text-primary">
                  {post.title}
                </Link>
              </h3>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
