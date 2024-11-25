// src/components/work/project-links.tsx
import { Button } from '@/components/ui/button';
import { Project } from 'generated/content';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { LuBookOpen, LuExternalLink } from 'react-icons/lu';

interface ProjectLink {
  name: string;
  url: string;
  type: 'github' | 'demo' | 'docs' | 'blog' | 'other';
}

interface ProjectLinksProps {
  links?: ProjectLink[];
}

export function ProjectLinks({ links }: ProjectLinksProps) {
  if (!links?.length) return null;

  const getIcon = (type: Project['links'][0]['type']) => {
    switch (type) {
      case 'github':
        return <FaGithub className="mr-2 h-4 w-4" />;
      case 'docs':
        return <LuBookOpen className="mr-2 h-4 w-4" />;
      case 'blog':
        return <LuBookOpen className="mr-2 h-4 w-4" />;
      default:
        return <LuExternalLink className="mr-2 h-4 w-4" />;
    }
  };

  return (
    <div className="flex flex-wrap gap-4">
      {links.map((link) => (
        <Button key={link.url} variant="outline" asChild className="gap-2">
          <Link href={link.url} target="_blank" rel="noopener noreferrer">
            {getIcon(link.type)}
            {link.name}
          </Link>
        </Button>
      ))}
    </div>
  );
}
