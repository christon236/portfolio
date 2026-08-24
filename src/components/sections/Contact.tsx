import React from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { contactData } from '../../data/portfolioData';
import { GlassPanel } from '../ui/GlassPanel';
import { ContactCard } from '../ui/ContactCard';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <GlassPanel className="p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div className="flex items-center gap-3">
              <div className="text-[#EF3F3F] flex items-center justify-center shrink-0">
                <Send className="w-5 h-5" />
              </div>
              <h2 className="text-base md:text-lg font-bold tracking-wider uppercase text-white font-sans m-0">
                CONTACT
              </h2>
            </div>
            <p className="text-xs md:text-sm text-[#A7ADB5] font-sans">
              Let's build something amazing together. Feel free to reach out!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {contactData.map((contact, index) => (
              <ContactCard
                key={contact.type}
                contact={contact}
                index={index}
              />
            ))}
          </div>
        </GlassPanel>
      </motion.div>
    </section>
  );
};
