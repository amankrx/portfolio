// src/components/work/experience-card.tsx
import { Card, CardContent } from '@/components/ui/card';
import { LuBuilding2, LuCalendar, LuCircle } from 'react-icons/lu';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export function ExperienceCard({
  title,
  company,
  period,
  description,
  technologies,
}: ExperienceCardProps) {
  return (
    <div className="group relative grid grid-cols-1 items-center gap-2 md:grid-cols-[180px_1fr] md:gap-8">
      {/* Timeline dot */}
      <div className="absolute left-[190px] top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
        <LuCircle className="h-3 w-3 fill-background stroke-muted-foreground transition-colors group-hover:fill-muted" />
      </div>

      {/* Date */}
      <div className="hidden h-full items-center space-x-2 pr-2 text-sm text-muted-foreground md:flex">
        <LuCalendar className="h-4 w-4" />
        <span>{period}</span>
      </div>

      {/* Content Card */}
      <Card
        className="overflow-hidden border-border/40 bg-card/50 backdrop-blur transition-all
        duration-300 group-hover:border-border group-hover:shadow-md supports-[backdrop-filter]:bg-background/60"
      >
        <CardContent className="p-4 md:p-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-base font-semibold leading-none md:text-lg">
                {title}
              </h3>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground md:text-base">
                  <LuBuilding2 className="h-4 w-4" />
                  <span>{company}</span>
                </div>
                <span className="flex items-center space-x-2 text-sm text-muted-foreground md:hidden">
                  <LuCalendar className="h-4 w-4" />
                  <span>{period}</span>
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground/90 md:text-base">
              {description}
            </p>

            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs
                    font-medium text-secondary-foreground transition-colors hover:bg-secondary/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
