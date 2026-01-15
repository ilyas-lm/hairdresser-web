import React from 'react';
import { motion } from 'framer-motion';
import { type Content } from '../data';

interface PricingSectionProps {
  content: Content;
}

const PricingSection: React.FC<PricingSectionProps> = ({ content }) => {
  const isArabic = content.lang === 'AR';

  return (
    <section id="pricing" className="py-16 md:py-20 bg-[var(--menu-bg)]">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Main Title Image */}
          <div className="flex justify-center items-center mb-6 md:mb-8">
            <img
              src="/b&b.png"
              alt="Blissful & Beautiful"
              className="mx-auto max-w-full h-auto filter brightness-0"
              style={{
                maxWidth: '500px',
                width: '100%',
                height: 'auto'
              }}
            />
          </div>

          {/* Optional subtitle */}
          {content.pricing.subtitle && (
            <p className="text-base md:text-lg font-serif text-gray-700 mt-4">
              {content.pricing.subtitle}
            </p>
          )}
        </motion.div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 ${isArabic ? 'rtl' : 'ltr'}`}>
          {content.pricing.sections.map((section, idx) => (
            <motion.div
              key={idx}
              className="mb-8 md:mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              {/* Main Section Title with Icon */}
              <div className={`flex items-center mb-6 ${isArabic ? 'flex-row-reverse' : 'flex-row'}`}>
                <img
                  src="/logo_symbol.png"
                  alt=""
                  className={`h-5 md:h-6 w-auto opacity-80 ${isArabic ? 'ml-2 md:ml-3' : 'mr-2 md:mr-3'}`}
                />
                <h3 className="text-xl md:text-2xl font-bold font-serif text-charcoal uppercase tracking-[0.15em]">
                  {section.title}
                </h3>
              </div>

              {section.subsections && section.subsections.map((sub, sIdx) => {
                const showCategory = sub.category && (sIdx === 0 || section.subsections[sIdx - 1].category !== sub.category);

                return (
                  <div key={sIdx} className="mb-8 last:mb-0">
                    {/* Level 2 Header (Category) */}
                    {showCategory && (
                      <h4 className="text-base md:text-lg font-medium font-serif text-gray-800 mb-4 mt-6 first:mt-0 pb-2 border-b border-gray-200">
                        {sub.category}
                      </h4>
                    )}

                    {/* Brand Name or Subsection Title */}
                    {sub.title && (
                      <div className={`mb-3 ${sub.category ? 'mt-4' : 'mt-0'}`}>
                        {(sub.title.includes('—')) ? (
                          <div className="flex items-center mb-2">
                            <h5 className="text-sm md:text-base font-semibold font-serif text-gray-800 uppercase tracking-wider whitespace-nowrap">
                              {sub.title}
                            </h5>
                            <div className="flex-1 border-b border-gray-400 h-px ml-2 md:ml-3"></div>
                          </div>
                        ) : sub.title ? (
                          <h4 className="text-base md:text-lg font-semibold font-serif text-gray-800 mb-3">
                            {sub.title}
                          </h4>
                        ) : null}
                      </div>
                    )}

                    {/* Service Items - PERFECT DOTTED LINE LAYOUT */}
                    <ul className="space-y-1.5">
                      {sub.items.map((item, iIndex) => (
                        <li
                          key={iIndex}
                          className={`${item.isNote ? 'italic text-xs md:text-sm text-gray-600 leading-tight mt-1 pl-3' : ''}`}
                        >
                          {item.isNote ? (
                            // Note items (italic, no price)
                            <span className="block text-gray-500">
                              {item.name}
                            </span>
                          ) : (
                            // Regular service items - PERFECT LAYOUT LIKE SCREENSHOT
                            <div className="flex items-baseline justify-between group hover:bg-gray-50/30 px-1 py-1.5 rounded transition-colors duration-150">
                              {/* Service name with optional dotted line */}
                              <div className="flex-1 min-w-0">
                                <span className="font-serif text-sm md:text-[15px] text-gray-900 leading-relaxed pr-1">
                                  {item.name}
                                </span>
                              </div>

                              {/* Price with dotted line separator */}
                              {item.price && (
                                <div className="flex items-baseline min-w-[fit-content]">
                                  {/* Flexible dotted line that fills available space */}
                                  <div className="hidden sm:block flex-1 min-w-[10px] max-w-[100px] mx-2">
                                    <div className="border-b border-dotted border-gray-400 mt-[0.4em]"></div>
                                  </div>
                                  <span className="font-serif text-sm md:text-[15px] font-bold text-[#8C7B6C] whitespace-nowrap">
                                    {item.price}
                                  </span>
                                </div>
                              )}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </motion.div>
          ))}
        </div>

        {/* Booking CTA */}
        {/*<motion.div
          className="mt-12 md:mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <button className="bg-[#8C7B6C] hover:bg-[#6B5D52] text-white font-serif px-8 py-3 md:px-10 md:py-4 rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            {content.nav.book}
          </button>
          <p className="text-gray-600 text-sm md:text-base mt-3">
            {isArabic ? 'للاستفسار أو الحجز' : 'Pour toute question ou réservation'}
          </p>
      </motion.div>*/}
      </div>
    </section >
  );
};

export default PricingSection;