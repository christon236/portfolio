import React from 'react';
import { Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { skillsData } from '../../data/portfolioData';
import { GlassPanel } from '../ui/GlassPanel';
import { SectionHeader } from '../ui/SectionHeader';
import { TechChip } from '../ui/TechChip';

export const Skills: React.FC = () => {
  // Split into row 1 (8 items) and row 2 (6 items)
  const row1 = skillsData.slice(0, 8);
  const row2 = skillsData.slice(8);

  // Duplicate arrays to create a seamless infinite loop
  const marqueeRow1 = [...row1, ...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2, ...row2, ...row2];

  return (
    <section id="skills" className="relative scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <GlassPanel className="p-6 md:p-8">
          <SectionHeader
            icon={<Code2 className="w-5 h-5" />}
            title="SKILLS / TECH STACK"
          />

          <div className="flex flex-col gap-4 overflow-hidden">
            {/* Row 1: Scrolling Left */}
            <div className="marquee-container py-1">
              <div className="animate-marquee-left marquee-track gap-3.5 hover:[animation-play-state:paused]">
                {marqueeRow1.map((skill, index) => (
                  <TechChip
                    key={`r1-${skill.name}-${index}`}
                    name={skill.name}
                    iconKey={skill.iconKey}
                    index={index % row1.length}
                  />
                ))}
              </div>
            </div>

            {/* Row 2: Scrolling Right */}
            <div className="marquee-container py-1">
              <div className="animate-marquee-right marquee-track gap-3.5 hover:[animation-play-state:paused]">
                {marqueeRow2.map((skill, index) => (
                  <TechChip
                    key={`r2-${skill.name}-${index}`}
                    name={skill.name}
                    iconKey={skill.iconKey}
                    index={(index % row2.length) + row1.length}
                  />
                ))}
              </div>
            </div>
          </div>
        </GlassPanel>
      </motion.div>
    </section>
  );
};
