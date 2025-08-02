import React from 'react';
import { motion } from 'framer-motion';
import { cardHover } from '@utils/animations';
import { useReducedMotion } from '@hooks/useReducedMotion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  padding = 'md',
  onClick
}) => {
  const prefersReducedMotion = useReducedMotion();

  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const baseClasses = `
    bg-white rounded-xl shadow-md border border-gray-100
    ${paddingClasses[padding]}
    ${className}
  `.trim();

  const motionProps = prefersReducedMotion || !hover
    ? {}
    : {
        whileHover: cardHover,
        transition: { duration: 0.3, ease: 'easeOut' }
      };

  return (
    <motion.div
      className={baseClasses}
      onClick={onClick}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};