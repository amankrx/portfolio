import { LuCalendar } from 'react-icons/lu';
import { formatDate } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface ProjectHeaderProps {
  title: string;
  date: string;
  status: string;
  tech?: string[];
  description?: string;
}

export function ProjectHeader({
  title,
  date,
  status,
  tech,
  description,
}: ProjectHeaderProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'complete':
        return 'bg-green-500/15 text-green-700 dark:text-green-400 border-green-500/20';
      case 'in-progress':
        return 'bg-yellow-500/15 text-yellow-700 dark:text-yellow-400 border-yellow-500/20';
      case 'planned':
        return 'bg-primary/15 text-primary border-primary/20';
      default:
        return 'bg-primary/15 text-primary border-primary/20';
    }
  };

  return (
    <div className="space-y-8">
      {/* Title Section */}
      <div className="space-y-4">
        <h1 className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text pb-2 text-4xl font-bold tracking-tight text-transparent md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="text-lg text-muted-foreground md:text-xl">
            {description}
          </p>
        )}
      </div>

      {/* Meta Information */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 transition-colors hover:text-primary">
            <LuCalendar className="h-4 w-4" />
            <time dateTime={date}>{formatDate(date)}</time>
          </div>
          <span className="text-muted-foreground/50">•</span>
          <Badge variant="outline" className={getStatusColor(status)}>
            {status}
          </Badge>
        </div>

        {tech && tech.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tech.map((technology) => (
              <Badge
                key={technology}
                variant="secondary"
                className="bg-primary/10 hover:bg-primary/20"
              >
                {technology}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
