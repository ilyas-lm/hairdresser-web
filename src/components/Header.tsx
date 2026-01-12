import React, { useState } from 'react';
import { SOCIAL_LINKS, type Content, type Language } from '../data.ts';
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube, FaTiktok, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  content: Content;
  lang: Language;
  setLang: (lang: Language) => void;
}

const socialIcons: { [key: string]: React.ElementType } = {
  facebook: FaFacebook,
  instagram: FaInstagram,
  whatsapp: FaWhatsapp,
  youtube: FaYoutube,
  tiktok: FaTiktok,
};

const Header: React.FC<HeaderProps> = ({ content, lang, setLang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isArabic = lang === 'AR';

  const navLinks = [
    { label: content.nav.philosophy, id: 'philosophy' },
    { label: content.nav.specialties, id: 'specialties' },
    { label: content.nav.pricing, id: 'pricing' },
    { label: content.nav.contact, id: 'footer' },
  ];

  const handleLangToggle = () => {
    setLang(lang === 'FR' ? 'AR' : 'FR');
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm border-b border-taupe/20 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo & Hamburger - Always order-1 (left in LTR, right in RTL via dir attribute) */}
        <div className="flex items-center gap-4 order-1">
          <img
            src="/hero_symbol_black.png"
            alt="Logo"
            className="h-10 w-auto object-contain drop-shadow-sm"
          />

          <div className={`hidden sm:block font-serif ${isArabic ? 'text-right' : 'text-left'}`}>
            <h1 className="text-lg font-bold uppercase tracking-widest text-charcoal leading-tight">
              BLISSFUL & BEAUTIFUL
            </h1>
            <span className="block text-xs font-normal text-taupe uppercase tracking-wider">
              Institut de beauté
            </span>
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-2xl text-taupe hover:text-taupe-dark transition focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>


        {/* Desktop Navigation - Always order-2 (center) */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wider uppercase text-gray-600 order-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="hover:text-taupe transition duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#locations"
            className="btn-shimmer text-white bg-taupe px-5 py-2 hover:bg-taupe-dark transition duration-300 rounded-sm shadow-sm relative overflow-hidden"
          >
            <span className="relative z-10">{content.nav.book}</span>
          </a>
        </nav>

        {/* Language & Social Links - Always order-3 (right in LTR, left in RTL via dir attribute) */}
        <div className={`flex items-center gap-4 order-3 ${isArabic ? 'flex-row-reverse' : ''}`}>
          {/* Language Toggle */}
          <button
            onClick={handleLangToggle}
            className="border border-gra-300 px-2 py-1 text-sm font-bold text-charcoal hover:bg-cream-100 hover:text-taupe transition duration-300 hidden md:block"
          >
            {isArabic ? 'FR' : 'AR'}
          </button>


          <div className="hidden md:flex items-center gap-6 text-xl text-gray-500">
            {SOCIAL_LINKS.map((link) => {
              const Icon = socialIcons[link.icon];
              return (
                <a
                  key={link.icon}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-taupe transition duration-300"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-t border-taupe/10 overflow-hidden"
          >
            <div className="flex flex-col items-center py-8 space-y-6">
              {/* Mobile Language Toggle */}
              <button
                onClick={handleLangToggle}
                className="mb-4 border border-taupe/30 px-4 py-1 text-sm font-bold text-charcoal hover:bg-cream-100 transition duration-300"
              >
                {isArabic ? 'Switch to French' : 'Switch to Arabic'}
              </button>

              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    // Close menu FIRST for stable scroll target
                    setIsMenuOpen(false);

                    const target = document.getElementById(link.id);
                    if (target) {
                      // Slight delay to allow menu animation to start/layout to settle
                      setTimeout(() => {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }, 100);
                    }
                  }}
                  className="text-lg font-medium tracking-wide text-charcoal hover:text-taupe transition duration-300 uppercase"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#locations"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);

                  const target = document.getElementById('locations');
                  if (target) {
                    setTimeout(() => {
                      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                  }
                }}
                className="btn-shimmer text-white bg-taupe px-8 py-3 text-lg hover:bg-taupe-dark transition duration-300 rounded-sm shadow-sm relative overflow-hidden"
              >
                <span className="relative z-10">{content.nav.book}</span>
              </a>

              {/* Mobile Social Links */}
              <div className="flex items-center gap-8 mt-4 text-2xl text-gray-500">
                {SOCIAL_LINKS.map((link) => {
                  const Icon = socialIcons[link.icon];
                  return (
                    <a
                      key={link.icon}
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-taupe transition duration-300"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;