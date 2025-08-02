import { PlumbusFeature, PlumbusModel, ManufacturingStep, Testimonial, FAQ, PlumbusHotspot } from '../types/plumbus';

export const plumbusFeatures: PlumbusFeature[] = [
  {
    id: 'heat-generation',
    title: 'Advanced Heat Generation',
    description: 'Generates optimal heat levels for any household task through quantum fleeb resonance.',
    icon: 'Flame',
    benefit: 'Perfect temperature control for cooking, cleaning, and comfort'
  },
  {
    id: 'surface-cleaning',
    title: 'Universal Surface Cleaning',
    description: 'The schleem coating provides unmatched cleaning power across all surface types.',
    icon: 'Sparkles',
    benefit: 'Cleans everything from delicate fabrics to industrial surfaces'
  },
  {
    id: 'entertainment',
    title: 'Multi-Dimensional Entertainment',
    description: 'Built-in entertainment system with access to infinite dimensions of content.',
    icon: 'Tv',
    benefit: 'Never run out of things to watch or games to play'
  },
  {
    id: 'food-preparation',
    title: 'Quantum Food Preparation',
    description: 'Instantly prepare meals using molecular gastronomy and dimension-shifting ingredients.',
    icon: 'ChefHat',
    benefit: 'Gourmet meals in seconds, no cooking skills required'
  },
  {
    id: 'home-security',
    title: 'Interdimensional Security',
    description: 'Protects your home from threats across multiple dimensions and timelines.',
    icon: 'Shield',
    benefit: 'Peace of mind with universe-class protection'
  },
  {
    id: 'communication',
    title: 'Quantum Communication',
    description: 'Connect with beings across the multiverse using dinglebop-enhanced signals.',
    icon: 'MessageCircle',
    benefit: 'Stay connected with friends, family, and alternate selves'
  }
];

export const plumbusModels: PlumbusModel[] = [
  {
    id: 'basic',
    name: 'Plumbus Basic',
    price: 149,
    description: 'Perfect for first-time Plumbus users and small households.',
    features: [
      'Standard dinglebop processing',
      'Basic schleem coating',
      'Single-dimension fleeb access',
      '24/7 customer support',
      '1-year warranty'
    ],
    buttonText: 'Start Your Journey'
  },
  {
    id: 'premium',
    name: 'Plumbus Premium',
    price: 299,
    description: 'Enhanced features for the discerning Plumbus enthusiast.',
    features: [
      'Advanced dinglebop with turbo mode',
      'Premium schleem pro coating',
      'Multi-dimension fleeb access',
      'Quantum entanglement communication',
      'Priority support',
      '3-year warranty',
      'Free annual grumbo replacement'
    ],
    popular: true,
    buttonText: 'Most Popular Choice'
  },
  {
    id: 'enterprise',
    name: 'Plumbus Enterprise',
    price: 499,
    description: 'Industrial-grade Plumbus for businesses and power users.',
    features: [
      'Military-grade dinglebop array',
      'Diamond-infused schleem coating',
      'Infinite dimension fleeb matrix',
      'Telepathic user interface',
      'White-glove setup service',
      'Lifetime warranty',
      'Monthly grumbo delivery',
      'Rick Sanchez consultation call'
    ],
    buttonText: 'Ultimate Power'
  }
];

