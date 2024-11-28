// components/footer.tsx
'use client';

import { LinkButton } from '@/components/ui/link-button';
import { siteConfig } from '@/config/site';

export default function Footer() {
  const socialLinks = [
    siteConfig.links.github,
    siteConfig.links.x,
    siteConfig.links.linkedin,
    siteConfig.links.email,
  ];

  return (
    <footer className="z-40 w-full border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. Free and Open
            Source.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <LinkButton
                key={link.label}
                link={link}
                iconOnly
                ariaLabel={link.label}
              />
            ))}

            {/* RSS Link */}
            <div className="ml-2 border-l pl-2">
              <LinkButton
                link={siteConfig.links.rss}
                iconOnly
                ariaLabel={siteConfig.links.rss.label}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
