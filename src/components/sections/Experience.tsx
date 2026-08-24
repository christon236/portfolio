import React from 'react';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { timelineData } from '../../data/portfolioData';
import { GlassPanel } from '../ui/GlassPanel';
import { SectionHeader } from '../ui/SectionHeader';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <GlassPanel className="p-6 md:p-8">
          <SectionHeader
            icon={<Briefcase className="w-5 h-5" />}
            title="EXPERIENCE / JOURNEY"
          />

          {/* Desktop Connected Horizontal Timeline (Hidden on small mobile) */}
          <div className="hidden md:block pt-4 pb-2 relative">
            {/* Continuous Red Connecting Line */}
            <div className="absolute top-[21px] left-[5%] right-[5%] h-[1.5px] bg-[#EF3F3F]/60 pointer-events-none" />

            <div className="grid grid-cols-4 gap-6 relative z-10">
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col group"
                >
                  {/* Milestone Marker Dot */}
                  <div className="mb-4 flex items-center">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#EF3F3F] ring-4 ring-[#EF3F3F]/20 group-hover:scale-125 group-hover:ring-[#EF3F3F]/40 transition-all duration-200" />
                  </div>

                  {/* Year/Period */}
                  <span className="text-xs lg:text-sm font-semibold text-[#EF3F3F] mb-1 font-mono tracking-tight">
                    {item.year}
                  </span>

                  {/* Title */}
                  <h3 className="text-sm lg:text-[15px] font-bold text-white mb-1.5 font-sans leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs lg:text-[13px] text-[#A7ADB5] leading-relaxed font-sans pr-2">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Vertical Timeline (Visible on screens < 768px) */}
          <div className="md:hidden relative pl-6 border-l-2 border-[#EF3F3F]/50 flex flex-col gap-6 py-2 ml-2">
            {timelineData.map((item, index) => (
              <motion.div
                key={`mob-${item.year}`}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative group"
              >
                {/* Milestone Dot on Line */}
                <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-[#EF3F3F] ring-4 ring-[#EF3F3F]/20" />

                {/* Year */}
                <span className="text-xs font-semibold text-[#EF3F3F] mb-0.5 block font-mono">
                  {item.year}
                </span>

                {/* Title */}
                <h3 className="text-sm font-bold text-white mb-1 font-sans">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#A7ADB5] leading-relaxed font-sans">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </GlassPanel>
      </motion.div>
    </section>
  );
};
