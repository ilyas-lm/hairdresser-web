import React from 'react';
import { motion } from 'framer-motion';
import { type Content } from '../data';
import { FaHeart, FaStar, FaHandshake } from 'react-icons/fa';

interface PhilosophySectionProps {
  content: Content;
}

const PhilosophySection: React.FC<PhilosophySectionProps> = ({ content }) => {
  const { cards } = content.philosophy;
  const isArabic = content.lang === 'AR';
  const philosophyCards = [
    { ...cards.listen, icon: FaHandshake },
    { ...cards.quality, icon: FaStar },
    { ...cards.passion, icon: FaHeart },
  ];

  return (
    <section id="philosophy" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text - 4xl font - bold mb - 3 text - taupe - dark border - b - 2 border - taupe / 30 inline - block pb - 1 ${isArabic ? 'arabic-font' : 'tracking-wider'} `}>
            {content.philosophy.title}
          </h2>
          <p className={`text - xl text - gray - 500 mb - 16 ${isArabic ? 'arabic-font' : ''} `}>
            {content.philosophy.description}
          </p>
        </motion.div>

        <div
          className={`grid md: grid - cols - 3 gap - 10 ${isArabic ? 'md:space-x-reverse' : ''} `}
        >
          {philosophyCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center text-center p-6 hover:bg-cream-50 transition duration-500 rounded-sm"
            >
              <card.icon className="text-4xl text-taupe mb-4" />
              <h3 className={`text - xl font - bold mb - 3 text - charcoal ${isArabic ? 'arabic-font' : ''} `}>
                {card.title}
              </h3>
              <p className={`text - gray - 600 ${isArabic ? 'arabic-font' : ''} `}>
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PhilosophySection;