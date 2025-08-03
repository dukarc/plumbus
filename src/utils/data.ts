import { PlumbusFeature, PlumbusModel, ManufacturingStep, Testimonial, FAQ, PlumbusHotspot } from '../types/plumbus';

export const plumbusFeatures: PlumbusFeature[] = [
  {
    id: 'fleeb-juice-optimization',
    title: 'Fleeb Juice Optimization',
    description: 'The fleeb contains all the juice needed for optimal household functionality.',
    icon: 'Droplets',
    benefit: 'Maximum efficiency with premium fleeb juice extraction'
  },
  {
    id: 'schlami-tested-durability',
    title: 'Schlami-Tested Durability',
    description: 'Each plumbus is personally rubbed by a schlami to ensure quality.',
    icon: 'Shield',
    benefit: 'Hand-tested quality you can trust for generations'
  },
  {
    id: 'dingle-bop-smoothing',
    title: 'Dingle-Bop Smoothing',
    description: 'The dingle-bop is pushed through the grumbo for perfect smoothness.',
    icon: 'RotateCw',
    benefit: 'Silky smooth operation every time'
  },
  {
    id: 'hizzard-cutting-technology',
    title: 'Hizzard Cutting Technology',
    description: 'The blamfs rub against the chumbles using advanced hizzard techniques.',
    icon: 'Scissors',
    benefit: 'Precision cutting for all your household needs'
  },
  {
    id: 're-purposable-fleeb',
    title: 'Re-purposable Fleeb',
    description: 'The fleeb is then repurposed for later batches, ensuring sustainability.',
    icon: 'RotateCcw',
    benefit: 'Eco-friendly design with zero fleeb waste'
  },
  {
    id: 'lifetime-grodus-warranty',
    title: 'Lifetime Grodus Warranty',
    description: 'Made with authentic plumbus materials and backed by our grodus guarantee.',
    icon: 'Award',
    benefit: 'Peace of mind with authentic plumbus construction'
  }
];

export const plumbusModels: PlumbusModel[] = [
  {
    id: 'basic',
    name: 'Basic Plumbus',
    price: 149,
    description: 'Standard home model perfect for everyday plumbus needs.',
    features: [
      'Standard dinglebop processing',
      'Basic schleem coating',
      'Single fleeb juice reservoir',
      'Essential grumbo functionality',
      '1-year grodus warranty'
    ],
    buttonText: 'Get Your Plumbus'
  },
  {
    id: 'premium',
    name: 'Premium Plumbus X',
    price: 299,
    description: 'Enhanced model with extra fleeb juice for superior performance.',
    features: [
      'Premium dinglebop with smooth action',
      'Enhanced schleem coating',
      'Double fleeb juice capacity',
      'Advanced grumbo processing',
      'Schlami-approved quality',
      '3-year grodus warranty',
      'Free fleeb replacement'
    ],
    popular: true,
    buttonText: 'Most Popular Choice'
  },
  {
    id: 'enterprise',
    name: 'Plumbus Pro Max',
    price: 499,
    description: 'The ultimate schlami-certified edition for discerning users.',
    features: [
      'Schlami-certified dinglebop',
      'Premium-grade schleem finish',
      'Triple fleeb juice system',
      'Professional grumbo chamber',
      'Hand-rubbed by master schlami',
      'Lifetime grodus warranty',
      'Annual schlami inspection',
      'Authentic plumbus certificate'
    ],
    buttonText: 'Ultimate Plumbus'
  }
];

