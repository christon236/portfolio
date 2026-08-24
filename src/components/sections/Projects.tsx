import React from 'react';
import { FolderGit2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { projectsData } from '../../data/portfolioData';
import { GlassPanel } from '../ui/GlassPanel';
import { SectionHeader } from '../ui/SectionHeader';
import { ProjectCard } from '../ui/ProjectCard';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <GlassPanel className="p-6 md:p-8">
          <SectionHeader
            icon={<FolderGit2 className="w-5 h-5" />}
            title="FEATURED PROJECTS"
            action={{
              label: 'View All Projects →',
              href: 'https://github.com/christon236',
            }}
          />

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </GlassPanel>
      </motion.div>
    </section>
  );
};