export const manufacturingSteps: ManufacturingStep[] = [
  {
    id: 1,
    title: 'Dinglebop Extraction',
    description: 'First, they take the dinglebop and push it through the grumbo.',
    technicalDetails: 'Using precision quantum extraction, the dinglebop is carefully removed from its natural state and prepared for grumbo integration.',
    duration: '2.3 microseconds'
  },
  {
    id: 2,
    title: 'Schleem Application',
    description: 'The schleem is then repurposed for later batches.',
    technicalDetails: 'Our proprietary schleem recycling process ensures maximum efficiency while maintaining the highest quality standards.',
    duration: '47 nanoseconds'
  },
  {
    id: 3,
    title: 'Fleeb Integration',
    description: 'They take the dinglebop and push it through the grumbo, where the fleeb is rubbed against it.',
    technicalDetails: 'The fleeb undergoes quantum entanglement with the dinglebop matrix, creating the signature Plumbus resonance field.',
    duration: '1.7 seconds'
  },
  {
    id: 4,
    title: 'Grumbo Processing',
    description: 'The grumbo is shaved away, leaving only the essential Plumbus core.',
    technicalDetails: 'Advanced molecular shaving techniques remove excess grumbo while preserving the delicate flavor profile.',
    duration: '0.8 milliseconds'
  },
  {
    id: 5,
    title: 'Quality Assurance',
    description: 'Every Plumbus is tested by certified interdimensional quality inspectors.',
    technicalDetails: 'Multi-dimensional stress testing ensures your Plumbus will perform flawlessly across all possible realities.',
    duration: '12 minutes'
  },
  {
    id: 6,
    title: 'Final Activation',
    description: 'The Plumbus is activated using Rick\'s secret formula and shipped directly to you.',
    technicalDetails: 'Our patented activation sequence awakens the Plumbus consciousness, ready to serve your every need.',
    duration: 'Instantaneous'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'rick-s',
    name: 'Rick S.',
    role: 'Scientist',
    company: 'Smith Family Garage',
    content: 'Listen Morty, I\'ve invented a lot of things, but the Plumbus? *burp* That\'s pure genius. Every home needs one, and I mean EVERY home across all dimensions.',
    rating: 5,
    avatar: '/avatars/rick.jpg'
  },
  {
    id: 'unity',
    name: 'Unity',
    role: 'Collective Consciousness',
    company: 'Planet Unity',
    content: 'As a hive mind controlling billions of beings, I can confidently say that the Plumbus has improved efficiency across all my inhabited worlds by 847%.',
    rating: 5,
    avatar: '/avatars/unity.jpg'
  },
  {
    id: 'meeseeks',
    name: 'Mr. Meeseeks',
    role: 'Problem Solver',
    company: 'Meeseeks Box Inc.',
    content: 'Ooh, can do! The Plumbus helped me complete my task in record time. I\'m Mr. Meeseeks, look at me! And I LOVE this product!',
    rating: 5,
    avatar: '/avatars/meeseeks.jpg'
  },
  {
    id: 'birdperson',
    name: 'Birdperson',
    role: 'Freedom Fighter',
    company: 'Rebel Alliance',
    content: 'In bird culture, this is considered a revolutionary household device. The Plumbus has made my nest the envy of all bird society.',
    rating: 5,
    avatar: '/avatars/birdperson.jpg'
  },
  {
    id: 'squanch',
    name: 'Squanch',
    role: 'Family Friend',
    company: 'Planet Squanch',
    content: 'I squanch my family with this Plumbus every day. It really squanches up the whole squanching experience, you know what I\'m squanching?',
    rating: 5,
    avatar: '/avatars/squanch.jpg'
  }
];

export const faqs: FAQ[] = [
  {
    id: 'what-is-plumbus',
    question: 'What exactly is a Plumbus?',
    answer: 'The Plumbus is a mysterious multi-purpose household device that everyone has but nobody fully understands. It\'s been a staple in homes across the multiverse for generations, seamlessly integrating into daily life through its advanced dinglebop technology and quantum fleeb matrix.'
  },
  {
    id: 'how-does-it-work',
    question: 'How does the Plumbus work?',
    answer: 'The Plumbus operates through a complex interaction between its dinglebop core, schleem coating, and fleeb resonance system. The exact mechanisms are proprietary, but rest assured that centuries of interdimensional engineering have perfected this design for optimal household utility.'
  },
  {
    id: 'maintenance',
    question: 'Does the Plumbus require maintenance?',
    answer: 'Minimal maintenance is required! Simply replace the grumbo annually (included with Premium and Enterprise models), and occasionally wipe down the schleem coating. The dinglebop is self-maintaining thanks to its quantum properties.'
  },
  {
    id: 'compatibility',
    question: 'Is the Plumbus compatible with my dimension?',
    answer: 'Yes! The Plumbus is designed to work seamlessly across all known dimensions and realities. Our quantum calibration process ensures optimal performance whether you\'re in dimension C-137, J19-Zeta-7, or any other dimensional designation.'
  },
  {
    id: 'warranty',
    question: 'What\'s covered under the warranty?',
    answer: 'Our warranty covers all dinglebop malfunctions, schleem degradation, and fleeb misalignment. Enterprise models include coverage for interdimensional shipping damage and timeline paradox repairs. Normal wear from daily household use is expected and covered.'
  },
  {
    id: 'shipping',
    question: 'How fast is shipping?',
    answer: 'Thanks to our partnership with interdimensional shipping services, most orders arrive within 1-3 business days across multiple realities. Enterprise customers can opt for same-day portal delivery for an additional fee.'
  },
  {
    id: 'returns',
    question: 'Can I return my Plumbus?',
    answer: 'We offer a 30-day satisfaction guarantee. However, due to the Plumbus\'s quantum entanglement with your household, returns may cause minor temporal disruptions. Our customer service team will guide you through the safe disconnection process.'
  },
  {
    id: 'bulk-orders',
    question: 'Do you offer bulk pricing for multiple dimensions?',
    answer: 'Absolutely! Contact our Enterprise sales team for volume discounts on orders of 1000+ units. We offer special pricing for planetary governments, galactic federations, and universe-spanning corporations.'
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