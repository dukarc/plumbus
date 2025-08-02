import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { useReducedMotion } from '@hooks/useReducedMotion';
import { focusGlow, checkmarkDraw } from '@utils/animations';

interface FormFieldProps {
  type?: 'text' | 'email' | 'password' | 'textarea';
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  success?: boolean;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  hint?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  success = false,
  required = false,
  disabled = false,
  className = '',
  hint
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    onBlur?.();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  const inputType = type === 'password' && showPassword ? 'text' : type;

  const baseInputClasses = `
    w-full px-4 py-3 rounded-lg border-2 transition-all duration-200
    focus:outline-none focus:ring-0
    disabled:opacity-50 disabled:cursor-not-allowed
    ${error 
      ? 'border-red-300 focus:border-red-500' 
      : success 
        ? 'border-green-300 focus:border-green-500'
        : 'border-gray-200 focus:border-pink-500'
    }
    ${className}
  `.trim();

  return (
    <div className="space-y-2">
      {/* Label */}
      <motion.label
        className={`block text-sm font-medium transition-colors duration-200 ${
          isFocused ? 'text-pink-600' : 'text-gray-700'
        }`}
        htmlFor={label}
        animate={isFocused && !prefersReducedMotion ? { scale: 1.02 } : { scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </motion.label>

      {/* Input container */}
      <div className="relative">
        <motion.div
          variants={prefersReducedMotion ? {} : focusGlow}
          animate={isFocused ? 'focus' : 'blur'}
        >
          {type === 'textarea' ? (
            <textarea
              ref={inputRef as React.RefObject<HTMLTextAreaElement>}
              id={label}
              placeholder={placeholder}
              value={value}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              disabled={disabled}
              className={`${baseInputClasses} resize-none h-24`}
              rows={3}
            />
          ) : (
            <input
              ref={inputRef as React.RefObject<HTMLInputElement>}
              type={inputType}
              id={label}
              placeholder={placeholder}
              value={value}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              disabled={disabled}
              className={baseInputClasses}
            />
          )}
        </motion.div>

        {/* Password toggle */}
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}

        {/* Success/Error icons */}
        <AnimatePresence>
          {(success || error) && (
            <motion.div
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.2 }}
            >
              {success ? (
                <CheckCircle className="text-green-500" size={20} />
              ) : (
                <AlertCircle className="text-red-500" size={20} />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Hint text */}
      {hint && !error && (
        <motion.p
          className="text-xs text-gray-500"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.2 }}
        >
          {hint}
        </motion.p>
      )}

      {/* Error message */}
      <AnimatePresence>
        {error && (
          <motion.p
            className="text-sm text-red-600 flex items-center space-x-2"
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <AlertCircle size={16} />
            <span>{error}</span>
          </motion.p>
        )}
      </AnimatePresence>

      {/* Focus indicator bar */}
      <motion.div
        className="h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isFocused ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{ transformOrigin: 'left' }}
      />
    </div>
  );
};

interface SubmitButtonProps {
  children: React.ReactNode;
  loading?: boolean;
  success?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  children,
  loading = false,
  success = false,
  disabled = false,
  onClick,
  className = ''
}) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.button
      type="submit"
      disabled={disabled || loading}
      onClick={onClick}
      className={`
        relative w-full py-3 px-6 rounded-lg font-semibold text-white
        bg-gradient-to-r from-pink-500 to-purple-600
        hover:from-pink-600 hover:to-purple-700
        focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-all duration-200
        ${className}
      `}
      whileHover={disabled || loading ? {} : { scale: 1.02 }}
      whileTap={disabled || loading ? {} : { scale: 0.98 }}
    >
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loading"
            className="flex items-center justify-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
            <span>Processing...</span>
          </motion.div>
        ) : success ? (
          <motion.div
            key="success"
            className="flex items-center justify-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.svg
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="none"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <motion.path
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={prefersReducedMotion ? {} : checkmarkDraw}
                initial="hidden"
                animate="visible"
              />
            </motion.svg>
            <span>Success!</span>
          </motion.div>
        ) : (
          <motion.span
            key="default"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {children}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};