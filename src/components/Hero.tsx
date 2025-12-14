import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS, type Content } from '../data';

interface HeroSectionProps {
  content: Content;
}

const HeroSection: React.FC<HeroSectionProps> = ({ content }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 text-center bg-cream-50 min-h-[80vh] flex flex-col justify-center overflow-hidden">
      /* Background Image with Overlay */
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/hero-bg.png")' }}
      />
      <div className="absolute inset-0 z-0 bg-white/70 backdrop-blur-[2px]" />

      <div className="container mx-auto px-4 flex flex-col items-center relative z-10">


        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/logo_final.png"
            alt="Blissful & Beautiful"
            className="w-64 md:w-96 h-auto mx-auto object-contain"
          />
        </motion.div>


        <h1 className="sr-only">Blissful & Beautiful</h1>

        <motion.p
          className={`text-xl md:text-2xl mb-8 text-charcoal/80 ${content.lang === 'AR' ? 'arabic-font' : 'tracking-wide'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {content.hero.subtitle}
        </motion.p>

        <motion.a
          id="book"
          href={SOCIAL_LINKS.find(l => l.icon === 'whatsapp')?.link || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-taupe text-white text-lg font-medium tracking-wider hover:bg-taupe-dark transition duration-300 uppercase shadow-md rounded-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {content.hero.button}
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;