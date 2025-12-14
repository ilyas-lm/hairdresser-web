
export type IconKey = 'scissors' | 'straightener' | 'curly' | 'dropper' | 'face' | 'nails';

interface SocialLink {
  icon: 'facebook' | 'instagram' | 'whatsapp' | 'tiktok';
  link: string;
}

interface PricingItem {
  name: string;
  price: string;
}

interface PricingSubsection {
  title?: string;
  items: PricingItem[];
}

interface PricingSection {
  title: string;
  subsections: PricingSubsection[];
}

interface Specialty {
  iconKey: IconKey;
  title: string;
}

export interface Testimonial {
  name: string;
  review: string;
  rating?: number; // 1-5 stars
}

interface Translation {
  lang: 'FR' | 'AR';
  nav: {
    home: string;
    philosophy: string;
    specialties: string;
    pricing: string;
    contact: string;
    book: string;
  };
  hero: {
    subtitle: string;
    button: string;
  };
  philosophy: {
    title: string;
    description: string;
    cards: {
      listen: { title: string; description: string };
      quality: { title: string; description: string };
      passion: { title: string; description: string };
    };
  };
  specialties: {
    title: string;
    items: Specialty[];
  };
  pricing: {
    title: string;
    sections: PricingSection[];
  };
  locations: {
    title: string;
    items: {
      name: string;
      address: string;
      phone: string;
      mapUrl: string;
      coordinates: { lat: number; lng: number };
    }[];
  };
  workHours: {
    title: string;
    days: { day: string; hours: string }[];
  };
  partners: {
    title: string;
    description: string;
    brands: string[];
  };
  testimonials: {
    title: string;
    items: Testimonial[];
  };
  footer: {
    copyright: string;
  };
}

// --- LINKS ---
export const SOCIAL_LINKS: SocialLink[] = [
  { icon: 'whatsapp', link: 'https://wa.me/212607736762' },
  { icon: 'instagram', link: 'https://www.instagram.com/blissful_and_beautiful/' },
  { icon: 'facebook', link: 'https://www.facebook.com/people/Blissful-Beautiful-Agadir/100069610886208/' },
  { icon: 'tiktok', link: 'https://www.tiktok.com/@blissfulandbeautiful' },
];

