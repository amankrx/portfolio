'use client'; // This ensures the component is a Client Component

import React from 'react';
import { Button } from '@/components/ui/button';
import { FaDownload, FaLinkedin } from 'react-icons/fa';

export function WorkHeader() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        {/* Title and description */}
        <div className="space-y-4">
          <h1 className="font-sans text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Work
          </h1>
          <p className="max-w-2xl text-xl text-muted-foreground">
            Professional experience and personal projects that showcase my
            journey in tech.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-start gap-4 sm:justify-end">
          {/* Resume Button */}
          <Button
            variant="outline"
            className="group flex items-center gap-2 transition-colors hover:bg-primary hover:text-primary-foreground"
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            <FaDownload className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            Resume
          </Button>

          {/* LinkedIn Button */}
          <Button
            variant="outline"
            className="group flex items-center gap-2 transition-colors hover:bg-[#0077b5] hover:text-white"
            onClick={() =>
              window.open('https://linkedin.com/in/amankrx', '_blank')
            }
          >
            <FaLinkedin className="h-4 w-4 transition-transform group-hover:scale-110" />
            LinkedIn
          </Button>
        </div>
      </div>
    </div>
  );
}
