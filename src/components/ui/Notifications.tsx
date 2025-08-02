import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, Info, X, Zap } from 'lucide-react';
import { useReducedMotion } from '@hooks/useReducedMotion';

interface Notification {
  id: string;
  type: 'success' | 'error' | 'info' | 'plumbus';
  title: string;
  message?: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface NotificationContextType {
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id'>) => void;
  removeNotification: (id: string) => void;
  clearAll: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within NotificationProvider');
  }
  return context;
};

interface NotificationProviderProps {
  children: React.ReactNode;
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = useCallback((notification: Omit<Notification, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newNotification = { ...notification, id };
    
    setNotifications(prev => [...prev, newNotification]);

    // Auto remove after duration
    const duration = notification.duration ?? 5000;
    if (duration > 0) {
      setTimeout(() => {
        removeNotification(id);
      }, duration);
    }
  }, []);

  const removeNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  const clearAll = useCallback(() => {
    setNotifications([]);
  }, []);

  return (
    <NotificationContext.Provider value={{
      notifications,
      addNotification,
      removeNotification,
      clearAll
    }}>
      {children}
      <NotificationContainer />
    </NotificationContext.Provider>
  );
};

const NotificationContainer: React.FC = () => {
  const { notifications, removeNotification } = useNotifications();
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm">
      <AnimatePresence>
        {notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            onRemove={removeNotification}
            prefersReducedMotion={prefersReducedMotion}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

interface NotificationItemProps {
  notification: Notification;
  onRemove: (id: string) => void;
  prefersReducedMotion: boolean;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  notification,
  onRemove,
  prefersReducedMotion
}) => {
  const getIcon = () => {
    switch (notification.type) {
      case 'success':
        return <CheckCircle className="text-green-500" size={20} />;
      case 'error':
        return <AlertCircle className="text-red-500" size={20} />;
      case 'info':
        return <Info className="text-blue-500" size={20} />;
      case 'plumbus':
        return <Zap className="text-pink-500" size={20} />;
      default:
        return <Info className="text-gray-500" size={20} />;
    }
  };

  const getColorClasses = () => {
    switch (notification.type) {
      case 'success':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'error':
        return 'bg-red-50 border-red-200 text-red-800';
      case 'info':
        return 'bg-blue-50 border-blue-200 text-blue-800';
      case 'plumbus':
        return 'bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200 text-pink-800';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  return (
    <motion.div
      layout
      initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: 400, scale: 0.8 }}
      animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, x: 0, scale: 1 }}
      exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: 400, scale: 0.8 }}
      transition={prefersReducedMotion ? { duration: 0.1 } : { 
        type: 'spring', 
        stiffness: 100, 
        damping: 15 
      }}
      className={`
        relative p-4 rounded-lg border shadow-lg max-w-sm
        ${getColorClasses()}
      `}
    >
      {/* Special Plumbus background effects */}
      {notification.type === 'plumbus' && !prefersReducedMotion && (
        <>
          <motion.div
            className="absolute inset-0 rounded-lg opacity-20"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 70%)'
            }}
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          
          {/* Floating particles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-pink-400 rounded-full"
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + i * 20}%`,
              }}
              animate={{
                y: [-5, -15, -5],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.3
              }}
            />
          ))}
        </>
      )}

      <div className="flex items-start space-x-3 relative z-10">
        {/* Icon */}
        <motion.div
          className="flex-shrink-0 mt-0.5"
          animate={prefersReducedMotion ? {} : {
            rotate: notification.type === 'plumbus' ? [0, 5, -5, 0] : 0
          }}
          transition={prefersReducedMotion ? {} : {
            duration: 2,
            repeat: notification.type === 'plumbus' ? Infinity : 0,
            ease: 'easeInOut'
          }}
        >
          {getIcon()}
        </motion.div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <p className="font-medium text-sm">{notification.title}</p>
          {notification.message && (
            <p className="text-xs opacity-90 mt-1">{notification.message}</p>
          )}
          
          {/* Action button */}
          {notification.action && (
            <motion.button
              className="text-xs font-medium underline mt-2 hover:no-underline transition-all"
              onClick={notification.action.onClick}
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
            >
              {notification.action.label}
            </motion.button>
          )}
        </div>

        {/* Close button */}
        <motion.button
          onClick={() => onRemove(notification.id)}
          className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded"
          whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
          whileTap={prefersReducedMotion ? {} : { scale: 0.9 }}
          aria-label="Close notification"
        >
          <X size={16} />
        </motion.button>
      </div>

      {/* Progress bar for timed notifications */}
      {(notification.duration ?? 5000) > 0 && (
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-current opacity-30 rounded-b-lg"
          initial={{ width: '100%' }}
          animate={{ width: '0%' }}
          transition={{ 
            duration: (notification.duration ?? 5000) / 1000, 
            ease: 'linear' 
          }}
        />
      )}
    </motion.div>
  );
};

// Helper hook for common notification types
export const useToast = () => {
  const { addNotification } = useNotifications();

  return {
    success: (title: string, message?: string) =>
      addNotification({ type: 'success', title, message }),
    
    error: (title: string, message?: string) =>
      addNotification({ type: 'error', title, message, duration: 7000 }),
    
    info: (title: string, message?: string) =>
      addNotification({ type: 'info', title, message }),
    
    plumbus: (title: string, message?: string) =>
      addNotification({ 
        type: 'plumbus', 
        title, 
        message,
        duration: 6000
      }),
    
    custom: (notification: Omit<Notification, 'id'>) =>
      addNotification(notification)
  };
};