// --- PRICING DATA ---
const sharedPricing: PricingSection[] = [
  {
    title: 'ESTHÉTIQUE & BIEN-ÊTRE',
    subsections: [
      {
        title: 'LA CABINE',
        items: []
      },
      {
        title: 'Le visage sur mesure',
        items: [
          { name: 'BLISSCARE Le grand classique', price: '99 Dh' },
          { name: 'Teenager', price: '150 Dh' },
          { name: 'Hydralessence visage', price: '150 Dh' },
          { name: 'Éclat abricot', price: '250 Dh' },
        ],
      },
      {
        title: 'PHYTOCÉANE',
        items: [
          { name: 'Précision regard', price: '200 Dh' },
          { name: 'Sublime éclat', price: '200 Dh' },
          { name: 'Voile pureté', price: '300 Dh' },
          { name: 'Embrun désaltérant', price: '400 Dh' },
          { name: 'Douceur océane', price: '400 Dh' },
          { name: 'Evasion jeunesse', price: '500 Dh' },
          { name: 'Aquasaphir', price: '550 Dh' },
        ],
      },
      {
        title: 'Supplément',
        items: [
          { name: 'Sérum Concentré anti-oxydant', price: '80 Dh' },
          { name: 'Sérum concentré d\'acide hyaluronique', price: '90 Dh' },
          { name: 'Cocktail de vitamines', price: '120 Dh' },
          { name: 'Massage Facial Japonais KOBIDO 20min', price: '180 Dh' },
          { name: 'Hydrafacial avec acide hyaluronique', price: '200 Dh' },
        ],
      },
      {
        title: 'L\'ÉPILATION',
        items: [
          { name: 'Lèvres (cire/fil)', price: '15 Dh' },
          { name: 'Menton (cire/fil)', price: '15 Dh' },
          { name: 'Sourcils (cire/fil)', price: '20 Dh' },
          { name: 'Aisselles', price: '25 Dh' },
          { name: 'Avant-bras', price: '40 Dh' },
          { name: 'Maillot simple', price: '40 Dh' },
          { name: 'Bras', price: '50 Dh' },
          { name: 'Visage (cire/fil)', price: '50 Dh' },
          { name: 'Visage avec sourcils (cire/fil)', price: '60 Dh' },
          { name: 'Demi-Jambes ou cuisses', price: '50 Dh' },
          { name: 'Ventre', price: '50 Dh' },
          { name: 'Maillot intégral', price: '80 Dh' },
          { name: 'Jambes entières', price: '80 Dh' },
          { name: 'Dos complet', price: '80 Dh' },
          { name: 'Epilation complète', price: '180 Dh' },
        ],
      },
      {
        title: 'LE BAR - Le bar à regard',
        items: [
          { name: 'Traçage sourcils', price: '10 Dh' },
          { name: 'Sourcils', price: '20 Dh' },
          { name: 'Coloration sourcils', price: '30 Dh' },
          { name: 'Faux cils BD', price: '100 Dh' },
          { name: 'Rehaussement des cils "LASH LIFT"', price: '250 Dh' },
          { name: 'Rehaussement des sourcils "BROW LIFT"', price: '250 Dh' },
        ],
      },
      {
        title: 'Le bar à ongles',
        items: [
          { name: 'Manucure classique', price: '30 Dh' },
          { name: 'Pédicure classique', price: '50 Dh' },
          { name: 'Manucure SPA', price: '120 Dh' },
          { name: 'Pédicure SPA', price: '150 Dh' },
          { name: 'Pose vernis couleur', price: '15 Dh' },
          { name: 'Pose vernis French', price: '20 Dh' },
          { name: 'Pose vernis OPI', price: '40 Dh' },
          { name: 'Vernis semi-permanent Couleur', price: '80 Dh' },
          { name: 'Vernis semi-permanent French', price: '100 Dh' },
          { name: 'Capsules semi-permanent', price: '100 Dh' },
          { name: 'Capsules semi-permanent avec VSP', price: '130 Dh' },
          { name: 'Gel avec VSP "Made Italy"', price: '250 Dh' },
          { name: 'Gel avec VSP "Made in china"', price: '150 Dh' },
          { name: 'Remplissage', price: '200 Dh' },
          { name: 'Dépose VSP', price: '20 Dh' },
          { name: 'Dépose Gel', price: '50 Dh' },
        ],
      },
      {
        title: 'Le bar à maquillage',
        items: [
          { name: 'Maquillage', price: '100 à 150 Dh' },
          { name: 'Maquillage soirée', price: '300 à 500 Dh' },
        ],
      },
      {
        title: 'LE CORPS SIGNATURE',
        items: [
          { name: 'Massage du visage 20min', price: '50 Dh' },
          { name: 'Massage des jambes et pieds 20min', price: '50 Dh' },
          { name: 'Massage du dos 20min', price: '60 Dh' },
          { name: 'Massage relaxant 60min', price: '130 Dh' },
          { name: 'Massage tonique 60min', price: '150 Dh' },
          { name: 'Massage minceur (Amincissant) 45 min', price: '150 Dh' },
          { name: 'Massage japonais KOBIDO', price: '180 Dh' },
        ],
      },
    ],
  },
  {
    title: 'COIFFURE & SOINS CAPILLAIRES', // Right Page
    subsections: [
      {
        title: 'LE SALON - Le coiffage',
        items: [
          { name: 'Shampoing normal', price: '10 Dh' },
          { name: 'Shampoing spécial', price: '20 Dh' },
          { name: 'Shampoing spécial sans sulfate', price: '30 Dh' },
          { name: 'Shampoing NASHI', price: '50 Dh' },
          { name: 'Brushing court', price: '30 Dh' },
          { name: 'Brushing long', price: '40 Dh' },
          { name: 'Brushing extra long', price: '50 Dh' },
          { name: 'Supplément plaque "lisser/boucler"', price: '20 Dh' },
          { name: 'Supplément Steampod', price: '80 Dh' },
          { name: 'Wavy', price: '100 Dh' },
          { name: 'Chignon ou coiffure avec attaches', price: '150 Dh' },
          { name: 'Chignon mariée', price: '300 à 500 Dh' },
        ],
      },
      {
        title: 'La coupe',
        items: [
          { name: 'Frange', price: '20 Dh' },
          { name: 'Pointes', price: '20 Dh' },
          { name: 'Coupe', price: '50 Dh' },
          { name: 'Shampoing coupe brushing "cheveux court"', price: '80 Dh' },
          { name: 'Shampoing coupe brushing "cheveux long"', price: '90 Dh' },
          { name: 'Shampoing coupe brushing "cheveux extra long"', price: '100 Dh' },
          { name: 'Coupe jeunesse -14 ans', price: '30 Dh' },
        ],
      },
      {
        title: 'La coloration',
        items: [
          { name: 'Application coloration', price: '100 Dh' },
          { name: 'Coloration racine Inebrya', price: '150 Dh' },
          { name: 'Coloration racine Majirel', price: '200 Dh' },
          { name: 'Coloration racine Revlon', price: '250 Dh' },
          { name: 'Coloration racine sans ammoniaque', price: '300 Dh' },
          { name: 'Coloration totale Inebrya', price: '180 Dh' },
          { name: 'Coloration totale Majirel', price: '300 à 400 Dh' },
          { name: 'Coloration totale Revlon', price: '400 à 500 Dh' },
          { name: 'Coloration totale sans ammoniaque', price: '500 Dh' },
        ],
      },
      {
        title: 'Le balayage',
        items: [
          { name: 'Rinçage', price: '150 Dh' },
          { name: 'Balayage Produit basique', price: '170 Dh' },
          { name: 'Balayage L\'Oreal/Schwarzkopf/Enzymabond', price: '300 Dh' },
          { name: 'Décoloration', price: '300 à 500 Dh' },
          { name: 'Patine', price: '300 à 500 Dh' },
          { name: 'Ombré hair', price: '500 à 1000 Dh' },
        ],
      },
      {
        title: 'LE BAR - Le bar à soin',
        items: [
          { name: 'PURING - Soin hydratant', price: '70 Dh' },
          { name: 'PURING - Soin intense avec ampoule', price: '120 Dh' },
          { name: 'BELMAKOSMETIK - L\'hydratant', price: '150 à 200 Dh' },
          { name: 'BELMAKOSMETIK - Le réparateur', price: '350 à 400 Dh' },
          { name: 'BELMAKOSMETIK - Le complet', price: '400 à 500 Dh' },
          { name: 'NASHI - Le filler therapy', price: '300 à 350 Dh' },
          { name: 'OLAPLEX - Le profond', price: '300 à 500 Dh' },
          { name: 'BLISS CIL "naturel" - L\'Anti-chute', price: '70 à 120 Dh' },
          { name: 'BLISS CIL "naturel" - Le Miracle', price: '100 à 200 Dh' },
          { name: 'K18 - Soin Réparateur', price: '200 à 250 Dh' },
          { name: 'CCRP', price: '250 à 300 Dh' },
          { name: 'SALERM - Hi-repair réparateur', price: '150 à 200 Dh' },
        ],
      },
      {
        title: 'Le bar à lissage',
        items: [
          { name: 'Photon Extreme', price: '1000 Dh' },
          { name: 'Botox', price: '500 Dh' },
          { name: 'Protéine', price: '500 Dh' },
          { name: 'Phytocure', price: '700 Dh' },
          { name: 'Hair yoga', price: '800 à 1200 Dh' },
          { name: 'Goldery', price: '1500 à 2000 Dh' },
          { name: 'Enzymothérapie', price: '1500 à 2200 Dh' },
        ],
      },
      {
        title: 'Le bar à boucles',
        items: [
          { name: 'Styling cheveux courts', price: '150 Dh' },
          { name: 'Styling cheveux longs', price: '180 Dh' },
          { name: 'Styling cheveux extra longs', price: '200 Dh' },
        ],
      },
    ],
  },
];

