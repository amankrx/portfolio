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
        className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
        aria-label={ariaLabel || link.label}
      >
        <Icon className="h-5 w-5" />
      </Link>
    );
  }

  return (
    <Button size={size} variant={variant} asChild className="mt-6">
      <Link href={link.url}>
        {iconPosition === 'left' && <Icon className="mr-2 h-4 w-4" />}
        {ariaLabel || link.label}
        {iconPosition === 'right' && <Icon className="ml-2 h-4 w-4" />}
      </Link>
    </Button>
  );
}
