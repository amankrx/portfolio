// src/components/work/experience-card.tsx
import { Card, CardContent } from '@/components/ui/card';

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
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-primary">{company}</p>
            <p className="text-sm text-muted-foreground">{period}</p>
          </div>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}