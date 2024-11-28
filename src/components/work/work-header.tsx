'use client'; // This ensures the component is a Client Component

import React from 'react';
import { siteConfig } from '@/config/site';
import { LinkButton } from '../ui/link-button';

export function WorkHeader() {
  return (
    <div className="space-y-6">
      {/* Title and description */}
      <div className="space-y-4">
        <h1 className="font-sans text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Work
        </h1>
        <p className="max-w-3xl text-lg text-muted-foreground">
          Explore my professional journey and the projects I’ve built along the
          way. From crafting backend systems to tackling real-world challenges,
          here’s what I’ve been up to.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 md:justify-start md:gap-6">
        {/* LinkedIn Button */}
        <LinkButton
          link={siteConfig.links.linkedin}
          iconPosition="right"
          size="lg"
        />

        {/* Resume Button */}
        <LinkButton
          link={siteConfig.links.resume}
          variant="outline"
          size="lg"
          ariaLabel="Resume"
        />
      </div>
    </div>
  );
}
