// src/app/sitemap.ts
import { blogs, projects } from 'generated/content';
import { siteConfig } from '@/config/site';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;
  const currentDate = new Date();

  // Static pages with priority and changeFrequency
  const routes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about/setup`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ];

  // Blog posts with appropriate priority
  const blogPosts: MetadataRoute.Sitemap = blogs
    .filter((post) => post.published)
    .map((post) => ({
      url: `${baseUrl}/blog/${post.slugAsParams}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

  // Project pages with appropriate priority
  const projectPosts: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/work/projects/${project.slugAsParams}`,
    lastModified: new Date(project.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...routes, ...blogPosts, ...projectPosts];
}
