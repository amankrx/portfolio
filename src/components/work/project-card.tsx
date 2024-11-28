// src/components/work/project-card.tsx
import { Project } from 'generated/content';
import { formatDate } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { LuExternalLink, LuCalendar, LuBookOpen } from 'react-icons/lu';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { slug, title, description, date, status, links } = project;

  const getIcon = (type: Project['links'][0]['type']) => {
    switch (type) {
      case 'github':
        return <FaGithub className="mr-2 h-4 w-4" />;
      case 'docs':
        return <LuBookOpen className="mr-2 h-4 w-4" />;
      case 'blog':
        return <LuBookOpen className="mr-2 h-4 w-4" />;
      default:
        return <LuExternalLink className="mr-2 h-4 w-4" />;
    }
  };

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
            <LuCalendar className="h-4 w-4" />
            <time dateTime={date}>{formatDate(date)}</time>
            <span
              className={`
    ml-2 rounded-full px-2 py-1 text-xs text-muted-foreground
    ${status === 'complete' ? 'bg-green-500/15' : ''}
    ${status === 'in-progress' ? 'bg-yellow-500/15' : ''}
    ${status === 'planned' ? 'bg-primary/15' : ''}
  `}
            >
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
                aria-label={link.type}
                className="text-muted-foreground hover:text-primary"
              >
                {getIcon(link.type)}
              </Link>
            ))}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
