import { ChevronDown, Square } from 'lucide-react';
import { useRef, useState } from 'react';

import { cn } from '~/utils';

interface FormSelectProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  options: { label: string; value: string }[];
  className?: string;
}

export function FormSelect({
  value,
  onChange,
  placeholder,
  options,
  className,
}: FormSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedLabel = options.find((opt) => opt.value === value)?.label;

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        onBlur={(e) => {
          if (!containerRef.current?.contains(e.relatedTarget)) {
            setIsOpen(false);
          }
        }}
        className={cn(
          '!border-concrete flex h-[59px] w-full items-center border-b bg-transparent px-[10px] py-[15px] text-xl text-black',
          'outline-none transition-colors duration-100',
          'text-left',
          !selectedLabel && 'text-concrete',
        )}
      >
        <span className="flex-1">{selectedLabel || placeholder}</span>
        <ChevronDown
          className={cn(
            'size-5 text-black transition-transform duration-200',
            isOpen && 'rotate-180',
          )}
        />
      </button>

      {isOpen && (
        <div className="border-concrete bg-gray animate-in fade-in-0 slide-in-from-top-2 absolute left-0 right-0 top-full z-50 max-h-[240px] overflow-y-auto border duration-150">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={cn(
                'flex w-full cursor-pointer items-center gap-[16px] px-[10px] py-3 text-left text-xl text-black transition-colors duration-100',
                'hover:bg-pink',
                value === option.value && 'bg-pink font-medium',
              )}
            >
              <Square
                fill="inherit"
                stroke="inherit"
                size={8}
                className="shrink-0"
              />
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
