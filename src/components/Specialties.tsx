import React from 'react';
import { motion } from 'framer-motion';
import { type Content, type IconKey } from '../data';
import {
    FaCut,
    FaSprayCan,
    FaPumpSoap,
    FaMagic,
    FaSpa,
    FaHandSparkles
} from 'react-icons/fa';

interface SpecialtiesProps {
    content: Content;
}

const getIcon = (key: IconKey) => {
    switch (key) {
        case 'scissors': return <FaCut />;
        case 'straightener': return <FaSprayCan />;
        case 'curly': return <FaMagic />;
        case 'dropper': return <FaPumpSoap />;
        case 'face': return <FaSpa />;
        case 'nails': return <FaHandSparkles />;
        default: return <FaCut />;
    }
};

const SpecialtiesSection: React.FC<SpecialtiesProps> = ({ content }) => {
    const isArabic = content.lang === 'AR';

    return (
        <section id="specialties" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className={`text-3xl font-bold text-taupe-dark mb-4 ${isArabic ? 'arabic-font' : 'tracking-widest uppercase'}`}>
                        {content.specialties.title}
                    </h2>
                    <div className="w-16 h-1 bg-taupe/30 mx-auto"></div>
                </motion.div>

                <div className={`grid grid-cols-2 md:grid-cols-3 gap-8 ${isArabic ? 'rtl' : 'ltr'}`}>
                    {content.specialties.items.map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center text-center group cursor-pointer"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cream-50 to-cream-100 flex items-center justify-center text-3xl text-taupe mb-4 group-hover:bg-none group-hover:bg-taupe group-hover:text-white transition-all duration-300 shadow-md">
                                {getIcon(item.iconKey)}
                            </div>
                            <h3 className={`text-xl font-medium text-gray-700 group-hover:text-taupe-dark transition-colors duration-300 ${isArabic ? 'arabic-font' : ''}`}>
                                {item.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SpecialtiesSection;
