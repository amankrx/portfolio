import { Card, CardContent } from '@/components/ui/card';
import { LuBuilding2, LuCalendar, LuCircle } from 'react-icons/lu';
import { Badge } from '@/components/ui/badge';

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
        <LuCircle className="h-3 w-3 fill-primary/20 stroke-primary transition-all group-hover:h-4 group-hover:w-4 group-hover:fill-primary/40" />
      </div>

      {/* Date */}
      <div className="hidden h-full items-center space-x-2 pr-2 text-sm text-muted-foreground md:flex">
        <LuCalendar className="h-4 w-4" />
        <span className="font-medium">{period}</span>
      </div>

      {/* Content Card */}
      <Card
        className="overflow-hidden border-primary/10 bg-card/50 backdrop-blur transition-all
        duration-500 group-hover:-translate-y-1 group-hover:border-primary/30 group-hover:shadow-xl
        group-hover:shadow-primary/5 supports-[backdrop-filter]:bg-background/60"
      >
        <div className="via-primary/3 pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <CardContent className="relative p-4 md:p-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold leading-none transition-colors group-hover:text-primary md:text-xl">
                {title}
              </h3>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground md:text-base">
                  <LuBuilding2 className="h-4 w-4" />
                  <span className="font-medium">{company}</span>
                </div>
                <span className="flex items-center space-x-2 text-sm text-muted-foreground md:hidden">
                  <LuCalendar className="h-4 w-4" />
                  <span>{period}</span>
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              {description}
            </p>

            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-xs transition-all group-hover:scale-105 group-hover:bg-primary/20"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
