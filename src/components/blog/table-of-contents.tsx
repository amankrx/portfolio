'use client';

import React, { useEffect, useState, useMemo, useRef } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface TocEntry {
  items?: TocEntry[];
  url: string;
  title: string;
}

interface TableOfContentsProps {
  toc: TocEntry[];
}

const TableOfContents = ({ toc }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>('');
  const [showTOC, setShowTOC] = useState(false);
  const [hasSpace, setHasSpace] = useState(true);
  const tocRef = useRef<HTMLDivElement>(null);
  const [topOffset, setTopOffset] = useState(50);

  const itemIds = useMemo(() => {
    if (!toc) return [];

    const extractUrls = (entries: TocEntry[]): string[] => {
      return entries.flatMap((entry) => [
        entry.url,
        ...(entry.items ? extractUrls(entry.items) : []),
      ]);
    };

    return extractUrls(toc)
      .filter(Boolean)
      .map((url) => url.split('#')[1]);
  }, [toc]);

  useEffect(() => {
    const updatePosition = () => {
      if (tocRef.current) {
        const tocHeight = tocRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;
        const newTopOffset = Math.max(0, (viewportHeight - tocHeight) / 2);
        setTopOffset(newTopOffset);
      }
    };

    const checkSpace = () => {
      const minWidth = 1280;
      setHasSpace(window.innerWidth >= minWidth);
    };

    const handleScroll = () => {
      if (itemIds.length === 0) return;

      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const quarterScroll = scrollPosition + viewportHeight / 4;

      const current = itemIds.findLast((id) => {
        const element = document.getElementById(id);
        if (!element) return false;
        const offsetTop = element.getBoundingClientRect().top + window.scrollY;
        return quarterScroll >= offsetTop;
      });

      if (current) {
        setActiveId(current);
      }

      const firstElement = document.getElementById(itemIds[0]);
      const lastElement = document.getElementById(itemIds[itemIds.length - 1]);

      if (firstElement && lastElement) {
        const firstElementTop = firstElement.getBoundingClientRect().top;
        const lastElementBottom = lastElement.getBoundingClientRect().bottom;

        // Show TOC only when:
        // 1. First heading has scrolled up to the quarter of the viewport.
        // 2. Last heading's bottom hasn't reached the last quarter of the viewport.
        const shouldShowTOC =
          firstElementTop <= viewportHeight / 4 &&
          lastElementBottom > (3 * viewportHeight) / 4;

        setShowTOC(shouldShowTOC);
      }

      updatePosition();
    };

    checkSpace();
    updatePosition();
    window.addEventListener('resize', () => {
      checkSpace();
      updatePosition();
    });
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkSpace);
    };
  }, [itemIds]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    const id = url.split('#')[1];
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop - 100,
        behavior: 'smooth',
      });
    }
  };

  const renderTocItems = (items: TocEntry[] = [], depth = 0) => {
    return items.map((item) => {
      const id = item.url.split('#')[1];
      const isActive = activeId === id;

      return (
        <React.Fragment key={item.url}>
          <motion.li
            className="group relative"
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {isActive && (
              <motion.div
                className="absolute -left-4 h-full w-[2px] rounded-full bg-primary"
                layoutId="activeHeading"
                transition={{ duration: 0.2 }}
              />
            )}
            <a
              href={item.url}
              onClick={(e) => handleClick(e, item.url)}
              className={cn(
                'inline-block py-1 transition-colors duration-200 hover:translate-x-1',
                depth === 0 && 'font-medium text-base',
                depth === 1 && 'pl-4 text-sm',
                depth === 2 && 'pl-8 text-sm',
                isActive
                  ? 'text-primary font-medium'
                  : 'text-muted-foreground hover:text-primary'
              )}
            >
              {item.title}
            </a>
          </motion.li>
          {item.items && item.items.length > 0 && (
            <ul className="mt-2 space-y-2">
              {renderTocItems(item.items, depth + 1)}
            </ul>
          )}
        </React.Fragment>
      );
    });
  };

  if (!toc?.length || !hasSpace) return null;

  return (
    <AnimatePresence>
      {showTOC && (
        <motion.nav
          ref={tocRef}
          className="fixed left-0 w-[240px]"
          style={{ top: topOffset }}
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
                'bg-gradient-to-b from-primary/5 via-primary/40 to-primary/5'
              )}
            />

            <div className="scrollbar-thin scrollbar-thumb-primary/10 scrollbar-track-transparent hover:scrollbar-thumb-primary/20 pr-4">
              <ul className="space-y-3 text-sm">{renderTocItems(toc)}</ul>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default TableOfContents;
