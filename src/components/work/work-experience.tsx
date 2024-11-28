// src/components/work/work-experience.tsx
import { ExperienceCard } from '@/components/work/experience-card';
import { getDuration, sortWorkExperience } from '@/lib/utils';
import { work_experience } from 'generated/content';

export function WorkExperience() {
  const experiences = sortWorkExperience(work_experience);

  return (
    <div className="mt-12">
      <div
        className="relative space-y-8 before:absolute
  before:left-[190px] before:top-[2.5rem] before:hidden before:h-[calc(100%-5rem)]
  before:w-[1px] before:bg-border md:space-y-12 md:before:block"
      >
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            title={experience.title}
            company={experience.company}
            period={getDuration(experience.startDate, experience.endDate)}
            description={experience.description}
            technologies={experience.skills}
          />
        ))}
      </div>
    </div>
  );
}
