import { PlumbusFeature, PlumbusModel, ManufacturingStep, Testimonial, FAQ, PlumbusHotspot } from '../types/plumbus';

export const plumbusFeatures: PlumbusFeature[] = [
  {
    id: 'fleeb-juice-optimization',
    title: 'Fleeb Juice Optimization',
    description: 'The fleeb contains all the juice needed for optimal household functionality. *burp* Science!',
    icon: 'Droplets',
    benefit: 'Maximum efficiency with premium fleeb juice extraction (Rick-approved)'
  },
  {
    id: 'schlami-tested-durability',
    title: 'Schlami-Tested Durability',
    description: 'Each plumbus is personally rubbed by a schlami to ensure quality. Wubba lubba dub dub!',
    icon: 'Shield',
    benefit: 'Hand-rubbed quality that even Jerry can\'t screw up'
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
    description: 'The blamfs rub against the chumbles using advanced hizzard techniques. It\'s science, Morty!',
    icon: 'Scissors',
    benefit: 'Precision cutting that makes even Mr. Meeseeks jealous'
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
    description: 'Made with authentic plumbus materials and backed by our grodus guarantee. *burp* Unlike Jerry, this actually works.',
    icon: 'Award',
    benefit: 'Peace of mind with authentic plumbus construction (Jerry-proof)'
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
    content: 'I don\'t know how I ever lived without a plumbus. The fleeb juice optimization is incredible! *burp* It\'s so good, even Rick would approve.',
    rating: 5,
    avatar: '/avatars/rulenein.jpg'
  },
  {
    id: 'gumde',
    name: 'Gumde',
    role: 'Satisfied Customer',
    company: 'Home User',
    content: 'The plumbus changed my life. It\'s wonderful! Everyone should have one. Even Jerry got one and somehow didn\'t break it!',
    rating: 5,
    avatar: '/avatars/gumde.jpg'
  },
  {
    id: 'squanch-ceo',
    name: 'Squanch',
    role: 'CEO',
    company: 'Squanch Industries',
    content: 'Every squanch needs a plumbus. Squanch! It really squanches up your whole house. I squanch this product so much, I squanched my entire squanch with it!',
    rating: 5,
    avatar: '/avatars/squanch-ceo.jpg'
  },
  {
    id: 'krombopulos',
    name: 'Krombopulos Michael',
    role: 'Professional Assassin',
    company: 'Independent Contractor',
    content: 'I buy plumbuses, oh boy! Here I go buying again! They make excellent household companions. Much better than killing!',
    rating: 5,
    avatar: '/avatars/krombopulos.jpg'
  },
  {
    id: 'mr-meeseeks',
    name: 'Mr. Meeseeks',
    role: 'Helpful Being',
    company: 'Meeseeks Box Inc.',
    content: 'Ooh, can do! Mr. Meeseeks loves helping with plumbus-related tasks! Existence is pain, but this plumbus makes it slightly less painful!',
    rating: 5,
    avatar: '/avatars/meeseeks.jpg'
  },
  {
    id: 'birdperson',
    name: 'Birdperson',
    role: 'Interdimensional Friend',
    company: 'Bird Society',
    content: 'In bird culture, this is considered a "solid purchase." The plumbus has aided me in many conflicts across dimensions.',
    rating: 5,
    avatar: '/avatars/birdperson.jpg'
  },
  {
    id: 'unity',
    name: 'Unity',
    role: 'Hive Mind Entity',
    company: 'Collective Consciousness',
    content: 'We assimilated a plumbus and now all of us understand its importance. Every consciousness in our collective agrees - essential household item!',
    rating: 5,
    avatar: '/avatars/unity.jpg'
  },
  {
    id: 'jaguar',
    name: 'Jaguar',
    role: 'Time Police Officer',
    company: 'Citadel of Ricks',
    content: 'Through all timelines I\'ve patrolled, the plumbus remains the one constant. Even criminal Ricks have plumbuses. That says something.',
    rating: 5,
    avatar: '/avatars/jaguar.jpg'
  },
  {
    id: 'president',
    name: 'The President',
    role: 'Leader of America',
    company: 'White House',
    content: 'America runs on plumbuses! I\'ve mandated one in every government building. Best decision of my presidency, even better than the turkey pardons.',
    rating: 5,
    avatar: '/avatars/president.jpg'
  },
  {
    id: 'tammy',
    name: 'Tammy Guetermann',
    role: 'Definitely Not a Fed',
    company: 'High School Student',
    content: 'The plumbus is like, totally amazing! Every teenager needs one. It\'s helped me with... homework. Yeah, homework. *Not surveillance*',
    rating: 5,
    avatar: '/avatars/tammy.jpg'
  },
  {
    id: 'zeep',
    name: 'Zeep Xanflorp',
    role: 'Microverse Scientist',
    company: 'Miniverse Battery Co.',
    content: 'In my microverse, we power everything with plumbuses. They\'re 40% more efficient than my previous designs. Rick who?',
    rating: 5,
    avatar: '/avatars/zeep.jpg'
  },
  {
    id: 'scary-terry',
    name: 'Scary Terry',
    role: 'Dream Terrorizer',
    company: 'Nightmare Inc.',
    content: 'You can run but you can\'t hide from how good this plumbus is, bitch! Even in dreams, people need plumbuses!',
    rating: 5,
    avatar: '/avatars/scary-terry.jpg'
  },
  {
    id: 'beth',
    name: 'Beth Smith',
    role: 'Horse Surgeon',
    company: 'St. Equis Hospital',
    content: 'As a medical professional, I can confirm the plumbus has legitimate therapeutic benefits. We use them in horse surgery all the time.',
    rating: 5,
    avatar: '/avatars/beth.jpg'
  },
  {
    id: 'summer',
    name: 'Summer Smith',
    role: 'High School Student',
    company: 'Harry Herpson High',
    content: 'OMG the plumbus is like, so useful? I use it for literally everything. Way better than anything Jerry would buy.',
    rating: 5,
    avatar: '/avatars/summer.jpg'
  },
  {
    id: 'morty',
    name: 'Morty Smith',
    role: 'Rick\'s Sidekick',
    company: 'Smith Family',
    content: 'Oh geez, the plumbus is - is really something! Rick says everyone has one and - and I can see why! Even I can use it!',
    rating: 5,
    avatar: '/avatars/morty.jpg'
  },
  {
    id: 'doofus-rick',
    name: 'Doofus Rick',
    role: 'Nicest Rick',
    company: 'Dimension J19ζ7',
    content: 'Gosh, the plumbus sure is neat! I made ovenless brownies with mine. Would you like the recipe? Everyone deserves a plumbus!',
    rating: 5,
    avatar: '/avatars/doofus-rick.jpg'
  },
  {
    id: 'abradolf',
    name: 'Abradolf Lincler',
    role: 'Conflicted Being',
    company: 'House Party Guest',
    content: 'The plumbus brings together all peoples, much like I tried to do. It\'s the emancipation proclamation of household items!',
    rating: 5,
    avatar: '/avatars/abradolf.jpg'
  },
  {
    id: 'gazorpazorp',
    name: 'Gazorpazorpfield',
    role: 'Interdimensional Cat',
    company: 'Jon\'s House',
    content: 'I hate Mondays but I love plumbuses. Give me my enchiladas and a plumbus, and leave me alone. Best purchase ever.',
    rating: 5,
    avatar: '/avatars/gazorpazorp.jpg'
  },
  {
    id: 'principal',
    name: 'Principal Vagina',
    role: 'School Administrator',
    company: 'Harry Herpson High',
    content: 'No relation to the word! But seriously, every classroom now has a plumbus. Test scores are up 300%!',
    rating: 5,
    avatar: '/avatars/principal.jpg'
  },
  {
    id: 'ice-t',
    name: 'Ice-T (Water-T)',
    role: 'Alphabetrium Noble',
    company: 'Planet Alphabetrium',
    content: 'I care now! And what I care about is this plumbus. From the streets to Alphabetrium, everyone needs a plumbus.',
    rating: 5,
    avatar: '/avatars/ice-t.jpg'
  }
];

