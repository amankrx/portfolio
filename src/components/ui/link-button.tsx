import { Button } from './button';
import Link from 'next/link';
import type { SiteConfigLink } from '@/config/site';
import { IconType } from 'react-icons';

interface LinkButtonProps {
  link: SiteConfigLink;
  variant?: 'default' | 'outline';
  iconPosition?: 'left' | 'right';
  iconOnly?: boolean;
  size?: 'default' | 'sm' | 'lg';
  ariaLabel?: string;
}

export function LinkButton({
  link,
  variant = 'default',
  iconPosition = 'left',
  iconOnly = false,
  size = 'default',
  ariaLabel,
}: LinkButtonProps) {
  const Icon = link.icon as IconType;

  if (iconOnly) {
    return (
      <Link
        href={link.url}
        className="text-muted-foreground transition-all duration-200 hover:scale-110 hover:text-foreground"
        aria-label={ariaLabel || link.label}
      >
        <Icon className="h-5 w-5" />
      </Link>
    );
  }

  if (variant === 'default') {
    return (
      <Button
        size={size}
        asChild
        className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 transition-all hover:shadow-lg hover:shadow-primary/25"
      >
        <Link href={link.url}>
          {iconPosition === 'left' && Icon && (
            <Icon className="relative z-10 mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
          )}
          <span className="relative z-10">{ariaLabel || link.label}</span>
          {iconPosition === 'right' && Icon && (
            <Icon className="relative z-10 ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          )}
          <span className="absolute inset-0 -z-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 transition-opacity group-hover:opacity-100" />
        </Link>
      </Button>
    );
  }

  return (
    <Button
      size={size}
      variant="outline"
      asChild
      className="group border-primary/20 transition-all hover:border-primary/40 hover:bg-primary/5 hover:shadow-lg"
    >
      <Link href={link.url}>
        {iconPosition === 'left' && Icon && (
          <Icon className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
        )}
        {ariaLabel || link.label}
        {iconPosition === 'right' && Icon && (
          <Icon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        )}
      </Link>
    </Button>
  );
}
