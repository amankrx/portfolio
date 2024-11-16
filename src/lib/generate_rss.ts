import { Feed } from 'feed';
import fs from 'fs';
import { Profile } from '@/types/profile';
import { Post } from '@/types/post';

export async function generateRssFeed(posts: Post[], profile: Profile) {
  const site_url = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  const feed = new Feed({
    title: `${profile.personal.first_name} ${profile.personal.last_name}'s Blog`,
    description: profile.personal.bio,
    id: site_url,
    link: site_url,
    language: 'en',
    favicon: `${site_url}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, ${profile.personal.first_name} ${profile.personal.last_name}`,
    author: {
      name: `${profile.personal.first_name} ${profile.personal.last_name}`,
      email: profile.personal.email,
      link: site_url,
    },
  });

  posts.forEach((post) => {
    feed.addItem({
      title: post.meta.title,
      id: `${site_url}/blog/${post.meta.slug}`,
      link: `${site_url}/blog/${post.meta.slug}`,
      description: post.meta.excerpt,
      date: new Date(post.meta.date),
      content: post.content,
    });
  });

  // Write the RSS feed to a public file
  fs.writeFileSync('./public/rss.xml', feed.rss2());
}
