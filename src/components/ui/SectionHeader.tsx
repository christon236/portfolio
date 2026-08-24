import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface SectionHeaderProps {
  icon?: React.ReactNode;
  title: string;
  action?: {
    label: string;
    href: string;
  };
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  icon,
  title,
  action,
  className,
}) => {
  return (
    <div className={twMerge(clsx('flex items-center justify-between gap-4 mb-6 pb-2', className))}>
      <div className="flex items-center gap-3">
        {icon && (
          <div className="text-[#EF3F3F] flex items-center justify-center shrink-0">
            {icon}
          </div>
        )}
        <h2 className="text-base md:text-lg font-bold tracking-wider uppercase text-white font-sans m-0">
          {title}
        </h2>
      </div>

      {action && (
        <a
          href={action.href}
          className="text-xs md:text-sm font-medium text-[#EF3F3F] hover:text-[#FF4A4A] transition-colors flex items-center gap-1.5 group shrink-0"
        >
          <span>{action.label}</span>
        </a>
      )}
    </div>
  );
};