export const manufacturingSteps: ManufacturingStep[] = [
  {
    id: 1,
    title: 'Fleeb Preparation',
    description: 'First, they take the dingle-bop and smooth it out with a bunch of schleem.',
    technicalDetails: 'The initial fleeb contains all the fleeb juice needed for the manufacturing process.',
    duration: 'Variable'
  },
  {
    id: 2,
    title: 'Grumbo Assembly',
    description: 'Then they smooth it out with a bunch of schleem.',
    technicalDetails: 'The schleem is then repurposed for later batches, ensuring no waste.',
    duration: 'As needed'
  },
  {
    id: 3,
    title: 'Schlami Processing',
    description: 'The schlami shows up and he rubs it and spits on it.',
    technicalDetails: 'A trained schlami rubs the dingle-bop through the grumbo for quality assurance.',
    duration: 'Until perfect'
  },
  {
    id: 4,
    title: 'Final Touches',
    description: 'Then you cut the fleeb and that\'s how you get a plumbus.',
    technicalDetails: 'The fleeb is carefully cut and the plumbus is ready for household use.',
    duration: 'Moments'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'rulenein',
    name: 'Rulenein',
    role: 'Plumbus Expert',
    company: 'Fleeb Industries',
    content: 'I don\'t know how I ever lived without a plumbus. The fleeb juice optimization is incredible!',
    rating: 5,
    avatar: '/avatars/rulenein.jpg'
  },
  {
    id: 'gumde',
    name: 'Gumde',
    role: 'Satisfied Customer',
    company: 'Home User',
    content: 'The plumbus changed my life. It\'s wonderful! Everyone should have one.',
    rating: 5,
    avatar: '/avatars/gumde.jpg'
  },
  {
    id: 'squanch-ceo',
    name: 'Squanch',
    role: 'CEO',
    company: 'Squanch Industries',
    content: 'Every squanch needs a plumbus. Squanch! It really squanches up your whole house.',
    rating: 5,
    avatar: '/avatars/squanch-ceo.jpg'
  },
  {
    id: 'krombopulos',
    name: 'Krombopulos Michael',
    role: 'Professional Assassin',
    company: 'Independent Contractor',
    content: 'I buy plumbuses, oh boy! Here I go buying again! They make excellent household companions.',
    rating: 5,
    avatar: '/avatars/krombopulos.jpg'
  }
];

export const faqs: FAQ[] = [
  {
    id: 'what-is-plumbus',
    question: 'What is a plumbus?',
    answer: 'Everyone has a plumbus in their home. It\'s an all-purpose household device that\'s been essential for generations.'
  },
  {
    id: 'how-to-use',
    question: 'How do I use my plumbus?',
    answer: 'Simply grab the dingle-bop and apply as needed. The fleeb juice will automatically optimize for your specific task.'
  },
  {
    id: 'fleeb-replaceable',
    question: 'Is the fleeb replaceable?',
    answer: 'The fleeb contains all the fleeb juice and is designed to last the lifetime of your plumbus with proper care.'
  },
  {
    id: 'warranty-coverage',
    question: 'What\'s the warranty?',
    answer: 'Every plumbus comes with a lifetime grodus warranty, covering all manufacturing defects and schlami-related issues.'
  },
  {
    id: 'color-options',
    question: 'Can I get it in different colors?',
    answer: 'All plumbuses come in the standard pink color, which has been perfected over generations of manufacturing.'
  },
  {
    id: 'child-safety',
    question: 'Is it safe for children?',
    answer: 'Plumbuses are family-friendly devices. The schleem coating is non-toxic and the dingle-bop is designed for safe handling.'
  },
  {
    id: 'maintenance-schedule',
    question: 'How often should I maintain it?',
    answer: 'Schlamis recommend annual rubbing to maintain optimal performance. Most plumbuses require minimal maintenance otherwise.'
  },
  {
    id: 'manufacturing-location',
    question: 'Where are plumbuses made?',
    answer: 'All authentic plumbuses are manufactured in dimension C-137 using traditional schlami techniques passed down through generations.'
  }
];

export const plumbusHotspots: PlumbusHotspot[] = [
  {
    id: 'dinglebop',
    x: 25,
    y: 30,
    title: 'Dinglebop Core',
    description: 'The heart of every Plumbus, responsible for quantum processing',
    feature: 'Processes up to 1.21 gigaquantums per second'
  },
  {
    id: 'schleem',
    x: 70,
    y: 45,
    title: 'Schleem Coating',
    description: 'Provides the signature smooth texture and universal compatibility',
    feature: 'Self-cleaning and dimension-resistant'
  },
  {
    id: 'fleeb',
    x: 45,
    y: 70,
    title: 'Fleeb Matrix',
    description: 'Enables multidimensional functionality and heat generation',
    feature: 'Connects to the quantum foam of reality'
  },
  {
    id: 'grumbo',
    x: 60,
    y: 25,
    title: 'Grumbo Port',
    description: 'Allows for easy grumbo replacement and system updates',
    feature: 'Hot-swappable grumbo cartridges'
  }
];