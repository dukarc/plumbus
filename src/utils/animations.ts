import { Variants } from 'framer-motion';

// Reduced motion check
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Common animation variants
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const slideInUp: Variants = {
  hidden: {
    y: '100%',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

// Stagger container
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Plumbus-specific animations
export const plumbusBreathing: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    rotate: [0, 1, -1, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const hotspotPulse: Variants = {
  animate: {
    scale: [1, 1.3, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const floatingAnimation: Variants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Button hover effects
export const buttonHover = {
  scale: 1.05,
  y: -2,
  boxShadow: [
    '0 4px 14px 0 rgba(236, 72, 153, 0.2)',
    '0 10px 20px 0 rgba(236, 72, 153, 0.3)',
  ],
  rotate: [0, 1, -1, 0],
  transition: {
    duration: 0.3,
    ease: 'easeOut',
  },
};

export const buttonTap = {
  scale: 0.95,
  transition: {
    duration: 0.1,
    ease: 'easeOut',
  },
};

// Card animations
export const cardHover = {
  y: -12,
  scale: 1.02,
  rotateY: 5,
  rotateX: 5,
  boxShadow: [
    '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    '0 25px 50px -12px rgba(236, 72, 153, 0.25)',
  ],
  transition: {
    duration: 0.4,
    ease: [0.25, 0.46, 0.45, 0.94],
  },
};

// Loading animations
export const spinnerVariants: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

// Page transition
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};

// Enhanced button interactions
export const buttonRipple = {
  scale: [1, 1.05, 1],
  boxShadow: [
    '0 4px 14px 0 rgba(236, 72, 153, 0.3)',
    '0 6px 20px 0 rgba(236, 72, 153, 0.4)',
    '0 4px 14px 0 rgba(236, 72, 153, 0.3)'
  ],
  transition: {
    duration: 0.6,
    ease: 'easeOut'
  }
};

export const buttonSuccess = {
  scale: [1, 1.1, 1],
  backgroundColor: ['#ec4899', '#10b981', '#ec4899'],
  transition: {
    duration: 0.8,
    ease: 'easeInOut'
  }
};

// Enhanced Plumbus animations
export const plumbusEnhancedBreathing: Variants = {
  animate: {
    scale: [1, 1.02, 0.98, 1.02, 1],
    rotate: [0, 0.5, -0.5, 0.3, 0],
    filter: [
      'drop-shadow(0 4px 8px rgba(236, 72, 153, 0.3))',
      'drop-shadow(0 8px 16px rgba(236, 72, 153, 0.4))',
      'drop-shadow(0 4px 8px rgba(236, 72, 153, 0.3))'
    ],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const magicalParticles: Variants = {
  animate: (i: number) => ({
    y: [-20, -80, -20],
    x: [0, Math.sin(i * 0.5) * 30, 0],
    opacity: [0, 0.9, 0],
    scale: [0.3, 1.2, 0.3],
    rotate: [0, 180, 360],
    filter: [
      'hue-rotate(0deg)',
      'hue-rotate(90deg)',
      'hue-rotate(180deg)',
      'hue-rotate(270deg)',
      'hue-rotate(360deg)',
    ],
    transition: {
      duration: 4 + i * 0.3,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: i * 0.2,
    },
  }),
};

export const hotspotRipple: Variants = {
  animate: {
    scale: [1, 2, 1],
    opacity: [0.6, 0, 0.6],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeOut',
    },
  },
};

// Loading states
export const skeletonPulse: Variants = {
  animate: {
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const loadingDots: Variants = {
  animate: (i: number) => ({
    y: [0, -20, 0],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: i * 0.1,
    },
  }),
};

// Confetti explosion
export const confettiExplosion: Variants = {
  animate: () => ({
    x: [0, (Math.random() - 0.5) * 300],
    y: [0, -150 - Math.random() * 150],
    rotate: [0, Math.random() * 1080],
    opacity: [1, 0.8, 0],
    scale: [0, 1.5, 0.2],
    transition: {
      duration: 2,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

// Enhanced confetti with different shapes
export const enhancedConfetti: Variants = {
  animate: (i: number) => {
    const shapes = ['circle', 'square', 'triangle', 'star'];
    return {
      x: [0, (Math.random() - 0.5) * 400],
      y: [0, -200 - Math.random() * 200],
      rotate: [0, Math.random() * 1440],
      opacity: [1, 0.9, 0],
      scale: [0, 1.2, 0.1],
      borderRadius: shapes[i % shapes.length] === 'circle' ? '50%' : '0%',
      transition: {
        duration: 2.5 + Math.random(),
        ease: 'easeOut',
      },
    };
  },
};

// Rick & Morty themed easter egg animations
export const portalSpin: Variants = {
  animate: {
    rotate: 360,
    scale: [1, 1.2, 1],
    filter: [
      'hue-rotate(0deg) brightness(1)',
      'hue-rotate(180deg) brightness(1.2)',
      'hue-rotate(360deg) brightness(1)'
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

export const interdimensionalGlitch: Variants = {
  animate: {
    x: [0, -2, 2, -1, 1, 0],
    filter: [
      'hue-rotate(0deg)',
      'hue-rotate(90deg)',
      'hue-rotate(180deg)',
      'hue-rotate(270deg)',
      'hue-rotate(360deg)'
    ],
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

// Scroll-triggered parallax
export const parallaxFloat: Variants = {
  animate: {
    y: [-10, 10, -10],
    rotate: [-1, 1, -1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Form field focus animations
export const focusGlow: Variants = {
  focus: {
    boxShadow: '0 0 0 3px rgba(236, 72, 153, 0.1), 0 0 20px rgba(236, 72, 153, 0.3)',
    borderColor: '#ec4899',
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  blur: {
    boxShadow: '0 0 0 0px rgba(236, 72, 153, 0)',
    borderColor: '#e5e7eb',
    scale: 1,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
};

// Success checkmark animation
export const checkmarkDraw: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 0.5, ease: 'easeInOut' },
      opacity: { duration: 0.2 },
    },
  },
};

// Staggered text reveal
export const textReveal: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const staggeredTextContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

// Utility function to get animation variants based on direction
export const getSlideAnimation = (direction: 'up' | 'down' | 'left' | 'right') => {
  switch (direction) {
    case 'up':
      return fadeInUp;
    case 'down':
      return fadeInDown;
    case 'left':
      return fadeInLeft;
    case 'right':
      return fadeInRight;
    default:
      return fadeInUp;
  }
};

// Scroll-triggered animation options
export const scrollAnimationOptions = {
  threshold: 0.1,
  triggerOnce: true,
  rootMargin: '-50px 0px',
};

// Card tilt on mouse move
export const cardTilt = {
  rotateX: 5,
  rotateY: 5,
  scale: 1.02,
  transition: {
    duration: 0.3,
    ease: 'easeOut',
  },
};

// Elastic button press
export const elasticPress: Variants = {
  tap: {
    scale: 0.9,
    rotate: [0, -1, 1, 0],
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

// Wiggle animation for interactive elements
export const wiggleAnimation: Variants = {
  wiggle: {
    x: [0, -3, 3, -2, 2, 0],
    rotate: [0, -1, 1, -0.5, 0.5, 0],
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
};

// Bounce in animation
export const bounceIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.3,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 17,
    },
  },
};

// Typewriter text animation
export const typewriter: Variants = {
  hidden: {
    width: 0,
  },
  visible: {
    width: 'auto',
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

// Particle burst animation
export const particleBurst: Variants = {
  animate: (i: number) => ({
    x: [0, (Math.random() - 0.5) * 300],
    y: [0, -Math.random() * 200],
    rotate: [0, Math.random() * 720],
    opacity: [1, 0],
    scale: [1, 0.2],
    transition: {
      duration: 1.2 + Math.random() * 0.8,
      ease: 'easeOut',
      delay: i * 0.02,
    },
  }),
};

// Magnetic hover effect
export const magneticHover = {
  scale: 1.05,
  rotate: [0, 1, -1, 0],
  transition: {
    duration: 0.4,
    ease: 'easeOut',
  },
};

// Glitch effect
export const glitchEffect: Variants = {
  animate: {
    x: [0, -2, 2, -1, 1, 0],
    filter: [
      'hue-rotate(0deg)',
      'hue-rotate(90deg)',
      'hue-rotate(180deg)',
      'hue-rotate(270deg)',
      'hue-rotate(360deg)',
    ],
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

// Morphing shape animation
export const morphShape: Variants = {
  animate: {
    borderRadius: ['20px', '50%', '20px'],
    rotate: [0, 180, 360],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Sparkle trail animation
export const sparkleTrail: Variants = {
  animate: (i: number) => ({
    scale: [0, 1, 0],
    rotate: [0, 180],
    opacity: [0, 1, 0],
    transition: {
      duration: 1,
      ease: 'easeOut',
      delay: i * 0.1,
    },
  }),
};

// Liquid button animation
export const liquidButton: Variants = {
  hover: {
    scale: 1.05,
    borderRadius: ['12px', '20px', '12px'],
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
  tap: {
    scale: 0.95,
    borderRadius: '8px',
    transition: {
      duration: 0.1,
    },
  },
};

// Floating bubble animation
export const floatingBubble: Variants = {
  animate: (i: number) => ({
    y: [0, -20 - i * 5, 0],
    x: [0, Math.sin(i) * 10, 0],
    scale: [1, 1.1, 1],
    opacity: [0.3, 0.8, 0.3],
    transition: {
      duration: 3 + i * 0.5,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: i * 0.2,
    },
  }),
};

// Rainbow text animation
export const rainbowText: Variants = {
  animate: {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

// Jello effect
export const jelloEffect: Variants = {
  animate: {
    skewX: [0, -12.5, 6.25, -3.125, 1.5625, 0],
    skewY: [0, -12.5, 6.25, -3.125, 1.5625, 0],
    transition: {
      duration: 0.9,
      ease: 'easeInOut',
    },
  },
};