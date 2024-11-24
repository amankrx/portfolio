// src/components/work/experience-card.tsx
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Calendar, Circle } from 'lucide-react';

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
    <div className="group relative grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 md:gap-8 items-center">
      {/* Timeline dot */}
      <div className="absolute left-[190px] top-1/2 -translate-x-1/2 -translate-y-1/2 md:block hidden">
        <Circle className="h-3 w-3 fill-background stroke-muted-foreground transition-colors group-hover:fill-muted" />
      </div>

      {/* Date */}
      <div className="hidden md:flex items-center h-full text-sm text-muted-foreground space-x-2 pr-2">
        <Calendar className="h-4 w-4" />
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
              <h3 className="text-base md:text-lg font-semibold leading-none">
                {title}
              </h3>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center space-x-2 text-sm md:text-base text-muted-foreground">
                  <Building2 className="h-4 w-4" />
                  <span>{company}</span>
                </div>
                <span className="md:hidden text-sm text-muted-foreground flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{period}</span>
                </span>
              </div>
            </div>

            <p className="text-sm md:text-base text-muted-foreground/90 leading-relaxed">
              {description}
            </p>

            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full
                    bg-primary/10 text-secondary-foreground hover:bg-secondary/60 transition-colors"
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
