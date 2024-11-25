// src/components/work/work-experience.tsx
import { ExperienceCard } from '@/components/work/experience-card';

const experiences = [
  {
    title: 'Software Developer 1',
    company: 'Fortanix',
    period: 'Mar 2024 - Present',
    description:
      'Working on developing secure cloud solutions and contributing to the core backend infrastructure.',
    skills: ['Rust', 'Cloud Security', 'Backend Development'],
  },
  {
    title: 'Backend Developer Intern',
    company: 'Fortanix',
    period: 'Sep 2023 - Mar 2024',
    description:
      'Contributed to backend services and helped improve system performance and security measures.',
    skills: ['Backend Development', 'System Design', 'Security'],
  },
  {
    title: 'Quant Analyst Intern',
    company: 'iRage Capitals',
    period: 'Dec 2022 - May 2023',
    description:
      'Developed quantitative trading strategies and implemented algorithmic trading solutions.',
    skills: ['Python', 'Quantitative Analysis', 'Algorithm Development'],
  },
  {
    title: 'Google Summer of Code Intern',
    company: 'Google',
    period: 'May 2022 - Sep 2022',
    description:
      'Contributed to open source projects and collaborated with global developer community.',
    skills: ['Open Source', 'Collaboration', 'Software Development'],
  },
  {
    title: 'Backend Developer',
    company: 'Nametrade',
    period: 'July 2021 - Sep 2021',
    description:
      'Developed and maintained backend services for the core platform.',
    skills: ['Backend Development', 'API Design', 'Database Management'],
  },
];

export function WorkExperience() {
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
            period={experience.period}
            description={experience.description}
            technologies={experience.skills}
          />
        ))}
      </div>
    </div>
  );
}
