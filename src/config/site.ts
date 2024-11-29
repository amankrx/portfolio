// src/config/site.ts
import { FaGithub, FaLinkedin, FaRss } from 'react-icons/fa';
import { FaDownload, FaXTwitter } from 'react-icons/fa6';
import { MdComputer } from 'react-icons/md';
import { IoMdArrowForward, IoMdMail } from 'react-icons/io';
import { IconType } from 'react-icons';

const base_url =
  process.env.NEXT_PUBLIC_APP_URL ||
  (process.env.NODE_ENV === 'production'
    ? 'https://amankrx.com'
    : 'http://localhost:3000');

export const siteConfig = {
  first_name: 'Aman',
  last_name: 'Kumar',
  name: 'Aman Kumar',
  url: base_url,
  repo_url: 'https://github.com/amankrx/portfolio',
  description:
    'Hi, I’m Aman Kumar, a Software Developer focused on building backend systems with Rust. This site is a mix of my work, my thoughts, and my journey as a developer.',
  author: {
    name: 'Aman Kumar',
    email: 'aman@amankrx.com',
    github: 'https://github.com/amankrx',
    x: 'https://x.com/amankrx',
    linkedin: 'https://linkedin.com/in/amankrx',
  },
  links: {
    github: {
      url: 'https://github.com/amankrx',
      label: 'GitHub',
      icon: FaGithub,
    },
    x: {
      url: 'https://x.com/amankrx',
      label: 'X',
      icon: FaXTwitter,
    },
    linkedin: {
      url: 'https://linkedin.com/in/amankrx',
      label: 'LinkedIn',
      icon: FaLinkedin,
    },
    email: {
      url: 'mailto:hello@amankrx.com',
      label: 'Email',
      icon: IoMdMail,
    },
    rss: {
      url: '/rss.xml',
      label: 'RSS',
      icon: FaRss,
    },
    setup: {
      url: '/about/setup',
      label: 'My Setup',
      icon: MdComputer,
    },
    blog: {
      url: '/blog',
      label: 'Blog',
      icon: IoMdArrowForward,
    },
    work: {
      url: '/work',
      label: 'Work',
      icon: IoMdArrowForward,
    },
    about: {
      url: '/about',
      label: 'About',
      icon: IoMdArrowForward,
    },
    contact: {
      url: '/contact',
      label: 'Contact',
      icon: IoMdMail,
    },
    sitemap: {
      url: '/sitemap.xml',
      label: 'Sitemap',
      icon: IoMdArrowForward,
    },
    resume: {
      url: '/resume.pdf',
      label: 'Resume',
      icon: FaDownload,
    },
  },
};

// Type for the links
export type SiteConfigLink = {
  url: string;
  label: string;
  icon?: IconType;
};
