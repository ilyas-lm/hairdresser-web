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
          <h2 className={`text-5xl font-bold font-serif text-[var(--menu-text)] mb-4 uppercase tracking-[0.3em]`}>
            {content.pricing.title}
          </h2>
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
                <h3 className="text-[27px] font-bold font-serif text-[var(--menu-text)] uppercase tracking-[0.15em]">
                  {section.title}
                </h3>
              </div>

              {section.subsections && section.subsections.map((sub, sIdx) => {
                const showCategory = sub.category && (sIdx === 0 || section.subsections[sIdx - 1].category !== sub.category);

                return (
                  <div key={sIdx} className="mb-6 last:mb-0">
                    {/* Level 2 Header (Category) */}
                    {showCategory && (
                      <h4 className="text-[20px] font-normal font-serif text-[var(--menu-text)] mb-3 mt-5 first:mt-0">
                        {sub.category}
                      </h4>
                    )}

                    {/* Brand Name or Subsection Title */}
                    {sub.title && (
                      <div className={`mb-2 ${sub.category ? 'mt-3' : 'mt-0'}`}>
                        {/* If title ends with — or contains —, it's a brand name */}
                        {(sub.title.includes('—')) ? (
                          <div className="flex items-center mb-2">
                            <h5 className="text-[16px] font-normal font-serif text-[var(--menu-text)] uppercase tracking-wider whitespace-nowrap mr-2">
                              {sub.title}
                            </h5>
                            <div className="flex-1 border-b border-[var(--menu-text)] h-px"></div>
                          </div>
                        ) : (
                          <h4 className="text-[18px] font-semibold font-serif text-[var(--menu-text)] mb-2">
                            {sub.title}
                          </h4>
                        )}
                      </div>
                    )}

                    {/* Service Items */}
                    <ul className="space-y-0.5">
                      {sub.items.map((item, iIndex) => (
                        <li key={iIndex} className={`${item.isNote ? 'italic text-xs text-gray-500 leading-tight ml-0' : 'flex items-baseline leading-snug'}`}>

                          {item.isNote ? (
                            // Note items (italic, no price)
                            <span className="block">{item.name}</span>
                          ) : (
                            // Regular service items with dot leaders
                            <>
                              <span className="font-serif text-[17px] text-[var(--menu-text)] pr-2 flex-shrink-0">
                                {item.name}
                              </span>

                              {item.price && (
                                <>
                                  <span
                                    className="flex-1 border-b border-dotted border-gray-400 mb-1 mx-1"
                                    style={{ minWidth: '20px' }}
                                  ></span>
                                  <span className="font-serif text-[17px] font-medium text-[var(--menu-text)] whitespace-nowrap pl-1">
                                    {item.price}
                                  </span>
                                </>
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