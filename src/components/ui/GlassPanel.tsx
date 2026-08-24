import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  interactive?: boolean;
  className?: string;
  glow?: boolean;
}

export const GlassPanel: React.FC<GlassPanelProps> = ({
  children,
  interactive = false,
  className,
  glow = false,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        clsx(
          'glass-panel relative overflow-hidden p-6 md:p-8',
          interactive && 'glass-panel-interactive',
          glow && 'before:absolute before:-inset-px before:rounded-2xl before:bg-gradient-to-r before:from-red-500/10 before:to-transparent before:pointer-events-none',
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  );
};