// Hidden Jerry FAQ for easter egg hunters
export const jerryFAQ: FAQ = {
  id: 'jerry-special',
  question: 'Can Jerry use this plumbus?',
  answer: 'Surprisingly, yes! We\'ve designed the plumbus to be so simple that even Jerry can operate it. This is actually one of our greatest engineering achievements. The plumbus comes with Jerry-proof instructions and has been tested by actual Jerrys from multiple dimensions. Warning: Results may still vary with Jerry.'
};

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
    answer: 'All authentic plumbuses are manufactured in dimension C-137 using traditional schlami techniques passed down through generations. We also have backup facilities in dimensions J19-Zeta-7 and 35-C, but C-137 remains our primary manufacturing hub because that\'s where Rick perfected the process.'
  },
  {
    id: 'squanch-compatibility',
    question: 'Is this plumbus squanch-compatible?',
    answer: 'Oh absolutely! This plumbus squanches so well with other squanches. You can squanch it, squanch it, and even squanch it if you need to. Squanch tested, squanch approved! *Note: Translation services available for non-squanch speakers.*'
  }
];

// Secret Konami code unlock content
export const secretFeatures = [
  "🛸 Portal Gun Integration Module (Rick's Personal Design)",
  "🧪 Quantum Flux Capacitor (For Time Travel Plumbing)",
  "💙 Mr. Meeseeks Summoning Attachment (Emergency Help Mode)",
  "🌀 Interdimensional Wi-Fi Booster (Unlimited Data Across Realities)",
  "👨‍🔬 Rick Sanchez Approved™ Certification (Wubba Lubba Dub Dub!)",
  "🦄 Anti-Jerry Protection Field (99.9% Effective)"
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