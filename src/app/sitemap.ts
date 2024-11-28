import { blogs, projects } from 'generated/content';
import { siteConfig } from '@/config/site';

export default async function sitemap() {
  const baseUrl = siteConfig.url;

  // Get all blog posts
  const blogPosts = blogs
    .filter((post) => post.published)
    .map((post) => ({
      url: `${baseUrl}/blog/${post.slugAsParams}`,
      lastModified: new Date(post.date),
    }));

  const projectPosts = projects.map((project) => ({
    url: `${baseUrl}/work/projects/${project.slugAsParams}`,
    lastModified: new Date(project.date),
  }));

  // Add static pages
  const routes = [
    '',
    '/blog',
    '/work',
    '/about',
    '/about/setup',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  return [...routes, ...blogPosts, ...projectPosts];
}
