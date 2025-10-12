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
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { slug, title, description, date, status, links } = project;

  const getIcon = (type: Project['links'][0]['type']) => {
    switch (type) {
      case 'github':
        return <FaGithub className="h-4 w-4" />;
      case 'docs':
        return <LuBookOpen className="h-4 w-4" />;
      case 'blog':
        return <LuBookOpen className="h-4 w-4" />;
      default:
        return <LuExternalLink className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'complete':
        return 'bg-green-500/15 text-green-700 dark:text-green-400';
      case 'in-progress':
        return 'bg-yellow-500/15 text-yellow-700 dark:text-yellow-400';
      case 'planned':
        return 'bg-primary/15 text-primary';
      default:
        return 'bg-primary/15 text-primary';
    }
  };

  return (
    <Card className="group flex h-full flex-col overflow-hidden border-primary/10 transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
      <div className="via-primary/3 pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <CardHeader className="relative flex-none space-y-4">
        <div>
          <Link
            href={`/work/${slug}`}
            className="inline-block text-xl font-bold tracking-tight transition-colors group-hover:text-primary md:text-2xl"
          >
            {title}
          </Link>
        </div>
      </CardHeader>

      <CardContent className="relative flex-grow">
        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground md:text-base">
          {description}
        </p>
      </CardContent>

      <CardFooter className="relative flex-none border-t border-primary/10 pt-6">
        <div className="flex w-full flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <LuCalendar className="h-4 w-4" />
            <time dateTime={date}>{formatDate(date)}</time>
            <Badge
              variant="outline"
              className={`ml-2 ${getStatusColor(status)}`}
            >
              {status}
            </Badge>
          </div>
          <div className="flex gap-3">
            {links?.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.type}
                className="rounded-full p-2 text-muted-foreground transition-all hover:scale-110 hover:bg-primary/10 hover:text-primary"
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