// --- (FR) ---
const FR_CONTENT: Translation = {
  lang: 'FR',
  nav: {
    home: 'Accueil',
    philosophy: 'Philosophie',
    specialties: 'Spécialités',
    pricing: 'Tarifs',
    contact: 'Contact',
    book: 'Réserver',
  },
  hero: {
    subtitle: 'Votre sanctuaire pour la beauté et le bien-être.',
    button: 'Réservez votre moment',
  },
  philosophy: {
    title: 'Notre Philosophie',
    description: 'L’écoute et l’expertise au cœur de tout ce que nous faisons.',
    cards: {
      listen: {
        title: 'Écoute Personnalisée',
        description: "Une approche sur mesure pour révéler votre beauté unique.",
      },
      quality: {
        title: 'Produits d\'Excellence',
        description: "Des formules sélectionnées pour leur performance et leur respect.",
      },
      passion: {
        title: 'Expertise & Passion',
        description: "Un savoir-faire technique allié à une véritable passion du métier.",
      },
    },
  },
  specialties: {
    title: 'Nos Spécialités',
    items: [
      { iconKey: 'scissors', title: 'Coiffure' },
      { iconKey: 'straightener', title: 'Lissage' },
      { iconKey: 'curly', title: 'Bar à boucles' },
      { iconKey: 'dropper', title: 'Bar à soin' },
      { iconKey: 'face', title: 'Esthétique' },
      { iconKey: 'nails', title: 'Onglerie' },
    ],
  },
  pricing: {
    title: 'Nos Tarifs',
    sections: sharedPricing,
  },
  locations: {
    title: 'Nos Salons',
    items: [
      {
        name: 'Blissful & Beautiful - Inezgane',
        address: 'Rue Moulay Ali Chérif, Inezgane 86350',
        phone: '+212 607-736762',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13778.681177695786!2d-9.5332617!3d30.3601438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3c80f48866e4d%3A0x6e268ac37f81498b!2sInezgane!5e0!3m2!1sen!2sma!4v1700000000000!5m2!1sen!2sma',
        coordinates: { lat: 30.3601, lng: -9.5333 }
      },
      {
        name: 'Blissful & Beautiful - Agadir',
        address: 'N° 32 Rue Taher Ifrani, Cité Illigh, Agadir',
        phone: '+212 607-736762',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13768.95663673523!2d-9.6000000!3d30.4200000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b6e8a0058b8f%3A0x8f7d9d0e2c8a0b0!2sAgadir!5e0!3m2!1sen!2sma!4v1700000000000!5m2!1sen!2sma',
        coordinates: { lat: 30.4200, lng: -9.6000 }
      },
    ],
  },
  workHours: {
    title: 'Horaires d\'ouverture',
    days: [
      { day: 'Lundi', hours: '08:00 - 22:00' },
      { day: 'Mardi', hours: '08:00 - 22:00' },
      { day: 'Mercredi', hours: '08:00 - 22:00' },
      { day: 'Jeudi', hours: '08:00 - 22:00' },
      { day: 'Vendredi', hours: '09:00 - 22:00' },
      { day: 'Samedi', hours: '09:00 - 22:00' },
      { day: 'Dimanche', hours: '12:00 - 20:00' },
    ],
  },
  partners: {
    title: 'Nos Partenaires de Confiance',
    description: 'Nous travaillons exclusivement avec les meilleurs produits pour garantir votre satisfaction.',
    brands: [
      'Nashi ARGAN', 'L\'ORÉAL', 'K18', 'INOA',
      'Inebrya', 'GOLDERY & MORE', 'ANADIA PROFESIONAL',
      'Evoluderm', 'OLAPLEX', 'BLACK DIAMOND', 'TGB',
      'Salerm COSMETICS', 'REVLON', 'Phytocéane', 'O·P·I',
      'INOCOS', 'RP', 'milk_shake', 'TYRREL'
    ],
  },
  testimonials: {
    title: 'Ce qu\'elles disent de nous',
    items: [
      { name: 'Sarah K.', review: 'Un service exceptionnel ! Mes boucles n\'ont jamais été aussi belles.', rating: 5 },
      { name: 'Leila M.', review: 'L\'ambiance est apaisante et l\'équipe est très professionnelle.', rating: 5 },
      { name: 'Noura B.', review: 'Je recommande vivement le soin Hydralessence, un vrai moment de détente.', rating: 5 },
      { name: 'Imane Z.', review: 'Excellente prestation pour mon mariage, maquillage parfait qui a tenu toute la soirée.', rating: 5 },
      { name: 'Samira H.', review: 'Le meilleur salon d\'Agadir ! Personnel adorable et produits de qualité.', rating: 5 },
      { name: 'Karima L.', review: 'J\'adore mon lissage, mes cheveux sont brillants et en pleine santé.', rating: 5 },
    ],
  },
  footer: {
    copyright: '© 2024 BLISSFUL & BEAUTIFUL. Tous droits réservés.',
  },
};

