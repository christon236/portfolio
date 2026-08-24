import React from 'react';
import { Calendar, Code2, Trophy, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

interface MetricCardProps {
  id: string;
  icon: string;
  value: string;
  label: string;
  index?: number;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  icon,
  value,
  label,
  index = 0,
}) => {
  const renderIcon = () => {
    switch (icon.toLowerCase()) {
      case 'calendar':
        return <Calendar className="w-5 h-5 md:w-6 md:h-6 text-[#EF3F3F]" />;
      case 'code':
        return <Code2 className="w-5 h-5 md:w-6 md:h-6 text-[#EF3F3F]" />;
      case 'trophy':
        return <Trophy className="w-5 h-5 md:w-6 md:h-6 text-[#EF3F3F]" />;
      case 'rocket':
        return <Rocket className="w-5 h-5 md:w-6 md:h-6 text-[#EF3F3F]" />;
      default:
        return <Code2 className="w-5 h-5 md:w-6 md:h-6 text-[#EF3F3F]" />;
    }
  };

  const isNumeric = value.includes('+');

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="flex items-center gap-3.5 p-4 rounded-xl bg-[#090C0F]/90 border border-white/[0.08] hover:border-[#EF3F3F]/35 hover:shadow-[0_4px_20px_rgba(239,63,63,0.1)] transition-all duration-200 group w-full min-w-0"
    >
      {/* Icon Box */}
      <div className="w-11 h-11 rounded-lg bg-white/[0.03] border border-white/[0.06] group-hover:border-[#EF3F3F]/25 group-hover:bg-[#EF3F3F]/5 transition-colors flex items-center justify-center shrink-0">
        {renderIcon()}
      </div>

      {/* Text Block - 2 Distinct Full Lines */}
      <div className="flex flex-col justify-center min-w-0 flex-1">
        <span
          className={`font-bold font-sans text-white tracking-tight leading-tight whitespace-nowrap ${
            isNumeric ? 'text-xl sm:text-2xl md:text-[22px] lg:text-2xl' : 'text-sm sm:text-[15px] md:text-sm lg:text-[15px]'
          }`}
        >
          {value}
        </span>
        <span className="text-xs sm:text-[13px] text-[#A7ADB5] font-normal leading-normal whitespace-nowrap mt-0.5">
          {label}
        </span>
      </div>
    </motion.div>
  );
};
