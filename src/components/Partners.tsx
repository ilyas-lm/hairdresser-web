import React from 'react';
import { motion } from 'framer-motion';
import { type Content } from '../data';

interface PartnersProps {
    content: Content;
}

const PartnersSection: React.FC<PartnersProps> = ({ content }) => {
    const isArabic = content.lang === 'AR';

    return (
        <section className="py-16 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className={`text-2xl font-bold text-gray-800 mb-2 ${isArabic ? 'arabic-font' : 'uppercase tracking-widest'}`}>
                        {content.partners.title}
                    </h2>
                    <p className={`text-gray-500 max-w-2xl mx-auto ${isArabic ? 'arabic-font' : ''}`}>
                        {content.partners.description}
                    </p>
                </motion.div>


                <motion.div
                    className="flex justify-center items-center opacity-90 hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src="/partners_grid.png"
                        alt="Our Partners: Nashi, L'Oreal, K18, Inebrya, Goldery, Anadia, Evoluderm, Olaplex, Black Diamond, TGB, Salerm, Revlon, Phytoceane, OPI, Inocos, RP, Milk Shake, Tyrrel"
                        className="max-w-full h-auto rounded-lg shadow-sm"
                        style={{ maxHeight: '600px' }}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default PartnersSection;
