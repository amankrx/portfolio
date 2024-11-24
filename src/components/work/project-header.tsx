// src/components/work/project-header.tsx
import { Calendar, GitBranch } from 'lucide-react';
import { formatDate } from '@/lib/utils';

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
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="text-xl text-muted-foreground">{description}</p>
        )}
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <time dateTime={date}>{formatDate(date)}</time>
          </div>
          <div className="text-muted-foreground">|</div>
          <div className="flex items-center gap-2">
            <GitBranch className="h-4 w-4" />
            <span className="capitalize">{status}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
