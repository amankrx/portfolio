'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface Heading {
  id: string;
  text: string;
  level: string;
  offsetTop: number;
}

const TableOfContents = () => {
  const [activeId, setActiveId] = useState<string>('');
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('h2, h3'))
      .filter((el) => el.id)
      .map((element) => ({
        id: element.id,
        text: element.textContent || '',
        level: element.tagName.toLowerCase(),
        offsetTop: element.getBoundingClientRect().top + window.scrollY,
      }));

    setHeadings(elements);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      const current = [...elements]
        .reverse()
        .find(({ offsetTop }) => scrollPosition >= offsetTop);

      if (current) {
        setActiveId(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-[calc(var(--header-height)+2rem)] hidden max-h-[calc(100vh-var(--header-height)-4rem)] w-56 overflow-y-auto rounded-lg border bg-card p-6 lg:block">
      <h2 className="mb-4 font-semibold text-primary">On this page</h2>
      <ul className="space-y-3">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={cn(
              'text-sm leading-relaxed',
              heading.level === 'h3' ? 'ml-4' : '',
              'transition-colors'
            )}
          >
            <a
              href={`#${heading.id}`}
              onClick={(e) => handleClick(e, heading.id)}
              className={cn(
                'hover:text-primary inline-block transition-colors duration-200',
                activeId === heading.id
                  ? 'text-foreground underline underline-offset-4'
                  : 'text-muted-foreground',
                'hover:no-underline'
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
