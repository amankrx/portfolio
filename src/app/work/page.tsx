// src/app/work/page.tsx
import { Metadata } from 'next';
import { WorkHeader } from '@/components/work/work-header';
import { WorkExperience } from '@/components/work/work-experience';
import { ProjectsShowcase } from '@/components/work/projects-showcase';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Work Experience and Projects',
  description: `${siteConfig.name}'s work experience and projects`,
};

interface WorkPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function WorkPage({ searchParams }: WorkPageProps) {
  const resolvedSearchParams = await searchParams;

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-40 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <section className="container relative max-w-6xl py-10 md:py-16">
        <WorkHeader />

        <div className="animate-fade-in-up animation-delay-100 mt-16 opacity-0">
          <WorkExperience />
        </div>

        <div className="animate-fade-in-up animation-delay-200 mt-20 space-y-8 opacity-0">
          <div className="space-y-4">
            <h2 className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">
              Featured Projects
            </h2>
            <div className="h-1 w-20 rounded-full bg-gradient-to-r from-primary to-primary/60" />
          </div>
          <ProjectsShowcase searchParams={resolvedSearchParams} />
        </div>
      </section>
    </div>
  );
}
