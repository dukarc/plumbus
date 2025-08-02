import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@hooks/useReducedMotion';
import { skeletonPulse, loadingDots, sparkleTrail } from '@utils/animations';

interface SkeletonProps {
  width?: string;
  height?: string;
  className?: string;
  variant?: 'rectangle' | 'circle' | 'text';
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = '1rem',
  className = '',
  variant = 'rectangle'
}) => {
  const prefersReducedMotion = useReducedMotion();

  const baseClasses = 'bg-gray-200 rounded';
  const variantClasses = {
    rectangle: 'rounded-md',
    circle: 'rounded-full',
    text: 'rounded-sm'
  };

  return (
    <motion.div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{ width, height }}
      variants={prefersReducedMotion ? {} : skeletonPulse}
      animate={prefersReducedMotion ? {} : 'animate'}
    />
  );
};

interface LoadingDotsProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  className?: string;
}

export const LoadingDots: React.FC<LoadingDotsProps> = ({
  size = 'md',
  color = 'bg-pink-500',
  className = ''
}) => {
  const prefersReducedMotion = useReducedMotion();

  const sizeClasses = {
    sm: 'w-1 h-1',
    md: 'w-2 h-2',
    lg: 'w-3 h-3'
  };

  const dotSize = sizeClasses[size];

  return (
    <div className={`flex space-x-1 items-center justify-center ${className}`}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className={`${dotSize} ${color} rounded-full`}
          variants={prefersReducedMotion ? {} : loadingDots}
          animate={prefersReducedMotion ? {} : 'animate'}
          custom={i}
        />
      ))}
    </div>
  );
};

interface CardSkeletonProps {
  showAvatar?: boolean;
  lines?: number;
  className?: string;
}

export const CardSkeleton: React.FC<CardSkeletonProps> = ({
  showAvatar = false,
  lines = 3,
  className = ''
}) => {
  return (
    <div className={`bg-white rounded-xl p-6 shadow-md ${className}`}>
      <div className="animate-pulse">
        {showAvatar && (
          <div className="flex items-center space-x-4 mb-4">
            <Skeleton variant="circle" width="3rem" height="3rem" />
            <div className="flex-1 space-y-2">
              <Skeleton height="1rem" width="60%" />
              <Skeleton height="0.75rem" width="40%" />
            </div>
          </div>
        )}
        
        <div className="space-y-3">
          {Array.from({ length: lines }, (_, i) => (
            <Skeleton
              key={i}
              height="0.75rem"
              width={i === lines - 1 ? '75%' : '100%'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface PlumbusLoadingProps {
  message?: string;
  className?: string;
}

export const PlumbusLoading: React.FC<PlumbusLoadingProps> = ({
  message = 'Calibrating quantum fleeb matrix...',
  className = ''
}) => {
  const prefersReducedMotion = useReducedMotion();

  const messages = [
    'Calibrating quantum fleeb matrix... 🔧',
    'Adjusting dinglebop resonance... ⚡',
    'Applying schleem coating... ✨',
    'Connecting to interdimensional networks... 🌌',
    'Optimizing grumbo efficiency... 🚀',
    'Synchronizing with Rick\'s lab... 🧪',
    'Harmonizing plumbus frequencies... 🎵',
    'Initializing wubba lubba protocols... 💫',
    'Generating portal coordinates... 🌀'
  ];

  const [currentMessage, setCurrentMessage] = React.useState(message);

  React.useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentMessage(messages[Math.floor(Math.random() * messages.length)]);
    }, 2000);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <div className={`flex flex-col items-center justify-center py-12 ${className}`}>
      {/* Animated Plumbus */}
      <div className="relative mb-6">
        <motion.div
          className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full"
          animate={prefersReducedMotion ? {} : {
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={prefersReducedMotion ? {} : {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        
        {/* Orbiting particles */}
        {!prefersReducedMotion && (
          <>
            {[0, 1, 2, 3, 4].map((i) => {
              const radius = 35 + i * 5;
              const colors = ['bg-yellow-400', 'bg-pink-400', 'bg-purple-400', 'bg-blue-400', 'bg-green-400'];
              return (
                <motion.div
                  key={i}
                  className={`absolute w-2 h-2 ${colors[i]} rounded-full opacity-80`}
                  style={{
                    top: '50%',
                    left: '50%',
                    marginTop: '-4px',
                    marginLeft: '-4px',
                  }}
                  animate={{
                    x: [0, radius * Math.cos((i * 72 * Math.PI) / 180)],
                    y: [0, radius * Math.sin((i * 72 * Math.PI) / 180)],
                    rotate: [0, 360],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 4 + i * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.2,
                  }}
                />
              );
            })}
            
            {/* Additional sparkle effects */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`sparkle-${i}`}
                className="absolute w-1 h-1 bg-white rounded-full opacity-60"
                style={{
                  top: `${30 + i * 15}%`,
                  left: `${40 + i * 10}%`,
                }}
                variants={sparkleTrail}
                animate="animate"
                custom={i}
              />
            ))}
          </>
        )}
      </div>

      {/* Loading message with typewriter effect */}
      <motion.div
        className="text-gray-600 text-center max-w-xs relative"
        key={currentMessage}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <motion.p
          className="font-mono text-sm"
          animate={prefersReducedMotion ? {} : {
            opacity: [0.7, 1, 0.7],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }
          }}
        >
          {currentMessage}
        </motion.p>
        
        {/* Typing cursor */}
        {!prefersReducedMotion && (
          <motion.span
            className="inline-block w-0.5 h-4 bg-pink-500 ml-1"
            animate={{
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        )}
      </motion.div>

      {/* Loading dots */}
      <div className="mt-4">
        <LoadingDots />
      </div>
    </div>
  );
};

// Export all components
export default {
  Skeleton,
  LoadingDots,
  CardSkeleton,
  PlumbusLoading
};