// src/config/site.ts

export const siteConfig = {
  name: "Aman's Blog",
  url: 'https://amankrx.com/blog',
  description: "Aman's technical blog",
  author: 'Aman Kumar',
  links: {
    twitter: 'https://twitter.com/amankrx',
    github: 'https://github.com/amankrx',
    personalSite: 'https://amankrx.com',
  },
};

export type SiteConfig = typeof siteConfig;
