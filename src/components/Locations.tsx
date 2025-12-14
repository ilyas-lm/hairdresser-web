import React from 'react';
import { motion } from 'framer-motion';
import { type Content } from '../data';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

interface LocationsProps {
    content: Content;
}

const LocationsSection: React.FC<LocationsProps> = ({ content }) => {
    const isArabic = content.lang === 'AR';

    return (
        <section id="locations" className="py-20 bg-cream-50">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className={`text-4xl font-bold text-taupe-dark mb-4 ${isArabic ? 'arabic-font' : 'tracking-widest uppercase'}`}>
                        {content.locations.title}
                    </h2>
                </motion.div>

                <div className={`grid md:grid-cols-2 gap-8 ${isArabic ? 'rtl' : 'ltr'}`}>
                    {content.locations.items.map((loc, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >

                            <div className="h-64 bg-gray-200 relative group">
                                <div className="absolute inset-0 flex items-center justify-center bg-taupe/10 group-hover:bg-taupe/20 transition-colors duration-300">
                                    <FaMapMarkerAlt className="text-4xl text-taupe" />
                                </div>
                                {loc.mapUrl && (
                                    <iframe
                                        src={loc.mapUrl}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        title={loc.name}
                                        className="absolute inset-0"
                                    />
                                )}
                            </div>

                            <div className="p-8 text-center">
                                <h3 className={`text-2xl font-bold text-charcoal mb-4 ${isArabic ? 'arabic-font' : 'uppercase tracking-wide'}`}>
                                    {loc.name}
                                </h3>
                                <p className={`text-gray-600 mb-6 ${isArabic ? 'arabic-font' : ''}`}>
                                    {loc.address}
                                </p>
                                <a
                                    href={`tel:${loc.phone}`}
                                    className="inline-flex items-center justify-center px-6 py-3 bg-taupe text-white rounded-full hover:bg-taupe-dark transition-colors duration-300 gap-2"
                                >
                                    <FaPhoneAlt />
                                    <span className="font-bold" dir="ltr">{loc.phone}</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LocationsSection;
