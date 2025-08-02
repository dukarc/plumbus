import React, { useEffect, useState, useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { useReducedMotion } from '@hooks/useReducedMotion';

interface ParallaxScrollProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  offset?: number;
}

export const ParallaxScroll: React.FC<ParallaxScrollProps> = ({
  children,
  speed = 0.5,
  direction = 'up',
  className = '',
  offset = 0
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  // Transform scroll progress to movement
  const getTransform = () => {
    const range = 200 * speed;
    switch (direction) {
      case 'up':
        return useTransform(scrollYProgress, [0, 1], [offset, -range + offset]);
      case 'down':
        return useTransform(scrollYProgress, [0, 1], [offset, range + offset]);
      case 'left':
        return useTransform(scrollYProgress, [0, 1], [offset, -range + offset]);
      case 'right':
        return useTransform(scrollYProgress, [0, 1], [offset, range + offset]);
      default:
        return useTransform(scrollYProgress, [0, 1], [0, 0]);
    }
  };

  const transform = getTransform();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const motionStyle = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { y: transform };
      case 'left':
      case 'right':
        return { x: transform };
      default:
        return {};
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={motionStyle()}
    >
      {children}
    </motion.div>
  );
};

interface FloatingElementProps {
  children: React.ReactNode;
  intensity?: number;
  duration?: number;
  delay?: number;
  className?: string;
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  intensity = 20,
  duration = 4,
  delay = 0,
  className = ''
}) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      animate={{
        y: [-intensity / 2, intensity / 2, -intensity / 2],
        rotate: [-1, 1, -1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay
      }}
    >
      {children}
    </motion.div>
  );
};

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  distance?: number;
  duration?: number;
  delay?: number;
  once?: boolean;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  distance = 50,
  duration = 0.6,
  delay = 0,
  once = true,
  className = ''
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px'
      }
    );

    const current = ref.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [once, prefersReducedMotion]);

  const getInitialState = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: distance };
      case 'down':
        return { opacity: 0, y: -distance };
      case 'left':
        return { opacity: 0, x: distance };
      case 'right':
        return { opacity: 0, x: -distance };
      case 'scale':
        return { opacity: 0, scale: 0.8 };
      default:
        return { opacity: 0, y: distance };
    }
  };

  const getAnimateState = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { opacity: 1, y: 0 };
      case 'left':
      case 'right':
        return { opacity: 1, x: 0 };
      case 'scale':
        return { opacity: 1, scale: 1 };
      default:
        return { opacity: 1, y: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={prefersReducedMotion ? { opacity: 1 } : getInitialState()}
      animate={isVisible ? getAnimateState() : getInitialState()}
      transition={{
        duration,
        delay,
        ease: 'easeOut'
      }}
    >
      {children}
    </motion.div>
  );
};

interface MouseFollowerProps {
  children: React.ReactNode;
  intensity?: number;
  className?: string;
}

export const MouseFollower: React.FC<MouseFollowerProps> = ({
  children,
  intensity = 0.1,
  className = ''
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * intensity;
      const deltaY = (e.clientY - centerY) * intensity;

      setMousePosition({ x: deltaX, y: deltaY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [intensity, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={{
        x: mousePosition.x,
        y: mousePosition.y
      }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 15,
        mass: 0.5
      }}
    >
      {children}
    </motion.div>
  );
};

// Background particle system
interface ParticleSystemProps {
  count?: number;
  colors?: string[];
  size?: { min: number; max: number };
  speed?: { min: number; max: number };
  className?: string;
}

export const ParticleSystem: React.FC<ParticleSystemProps> = ({
  count = 20,
  colors = ['#f9a8d4', '#c084fc', '#fbbf24', '#60a5fa'],
  size = { min: 2, max: 6 },
  speed = { min: 10, max: 30 },
  className = ''
}) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return null;
  }

  const particles = Array.from({ length: count }, (_, i) => {
    const color = colors[i % colors.length];
    const particleSize = Math.random() * (size.max - size.min) + size.min;
    const animationSpeed = Math.random() * (speed.max - speed.min) + speed.min;
    
    return {
      id: i,
      color,
      size: particleSize,
      speed: animationSpeed,
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      delay: Math.random() * 5
    };
  });

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full opacity-60"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            left: `${particle.startX}%`,
            top: `${particle.startY}%`,
          }}
          animate={{
            y: [-20, -100, -20],
            x: [
              -Math.sin(particle.id) * 20,
              Math.sin(particle.id) * 20,
              -Math.sin(particle.id) * 20
            ],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: particle.speed,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: particle.delay
          }}
        />
      ))}
    </div>
  );
};

export default {
  ParallaxScroll,
  FloatingElement,
  ScrollReveal,
  MouseFollower,
  ParticleSystem
};