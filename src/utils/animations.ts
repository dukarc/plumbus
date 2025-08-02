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
  boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  transition: {
    duration: 0.2,
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
  y: -8,
  boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  transition: {
    duration: 0.3,
    ease: 'easeOut',
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