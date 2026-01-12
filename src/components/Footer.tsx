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
      <div className="container mx-auto px-4 text-center">

        <h3 className={`text-2xl font-bold mb-6 ${isArabic ? 'arabic-font' : 'tracking-wider'}`}>
          {content.nav.contact}
        </h3>

        <div className="flex justify-center items-center gap-8 text-2xl mb-8 flex-wrap">
          {SOCIAL_LINKS.map((link) => {
            const Icon = socialIcons[link.icon];
            return (
              <a
                key={link.icon}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-800 hover:bg-taupe hover:text-white transition-all duration-300"
                aria-label={link.icon}
              >
                <Icon />
              </a>
            );
          })}
        </div>


        <p className={`text-lg mb-2 ${isArabic ? 'arabic-font' : ''}`}>
          <a href="tel:+212607736762" className="hover:underline" dir="ltr">
            +212 607-736762
          </a>
        </p>
        <div className={`flex flex-col items-center gap-4 mb-8 text-lg ${isArabic ? 'arabic-font' : ''}`}>
          {content.locations.items.map((loc, idx) => (
            <p key={idx} className={`flex items-center ${isArabic ? 'flex-row-reverse' : ''}`}>
              <FaMapMarkerAlt className={`text-xl text-taupe ${isArabic ? 'ml-2' : 'mr-2'}`} />
              <span className="font-medium">{loc.name}:</span>
              <span className="mx-2">{loc.address}</span>
            </p>
          ))}
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6">
          <p className="text-sm text-gray-400">
            {content.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;