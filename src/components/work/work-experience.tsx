// src/components/work/work-experience.tsx
import { ExperienceCard } from '@/components/work/experience-card';

export function WorkExperience() {
  return (
    <div className="mt-12">
      <div className="space-y-8">
        <ExperienceCard
          title="Senior Software Engineer"
          company="Example Corp"
          period="2022 - Present"
          description="Led development of cloud-native applications, mentored junior developers, and architected scalable solutions using React, Node.js, and AWS."
          technologies={['React', 'TypeScript', 'Node.js', 'AWS']}
        />
        {/* Add more experience cards as needed */}
      </div>
    </div>
  );
}