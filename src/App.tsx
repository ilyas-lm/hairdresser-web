import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/Hero';
import PhilosophySection from './components/Philosophy';
import PricingSection from './components/Pricing';
import SpecialtiesSection from './components/Specialties';
import TestimonialsSection from './components/Testimonials';
import WorkHoursSection from './components/WorkHours';
import LocationsSection from './components/Locations';
import PartnersSection from './components/Partners';
import Footer from './components/Footer';
import { ALL_CONTENT, type Language } from './data';

//  AR as the default language 
const DEFAULT_LANG: Language = 'AR';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(DEFAULT_LANG);
  const content = ALL_CONTENT[lang];
  const isArabic = lang === 'AR';

  return (
    <div
      className={`min-h-screen bg-white ${isArabic ? 'font-serif arabic-font' : 'font-sans'}`}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <Header content={content} lang={lang} setLang={setLang} />
      <main>
        <HeroSection content={content} />
        <PhilosophySection content={content} />
        <SpecialtiesSection content={content} />
        <PricingSection content={content} />
        <WorkHoursSection content={content} />
        <LocationsSection content={content} />
        <TestimonialsSection content={content} />
        <PartnersSection content={content} />
      </main>
      <Footer content={content} />
    </div>
  );
};

export default App;