import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SOCIAL_LINKS, type Content } from '../data';

interface HeroSectionProps {
  content: Content;
}

const HeroSection: React.FC<HeroSectionProps> = ({ content }) => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 500], [0, 250]);
  const isArabic = content.lang === 'AR';

  return (
    <section id="home" className="relative pt-32 pb-20 text-center bg-cream-50 min-h-[90vh] flex flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/hero-bg.png")',
          y: yBg,
          scale: 1.1
        }}
      />

      {/* Glass Overlay */}
      <div className="absolute inset-0 z-0 bg-white/60 backdrop-blur-[6px]" />

      <div className="container mx-auto px-4 flex flex-col items-center relative z-10">
        <motion.div
          className="mb-8 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Symbol Logo */}
          <img
            src="/hero_symbol_black.png"
            alt="Blissful & Beautiful Logo"
            className="black-filter w-48 md:w-80 h-auto mx-auto object-contain mb-10 drop-shadow-sm"
          />

          {/* Brand Text - Dynamic based on language */}
          {isArabic ? (
            // Arabic text version
            <div className="flex flex-col items-center mb-8">
              <h1 className="exact-brand-font text-4xl md:text-5xl text-black mb-2">
                {content.heroTitleAr || "بليسفول آند بيوتيفول"}
              </h1>
              <p className="exact-brand-subtitle text-xl md:text-2xl text-gray-600">
                {content.heroSubtitleAr || "مركز التجميل"}
              </p>
            </div>
          ) : (
            // English/French image version
            <img
              src="/b&b.png"
              alt="BLISSFUL & BEAUTIFUL Institut de beauté"
              className="brand-text-black w-72 md:w-96 h-auto mx-auto object-contain mb-8 filter brightness-0"
            />
          )}
        </motion.div>

        {/* Hero Description */}
        <motion.p
          className={`text-xl md:text-2xl mb-12 text-charcoal/80 max-w-2xl ${isArabic ? 'arabic-font' : 'tracking-wide'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {content.hero.subtitle}
        </motion.p>

        {/* CTA Button */}
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