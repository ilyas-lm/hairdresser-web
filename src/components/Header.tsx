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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm border-b border-taupe/20 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo & Hamburger - SIMPLIFIED FIX */}
        <div className="flex items-center gap-4 order-1">
          <img
            src="/hero_symbol_black.png"
            alt="Logo"
            className="h-10 w-auto object-contain drop-shadow-sm"
          />

          {/* Name & Subtitle next to logo */}
          <div className={`hidden sm:flex flex-col font-serif ${isArabic ? 'text-right' : 'text-left'}`}>
            <h1 className="text-lg font-bold uppercase tracking-widest text-charcoal leading-tight">
              {lang === 'AR' ? content.heroTitleAr : lang === 'FR' ? content.heroTitleFr : content.heroTitleEn}
            </h1>
            <span className="block text-xs font-normal text-taupe uppercase tracking-wider">
              {lang === 'AR' ? content.heroSubtitleAr : lang === 'FR' ? content.heroSubtitleFr : content.heroSubtitleEn}
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wider uppercase text-gray-600 order-2">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="hover:text-taupe transition duration-300">
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

        {/* Language, Social Links & Hamburger - UPDATED POSITIONING */}
        <div className={`flex items-center gap-4 order-3 ${isArabic ? 'flex-row-reverse' : ''}`}>
          {/* Hamburger Menu - MOVED HERE */}
          <button
            onClick={toggleMenu}
            className={`lg:hidden text-2xl text-taupe hover:text-taupe-dark transition focus:outline-none ${isArabic ? 'ml-4' : 'mr-4'}`}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Desktop Language Buttons */}
          <div className="hidden md:flex gap-2">
            {(['AR', 'FR', 'EN'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2 py-1 text-sm font-bold border rounded transition ${lang === l
                  ? 'bg-taupe text-white border-taupe'
                  : 'bg-white text-charcoal border-gray-300 hover:bg-cream-100 hover:text-taupe'
                  }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Social Icons */}
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

      {/* Mobile Menu - Keep as before */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-t border-taupe/10 overflow-hidden"
            dir={isArabic ? 'rtl' : 'ltr'}
          >
            <div className={`flex flex-col items-center py-8 space-y-6 ${isArabic ? 'text-right' : 'text-left'}`}>
              {/* Mobile Language Buttons */}
              <div className="flex gap-2 mb-4">
                {(['AR', 'FR', 'EN'] as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLang(l);
                      setIsMenuOpen(false); // close menu on selection
                    }}
                    className={`px-3 py-1 text-sm font-bold border rounded transition ${lang === l
                      ? 'bg-taupe text-white border-taupe'
                      : 'bg-white text-charcoal border-taupe/30 hover:bg-cream-100 hover:text-taupe'
                      }`}
                  >
                    {l}
                  </button>
                ))}
              </div>

              {/* Mobile Nav Links */}
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    const target = document.getElementById(link.id);
                    if (target) setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
                  }}
                  className="text-lg font-medium tracking-wide text-charcoal hover:text-taupe transition duration-300 uppercase"
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile CTA Button */}
              <a
                href="#locations"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  const target = document.getElementById('locations');
                  if (target) setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
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