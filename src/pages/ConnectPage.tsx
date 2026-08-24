import React from 'react';
import {
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  Send,
  User,
  Share2,
  Briefcase,
  Calendar,
  Code2,
  Building,
  Clock,
  Globe,
  ExternalLink,
  Download,
  CheckCircle2,
  Heart,
  Zap,
  Sparkles,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { GlassPanel } from '../components/ui/GlassPanel';
import { SectionHeader } from '../components/ui/SectionHeader';

interface ConnectPageProps {
  onNavigateHome: (sectionId?: string) => void;
}

export const ConnectPage: React.FC<ConnectPageProps> = ({ onNavigateHome }) => {
  return (
    <div className="flex flex-col gap-6 md:gap-8 pb-12 animate-in fade-in duration-300">
      {/* 1. Hero Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative overflow-hidden pt-4 pb-4"
      >
        {/* Ambient red backlight */}
        <div className="hero-ambient-glow" />
        <div className="hero-ambient-glow-left" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Hero Profile Block */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col sm:flex-row items-start sm:items-center lg:items-start gap-6">
            {/* Glowing Avatar */}
            <div className="flex flex-col items-center gap-3 shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#0B0E11] border-2 border-[#EF3F3F] shadow-[0_0_35px_rgba(239,63,63,0.45)] flex items-center justify-center relative group">
                <span className="text-3xl sm:text-4xl font-black font-sans tracking-tighter select-none">
                  <span className="text-white">J</span>
                  <span className="text-[#EF3F3F]">C</span>
                </span>
                <div className="absolute -bottom-1 right-2 w-4 h-4 rounded-full bg-[#22C55E] border-2 border-[#07090B] ring-2 ring-[#22C55E]/40" />
              </div>

              {/* Status Badges */}
              <div className="flex flex-col items-center gap-1.5 text-xs text-slate-300">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/25 text-[#22C55E] font-medium text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                  <span>Open to opportunities</span>
                </div>
                <div className="flex items-center gap-1 text-[#A7ADB5] text-xs">
                  <MapPin className="w-3.5 h-3.5 text-[#EF3F3F]" />
                  <span>India</span>
                </div>
              </div>
            </div>

            {/* Name, Role & Subtext */}
            <div className="flex flex-col">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans mb-1.5">
                JOHN CHRISTAN
              </h1>
              <h2 className="text-lg sm:text-xl font-semibold text-slate-200 tracking-tight mb-3 font-sans">
                Python Django Full-Stack Developer
              </h2>
              <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed max-w-md font-sans">
                Let's connect for opportunities, collaborations, and impactful digital solutions.
              </p>
            </div>
          </div>

          {/* Right Workstation Visual */}
          <div className="lg:col-span-6 xl:col-span-7 flex justify-end items-center -mt-4 lg:mt-0">
            <div className="relative w-full overflow-hidden hero-workstation-blend">
              <img
                src="/images/hero_workstation.jpg"
                alt="Developer Workstation"
                className="w-full h-auto object-cover select-none pointer-events-none"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* 2. Two-Column Middle Cards: Contact Information & Professional Profile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Card 1: CONTACT INFORMATION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <GlassPanel className="p-6 md:p-7 h-full flex flex-col justify-between">
            <div>
              <SectionHeader
                icon={<User className="w-5 h-5" />}
                title="CONTACT INFORMATION"
                className="mb-5"
              />

              <div className="flex flex-col gap-3">
                {/* Email */}
                <a
                  href="mailto:christon236@gmail.com"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#090C0F]/90 border border-white/[0.08] hover:border-[#EF3F3F]/35 hover:shadow-[0_4px_16px_rgba(239,63,63,0.1)] transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] group-hover:border-[#EF3F3F]/25 group-hover:bg-[#EF3F3F]/5 transition-colors flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#EF3F3F]" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] font-medium text-[#A7ADB5] uppercase tracking-wider">Email</span>
                    <span className="text-xs sm:text-sm font-semibold text-white truncate group-hover:text-white">
                      christon236@gmail.com
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+917904742144"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#090C0F]/90 border border-white/[0.08] hover:border-[#EF3F3F]/35 hover:shadow-[0_4px_16px_rgba(239,63,63,0.1)] transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] group-hover:border-[#EF3F3F]/25 group-hover:bg-[#EF3F3F]/5 transition-colors flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#EF3F3F]" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] font-medium text-[#A7ADB5] uppercase tracking-wider">Phone</span>
                    <span className="text-xs sm:text-sm font-semibold text-white truncate">
                      +91 7904742144
                    </span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/917904742144"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#090C0F]/90 border border-white/[0.08] hover:border-[#22C55E]/40 hover:shadow-[0_4px_16px_rgba(34,197,94,0.1)] transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] group-hover:border-[#22C55E]/25 group-hover:bg-[#22C55E]/5 transition-colors flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-[#22C55E]" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] font-medium text-[#A7ADB5] uppercase tracking-wider">WhatsApp</span>
                    <span className="text-xs sm:text-sm font-semibold text-white truncate">
                      +91 7904742144
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#090C0F]/90 border border-white/[0.08]">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#EF3F3F]" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] font-medium text-[#A7ADB5] uppercase tracking-wider">Location</span>
                    <span className="text-xs sm:text-sm font-semibold text-white truncate">
                      Nagercoil, India
                    </span>
                  </div>
                </div>

                {/* Preferred Contact Method */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#090C0F]/90 border border-white/[0.08]">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-[#EF3F3F]" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] font-medium text-[#A7ADB5] uppercase tracking-wider">Preferred Contact Method</span>
                    <span className="text-xs sm:text-sm font-semibold text-white truncate">
                      Email or WhatsApp
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </GlassPanel>
        </motion.div>

        {/* Card 2: PROFESSIONAL PROFILE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <GlassPanel className="p-6 md:p-7 h-full flex flex-col justify-between">
            <div>
              <SectionHeader
                icon={<User className="w-5 h-5" />}
                title="PROFESSIONAL PROFILE"
                className="mb-5"
              />

              <div className="flex flex-col gap-3.5">
                {/* Current Role */}
                <div className="flex items-center justify-between gap-4 p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                  <div className="flex items-center gap-2.5 text-[#EF3F3F] text-xs font-medium">
                    <Briefcase className="w-4 h-4 shrink-0" />
                    <span className="text-slate-300">Current Role</span>
                  </div>
                  <span className="text-xs sm:text-[13px] font-semibold text-white text-right">
                    Full-Stack Developer
                  </span>
                </div>

                {/* Years of Experience */}
                <div className="flex items-center justify-between gap-4 p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                  <div className="flex items-center gap-2.5 text-[#EF3F3F] text-xs font-medium">
                    <Calendar className="w-4 h-4 shrink-0" />
                    <span className="text-slate-300">Years of Experience</span>
                  </div>
                  <span className="text-xs sm:text-[13px] font-semibold text-white text-right">
                    1+ Years
                  </span>
                </div>

                {/* Primary Skills */}
                <div className="flex items-center justify-between gap-4 p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                  <div className="flex items-center gap-2.5 text-[#EF3F3F] text-xs font-medium">
                    <Code2 className="w-4 h-4 shrink-0" />
                    <span className="text-slate-300">Primary Skills</span>
                  </div>
                  <span className="text-xs sm:text-[13px] font-semibold text-white text-right truncate max-w-[260px]">
                    Python, Django, React, TypeScript, REST API, MySQL
                  </span>
                </div>

                {/* Work Preference */}
                <div className="flex items-center justify-between gap-4 p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                  <div className="flex items-center gap-2.5 text-[#EF3F3F] text-xs font-medium">
                    <Building className="w-4 h-4 shrink-0" />
                    <span className="text-slate-300">Work Preference</span>
                  </div>
                  <span className="text-xs sm:text-[13px] font-semibold text-white text-right">
                    Remote / Hybrid / On-site
                  </span>
                </div>

                {/* Availability */}
                <div className="flex items-center justify-between gap-4 p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                  <div className="flex items-center gap-2.5 text-[#EF3F3F] text-xs font-medium">
                    <Clock className="w-4 h-4 shrink-0" />
                    <span className="text-slate-300">Availability</span>
                  </div>
                  <span className="text-xs sm:text-[13px] font-semibold text-[#22C55E] text-right">
                    Available for new opportunities
                  </span>
                </div>

                {/* Languages */}
                <div className="flex items-center justify-between gap-4 p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                  <div className="flex items-center gap-2.5 text-[#EF3F3F] text-xs font-medium">
                    <Globe className="w-4 h-4 shrink-0" />
                    <span className="text-slate-300">Languages</span>
                  </div>
                  <span className="text-xs sm:text-[13px] font-semibold text-white text-right">
                    English, Tamil, Malayalam
                  </span>
                </div>
              </div>
            </div>
          </GlassPanel>
        </motion.div>
      </div>

      {/* 3. CONNECT WITH ME Section (4 Interactive Action Cards) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <GlassPanel className="p-6 md:p-8">
          <SectionHeader
            icon={<Share2 className="w-5 h-5" />}
            title="CONNECT WITH ME"
            className="mb-6"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* LinkedIn Card */}
            <div className="flex flex-col justify-between p-5 rounded-2xl bg-[#090C0F]/90 border border-white/[0.08] hover:border-[#0077B5]/40 hover:shadow-[0_4px_20px_rgba(0,119,181,0.15)] transition-all duration-200 group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0077B5]/10 border border-[#0077B5]/30 flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform">
                  <svg className="w-6 h-6 fill-[#0077B5]" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24"/>
                  </svg>
                </div>
                <h3 className="text-base font-bold text-white mb-1">LinkedIn</h3>
                <p className="text-xs text-[#A7ADB5] leading-relaxed mb-4">
                  Let's connect professionally and grow together.
                </p>
              </div>

              <Button
                href="https://www.linkedin.com/in/john-christan"
                target="_blank"
                variant="primary"
                size="sm"
                icon={<ExternalLink className="w-3.5 h-3.5" />}
                iconPosition="right"
                className="w-full text-xs font-semibold rounded-xl justify-center"
              >
                Connect
              </Button>
            </div>

            {/* GitHub Card */}
            <div className="flex flex-col justify-between p-5 rounded-2xl bg-[#090C0F]/90 border border-white/[0.08] hover:border-white/30 hover:shadow-[0_4px_20px_rgba(255,255,255,0.08)] transition-all duration-200 group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/15 flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform">
                  <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                </div>
                <h3 className="text-base font-bold text-white mb-1">GitHub</h3>
                <p className="text-xs text-[#A7ADB5] leading-relaxed mb-4">
                  Explore my code, projects, and open source work.
                </p>
              </div>

              <Button
                href="https://github.com/christon236"
                target="_blank"
                variant="secondary"
                size="sm"
                icon={<ExternalLink className="w-3.5 h-3.5" />}
                iconPosition="right"
                className="w-full text-xs font-medium rounded-xl justify-center"
              >
                Open
              </Button>
            </div>

            {/* WhatsApp Card */}
            <div className="flex flex-col justify-between p-5 rounded-2xl bg-[#090C0F]/90 border border-white/[0.08] hover:border-[#22C55E]/40 hover:shadow-[0_4px_20px_rgba(34,197,94,0.15)] transition-all duration-200 group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/30 flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-6 h-6 text-[#22C55E]" />
                </div>
                <h3 className="text-base font-bold text-white mb-1">WhatsApp</h3>
                <p className="text-xs text-[#A7ADB5] leading-relaxed mb-4">
                  Quick conversations and real-time collaboration.
                </p>
              </div>

              <Button
                href="https://wa.me/917904742144"
                target="_blank"
                variant="secondary"
                size="sm"
                icon={<ExternalLink className="w-3.5 h-3.5" />}
                iconPosition="right"
                className="w-full text-xs font-medium rounded-xl justify-center hover:border-[#22C55E]/50 hover:text-[#22C55E]"
              >
                Message
              </Button>
            </div>

            {/* Email Card */}
            <div className="flex flex-col justify-between p-5 rounded-2xl bg-[#090C0F]/90 border border-white/[0.08] hover:border-[#EF3F3F]/40 hover:shadow-[0_4px_20px_rgba(239,63,63,0.15)] transition-all duration-200 group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EF3F3F]/10 border border-[#EF3F3F]/30 flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6 text-[#EF3F3F]" />
                </div>
                <h3 className="text-base font-bold text-white mb-1">Email</h3>
                <p className="text-xs text-[#A7ADB5] leading-relaxed mb-4">
                  Drop a message for opportunities or project discussions.
                </p>
              </div>

              <Button
                href="mailto:christon236@gmail.com"
                variant="primary"
                size="sm"
                icon={<ExternalLink className="w-3.5 h-3.5" />}
                iconPosition="right"
                className="w-full text-xs font-semibold rounded-xl justify-center"
              >
                Send Email
              </Button>
            </div>
          </div>
        </GlassPanel>
      </motion.div>

      {/* 4. Bottom Grid: Professional Summary & Want to Know More */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Professional Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <GlassPanel className="p-6 md:p-7 h-full flex flex-col justify-between">
            <div>
              <SectionHeader
                icon={<User className="w-5 h-5" />}
                title="PROFESSIONAL SUMMARY"
                className="mb-4"
              />
              <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed mb-6 font-sans">
                I build scalable web applications, clean backend systems, and intuitive user experiences using Python, Django, and modern technologies. I enjoy turning ideas into impactful digital solutions and collaborating on projects that make a difference.
              </p>
            </div>

            {/* Skill Badges */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.06]">
              {['Clean Code', 'Scalable Systems', 'Problem Solver', 'Always Learning', 'Team Player'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs text-slate-300 font-medium inline-flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3 h-3 text-[#EF3F3F]" />
                  <span>{tag}</span>
                </span>
              ))}
            </div>
          </GlassPanel>
        </motion.div>

        {/* Want to Know More About My Work Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <GlassPanel className="p-6 md:p-7 h-full flex flex-col justify-between border-red-500/25 shadow-[0_0_30px_rgba(239,63,63,0.12)] relative overflow-hidden group">
            {/* Ambient inner red glow */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-wider text-white font-sans mb-2">
                WANT TO KNOW MORE ABOUT MY WORK?
              </h3>
              <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed mb-6 font-sans">
                Check out my projects, case studies, and experience.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Button
                onClick={() => onNavigateHome('projects')}
                variant="primary"
                size="md"
                icon={<Code2 className="w-4 h-4" />}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl"
              >
                View Portfolio
              </Button>

              <Button
                href="/John_Christan_Resume.pdf"
                download="John_Christan_Resume.pdf"
                target="_blank"
                variant="secondary"
                size="md"
                icon={<Download className="w-4 h-4 text-slate-300" />}
                className="px-5 py-2.5 text-xs sm:text-sm font-medium rounded-xl"
              >
                Download Resume
              </Button>
            </div>
          </GlassPanel>
        </motion.div>
      </div>

      {/* 5. Bottom Banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <GlassPanel className="p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 border-white/[0.08]">
          <div className="flex items-center gap-3.5 text-center md:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#EF3F3F]/10 border border-[#EF3F3F]/25 flex items-center justify-center text-[#EF3F3F] shrink-0 hidden sm:flex">
              <Send className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-0.5">Let's build something great together.</h4>
              <p className="text-xs text-[#A7ADB5]">
                I'm always excited to work on meaningful projects and collaborate with amazing people.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-[#A7ADB5] shrink-0">
            <div className="flex items-center gap-1.5">
              <Heart className="w-4 h-4 text-[#EF3F3F]" />
              <span>Available for opportunities</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-[#F59E0B]" />
              <span>Response within 24 hours</span>
            </div>
          </div>
        </GlassPanel>
      </motion.div>
    </div>
  );
};
