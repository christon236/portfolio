import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useActiveSection } from '../../hooks/useActiveSection';
import { Button } from '../ui/Button';

interface NavbarProps {
  currentPage: 'home' | 'connect';
  onNavigate: (page: 'home' | 'connect', sectionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const homeSectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
  const activeHomeSection = useActiveSection(homeSectionIds, 150);

  const navItems = [
    { label: 'Home', sectionId: 'home' },
    { label: 'About', sectionId: 'about' },
    { label: 'Skills', sectionId: 'skills' },
    { label: 'Projects', sectionId: 'projects' },
    { label: 'Experience', sectionId: 'experience' },
    { label: 'Connect', page: 'connect' as const },
  ];

  const handleItemClick = (item: { label: string; sectionId?: string; page?: 'connect' }) => {
    if (item.page === 'connect') {
      onNavigate('connect');
    } else {
      onNavigate('home', item.sectionId);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-4 md:top-6 z-50 px-4 md:px-8 max-w-[1480px] mx-auto w-full">
      <nav className="glass-panel py-3 px-5 md:px-8 flex items-center justify-between border border-white/10 rounded-2xl bg-[#0D1115]/85 backdrop-blur-xl shadow-2xl">
        {/* Left: Brand / Logo */}
        <button
          type="button"
          onClick={() => onNavigate('home', 'home')}
          className="flex items-center gap-2.5 group cursor-pointer text-left"
        >
          <span className="flex items-center tracking-tighter text-xl md:text-2xl font-black font-sans select-none">
            <span className="text-white group-hover:scale-105 transition-transform duration-200">J</span>
            <span className="text-[#EF3F3F] group-hover:scale-110 transition-transform duration-200">C</span>
          </span>
          <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-white hidden sm:inline-block">
            JOHN CHRISTAN
          </span>
        </button>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isConnect = item.page === 'connect';
            const isActive = isConnect
              ? currentPage === 'connect'
              : currentPage === 'home' && activeHomeSection === item.sectionId;

            return (
              <button
                key={item.label}
                type="button"
                onClick={() => handleItemClick(item)}
                className={`relative text-xs md:text-sm font-medium transition-colors duration-200 py-1 cursor-pointer ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-[#A7ADB5] hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#EF3F3F] rounded-full shadow-[0_0_8px_#EF3F3F]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3 md:gap-4">
          <div className="hidden sm:block">
            <Button
              onClick={() => onNavigate('connect')}
              variant="primary"
              size="sm"
              className="rounded-full px-5 py-2 text-xs md:text-sm font-semibold whitespace-nowrap"
            >
              Let's Connect
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 glass-panel p-5 rounded-2xl border border-white/10 bg-[#0D1115]/95 backdrop-blur-2xl flex flex-col gap-3 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => {
            const isConnect = item.page === 'connect';
            const isActive = isConnect
              ? currentPage === 'connect'
              : currentPage === 'home' && activeHomeSection === item.sectionId;

            return (
              <button
                key={item.label}
                type="button"
                onClick={() => handleItemClick(item)}
                className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors text-left w-full cursor-pointer ${
                  isActive
                    ? 'text-white bg-white/10 font-semibold border-l-2 border-[#EF3F3F]'
                    : 'text-[#A7ADB5] hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-2 mt-1 border-t border-white/10 sm:hidden">
            <Button
              onClick={() => {
                onNavigate('connect');
                setMobileMenuOpen(false);
              }}
              variant="primary"
              size="sm"
              className="w-full justify-center rounded-xl"
            >
              Let's Connect
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
