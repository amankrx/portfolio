// src/app/work/[...slug]/page.tsx
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

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set('title', project.title);

  return {
    title: `${project.title} | ${siteConfig.name}`,
    description: project.description,
    authors: { name: siteConfig.author },
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'article',
      url: project.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const project = await getProjectFromParams(params);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex min-h-full w-full flex-col">
      <div className="flex-1">
        <div className="py-6 lg:py-10">
          <div className="container mx-auto">
            <div className="relative flex flex-col justify-center xl:flex-row">
              {/* Left sidebar - Table of Contents */}

              {/* Center content */}
              <main className="w-full min-w-0 px-4 sm:px-6 xl:max-w-[800px]">
                <ProjectNavigation className="mb-8" />

                <article>
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

              {/* Right sidebar - Preview/Demo if available */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
