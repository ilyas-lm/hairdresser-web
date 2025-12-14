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

        {/* Left Side: Language & Social Links (Desktop) */}
        <div className={`flex items-center gap-4 ${isArabic ? 'flex-row-reverse' : ''}`}>
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


        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wider uppercase text-gray-600">
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
            className="text-white bg-taupe px-5 py-2 hover:bg-taupe-dark transition duration-300 rounded-sm shadow-sm"
          >
            {content.nav.book}
          </a>
        </nav>

        {/* Right Side: Logo & Hamburger */}
        <div className="flex items-center gap-4">
          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-2xl text-taupe hover:text-taupe-dark transition focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className="text-right hidden sm:block">
            <h1 className="text-lg font-bold uppercase tracking-widest text-charcoal leading-tight">
              BLISSFUL & BEAUTIFUL
            </h1>
            <span className="block text-xs font-normal text-taupe uppercase tracking-wider">
              Institut de beauté
            </span>
          </div>
          <img
            src="/logo_symbol.png"
            alt="Logo"
            className="h-10 w-auto object-contain drop-shadow-sm"
          />
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
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium tracking-wide text-charcoal hover:text-taupe transition duration-300 uppercase"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#locations"
                onClick={() => setIsMenuOpen(false)}
                className="text-white bg-taupe px-8 py-3 text-lg hover:bg-taupe-dark transition duration-300 rounded-sm shadow-sm"
              >
                {content.nav.book}
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