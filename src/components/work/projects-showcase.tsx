import { projects } from 'generated/content';
import { ProjectCard } from '@/components/work/project-card';
import { QueryPagination } from '@/components/query-pagination';
import { sortProjects } from '@/lib/utils';
import { Suspense } from 'react';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/button';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

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
              {displayProjects.map((project, index) => {
                const delayClass = `animation-delay-${Math.min(900, 300 + index * 100)}`;
                return (
                  <div
                    key={project.slug}
                    className={`animate-fade-in-up opacity-0 ${delayClass}`}
                  >
                    <ProjectCard project={project} />
                  </div>
                );
              })}
            </div>
            <QueryPagination
              totalPages={totalPages}
              className="flex justify-center"
            />
          </div>
        ) : (
          <p className="text-center text-muted-foreground">
            No projects found.
          </p>
        )}

        {/* GitHub CTA Section */}
        <div className="animate-fade-in-up animation-delay-500 opacity-0">
          <div className="via-primary/3 space-y-6 rounded-2xl border border-primary/10 bg-gradient-to-br from-primary/5 to-transparent p-8 text-center backdrop-blur-sm md:p-12">
            <h3 className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
              Want to see more?
            </h3>
            <p className="mx-auto max-w-md text-muted-foreground">
              Check out my GitHub profile for more projects and contributions.
            </p>
            <Button
              size="lg"
              asChild
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              <Link href={siteConfig.links.github.url} target="_blank">
                <FaGithub className="relative z-10 mr-2 h-4 w-4" />
                <span className="relative z-10">View on GitHub</span>
                <span className="absolute inset-0 -z-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
