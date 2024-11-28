import { blogs } from 'generated/content';
import { siteConfig } from '@/config/site';

export function generateRssFeed() {
  const baseUrl = siteConfig.url;
  const feedUrl = `${baseUrl}/rss.xml`;

  // Create RSS feed
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteConfig.name}</title>
    <description>${siteConfig.description}</description>
    <link>${baseUrl}</link>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml"/>
    <language>en</language>
    ${blogs
      .filter((post) => post.published)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .map(
        (post) => `
    <item>
      <title>${post.title}</title>
      <description>${post.description}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <link>${baseUrl}/blog/${post.slugAsParams}</link>
      <guid>${baseUrl}/blog/${post.slugAsParams}</guid>
      ${post.tags.map((tag) => `<category>${tag}</category>`).join('')}
    </item>`,
      )
      .join('')}
  </channel>
</rss>`;
}
