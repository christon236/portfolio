import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import type { ProjectItem } from '../../types/portfolio';
import { Button } from './Button';

interface ProjectCardProps {
  project: ProjectItem;
  index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="flex flex-col sm:flex-row gap-5 p-4 sm:p-5 rounded-2xl bg-[#090C0F]/90 border border-white/[0.08] hover:border-[#EF3F3F]/35 hover:shadow-[0_8px_30px_rgba(239,63,63,0.12)] transition-all duration-200 group"
    >
      {/* Left: Project Screenshot Preview */}
      <div className="w-full sm:w-[46%] lg:w-[44%] shrink-0 rounded-xl overflow-hidden border border-white/[0.08] bg-[#07090B] relative aspect-video sm:aspect-[4/3] flex items-center justify-center">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090B]/60 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Right: Content Details */}
      <div className="flex flex-col justify-between flex-1 min-w-0">
        <div>
          {/* Title */}
          <h3 className="text-base lg:text-[17px] font-bold text-white tracking-tight leading-snug mb-2 font-sans">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-[13px] lg:text-xs xl:text-[13px] text-[#A7ADB5] leading-relaxed mb-3.5 font-sans">
            {project.description}
          </p>

          {/* Tech Pills */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.08] text-[11px] font-medium text-slate-300 font-sans"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 pt-1">
          <Button
            href={project.liveUrl}
            target="_blank"
            variant="primary"
            size="sm"
            icon={<ExternalLink className="w-3.5 h-3.5" />}
            iconPosition="right"
            className="text-xs font-semibold px-4 py-2 rounded-lg"
          >
            Live Demo
          </Button>

          <Button
            href={project.githubUrl}
            target="_blank"
            variant="secondary"
            size="sm"
            icon={
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            }
            className="text-xs font-medium px-3.5 py-2 rounded-lg"
          >
            GitHub
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
