import React from 'react';
import { Rocket, Download, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { heroData } from '../../data/portfolioData';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-4 pb-8 md:pt-8 md:pb-12 overflow-hidden flex items-center min-h-[460px] lg:min-h-[500px]">
      {/* Cinematic Ambient Red Lighting Atmosphere */}
      <div className="hero-ambient-glow" />
      <div className="hero-ambient-glow-left" />

      {/* Subtle red underglow reflection line */}
      <div className="absolute bottom-6 right-0 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#EF3F3F]/30 to-transparent pointer-events-none blur-xs" />

      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0 relative z-10">
        {/* Left Column: Bio, Heading & Action Controls */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="w-full lg:w-[46%] xl:w-[44%] flex flex-col items-start z-20 lg:pr-4"
        >
          {/* Developer Monospace Tag */}
          <div className="inline-flex items-center gap-1.5 mb-2.5 text-xs md:text-sm lg:text-[15px] font-mono font-medium text-[#EF3F3F] tracking-wide">
            {heroData.developerTag}
          </div>

          {/* Hero Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[68px] font-extrabold tracking-[-0.025em] text-white leading-[0.95] mb-2.5 font-sans">
            {heroData.name}
          </h1>

          {/* Role / Subtitle */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[25px] font-semibold text-slate-100 tracking-tight leading-snug mb-3.5 font-sans">
            {heroData.role}
          </h2>

          {/* Description */}
          <p className="text-sm md:text-base text-[#A7ADB5] leading-relaxed max-w-[490px] mb-7 font-sans">
            {heroData.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 mb-7 w-full sm:w-auto">
            <Button
              href="#projects"
              variant="primary"
              size="md"
              icon={<Rocket className="w-4 h-4 text-white" />}
              className="w-full sm:w-auto px-6 py-2.5 text-sm font-semibold rounded-xl"
            >
              Explore My Work
            </Button>

            <Button
              href="/John_Christan_Resume.pdf"
              download="John_Christan_Resume.pdf"
              variant="secondary"
              size="md"
              icon={<Download className="w-4 h-4 text-slate-300" />}
              className="w-full sm:w-auto px-6 py-2.5 text-sm font-medium rounded-xl"
              target="_blank"
            >
              Download Resume
            </Button>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center gap-3 text-xs md:text-sm text-[#A7ADB5]">
            <a
              href="https://github.com/christon236"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors duration-200 group"
            >
              <svg className="w-4 h-4 fill-current group-hover:text-white" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              <span>GitHub</span>
            </a>

            <span className="text-white/20 select-none">|</span>

            <a
              href="https://www.linkedin.com/in/john-christan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors duration-200 group"
            >
              <svg className="w-4 h-4 fill-current group-hover:text-[#0077B5]" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24"/>
              </svg>
              <span>LinkedIn</span>
            </a>

            <span className="text-white/20 select-none">|</span>

            <a
              href="mailto:christon236@gmail.com"
              className="flex items-center gap-1.5 hover:text-white transition-colors duration-200 group"
            >
              <Mail className="w-4 h-4 group-hover:text-[#EF3F3F]" />
              <span>Email</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Seamless Cinematic Workstation Environment */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="w-full lg:w-[56%] xl:w-[58%] relative flex justify-end items-center z-10 -mt-4 lg:mt-0 lg:-ml-6"
        >
          {/* Subtle ambient desk underglow */}
          <div className="absolute inset-0 bg-radial from-[#EF3F3F]/12 via-transparent to-transparent blur-2xl pointer-events-none" />

          <div className="relative w-full overflow-hidden hero-workstation-blend">
            <img
              src="/images/hero_workstation.jpg"
              alt="John Christan's Developer Workstation"
              className="w-full h-auto object-cover select-none pointer-events-none"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
