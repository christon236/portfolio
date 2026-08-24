import React from 'react';
import { User } from 'lucide-react';
import { motion } from 'framer-motion';
import { aboutData } from '../../data/portfolioData';
import { GlassPanel } from '../ui/GlassPanel';
import { SectionHeader } from '../ui/SectionHeader';
import { MetricCard } from '../ui/MetricCard';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <GlassPanel className="p-6 md:p-8">
          <SectionHeader
            icon={<User className="w-5 h-5" />}
            title="ABOUT ME"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Column: Bio Text */}
            <div className="lg:col-span-4 xl:col-span-4">
              <p className="text-sm md:text-[15px] text-[#A7ADB5] leading-relaxed font-sans pr-0 lg:pr-2">
                {aboutData.bio}
              </p>
            </div>

            {/* Right Column: 4 Metric Cards */}
            <div className="lg:col-span-8 xl:col-span-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3.5">
              {aboutData.metrics.map((metric, index) => (
                <MetricCard
                  key={metric.id}
                  id={metric.id}
                  icon={metric.icon}
                  value={metric.value}
                  label={metric.label}
                  index={index}
                />
              ))}
            </div>
          </div>
        </GlassPanel>
      </motion.div>
    </section>
  );
};
