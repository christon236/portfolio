import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { ConnectPage } from './pages/ConnectPage';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'connect'>('home');

  // Handle URL hash changes for direct linking & back/forward navigation
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#/connect' || hash === '#connect') {
        setCurrentPage('connect');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (page: 'home' | 'connect', sectionId?: string) => {
    setCurrentPage(page);

    if (page === 'connect') {
      window.location.hash = '/connect';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = sectionId ? `${sectionId}` : '';
      if (sectionId) {
        // Wait for DOM to render home sections if switching from connect page
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            const offset = 90;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#07090B] text-[#F8FAFC] flex flex-col selection:bg-[#EF3F3F]/30 selection:text-white font-sans">
      {/* Top Floating Glass Navbar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Container */}
      <main className="flex-1 max-w-[1480px] w-full mx-auto px-4 md:px-8">
        {currentPage === 'home' ? (
          <div className="flex flex-col gap-6 md:gap-8 pb-12">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </div>
        ) : (
          <ConnectPage onNavigateHome={(sectionId) => handleNavigate('home', sectionId)} />
        )}
      </main>

      {/* Bottom Minimalist Footer */}
      <Footer />
    </div>
  );
};

export default App;
