'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface Heading {
  id: string;
  text: string;
  level: string;
  offsetTop: number;
}

const TableOfContents = () => {
  const [activeId, setActiveId] = useState<string>('');
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [showTOC, setShowTOC] = useState(false);
  const [hasSpace, setHasSpace] = useState(true);

  useEffect(() => {
    const checkSpace = () => {
      const minWidth = 1280; // xl breakpoint
      setHasSpace(window.innerWidth >= minWidth);
    };

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
      if (elements.length === 0) return;

      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Find the heading closest to the center of the viewport
      const centerScroll = scrollPosition + viewportHeight / 2;
      const current = [...elements]
        .reverse()
        .find(({ offsetTop }) => centerScroll >= offsetTop);

      if (current) {
        setActiveId(current.id);
      }

      // Get first and last heading positions
      const firstHeading = elements[0];
      const lastHeading = elements[elements.length - 1];

      // Show TOC when the first heading reaches the top
      // and hide when the last heading reaches the bottom
      const shouldShowTOC =
        scrollPosition >= firstHeading.offsetTop &&
        scrollPosition + viewportHeight <=
          lastHeading.offsetTop + viewportHeight;

      setShowTOC(shouldShowTOC);
    };

    checkSpace();
    window.addEventListener('resize', checkSpace);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkSpace);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop - 100,
        behavior: 'smooth',
      });
    }
  };

  if (headings.length === 0 || !hasSpace) return null;

  return (
    <AnimatePresence>
      {showTOC && (
        <motion.nav
          className="fixed left-0 flex w-[240px] flex-col items-start"
          style={{ transform: 'translate(0, -50%)' }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
          }}
        >
          <div className="relative pl-4">
            <div
              className={cn(
                'absolute left-0 top-0 bottom-0 w-[2px]',
                'bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5'
              )}
            />

            <div className="max-h-[calc(100vh_-_4rem)] overflow-y-auto flex flex-col items-start">
              <ul className="space-y-3 text-sm pr-4">
                {headings.map((heading) => {
                  const isActive = activeId === heading.id;
                  return (
                    <motion.li
                      key={heading.id}
                      className={cn(
                        'relative group',
                        heading.level === 'h2' ? 'ml-3' : '',
                        heading.level === 'h3' ? 'ml-6' : ''
                      )}
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {isActive && (
                        <motion.div
                          className="absolute -left-4 w-[2px] h-full bg-primary rounded-full"
                          layoutId="activeHeading"
                          transition={{ duration: 0.2 }}
                        />
                      )}
                      <a
                        href={`#${heading.id}`}
                        onClick={(e) => handleClick(e, heading.id)}
                        className={cn(
                          'inline-block transition-colors duration-200',
                          isActive
                            ? 'text-primary font-medium'
                            : 'text-muted-foreground hover:text-primary'
                        )}
                      >
                        {heading.text}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default TableOfContents;
