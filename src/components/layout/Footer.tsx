import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="w-full max-w-[1480px] mx-auto px-4 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.06] text-xs text-[#737B85] font-sans">
      <div className="flex items-center gap-2">
        <span className="font-bold tracking-tight text-white">
          <span className="text-white">J</span>
          <span className="text-[#EF3F3F]">C</span>
        </span>
        <span>© 2026 John Christan. Built with React & TypeScript.</span>
      </div>

      <button
        onClick={scrollToTop}
        type="button"
        className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer group px-3 py-1.5 rounded-lg hover:bg-white/[0.04]"
      >
        <span>Back to Top</span>
        <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </footer>
  );
};
