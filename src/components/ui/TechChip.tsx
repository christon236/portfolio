import React from 'react';
import { motion } from 'framer-motion';
import { TechIcon } from './TechIcons';

interface TechChipProps {
  name: string;
  iconKey: string;
  index?: number;
}

export const TechChip: React.FC<TechChipProps> = ({
  name,
  iconKey,
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.03 }}
      whileHover={{ y: -2, transition: { duration: 0.15 } }}
      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#090C0F]/90 border border-white/[0.08] hover:border-[#EF3F3F]/35 hover:shadow-[0_2px_14px_rgba(239,63,63,0.12)] transition-all duration-200 cursor-default select-none group min-h-[44px]"
    >
      <div className="flex items-center justify-center shrink-0 w-5 h-5 group-hover:scale-105 transition-transform duration-200">
        <TechIcon name={iconKey} className="w-5 h-5" />
      </div>
      <span className="text-xs md:text-sm font-medium text-[#E2E8F0] group-hover:text-white transition-colors whitespace-nowrap font-sans">
        {name}
      </span>
    </motion.div>
  );
};
