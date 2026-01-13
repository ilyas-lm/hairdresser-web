import React from 'react';
import { SOCIAL_LINKS, type Content } from '../data';
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube, FaMapMarkerAlt, FaTiktok } from 'react-icons/fa';

interface FooterProps {
  content: Content;
}

const socialIcons: { [key: string]: React.ElementType } = {
  facebook: FaFacebook,
  instagram: FaInstagram,
  whatsapp: FaWhatsapp,
  youtube: FaYoutube,
  tiktok: FaTiktok,
};

const Footer: React.FC<FooterProps> = ({ content }) => {
  const isArabic = content.lang === 'AR';

  return (
    <footer id="footer" className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Contact Title */}
        <h3 className={`font-serif font-bold text-2xl text-center mb-8 ${isArabic ? 'arabic-font' : 'tracking-wider'}`}>
          {content.nav.contact}
        </h3>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-4 mb-8 flex-wrap">
          {SOCIAL_LINKS.map((link) => {
            const Icon = socialIcons[link.icon];
            return (
              <a
                key={link.icon}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800 hover:bg-taupe hover:text-white transition-all duration-300"
                aria-label={link.icon}
              >
                <Icon />
              </a>
            );
          })}
        </div>

        {/* Phone Number */}
        <div className="text-center mb-6">
          <a
            href="tel:+212607736762"
            className="text-lg hover:underline inline-block px-4 py-2"
            dir="ltr"
          >
            +212 607-736762
          </a>
        </div>

        {/* Locations - Stacked for mobile */}
        <div className="mb-8">
          {content.locations.items.map((loc, idx) => (
            <div
              key={idx}
              className={`mb-4 last:mb-0 ${isArabic ? 'text-right' : 'text-left'}`}
            >
              <div className={`flex ${isArabic ? 'flex-row-reverse' : 'flex-row'} items-center gap-2 mb-1`}>
                <FaMapMarkerAlt className="text-taupe flex-shrink-0" />
                <span className="font-medium">{loc.name}:</span>
              </div>
              <p className={`text-gray-300 ${isArabic ? 'pr-6' : 'pl-6'} break-words`}>
                {loc.address}
              </p>
            </div>
          ))}
        </div>

        {/* Copyright - UPDATED WITH BRAND FONT */}
        <div className="pt-6 border-t border-gray-700">
          <p className="font-serif font-normal tracking-[0.1em] text-sm text-gray-400 text-center">
            {content.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;