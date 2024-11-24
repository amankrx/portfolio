// src/app/work/page.tsx
import { Metadata } from 'next';
import { WorkHeader } from '@/components/work/work-header';
import { WorkExperience } from '@/components/work/work-experience';
import { ProjectsShowcase } from '@/components/work/projects-showcase';

export const metadata: Metadata = {
  title: 'Work | Aman Kumar',
  description: "Aman Kumar's professional work and projects",
};

interface WorkPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function WorkPage({ searchParams }: WorkPageProps) {
  const resolvedSearchParams = await searchParams;

  return (
    <section className="container max-w-6xl py-10">
      <WorkHeader />
      <WorkExperience />
      <div className="mt-16 space-y-6">
        <h2 className="font-sans text-2xl font-bold tracking-tight sm:text-3xl">
          Featured Projects
        </h2>
        <ProjectsShowcase searchParams={resolvedSearchParams} />
      </div>
    </section>
  );
}
