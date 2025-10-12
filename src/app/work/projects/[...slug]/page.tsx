import { projects, Project } from 'generated/content';
import { MDXContent } from '@/components/mdx-components';
import { notFound } from 'next/navigation';
import '@/styles/mdx.css';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { Separator } from '@/components/ui/separator';
import { ProjectHeader } from '@/components/work/project-header';
import { ProjectNavigation } from '@/components/work/project-navigation';
import { ProjectLinks } from '@/components/work/project-links';
import TableOfContents from '@/components/table-of-contents';

interface ProjectPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

async function getProjectFromParams(params: ProjectPageProps['params']) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug?.join('/');
  return projects.find((project: Project) => project.slugAsParams === slug);
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = await getProjectFromParams(params);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title}`,
    description: project.description,
    authors: { name: siteConfig.author.name },
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'article',
      url: project.slug,
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
    },
  };
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const project = await getProjectFromParams(params);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative flex min-h-full w-full flex-col bg-background">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-40 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative flex-1">
        <div className="py-8 lg:py-12">
          <div className="container mx-auto">
            <div className="relative flex justify-center">
              <div className="flex w-full max-w-[1280px] flex-col xl:flex-row xl:gap-8">
                {/* Left sidebar - Table of Contents */}
                <aside className="hidden w-[240px] shrink-0 xl:block">
                  <div className="sticky top-[calc(var(--header-height)+4rem)] max-h-[calc(100vh-var(--header-height)-8rem)] overflow-y-auto">
                    <TableOfContents toc={project.toc} />
                  </div>
                </aside>

                {/* Center content */}
                <main className="w-full min-w-0 px-4 sm:px-6 xl:max-w-[800px] xl:px-0">
                  <div className="animate-fade-in-up animation-delay-0 opacity-0">
                    <ProjectNavigation className="mb-8" />
                  </div>

                  <article className="animate-fade-in-up animation-delay-100 opacity-0">
                    <div className="flex flex-col space-y-8">
                      <ProjectHeader
                        title={project.title}
                        date={project.date}
                        status={project.status}
                        tech={project.tech}
                        description={project.description}
                      />

                      <ProjectLinks links={project.links} />

                      <Separator className="h-px bg-primary/10" />

                      <div className="prose prose-lg max-w-none dark:prose-invert">
                        <MDXContent code={project.body} />
                      </div>
                    </div>
                  </article>
                </main>
              </div>
            </div>

            {/* Mobile Table of Contents */}
            <div className="mt-8 xl:hidden">
              <TableOfContents toc={project.toc} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
