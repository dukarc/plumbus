import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@components/ui/Button';
import { useScrollSpy } from '@hooks/useScrollSpy';
import { useReducedMotion } from '@hooks/useReducedMotion';

const navigationItems = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'features', label: 'Features', href: '#features' },
  { id: 'manufacturing', label: 'How It\'s Made', href: '#manufacturing' },
  { id: 'testimonials', label: 'Reviews', href: '#testimonials' },
  { id: 'pricing', label: 'Pricing', href: '#pricing' },
  { id: 'faq', label: 'FAQ', href: '#faq' },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(navigationItems.map(item => item.id));
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const headerVariants = {
    scrolled: {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    },
    top: {
      backgroundColor: 'rgba(255, 255, 255, 0)',
      backdropFilter: 'blur(0px)',
      boxShadow: '0 0 0 0 rgb(0 0 0 / 0)',
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.15,
        ease: 'easeIn',
      },
    },
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      animate={isScrolled ? 'scrolled' : 'top'}
      variants={prefersReducedMotion ? {} : headerVariants}
      initial="top"
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
          >
            <button
              onClick={() => scrollToSection('#hero')}
              className="flex items-center space-x-2 font-bold text-2xl text-pink-600 hover:text-pink-700 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 rounded-lg p-2"
              aria-label="Go to homepage"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span>Plumbus</span>
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className={`
                  text-sm font-medium transition-colors duration-200 px-3 py-2 rounded-lg
                  focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2
                  ${
                    activeSection === item.id
                      ? 'text-pink-600 bg-pink-50'
                      : 'text-gray-700 hover:text-pink-600 hover:bg-gray-50'
                  }
                `}
              >
                {item.label}
              </button>
            ))}
            <Button variant="primary" size="sm">
              Get Your Plumbus
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 rounded-lg"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden mt-4 py-4 px-4 bg-white rounded-xl shadow-lg border border-gray-100"
              variants={prefersReducedMotion ? {} : mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.href)}
                    className={`
                      block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors
                      focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2
                      ${
                        activeSection === item.id
                          ? 'text-pink-600 bg-pink-50'
                          : 'text-gray-700 hover:text-pink-600 hover:bg-gray-50'
                      }
                    `}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-4 border-t border-gray-100">
                  <Button variant="primary" size="sm" className="w-full">
                    Get Your Plumbus
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};