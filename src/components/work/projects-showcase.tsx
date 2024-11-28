// src/components/work/projects-showcase.tsx
import { projects } from 'generated/content';
import { ProjectCard } from '@/components/work/project-card';
import { QueryPagination } from '@/components/query-pagination';
import { sortProjects } from '@/lib/utils';
import { Suspense } from 'react';
import { siteConfig } from '@/config/site';
import { LinkButton } from '../ui/link-button';

interface ProjectsShowcaseProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function ProjectsShowcase({
  searchParams,
}: ProjectsShowcaseProps) {
  const params = searchParams;
  const pageParam = params?.page;
  const tagParam = params?.tag;
  const projectsPerPage = 6;

  const page = typeof pageParam === 'string' ? Number(pageParam) : 1;
  const currentPage = Math.max(1, page);
  const selectedTag = typeof tagParam === 'string' ? tagParam : undefined;

  const filteredProjects = selectedTag
    ? projects.filter((project) => project.tech?.includes(selectedTag))
    : projects;
  const sortedProjects = sortProjects(filteredProjects);
  const totalPages = Math.ceil(sortedProjects.length / projectsPerPage);

  const displayProjects = sortedProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage,
  );

  return (
    <Suspense fallback={<div>Loading projects...</div>}>
      <div className="space-y-12">
        {displayProjects.length > 0 ? (
          <div className="space-y-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {displayProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
            <QueryPagination
              totalPages={totalPages}
              className="flex justify-center"
            />
          </div>
        ) : (
          <p className="text-muted-foreground">No projects found.</p>
        )}

        {/* GitHub CTA Section */}
        <div className="rounded-lg bg-primary/5 px-6 py-8 text-center">
          <h3 className="text-2xl font-bold">Want to see more?</h3>
          <p className="mt-2 text-muted-foreground">
            Check out my GitHub profile for more projects and contributions.
          </p>
          <LinkButton
            link={siteConfig.links.github}
            ariaLabel="View on GitHub"
            size="lg"
          />
        </div>
      </div>
    </Suspense>
  );
}
