import Image from 'next/image';
import Link from 'next/link';
import type { MDXComponents as MDXComponentsType } from 'mdx/types';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BaseComponentProps {
  children?: ReactNode;
  className?: string;
}

interface ImageProps {
  src?: string;
  alt?: string;
}

interface LinkProps extends BaseComponentProps {
  href?: string;
}

const MDXComponents = {
  h1: ({ children, className }: BaseComponentProps) => (
    <h1
      className={cn(
        'scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mb-8',
        className
      )}
    >
      {children}
    </h1>
  ),

  h2: ({ children, className }: BaseComponentProps) => (
    <h2
      className={cn(
        'scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 mb-4',
        className
      )}
    >
      {children}
    </h2>
  ),

  h3: ({ children, className }: BaseComponentProps) => (
    <h3
      className={cn(
        'scroll-m-20 text-2xl font-semibold tracking-tight mb-4',
        className
      )}
    >
      {children}
    </h3>
  ),

  p: ({ children, className }: BaseComponentProps) => {
    if (
      typeof children === 'object' &&
      children !== null &&
      'type' in children &&
      (children.type === 'img' || children.type === Image)
    ) {
      return <>{children}</>;
    }
    return (
      <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}>
        {children}
      </p>
    );
  },

  ul: ({ children, className }: BaseComponentProps) => (
    <ul className={cn('my-6 ml-6 list-disc [&>li]:mt-2', className)}>
      {children}
    </ul>
  ),

  ol: ({ children, className }: BaseComponentProps) => (
    <ol className={cn('my-6 ml-6 list-decimal [&>li]:mt-2', className)}>
      {children}
    </ol>
  ),

  li: ({ children }: BaseComponentProps) => <li>{children}</li>,

  blockquote: ({ children, className }: BaseComponentProps) => (
    <blockquote
      className={cn(
        'mt-6 border-l-2 border-slate-300 pl-6 italic text-slate-800',
        'dark:border-slate-700 dark:text-slate-200',
        className
      )}
    >
      {children}
    </blockquote>
  ),

  pre: ({ children, className, ...props }: BaseComponentProps) => (
    <pre
      className={cn(
        'mb-4 mt-6 overflow-x-auto rounded-lg bg-black py-4',
        'dark:bg-slate-900',
        className
      )}
      {...props}
    >
      <code>{children}</code>
    </pre>
  ),

  code: ({ children, className }: BaseComponentProps) => {
    if (!className) {
      return (
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
          {children}
        </code>
      );
    }
    return <code className={cn('inline-code', className)}>{children}</code>;
  },

  a: ({ href, children, className }: LinkProps) => (
    <Link
      href={href || '#'}
      className={cn(
        'font-medium underline underline-offset-4 hover:text-primary',
        className
      )}
    >
      {children}
    </Link>
  ),

  img: ({ src, alt }: ImageProps) => (
    <Image
      src={src || ''}
      alt={alt || ''}
      width={800}
      height={400}
      className="my-8 rounded-lg"
    />
  ),
  hr: ({ className }: BaseComponentProps) => (
    <hr
      className={cn('my-8 border-slate-200 dark:border-slate-800', className)}
    />
  ),
};

// You can still keep the hook for client components if needed
export function useMDXComponents(): MDXComponentsType {
  return MDXComponents;
}
