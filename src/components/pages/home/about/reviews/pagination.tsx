import { cn } from '~/utils';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav
      className="flex flex-row items-center justify-center gap-3 md:gap-5 2xl:gap-10"
      aria-label="Reviews pagination"
    >
      {Array.from({ length: totalPages }, (_, idx) => (
        <button
          key={idx}
          className={cn(
            'size-[10px] rounded-full border transition-colors duration-200 md:size-[12px] 2xl:size-[15px]',
            currentPage === idx && 'bg-border',
          )}
          onClick={() => onPageChange(idx)}
          aria-label={`Go to page ${idx + 1}`}
          aria-current={currentPage === idx ? 'page' : undefined}
        />
      ))}
    </nav>
  );
}
