import React from 'react';
import { motion } from 'framer-motion';
import { type Content } from '../data';
import { FaClock } from 'react-icons/fa';

interface WorkHoursProps {
    content: Content;
}

const WorkHoursSection: React.FC<WorkHoursProps> = ({ content }) => {
    const isArabic = content.lang === 'AR';

    return (
        <section id="hours" className="py-20 bg-taupe text-white">
            <div className="container mx-auto px-4 flex flex-col items-center">
                <motion.div
                    className="mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <FaClock className="text-5xl mb-6 mx-auto text-cream-100/80" />
                    <h2 className={`text-3xl font-bold mb-4 ${isArabic ? 'arabic-font' : 'tracking-widest uppercase'}`}>
                        {content.workHours.title}
                    </h2>
                </motion.div>

                <div className="w-full max-w-lg bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12 shadow-2xl border border-white/10">
                    <ul className="space-y-4">
                        {content.workHours.days.map((item, index) => (
                            <motion.li
                                key={index}
                                className={`flex justify-between items-center border-b border-white/20 pb-2 last:border-0 ${isArabic ? 'flex-row-reverse' : ''}`}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <span className={`font-bold text-lg ${isArabic ? 'arabic-font' : ''}`}>{item.day}</span>
                                <span className="font-mono bg-cream-100 text-taupe-dark px-3 py-1 rounded text-sm font-bold shadow-sm">
                                    {item.hours}
                                </span>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default WorkHoursSection;
