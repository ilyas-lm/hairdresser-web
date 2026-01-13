import React from 'react';
import { motion } from 'framer-motion';
import { type Content } from '../data';

interface PricingSectionProps {
  content: Content;
}

const PricingSection: React.FC<PricingSectionProps> = ({ content }) => {
  const isArabic = content.lang === 'AR';

  return (
    <section id="pricing" className="py-20 bg-[var(--menu-bg)]">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Main Title Image */}
          <div className="flex justify-center items-center mb-8">
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
            <p className="text-lg font-serif text-black mt-4">
              {content.pricing.subtitle}
            </p>
          )}
        </motion.div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-16 ${isArabic ? 'rtl' : 'ltr'}`}>
          {content.pricing.sections.map((section, idx) => (
            <div key={idx} className="mb-8">
              {/* Main Section Title with Icon */}
              <div className={`flex items-center mb-6 ${isArabic ? 'flex-row-reverse' : 'flex-row'}`}>
                <img
                  src="/logo_symbol.png"
                  alt=""
                  className={`h-6 w-auto opacity-100 ${isArabic ? 'ml-2' : 'mr-2'}`}
                />
                <h3 className="text-2xl md:text-[27px] font-bold font-serif text-black uppercase tracking-[0.15em]">
                  {section.title}
                </h3>
              </div>

              {section.subsections && section.subsections.map((sub, sIdx) => {
                const showCategory = sub.category && (sIdx === 0 || section.subsections[sIdx - 1].category !== sub.category);

                return (
                  <div key={sIdx} className="mb-6 last:mb-0">
                    {/* Level 2 Header (Category) */}
                    {showCategory && (
                      <h4 className="text-lg md:text-[20px] font-normal font-serif text-black mb-3 mt-5 first:mt-0">
                        {sub.category}
                      </h4>
                    )}

                    {/* Brand Name or Subsection Title */}
                    {sub.title && (
                      <div className={`mb-2 ${sub.category ? 'mt-3' : 'mt-0'}`}>
                        {/* If title ends with — or contains —, it's a brand name */}
                        {(sub.title.includes('—')) ? (
                          <div className="flex items-center mb-2 overflow-x-auto scrollbar-hide">
                            <h5 className="text-sm md:text-[16px] font-normal font-serif text-black uppercase tracking-wider whitespace-nowrap flex-shrink-0">
                              {sub.title}
                            </h5>
                            <div className="flex-1 border-b border-black h-px min-w-[20px]"></div>
                          </div>
                        ) : (
                          <h4 className="text-base md:text-[18px] font-semibold font-serif text-black mb-2">
                            {sub.title}
                          </h4>
                        )}
                      </div>
                    )}

                    {/* Service Items - UPDATED FOR MOBILE RESPONSIVENESS */}
                    <ul className="space-y-0.5">
                      {sub.items.map((item, iIndex) => (
                        <li
                          key={iIndex}
                          className={`${item.isNote ? 'italic text-xs text-gray-600 leading-tight' : 'flex flex-col sm:flex-row sm:items-baseline leading-snug gap-1 sm:gap-0'}`}
                        >
                          {item.isNote ? (
                            // Note items (italic, no price)
                            <span className="block">{item.name}</span>
                          ) : (
                            // Regular service items with improved mobile layout
                            <>
                              <div className="flex items-baseline w-full">
                                <span className="font-serif text-sm sm:text-[17px] text-black pr-2 flex-1 break-words min-w-0">
                                  {item.name}
                                </span>

                                {item.price && (
                                  <>
                                    {/* Hide dotted line on mobile, show on larger screens */}
                                    <span className="hidden sm:block flex-1 border-b border-dotted border-gray-600 mx-1 min-w-[20px]"></span>
                                    <span className="font-serif text-sm sm:text-[17px] font-medium text-black whitespace-nowrap flex-shrink-0 pl-1">
                                      {item.price}
                                    </span>
                                  </>
                                )}
                              </div>

                              {/* For mobile: price on new line */}
                              {item.price && (
                                <div className="sm:hidden flex items-center mt-1">
                                  <span className="flex-1 border-b border-dotted border-gray-600"></span>
                                  <span className="font-serif text-sm font-medium text-black whitespace-nowrap pl-2 flex-shrink-0">
                                    {item.price}
                                  </span>
                                </div>
                              )}
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;