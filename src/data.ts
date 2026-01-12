
export type IconKey = 'scissors' | 'straightener' | 'curly' | 'dropper' | 'face' | 'nails';

interface SocialLink {
  icon: 'facebook' | 'instagram' | 'whatsapp' | 'tiktok';
  link: string;
}

interface PricingItem {
  name: string;
  price: string;
  isNote?: boolean; // For items that are descriptions/notes without prices
}

interface PricingSubsection {
  category?: string; // Level 2 Header
  title?: string;    // Level 3 Header (or Level 2 if category missing)
  items: PricingItem[];
  variant?: 'default' | 'highlight'; // For grey background sections
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
  // --- LE SALON (Column 1, Image 1) ---
  {
    title: 'LE SALON',
    subsections: [
      {
        title: 'Le coiffage',
        items: [
          { name: 'Shampoing normal', price: '10 Dh' },
          { name: 'Shampoing special', price: '20 Dh' },
          { name: 'Shampoing spécial sans sulfate', price: '30 Dh' },
          { name: 'Shampoing NASHI', price: '50 Dh' },
          { name: 'Shampoing MILK SHAKE', price: '50 Dh' },
          { name: 'Brushing court', price: '30 Dh' },
          { name: 'Brushing long', price: '40 Dh' },
          { name: 'Brushing extra long', price: '50 Dh' },
          { name: 'Supplément plaque "lisser/boucler"', price: '20 Dh' },
          { name: 'Supplément Steampod', price: '80 Dh' },
          { name: 'Wavy', price: '99 Dh' },
          { name: 'Chignon ou coiffure avec attaches', price: 'à partir de 150 Dh' },
          { name: 'Chignon mariée', price: 'à partir de 500 Dh' },
        ],
      },
      {
        title: 'La coupe',
        items: [
          { name: 'Frange', price: '20 Dh' },
          { name: 'Pointes', price: '20 Dh' },
          { name: 'Coupe', price: '50 Dh' },
          { name: 'Coupe transformation', price: '150 Dh' },
          { name: 'Shampoing coupe brushing', price: '80 Dh' },
          { name: '"cheveux court"', price: '', isNote: true },
          { name: 'Shampoing coupe brushing', price: '90 Dh' },
          { name: '"cheveux long"', price: '', isNote: true },
          { name: 'Shampoing coupe brushing', price: '99 Dh' },
          { name: '"cheveux extra long"', price: '', isNote: true },
          { name: 'Coupe jeunesse-14 ans', price: '30 Dh' },
        ],
      },
      {
        title: 'La coloration',
        items: [
          { name: 'Application coloration', price: '99 Dh' },
          { name: 'Coloration racine Inebrya', price: '150 Dh' },
          { name: 'Coloration racine Majirel', price: '200 Dh' },
          { name: 'Coloration racine Revlon', price: '250 Dh' },
          { name: 'Coloration racine sans ammoniaque', price: '300 Dh' },
          { name: 'Inoa by L\'Oreal', price: '', isNote: true },
          { name: 'Coloration totale Inebrya', price: '180 Dh' },
          { name: 'Coloration totale Majirel', price: '300 à 400 Dh' },
          { name: 'Coloration totale Revlon', price: '400 à 500 Dh' },
          { name: 'Coloration totale sans ammoniaque', price: '500 Dh' },
          { name: 'Inoa by L\'Oreal', price: '', isNote: true },
        ],
      },
      {
        title: 'Le balayage',
        items: [
          { name: 'Rinçage', price: '150 Dh' },
          { name: 'Balayage Produit basique', price: '170 Dh' },
          { name: 'Balayage L\'Oreal,Shwarzkopf', price: '300 à 500 Dh' },
          { name: 'Décoloration', price: '300 à 500 Dh' },
          { name: 'Patine', price: '300 à 400 Dh' },
          { name: 'Ombré hair', price: '500 à 1000 Dh' },
        ],
      },
    ],
  },
  // --- LE BAR - Hair Treatments (Column 2, Image 1) ---
  {
    title: 'LE BAR',
    subsections: [
      {
        category: 'Le bar à soin',
        title: 'NASHI —',
        items: [
          { name: 'Express', price: '200 à 250 Dh' },
          { name: 'Le filler therapy', price: '300 à 350 Dh' },
        ],
      },
      {
        category: 'Le bar à soin',
        title: 'SALERM —',
        items: [
          { name: 'L\'hydratant', price: '99 Dh' },
          { name: 'Le réparateur', price: '120 à 150 Dh' },
          { name: 'Hi repair le profond', price: '150 à 200 Dh' },
        ],
      },
      {
        category: 'Le bar à soin',
        title: 'MILK SHAKE —',
        items: [
          { name: 'Le réparateur', price: '300 à 400 Dh' },
        ],
      },
      {
        category: 'Le bar à soin',
        title: 'REVLON —',
        items: [
          { name: 'Reconstructeur', price: '350 à 500 Dh' },
        ],
      },
      {
        category: 'Le bar à soin',
        title: 'BELMAKOSMETIK —',
        items: [
          { name: 'L\'hydratant', price: '150 à 200 Dh' },
          { name: '"cheveux légèrement secs"', price: '', isNote: true },
          { name: 'Le réparateur', price: '350 à 400 Dh' },
          { name: '"cheveux élastiques,cassants"', price: '', isNote: true },
          { name: 'Le complet', price: '400 à 500 Dh' },
          { name: '"cheveux élastiques,cassants et déshydratés"', price: '', isNote: true },
        ],
      },
      {
        category: 'Le bar à soin',
        title: 'OLAPLEX —',
        items: [
          { name: 'Le profond', price: '300 à 500 Dh' },
        ],
      },
      {
        category: 'Le bar à soin',
        title: 'BLISS OIL "naturel"—',
        items: [
          { name: 'L\'Anti-chute', price: '70 à 120 Dh' },
          { name: 'Le Miracle', price: '99 à 200 Dh' },
        ],
      },
      {
        category: 'Le bar à soin',
        title: 'K 18 —',
        items: [
          { name: 'Soin Réparateur moléculaire', price: '200 à 250 Dh' },
          { name: 'biomimétique', price: '', isNote: true },
        ],
      },
      {
        category: 'Le bar à soin',
        title: 'ROBSNO PELUQUERO —',
        items: [
          { name: 'CCRP', price: '250 à 300 Dh' },
        ],
      },
      {
        title: 'Le bar à lissage',
        items: [
          { name: 'Photon Extreme', price: '100 Dh' },
          { name: 'Botox', price: '500 à 700 Dh' },
          { name: 'Hair yoga Protéine', price: '900 à 1200 Dh' },
          { name: 'Candy liss Protéine', price: '800 à 1100 Dh' },
          { name: 'Goldery', price: '1500 à 2000 Dh' },
          { name: 'Enzymotherapie', price: '1500 à 2200 Dh' },
          { name: 'Black Diamond premium', price: '1500 à 2000 Dh' },
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
  // --- LA CABINE (Column 1, Image 2) ---
  {
    title: 'LA CABINE',
    subsections: [
      {
        category: 'Le visage sur mesure',
        title: 'EVOLUDERM',
        items: [
          { name: 'Le grand classique', price: '99 Dh' },
          { name: 'Soin basique avec extraction des comédons (60min) Tous', price: '', isNote: true },
          { name: 'types de peaux', price: '', isNote: true },
          { name: 'Teenager', price: '150 Dh' },
          { name: 'Soin purifiant (60min) Peaux mixtes à grasses', price: '', isNote: true },
          { name: 'Soin adapté aux peaux jeunes des préadolescentes et adolescentes', price: '', isNote: true },
          { name: 'Hydralessence visage', price: '150 Dh' },
          { name: 'Soin d\'hydratation intense (60min) Peaux déshydratées et/ou sèches', price: '', isNote: true },
          { name: 'La souplesse et la douceur de la peau sont restaurées durablement', price: '', isNote: true },
          { name: 'et la sensation de tiraillements diminue', price: '', isNote: true },
          { name: 'Éclat abricot', price: '250 Dh' },
          { name: 'Soin lissant éclat la peau hydratée et son éclat naturel ravive (60min)', price: '', isNote: true },
          { name: 'Tous types de peaux', price: '', isNote: true },
          { name: 'Apporte à votre peau pureté et fraîcheur soin traitant éclaircissant', price: '', isNote: true },
          { name: 'et relaxant', price: '', isNote: true },
        ],
      },
      {
        category: 'Le visage sur mesure',
        title: 'PHYTOCÉANE',
        items: [
          { name: 'Précision regard', price: '200 Dh' },
          { name: 'Soin contour des yeux et des lèvres (30min)', price: '', isNote: true },
          { name: 'Sublime éclat', price: '200 Dh' },
          { name: 'Mini soin sans extraction des comédons (45min)', price: '', isNote: true },
          { name: 'Sublime éclat', price: '300 Dh' },
          { name: 'Soin nettoyant profond (60min) Toutes les peaux', price: '', isNote: true },
          { name: 'Voile pureté', price: '350 Dh' },
          { name: 'Soin purifiant (60 min) Peaux mixtes,grasses à problème et', price: '', isNote: true },
          { name: 'asphyxiées', price: '', isNote: true },
          { name: 'Embrun désaltérant', price: '400 Dh' },
          { name: 'Soin hydratant (60min) Peaux déshydratées et/ou sèches', price: '', isNote: true },
          { name: 'Douceur oceane', price: '400 Dh' },
          { name: 'Soin apaisant (60min) Peaux sensibles et rougeurs diffuses', price: '', isNote: true },
          { name: 'Evasion jeunesse', price: '500 Dh' },
          { name: 'Soin ride,fermeté et éclat (1h30)', price: '', isNote: true },
          { name: 'Aquasaphir', price: '550 Dh' },
          { name: 'Soin jeunesse absolue à l\'acide hyaluronique', price: '', isNote: true },
        ],
      },
      {
        title: 'Supplément',
        variant: 'highlight',
        items: [
          { name: 'Sérum Concentré anti-oxydant vitamines C', price: '60 Dh' },
          { name: 'Sérum concentré d\'acide hyaluronique', price: '80 Dh' },
          { name: 'Cocktail de vitamines', price: '120 Dh' },
          { name: 'Massage Facial japonais KOBIDO 30min', price: '180 Dh' },
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
          { name: 'Avant-bras', price: '30 Dh' },
          { name: 'Maillot simple', price: '40 Dh' },
          { name: 'Bras', price: '50 Dh' },
          { name: 'Visage (cire/fil)', price: '50 Dh' },
          { name: 'Visage avec sourcils (cire/fil)', price: '60 Dh' },
          { name: 'Demi-Jambes ou cuisses', price: '50 Dh' },
          { name: 'Ventre', price: '50 Dh' },
          { name: 'Maillot intégral', price: '80 Dh' },
          { name: 'Jambes entières', price: '90 Dh' },
          { name: 'Dos complet', price: '80 Dh' },
          { name: 'Epilation complète', price: '180 Dh' },
          { name: '( jambes completes, bras, maillot intégral et aiselles )', price: '', isNote: true },
        ],
      },
    ],
  },
  // --- LE BAR - Beauty Treatments (Column 2 Top, Image 2) ---
  {
    title: 'LE BAR',
    subsections: [
      {
        title: 'Le bar à regard',
        items: [
          { name: 'Traçage sourcils', price: '10 Dh' },
          { name: 'Sourcils', price: '20 Dh' },
          { name: 'Coloration sourcils', price: '30 Dh' },
          { name: 'Faux cils 8D', price: '100 Dh' },
          { name: 'Rehaussement des cils "LASH LIFT"', price: '250 Dh' },
          { name: 'Rehaussement des sourcils "BROW LIFT"', price: '250 Dh' },
        ],
      },
      {
        title: 'Le bar à ongles',
        items: [
          { name: 'Manucure classique', price: '30 Dh' },
          { name: 'Pedicure classique', price: '50 Dh' },
          { name: 'Manucure SPA', price: '120 Dh' },
          { name: 'Pédicure SPA', price: '150 Dh' },
          { name: 'Pose vernis couleur', price: '15 Dh' },
          { name: 'Pose vernis french', price: '20 Dh' },
          { name: 'Pose vernis OPI', price: '40 Dh' },
          { name: 'Vernis semi-permanent Venalisa', price: '80 Dh' },
          { name: 'Vernis semi-permanent Semilac', price: '99 Dh' },
          { name: 'BIAB venalisa', price: '99 Dh' },
          { name: 'BIAB Inocos', price: '150 Dh' },
          { name: 'BIAB the gel bottle', price: '190 Dh' },
          { name: 'Capsules semi-permanent', price: '80 Dh' },
          { name: 'Capsules semi-permanent avec VSP', price: '130 Dh' },
          { name: 'GelX Americain', price: '200 Dh' },
          { name: 'Gel avec VSP', price: '250 Dh' },
          { name: 'Remplissage', price: '200 Dh' },
          { name: 'Dépose VSP', price: '30 Dh' },
          { name: 'Dépose Gel', price: '50 Dh' },
        ],
      },
      {
        title: 'Supplément',
        variant: 'highlight',
        items: [
          { name: 'Strass l\'unité', price: '5 Dh' },
          { name: 'Finition paillettes l\'unité', price: '10 Dh' },
          { name: 'Bain de paraffine', price: '50 Dh' },
          { name: 'Gommage/masque', price: '10 Dh' },
          { name: 'Poudres Adoucissante', price: '20 Dh' },
          { name: 'Poudre effervescente éclaircissante', price: '30 Dh' },
          { name: 'Masque éclat Blissclay', price: '35 Dh' },
          { name: 'Réparation ongles l\'unité pour les mains avec capsule', price: '10 Dh' },
          { name: 'Réparation ongles l\'unité pour les mains en gel', price: '30 Dh' },
          { name: 'Réparation ongles l\'unité pour les pieds en Capsules', price: '30 Dh' },
          { name: 'Réparation ongles l\'unité pour les pieds en gel', price: '60 Dh' },
          { name: 'Massage pour les mains 20 min', price: '40 Dh' },
          { name: 'Massage pour les pieds 20 min', price: '50 Dh' },
        ],
      },
      {
        title: 'Le bar à maquillage',
        items: [
          { name: 'Maquillage (esthéticienne)', price: '150 Dh' },
          { name: 'Maquillage', price: '300 Dh' },
          { name: 'Maquillage mariée (Make up artist)', price: '1000 à 1500 Dh' },
        ],
      },
    ],
  },
  // --- LE CORPS SIGNATURE (Column 2 Bottom, Image 2) ---
  {
    title: 'LE CORPS SIGNATURE',
    subsections: [
      {
        title: '',
        items: [
          { name: 'Massage du visage 20min', price: '50 Dh' },
          { name: 'Massage des jambes et pieds 30min', price: '60 Dh' },
          { name: 'Massage du dos 30min', price: '60 Dh' },
          { name: 'Massage relaxant 60min', price: '130 Dh' },
          { name: 'Massage tonique 60min', price: '130 Dh' },
          { name: 'Massage minceur (Amincissant) 45 min', price: '150 Dh' },
          { name: 'Massage japonais KOBIDO', price: '180 Dh' },
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
    title: 'BLISSFUL & BEAUTIFUL',
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
    title: 'BLISSFUL & BEAUTIFUL',
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
      { name: 'نورة ب.', review: 'Je recommande vivement le soin Hydralessence, un vrai moment de détente.', rating: 5 },
      { name: 'إيمان ز.', review: 'خدمة ممتازة لزفافي، مكياج مثالي استمر طوال السهرة.', rating: 5 },
      { name: 'سميرة ح.', review: 'أفضل صالون في أكادير! طاقم رائع ومنتجات عالية الجودة.', rating: 5 },
      { name: 'كريمة ل.', review: 'أعشق تمليس شعري، شعري أصبح لامعاً وبصحة جيدة.', rating: 5 },
    ],
  },
  footer: {
    copyright: '© 2024 BLISSFUL & BEAUTIFUL. Tous droits réservés.',
  },
};

export const ALL_CONTENT = {
  FR: FR_CONTENT,
  AR: AR_CONTENT,
};

export type Language = keyof typeof ALL_CONTENT;
export type Content = Translation;