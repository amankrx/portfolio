// src/components/query-pagination.tsx
'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from './ui/pagination';

interface QueryPaginationProps {
  totalPages: number;
  className?: string;
}

export function QueryPagination({
  totalPages,
  className,
}: QueryPaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useRouter();
  const currentPage = Number(searchParams.get('page')) || 1;
  const tag = searchParams.get('tag');

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    if (tag) params.set('tag', tag);
    return `${pathname}?${params.toString()}`;
  };

  // Calculate visible page numbers
  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];
    let l;

    range.push(1);

    for (let i = currentPage - delta; i <= currentPage + delta; i++) {
      if (i < totalPages && i > 1) {
        range.push(i);
      }
    }

    range.push(totalPages);

    for (const i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };

  if (totalPages <= 1) return null;

  return (
    <Pagination className={className}>
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious href={createPageURL(currentPage - 1)} />
          </PaginationItem>
        )}

        {getVisiblePages().map((page, index) => {
          if (page === '...') {
            return <PaginationEllipsis key={`ellipsis-${index}`} />;
          }
          return (
            <PaginationItem key={`page-${page}`}>
              <PaginationLink
                href={createPageURL(page)}
                isActive={currentPage === page}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext href={createPageURL(currentPage + 1)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