// --- (AR) ---
const AR_CONTENT: Translation = {
  lang: 'AR',
  nav: {
    home: 'الرئيسية',
    philosophy: 'فلسفتنا',
    specialties: 'تخصصاتنا',
    pricing: 'أسعارنا',
    contact: 'اتصل بنا',
    book: 'احجز موعدك',
  },
  hero: {
    subtitle: 'ملاذكم للجمال والرفاهية',
    button: 'احجزوا موعدكم',
  },
  philosophy: {
    title: 'فلسفتنا',
    description: 'التميز والعناية الشخصية في صميم كل ما نقوم به.',
    cards: {
      listen: {
        title: 'استماع شخصي',
        description: 'نهج مخصص لإبراز جمالك الفريد.',
      },
      quality: {
        title: 'منتجات عالية الجودة',
        description: 'تركيبات مختارة لفعاليتها واحترامها للصحة.',
      },
      passion: {
        title: 'الخبرة والشغف',
        description: 'مهارة فنية ممزوجة بشغف حقيقي للمهنة.',
      },
    },
  },
  specialties: {
    title: 'تخصصاتنا',
    items: [
      { iconKey: 'scissors', title: 'تصفيف الشعر' },
      { iconKey: 'straightener', title: 'تليس الشعر' },
      { iconKey: 'curly', title: 'العناية بالكيرلي' },
      { iconKey: 'dropper', title: 'علاجات الشعر' },
      { iconKey: 'face', title: 'العناية بالبشرة' },
      { iconKey: 'nails', title: 'العناية بالأظافر' },
    ],
  },
  pricing: {
    title: 'أسعارنا',
    sections: sharedPricing,
  },
  locations: {
    title: 'صالونانا',
    items: [
      {
        name: 'Blissful & Beautiful - إنزكان',
        address: 'شارع مولاي علي الشريف، إنزكان 86350',
        phone: '+212 607-736762',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13778.681177695786!2d-9.5332617!3d30.3601438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3c80f48866e4d%3A0x6e268ac37f81498b!2sInezgane!5e0!3m2!1sen!2sma!4v1700000000000!5m2!1sen!2sma',
        coordinates: { lat: 30.3601, lng: -9.5333 }
      },
      {
        name: 'Blissful & Beautiful - أكادير',
        address: 'رقم 32 زنقة الطاهر الإفراني، سيتيليز أميكال، أكادير',
        phone: '+212 607-736762',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13768.95663673523!2d-9.6000000!3d30.4200000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b6e8a0058b8f%3A0x8f7d9d0e2c8a0b0!2sAgadir!5e0!3m2!1sen!2sma!4v1700000000000!5m2!1sen!2sma',
        coordinates: { lat: 30.4200, lng: -9.6000 }
      },
    ],
  },
  workHours: {
    title: 'أوقات العمل',
    days: [
      { day: 'الاثنين', hours: '08:00 - 22:00' },
      { day: 'الثلاثاء', hours: '08:00 - 22:00' },
      { day: 'الأربعاء', hours: '08:00 - 22:00' },
      { day: 'الخميس', hours: '08:00 - 22:00' },
      { day: 'الجمعة', hours: '09:00 - 22:00' },
      { day: 'السبت', hours: '09:00 - 22:00' },
      { day: 'الأحد', hours: '12:00 - 20:00' },
    ],
  },
  partners: {
    title: 'شركاؤنا الموثوقون',
    description: 'نحن نعمل حصريًا مع أفضل المنتجات لضمان رضاكم.',
    brands: [
      'Nashi ARGAN', 'L\'ORÉAL', 'K18', 'INOA',
      'Inebrya', 'GOLDERY & MORE', 'ANADIA PROFESIONAL',
      'Evoluderm', 'OLAPLEX', 'BLACK DIAMOND', 'TGB',
      'Salerm COSMETICS', 'REVLON', 'Phytocéane', 'O·P·I',
      'INOCOS', 'RP', 'milk_shake', 'TYRREL'
    ],
  },
  testimonials: {
    title: 'آراء عملائنا',
    items: [
      { name: 'سارة ك.', review: 'خدمة استثنائية! لم تكن تجعيدات شعري أجمل من أي وقت مضى.', rating: 5 },
      { name: 'ليلى م.', review: 'الجو مريح والفريق محترف للغاية.', rating: 5 },
      { name: 'نورة ب.', review: 'أوصي بشدة بعلاج Hydralessence، لحظة حقيقية من الاسترخاء.', rating: 5 },
      { name: 'إيمان ز.', review: 'خدمة ممتازة لزفافي، مكياج مثالي استمر طوال السهرة.', rating: 5 },
      { name: 'سميرة ح.', review: 'أفضل صالون في أكادير! طاقم رائع ومنتجات عالية الجودة.', rating: 5 },
      { name: 'كريمة ل.', review: 'أعشق تمليس شعري، شعري أصبح لامعاً وبصحة جيدة.', rating: 5 },
    ],
  },
  footer: {
    copyright: '© 2024 BLISSFUL & BEAUTIFUL. جميع الحقوق محفوظة.',
  },
};

export const ALL_CONTENT = {
  FR: FR_CONTENT,
  AR: AR_CONTENT,
};

export type Language = keyof typeof ALL_CONTENT;
export type Content = Translation;