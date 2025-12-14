import React from 'react';
import { motion } from 'framer-motion';
import { type Content } from '../data';

interface PricingSectionProps {
  content: Content;
}

const PricingSection: React.FC<PricingSectionProps> = ({ content }) => {
  const isArabic = content.lang === 'AR';


  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-3xl font-bold text-taupe-dark mb-4 ${isArabic ? 'arabic-font' : 'uppercase tracking-widest'}`}>
            {content.pricing.title}
          </h2>
          <div className="w-16 h-1 bg-taupe/30 mx-auto"></div>
        </motion.div>

        <div className={`columns-1 lg:columns-2 gap-8 space-y-8 ${isArabic ? 'rtl' : 'ltr'}`}>
          {content.pricing.sections.map((section, idx) => (
            <motion.div
              key={idx}
              className="break-inside-avoid mb-8 bg-cream-50 p-8 rounded-lg border border-taupe/10 shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className={`text-2xl font-bold text-taupe mb-6 border-b border-taupe/20 pb-2 ${isArabic ? 'arabic-font' : 'uppercase tracking-wider'}`}>
                {section.title}
              </h3>

              {section.subsections && section.subsections.map((sub, sIdx) => (
                <div key={sIdx} className="mb-6 last:mb-0">
                  <h4 className={`text-lg font-bold text-gray-700 mb-3 ${isArabic ? 'arabic-font' : ''}`}>
                    {sub.title}
                  </h4>
                  {sub.title && sub.title.includes('-') && (
                    <h5 className={`text-md font-serif italic text-taupe mb-3 -mt-2 ${isArabic ? 'text-right' : 'text-left'}`}>
                      {sub.title.split('-')[1].trim()}
                    </h5>
                  )}


                  <ul className="space-y-3">
                    {sub.items.map((item, iIndex) => (
                      <li key={iIndex} className={`flex justify-between items-end text-sm md:text-[0.925rem] text-gray-700 leading-tight ${isArabic ? 'flex-row-reverse arabic-font' : ''}`}>
                        <span className={`font-medium ${isArabic ? 'ml-2' : 'mr-2'} w-2/3`}>{item.name}</span>
                        <span className="flex-1 border-b border-dotted border-gray-300 mx-1 mb-1 opacity-50"></span>
                        <span className="font-bold text-taupe-dark whitespace-nowrap">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;