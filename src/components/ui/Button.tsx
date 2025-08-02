import React from 'react';
import { motion } from 'framer-motion';
import { buttonHover, buttonTap } from '@utils/animations';
import { useReducedMotion } from '@hooks/useReducedMotion';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  loading?: boolean;
  className?: string;
  disabled?: boolean;
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
  onClick
}) => {
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

  const motionProps = prefersReducedMotion
    ? {}
    : {
        whileHover: disabled || loading ? {} : buttonHover,
        whileTap: disabled || loading ? {} : buttonTap,
      };

  const content = (
    <>
      {loading && (
        <motion.div
          className="mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          aria-hidden="true"
        />
      )}
      {children}
    </>
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
      onClick={onClick}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
};