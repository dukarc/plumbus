import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { buttonHover, buttonTap, buttonRipple, buttonSuccess, confettiExplosion } from '@utils/animations';
import { useReducedMotion } from '@hooks/useReducedMotion';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  loading?: boolean;
  className?: string;
  disabled?: boolean;
  success?: boolean;
  showConfetti?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  href,
  loading = false,
  className = '',
  disabled,
  success = false,
  showConfetti = false,
  onClick
}) => {
  const [, setIsClicked] = useState(false);
  const [, setIsHovered] = useState(false);
  const [showRipple, setShowRipple] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const baseClasses = `
    btn ${sizeClasses[size]} ${className}
    inline-flex items-center justify-center
    font-semibold rounded-lg
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `.trim();

  const variantClasses = {
    primary: 'btn-primary bg-gradient-to-r from-pink-500 to-pink-600 text-white hover:from-pink-600 hover:to-pink-700 shadow-lg hover:shadow-xl',
    secondary: 'btn-secondary bg-white text-pink-600 border-2 border-pink-200 hover:bg-pink-50 hover:border-pink-300',
    ghost: 'btn-ghost bg-transparent text-gray-700 hover:bg-gray-100 hover:text-gray-900'
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]}`;

  const handleClick = () => {
    if (disabled || loading) return;
    
    setIsClicked(true);
    setShowRipple(true);
    
    // Reset after animation
    setTimeout(() => {
      setIsClicked(false);
      setShowRipple(false);
    }, 600);
    
    onClick?.();
  };

  const motionProps = prefersReducedMotion
    ? {
        onHoverStart: () => setIsHovered(true),
        onHoverEnd: () => setIsHovered(false),
      }
    : {
        whileHover: disabled || loading ? {} : {
          ...buttonHover,
          transition: {
            duration: 0.3,
            ease: 'easeOut',
          },
        },
        whileTap: disabled || loading ? {} : {
          ...buttonTap,
          rotate: [0, -1, 1, 0],
          transition: {
            duration: 0.2,
          },
        },
        animate: success ? buttonSuccess : (showRipple ? buttonRipple : {}),
        onHoverStart: () => setIsHovered(true),
        onHoverEnd: () => setIsHovered(false),
      };

  const content = (
    <div className="relative">
      {/* Ripple effect */}
      <AnimatePresence>
        {showRipple && !prefersReducedMotion && (
          <motion.div
            className="absolute inset-0 bg-white rounded-lg opacity-20"
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{ scale: 2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        )}
      </AnimatePresence>
      
      {/* Loading spinner */}
      {loading && (
        <motion.div
          className="mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          aria-hidden="true"
        />
      )}
      
      {/* Success checkmark */}
      {success && !loading && (
        <motion.svg
          className="mr-2 h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <motion.path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />
        </motion.svg>
      )}
      
      <span className="relative z-10">{children}</span>
      
      {/* Confetti explosion */}
      <AnimatePresence>
        {showConfetti && !prefersReducedMotion && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                variants={confettiExplosion}
                initial="initial"
                animate="animate"
                custom={i}
              />
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );

  if (href && !disabled && !loading) {
    return (
      <motion.a
        href={href}
        className={combinedClasses}
        role="button"
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={combinedClasses}
      disabled={disabled || loading}
      onClick={handleClick}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
};