// components/footer.tsx
'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaRss } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';
import { useProfile } from '@/context/profile-context';

// Create a map of platform names to icon components
const SOCIAL_ICONS = {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  IoMdMail,
  FaRss,
} as const;

export default function Footer() {
  const { profile } = useProfile();

  const renderIcon = (iconName: keyof typeof SOCIAL_ICONS) => {
    const Icon = SOCIAL_ICONS[iconName];
    return Icon ? <Icon className="h-5 w-5" /> : null;
  };

  return (
    <footer className="z-40 w-full border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()}{' '}
            {`${profile.personal.first_name} ${profile.personal.last_name}`}.
            All rights reserved.
          </p>

          {/* Social Links and RSS */}
          <div className="flex items-center gap-4">
            {profile.social.map((link) => (
              <Link
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.platform}
                className="text-muted-foreground transition-colors duration-200 hover:scale-110 hover:text-foreground"
              >
                {renderIcon(link.icon as keyof typeof SOCIAL_ICONS)}
              </Link>
            ))}

            {/* RSS Link - Separated from social links */}
            <div className="ml-2 border-l pl-2">
              <Link
                href="/rss.xml"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="RSS Feed"
                className="text-muted-foreground transition-colors duration-200 hover:scale-110 hover:text-foreground"
              >
                <FaRss className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
