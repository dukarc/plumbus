import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, Home, Search, Zap, AlertTriangle } from 'lucide-react';
import { Button } from './Button';
import { useReducedMotion } from '@hooks/useReducedMotion';
import { floatingAnimation, interdimensionalGlitch, parallaxFloat } from '@utils/animations';

interface Error404Props {
  onGoHome?: () => void;
  className?: string;
}

export const Error404: React.FC<Error404Props> = ({
  onGoHome,
  className = ''
}) => {
  const [portalClicks, setPortalClicks] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handlePortalClick = () => {
    setPortalClicks(prev => {
      const newCount = prev + 1;
      if (newCount >= 5) {
        setShowEasterEgg(true);
        setTimeout(() => setShowEasterEgg(false), 3000);
        return 0;
      }
      return newCount;
    });
  };

  return (
    <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-purple-50 ${className}`}>
      <div className="text-center max-w-md mx-auto px-4">
        {/* Animated 404 */}
        <motion.div
          className="relative mb-8"
          variants={prefersReducedMotion ? {} : floatingAnimation}
          animate={prefersReducedMotion ? {} : 'animate'}
        >
          <motion.h1
            className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            404
          </motion.h1>
          
          {/* Glitch effect */}
          <motion.div
            className="absolute inset-0 text-8xl font-bold text-red-400 opacity-20"
            variants={prefersReducedMotion ? {} : interdimensionalGlitch}
            animate={showEasterEgg ? 'animate' : {}}
          >
            404
          </motion.div>
        </motion.div>

        {/* Interactive Portal */}
        <motion.div
          className="relative mb-8 cursor-pointer"
          onClick={handlePortalClick}
          whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
        >
          <motion.div
            className="w-32 h-32 mx-auto rounded-full border-4 border-pink-300 bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center"
            animate={prefersReducedMotion ? {} : {
              borderColor: ['#f9a8d4', '#c084fc', '#f9a8d4'],
              boxShadow: [
                '0 0 20px rgba(249, 168, 212, 0.3)',
                '0 0 30px rgba(192, 132, 252, 0.4)',
                '0 0 20px rgba(249, 168, 212, 0.3)'
              ]
            }}
            transition={prefersReducedMotion ? {} : {
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <Zap className="text-pink-500" size={48} />
          </motion.div>
          
          {/* Orbiting particles */}
          {!prefersReducedMotion && (
            <>
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-purple-400 rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    marginTop: '-6px',
                    marginLeft: '-6px',
                  }}
                  animate={{
                    x: [0, 60 * Math.cos((i * 90 * Math.PI) / 180)],
                    y: [0, 60 * Math.sin((i * 90 * Math.PI) / 180)],
                    rotate: [0, 360],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: i * 0.2,
                  }}
                />
              ))}
            </>
          )}
        </motion.div>

        {/* Title and Description */}
        <motion.h2
          className="text-2xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Lost in the Multiverse?
        </motion.h2>
        
        <motion.p
          className="text-gray-600 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Looks like this page got sucked into a different dimension. 
          Don't worry, even Rick gets lost sometimes. Let's get you back home!
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Button
            variant="primary"
            size="lg"
            onClick={onGoHome}
          >
            <Home size={20} className="mr-2" />
            Return Home
          </Button>
          
          <Button
            variant="secondary"
            size="lg"
            onClick={() => window.location.reload()}
          >
            <RefreshCw size={20} className="mr-2" />
            Try Again
          </Button>
        </motion.div>

        {/* Easter egg hint */}
        {portalClicks >= 3 && portalClicks < 5 && (
          <motion.p
            className="mt-4 text-xs text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Portal instability detected... {5 - portalClicks} more clicks needed
          </motion.p>
        )}

        {/* Easter egg message */}
        <AnimatePresence>
          {showEasterEgg && (
            <motion.div
              className="mt-6 p-4 bg-green-100 rounded-lg border border-green-300"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-green-700 font-medium">
                🛸 Portal calibrated! You've unlocked interdimensional vision!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  icon?: React.ReactNode;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  actionLabel,
  onAction,
  icon,
  className = ''
}) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={`text-center py-12 px-4 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Icon */}
      <motion.div
        className="mb-6"
        variants={prefersReducedMotion ? {} : parallaxFloat}
        animate={prefersReducedMotion ? {} : 'animate'}
      >
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full">
          {icon || <Search className="text-gray-400" size={32} />}
        </div>
      </motion.div>

      {/* Title */}
      <motion.h3
        className="text-xl font-semibold text-gray-900 mb-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {title}
      </motion.h3>

      {/* Description */}
      <motion.p
        className="text-gray-600 mb-6 max-w-sm mx-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {description}
      </motion.p>

      {/* Action Button */}
      {actionLabel && onAction && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Button variant="primary" onClick={onAction}>
            {actionLabel}
          </Button>
        </motion.div>
      )}
    </motion.div>
  );
};

interface ErrorMessageProps {
  title?: string;
  message: string;
  onRetry?: () => void;
  onDismiss?: () => void;
  variant?: 'error' | 'warning' | 'info';
  className?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  title = 'Oops! Something went wrong',
  message,
  onRetry,
  onDismiss,
  variant = 'error',
  className = ''
}) => {
  const prefersReducedMotion = useReducedMotion();

  const variantClasses = {
    error: 'bg-red-50 border-red-200 text-red-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800'
  };

  const iconClasses = {
    error: 'text-red-500',
    warning: 'text-yellow-500',
    info: 'text-blue-500'
  };

  return (
    <motion.div
      className={`p-4 rounded-lg border ${variantClasses[variant]} ${className}`}
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start space-x-3">
        <motion.div
          className="flex-shrink-0"
          animate={prefersReducedMotion ? {} : { rotate: [0, -5, 5, 0] }}
          transition={prefersReducedMotion ? {} : { 
            duration: 0.5, 
            repeat: 3,
            ease: 'easeInOut'
          }}
        >
          <AlertTriangle className={iconClasses[variant]} size={20} />
        </motion.div>
        
        <div className="flex-1 min-w-0">
          <h4 className="font-medium mb-1">{title}</h4>
          <p className="text-sm opacity-90">{message}</p>
          
          {(onRetry || onDismiss) && (
            <div className="flex space-x-2 mt-3">
              {onRetry && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onRetry}
                  className="text-current"
                >
                  <RefreshCw size={16} className="mr-1" />
                  Try Again
                </Button>
              )}
              
              {onDismiss && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onDismiss}
                  className="text-current"
                >
                  Dismiss
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default {
  Error404,
  EmptyState,
  ErrorMessage
};