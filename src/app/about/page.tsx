'use client';

// app/about/page.tsx
import { Github, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { useProfile } from '@/context/ProfileContext';

const technologies = [
  { name: 'Rust', level: 'Advanced' },
  { name: 'TypeScript', level: 'Intermediate' },
  { name: 'React', level: 'Intermediate' },
  { name: 'Node.js', level: 'Intermediate' },
  { name: 'PostgreSQL', level: 'Intermediate' },
  { name: 'Docker', level: 'Intermediate' },
] as const;

const interests = [
  {
    icon: '🦀',
    title: 'Systems Programming',
    description: 'Building reliable and efficient software systems',
  },
  {
    icon: '🔒',
    title: 'Zero-Knowledge Proofs',
    description: 'Exploring privacy-preserving computation',
  },
  {
    icon: '🎮',
    title: 'Game Development',
    description: 'Creating games with Rust and Bevy',
  },
  {
    icon: '🌐',
    title: 'Open Source',
    description: 'Contributing to community-driven projects',
  },
];

export default function AboutPage() {
  const { profile } = useProfile();
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background py-10">
      <div className="mx-auto max-w-4xl space-y-12 px-4">
        {/* Hero Section */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Hey, I&apos;m{' '}
            <span className="text-primary">
              {profile.personal.first_name} {profile.personal.last_name}
            </span>{' '}
            👋
          </h1>
          <p className="text-xl text-muted-foreground">
            I craft reliable systems and elegant solutions with Rust.
          </p>
        </section>

        {/* Main Content */}
        <section className="space-y-6">
          <div className="prose prose-neutral dark:prose-invert lg:prose-lg">
            <p>
              I&#39;m a Software Engineer passionate about building robust,
              performant systems. My journey in software development has been
              driven by a fascination with low-level programming and systems
              architecture.
            </p>
            <p>
              When I&#39;m not coding, you&#39;ll find me exploring new
              languages, contributing to open-source projects, or diving deep
              diving deep into technical documentation. I believe in writing
              only works but is also maintainable, efficient, and a joy to work
              with.
            </p>
          </div>

          {/* Tech Stack Section */}
          <Card className="p-6">
            <h2 className="mb-4 text-2xl font-semibold">Tech Stack</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col space-y-1 rounded-lg border p-4"
                >
                  <span className="font-medium">{tech.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {tech.level}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* Interests Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {interests.map((interest) => (
              <Card key={interest.title} className="p-6">
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">{interest.icon}</span>
                  <div>
                    <h3 className="font-semibold">{interest.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {interest.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Connect Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Let&#39;s Connect</h2>
          <div className="flex space-x-4">
            <Button variant="outline" size="lg" asChild>
              <Link href="https://github.com" className="space-x-2">
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://twitter.com" className="space-x-2">
                <Twitter className="h-5 w-5" />
                <span>Twitter</span>
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://linkedin.com" className="space-x-2">
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </Link>
            </Button>
          </div>
        </section>

        {/* Fun Facts Section */}
        <section className="rounded-lg bg-muted p-6">
          <h2 className="mb-4 text-2xl font-semibold">Fun Facts</h2>
          <ul className="list-inside list-disc space-y-2">
            <li>
              I wrote my first line of Rust code while building a CLI tool for
              file encryption
            </li>
            <li>I maintain a collection of mechanical keyboards</li>
            <li>I contribute to open-source projects during weekends</li>
            <li>I enjoy writing technical blogs about systems programming</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
