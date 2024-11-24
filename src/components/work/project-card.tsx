// src/components/work/project-card.tsx
import { Project } from 'generated/content';
import { formatDate } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Github, ExternalLink, Calendar } from 'lucide-react';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { slug, title, description, date, tech, status, links } = project;

  return (
    <Card className="group flex h-full flex-col transition-colors hover:border-primary/50">
      <CardHeader className="flex-none space-y-4">
        <div>
          <Link
            href={`/work/${slug}`}
            className="inline-block text-xl font-bold tracking-tight transition-colors group-hover:text-primary md:text-2xl"
          >
            {title}
          </Link>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground md:text-base">
          {description}
        </p>
      </CardContent>
      <CardFooter className="flex-none border-t pt-6">
        <div className="flex w-full flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <time dateTime={date}>{formatDate(date)}</time>
            <span className="ml-2 rounded-full bg-primary/10 px-2 py-1 text-xs">
              {status}
            </span>
          </div>
          <div className="flex gap-4">
            {links?.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                {link.type === 'github' ? (
                  <Github className="h-5 w-5" />
                ) : (
                  <ExternalLink className="h-5 w-5" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
