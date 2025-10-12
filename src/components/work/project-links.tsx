import { Button } from '@/components/ui/button';
import { FaGithub } from 'react-icons/fa';
import { LuExternalLink, LuBookOpen } from 'react-icons/lu';
import Link from 'next/link';

interface ProjectLink {
  type: string;
  url: string;
}

interface ProjectLinksProps {
  links?: ProjectLink[];
}

export function ProjectLinks({ links }: ProjectLinksProps) {
  if (!links || links.length === 0) {
    return null;
  }

  const getIcon = (type: string) => {
    switch (type) {
      case 'github':
        return <FaGithub className="h-4 w-4" />;
      case 'docs':
        return <LuBookOpen className="h-4 w-4" />;
      case 'blog':
        return <LuBookOpen className="h-4 w-4" />;
      default:
        return <LuExternalLink className="h-4 w-4" />;
    }
  };

  const getLabel = (type: string) => {
    switch (type) {
      case 'github':
        return 'View on GitHub';
      case 'docs':
        return 'Documentation';
      case 'blog':
        return 'Blog Post';
      case 'demo':
        return 'Live Demo';
      default:
        return 'Visit';
    }
  };

  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => (
        <Button
          key={link.url}
          asChild
          variant={link.type === 'github' ? 'default' : 'outline'}
          size="default"
          className={
            link.type === 'github'
              ? 'group relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 transition-all hover:shadow-lg hover:shadow-primary/25'
              : 'group border-primary/20 transition-all hover:border-primary/40 hover:bg-primary/5'
          }
        >
          <Link href={link.url} target="_blank" rel="noopener noreferrer">
            {link.type === 'github' && (
              <>
                <span className="relative z-10 mr-2">{getIcon(link.type)}</span>
                <span className="relative z-10">{getLabel(link.type)}</span>
                <span className="absolute inset-0 -z-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 transition-opacity group-hover:opacity-100" />
              </>
            )}
            {link.type !== 'github' && (
              <>
                <span className="mr-2">{getIcon(link.type)}</span>
                {getLabel(link.type)}
              </>
            )}
          </Link>
        </Button>
      ))}
    </div>
  );
}
