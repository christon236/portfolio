import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = 'w-5 h-5' }) => {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, '');

  switch (normalized) {
    case 'python':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M11.91 2C6.44 2 6.78 4.38 6.78 4.38L6.79 6.84H12V7.61H4.29C4.29 7.61 2 7.34 2 12.82C2 18.3 4 18.04 4 18.04H5.21V16.32C5.21 16.32 5.15 14.28 7.21 14.28H12.4V13.51H7.21V11.85C7.21 11.85 7.07 9.87 9.17 9.87H14.47C14.47 9.87 16.64 9.94 16.64 7.82V4.45C16.64 4.45 17.05 2 11.91 2ZM9.48 3.55C9.9 3.55 10.24 3.89 10.24 4.31C10.24 4.73 9.9 5.07 9.48 5.07C9.06 5.07 8.72 4.73 8.72 4.31C8.72 3.89 9.06 3.55 9.48 3.55Z"
            fill="#3776AB"
          />
          <path
            d="M12.09 22C17.56 22 17.22 19.62 17.22 19.62L17.21 17.16H12V16.39H19.71C19.71 16.39 22 16.66 22 11.18C22 5.7 20 5.96 20 5.96H18.79V7.68C18.79 7.68 18.85 9.72 16.79 9.72H11.6V10.49H16.79V12.15C16.79 12.15 16.93 14.13 14.83 14.13H9.53C9.53 14.13 7.36 14.06 7.36 16.18V19.55C7.36 19.55 6.95 22 12.09 22ZM14.52 20.45C14.1 20.45 13.76 20.11 13.76 19.69C13.76 19.27 14.1 18.93 14.52 18.93C14.94 18.93 15.28 19.27 15.28 19.69C15.28 20.11 14.94 20.45 14.52 20.45Z"
            fill="#FFD43B"
          />
        </svg>
      );

    case 'django':
      return (
        <span className="font-bold tracking-tighter text-[#44B78B] text-xs font-mono bg-[#092E20] px-1.5 py-0.5 rounded border border-[#44B78B]/40">
          dj
        </span>
      );

    case 'restapi':
    case 'rest':
      return (
        <span className="text-[10px] font-extrabold text-[#F59E0B] tracking-tight bg-[#78350F]/40 px-1 py-0.5 rounded border border-[#F59E0B]/50 font-mono">
          REST
        </span>
      );

    case 'react':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="4.2" ry="10.5" transform="rotate(30 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="4.2" ry="10.5" transform="rotate(90 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="4.2" ry="10.5" transform="rotate(150 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
        </svg>
      );

    case 'typescript':
    case 'ts':
      return (
        <div className="w-5 h-5 rounded bg-[#3178C6] flex items-center justify-center text-[10px] font-bold text-white font-mono shadow-xs">
          TS
        </div>
      );

    case 'javascript':
    case 'js':
      return (
        <div className="w-5 h-5 rounded bg-[#F7DF1E] flex items-center justify-center text-[10px] font-bold text-black font-mono shadow-xs">
          JS
        </div>
      );

    case 'html':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M4 3L5.6 21L12 22.8L18.4 21L20 3H4Z" fill="#E34F26" />
          <path d="M12 4.6V21.1L17.1 19.7L18.4 4.6H12Z" fill="#EF652A" />
          <path d="M12 8.4H8.4L8.7 11.6H12V14.8H8.9L9.1 17.2L12 18L14.9 17.2L15.2 13.8H13.2L13.1 14.8L12 15.1L10.9 14.8L10.8 13.6H16.8L17.3 8.4H12Z" fill="white" />
        </svg>
      );

    case 'css':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M4 3L5.6 21L12 22.8L18.4 21L20 3H4Z" fill="#1572B6" />
          <path d="M12 4.6V21.1L17.1 19.7L18.4 4.6H12Z" fill="#33A9DC" />
          <path d="M12 8.4H8.4L8.7 11.6H12V14.8H8.9L9.1 17.2L12 18L14.9 17.2L15.2 13.8H13.2L13.1 14.8L12 15.1L10.9 14.8L10.8 13.6H16.8L17.3 8.4H12Z" fill="white" />
        </svg>
      );

    case 'bootstrap':
      return (
        <div className="w-5 h-5 rounded-md bg-[#7952B3] flex items-center justify-center text-xs font-bold text-white font-sans shadow-xs">
          B
        </div>
      );

    case 'tailwindcss':
    case 'tailwind':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.127 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.875 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.638 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.875 12 6.001 12z"
            fill="#38BDF8"
          />
        </svg>
      );

    case 'git':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M21.62 10.88L13.12 2.38C12.63 1.89 11.84 1.89 11.35 2.38L9.5 4.23L11.75 6.48C12.33 6.29 13 6.43 13.45 6.88C13.9 7.33 14.04 8 13.85 8.58L16.03 10.76C16.61 10.57 17.28 10.71 17.73 11.16C18.32 11.75 18.32 12.7 17.73 13.29C17.14 13.88 16.19 13.88 15.6 13.29C15.15 12.84 15.01 12.17 15.2 11.59L13.1 9.49V14.62C13.29 14.81 13.41 15.07 13.41 15.35C13.41 16.18 12.74 16.85 11.91 16.85C11.08 16.85 10.41 16.18 10.41 15.35C10.41 14.77 10.74 14.27 11.22 14.02V8.92C10.74 8.67 10.41 8.17 10.41 7.59C10.41 7.31 10.53 7.05 10.72 6.86L8.47 4.61L2.38 10.7C1.89 11.19 1.89 11.98 2.38 12.47L10.88 20.97C11.37 21.46 12.16 21.46 12.65 20.97L21.62 12C22.11 11.51 22.11 10.72 21.62 10.88Z"
            fill="#F05032"
          />
        </svg>
      );

    case 'github':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      );

    case 'postgresql':
    case 'postgres':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M12.01 2C6.49 2 2 6.49 2 12.01C2 17.53 6.49 22.02 12.01 22.02C17.53 22.02 22.02 17.53 22.02 12.01C22.02 6.49 17.53 2 12.01 2ZM17.48 10.74C17.41 12.56 16.14 14.34 14.54 15.34C14.07 15.63 13.56 15.86 13.03 16.03V18.1H11.02V16.39C10.59 16.34 10.16 16.24 9.76 16.09L9.12 18.01L7.25 17.39L8.03 15.06C6.73 14.07 5.92 12.48 6.01 10.74C6.11 8.87 7.39 7.27 9.17 6.64C10.05 6.33 10.99 6.22 11.92 6.31C13.62 6.47 15.19 7.42 16.17 8.82C16.89 9.38 17.43 10.02 17.48 10.74Z"
            fill="#336791"
          />
        </svg>
      );

    case 'mysql':
      return (
        <span className="font-extrabold text-[10px] text-[#00758F] tracking-tight bg-[#E0F2FE]/10 px-1 py-0.5 rounded border border-[#00758F]/50 font-mono">
          MySQL
        </span>
      );

    default:
      return <div className="w-2.5 h-2.5 rounded-full bg-[#EF3F3F]" />;
  }
};
