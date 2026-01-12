import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SOCIAL_LINKS, type Content } from '../data';

interface HeroSectionProps {
  content: Content;
}

const HeroSection: React.FC<HeroSectionProps> = ({ content }) => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 500], [0, 250]);

  return (
    <section id="home" className="relative pt-32 pb-20 text-center bg-cream-50 min-h-[90vh] flex flex-col justify-center overflow-hidden">

      {/* 1. The Deep Background Image */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/hero-bg.png")',
          y: yBg,
          scale: 1.1 // Slightly zoomed for smoother parallax
        }}
      />

      {/* 2. The Glass Overlay (This creates the "sitting on blurred picture" effect) */}
      <div className="absolute inset-0 z-0 bg-white/60 backdrop-blur-[6px]" />

      <div className="container mx-auto px-4 flex flex-col items-center relative z-10">

        <motion.div
          className="mb-8 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* 3. The Logo - Ensure this file is a transparent PNG */}
          <img
            src="/hero_symbol_black.png"
            alt="Blissful & Beautiful Logo"
            className="w-48 md:w-80 h-auto mx-auto object-contain mb-10 drop-shadow-sm"
          />

          <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-[0.2em] text-charcoal leading-tight font-serif">
            BLISSFUL & BEAUTIFUL
          </h1>
          <span className="block text-lg md:text-2xl font-normal text-taupe uppercase tracking-[0.3em] mt-4 font-sans">
            Institut de beauté
          </span>
        </motion.div>

        {/* ... rest of your subtitle and button code ... */}
        <motion.p
          className={`text-xl md:text-2xl mb-12 text-charcoal/80 max-w-2xl ${content.lang === 'AR' ? 'arabic-font' : 'tracking-wide'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {content.hero.subtitle}
        </motion.p>

        <motion.a
          id="book"
          href={SOCIAL_LINKS.find(l => l.icon === 'whatsapp')?.link || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shimmer inline-block px-12 py-5 bg-taupe text-white text-lg font-medium tracking-widest hover:bg-taupe-dark transition-all duration-300 uppercase shadow-lg rounded-sm"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10">{content.hero.button}</span>
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;