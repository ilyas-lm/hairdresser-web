import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { type Content } from '../data';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

interface TestimonialsProps {
    content: Content;
}

const TestimonialsSection: React.FC<TestimonialsProps> = ({ content }) => {
    const isArabic = content.lang === 'AR';
    const [visibleCount, setVisibleCount] = useState(3);

    const toggleShowMore = () => {
        if (visibleCount >= content.testimonials.items.length) {
            setVisibleCount(3);
        } else {
            setVisibleCount(content.testimonials.items.length);
        }
    };

    const visibleTestimonials = content.testimonials.items.slice(0, visibleCount);
    const hasMore = content.testimonials.items.length > 3;
    const isExpanded = visibleCount > 3;

    return (
        <section className="py-20 bg-taupe/5">
            <div className="container mx-auto px-4 text-center">
                <motion.h2
                    className={`text-3xl font-bold mb-12 text-taupe-dark ${isArabic ? 'arabic-font' : 'tracking-widest uppercase'}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {content.testimonials.title}
                </motion.h2>

                <div className={`grid md:grid-cols-3 gap-8 mb-12 ${isArabic ? 'rtl' : 'ltr'}`}>
                    <AnimatePresence>
                        {visibleTestimonials.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="bg-white p-8 shadow-md rounded-lg relative hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
                            >
                                <div className="absolute top-4 left-4 text-taupe/20">
                                    <FaQuoteLeft className="text-3xl" />
                                </div>

                                {/* Avatar / Initial */}
                                <div className="w-16 h-16 rounded-full bg-cream-100 flex items-center justify-center text-taupe-dark font-bold text-xl mb-4 border-2 border-white shadow-sm">
                                    {item.name.charAt(0)}
                                </div>

                                {/* Stars */}
                                <div className="flex gap-1 text-gold mb-4 text-yellow-500">
                                    {[...Array(item.rating || 5)].map((_, i) => (
                                        <FaStar key={i} />
                                    ))}
                                </div>

                                <p className={`text-lg text-gray-600 mb-6 italic text-center ${isArabic ? 'arabic-font' : ''}`}>
                                    "{item.review}"
                                </p>

                                <h4 className={`text-md font-bold text-charcoal uppercase tracking-wider ${isArabic ? 'arabic-font' : ''}`}>
                                    {item.name}
                                </h4>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>


                {hasMore && (
                    <motion.button
                        layout
                        onClick={toggleShowMore}
                        className="px-8 py-3 bg-taupe text-white rounded-full font-bold hover:bg-taupe-dark transition-colors duration-300 shadow-md transform hover:-translate-y-1"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isExpanded
                            ? (isArabic ? 'عرض أقل' : 'Voir moins')
                            : (isArabic ? 'عرض المزيد' : 'Voir plus')}
                    </motion.button>
                )}
            </div>
        </section>
    );
};

export default TestimonialsSection;
