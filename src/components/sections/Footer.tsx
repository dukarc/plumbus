import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollAnimation } from '@components/ui/ScrollAnimation';
import { useReducedMotion } from '@hooks/useReducedMotion';
import { FormField, SubmitButton } from '@components/ui/FormField';
import { LoadingDots } from '@components/ui/LoadingStates';

// Temporary icon components until we implement optimized icons
const Mail = ({ size, className }: { size: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 5L2 7" />
  </svg>
);

const Phone = ({ size, className }: { size: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MapPin = ({ size, className }: { size: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const Facebook = ({ size, className }: { size: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Twitter = ({ size, className }: { size: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

const Instagram = ({ size, className }: { size: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Youtube = ({ size, className }: { size: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const Heart = ({ size, className }: { size: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const ExternalLink = ({ size, className }: { size: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const footerLinks = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'How It\'s Made', href: '#manufacturing' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Specifications', href: '#specs' },
  ],
  support: [
    { label: 'FAQ', href: '#faq' },
    { label: 'User Manual', href: '/manual' },
    { label: 'Warranty', href: '/warranty' },
    { label: 'Returns', href: '/returns' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press Kit', href: '/press' },
    { label: 'Blog', href: '/blog' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'Interdimensional Law', href: '/interlaw' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/plumbus', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com/plumbus', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com/plumbus', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com/plumbus', label: 'YouTube' },
];

export const Footer: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const currentYear = new Date().getFullYear();
  
  // Newsletter form state
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);
  const [subscriptionError, setSubscriptionError] = useState('');
  
  const validateEmail = (email: string): string | null => {
    if (!email.trim()) return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Please enter a valid email address';
    return null;
  };
  
  const handleSubscribe = async () => {
    const validationError = validateEmail(email);
    if (validationError) {
      setSubscriptionError(validationError);
      return;
    }
    
    setIsSubscribing(true);
    setSubscriptionError('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubscriptionSuccess(true);
      setEmail('');
      
      // Reset success state after 3 seconds
      setTimeout(() => {
        setSubscriptionSuccess(false);
      }, 3000);
    } catch (error) {
      setSubscriptionError('Failed to subscribe. Please try again.');
    } finally {
      setIsSubscribing(false);
    }
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // External link
      window.open(href, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <footer className="section-white" style={{ backgroundColor: 'var(--blamf-brown)', color: 'var(--white)' }}>
      {/* Main footer content */}
      <div className="container">
        <ScrollAnimation direction="up">
          <div className="plumbus-grid cols-3">
            {/* Brand section */}
            <div className="lg:col-span-2">
              <div className="footer-brand-section">
                <div className="footer-brand-icon">
                  <span>P</span>
                </div>
                <span className="footer-brand-text">lumbus</span>
              </div>
              
              <p className="footer-description">
                The ultimate multi-purpose household device that everyone needs but nobody 
                fully understands. Serving satisfied customers across infinite dimensions 
                since the beginning of time.
              </p>

              {/* Contact info */}
              <div className="mb-6">
                <div className="footer-contact-item">
                  <Mail size={16} />
                  <span>support@plumbus.com</span>
                </div>
                <div className="footer-contact-item">
                  <Phone size={16} />
                  <span>1-800-PLUMBUS</span>
                </div>
                <div className="footer-contact-item">
                  <MapPin size={16} />
                  <span>Dimension C-137, Sector 12</span>
                </div>
              </div>

              {/* Social links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.button
                    key={social.label}
                    onClick={() => scrollToSection(social.href)}
                    className="footer-social-link focus:outline-none"
                    whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                    whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                    aria-label={`Follow us on ${social.label}`}
                  >
                    <social.icon size={16} />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Navigation links */}
            <div className="plumbus-grid cols-2">
              <div>
                <h3 className="footer-section-title">Product</h3>
                <ul>
                  {footerLinks.product.map((link) => (
                    <li key={link.label} className="mb-2">
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="footer-link focus:outline-none"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="footer-section-title">Support</h3>
                <ul>
                  {footerLinks.support.map((link) => (
                    <li key={link.label} className="mb-2">
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="footer-link focus:outline-none"
                      >
                        {link.label}
                        {!link.href.startsWith('#') && (
                          <ExternalLink size={12} />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Newsletter subscription */}
        <ScrollAnimation direction="up" delay={0.2}>
          <div className="footer-newsletter">
            <div className="plumbus-card footer-newsletter-card">
              <h3 className="footer-newsletter-title">
                Stay Updated on Plumbus Innovations
              </h3>
              <p className="footer-newsletter-description">
                Get the latest news about Plumbus updates, new features, and exclusive 
                offers delivered straight to your interdimensional inbox.
              </p>
              
              {subscriptionSuccess ? (
                <div className="max-w-md mx-auto">
                  <div className="flex items-center justify-center space-x-2 text-green-600 mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-semibold">Successfully subscribed!</span>
                  </div>
                  <p className="text-sm text-gray-600">Thank you for joining our interdimensional newsletter!</p>
                </div>
              ) : (
                <div className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (subscriptionError) setSubscriptionError('');
                        }}
                        className={`plumbus-input w-full ${
                          subscriptionError ? 'border-red-500 focus:border-red-500' : ''
                        }`}
                        disabled={isSubscribing}
                      />
                    </div>
                    <button 
                      className="button-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={handleSubscribe}
                      disabled={isSubscribing || !email.trim()}
                    >
                      {isSubscribing ? (
                        <>
                          <LoadingDots size="sm" color="bg-white" />
                          <span>Subscribing...</span>
                        </>
                      ) : (
                        <span>Subscribe</span>
                      )}
                    </button>
                  </div>
                  
                  {subscriptionError && (
                    <div className="flex items-center space-x-2 text-red-600 mt-3">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm">{subscriptionError}</span>
                    </div>
                  )}
                </div>
              )}
              
              {!subscriptionSuccess && (
                <p className="footer-newsletter-disclaimer">
                  No spam, ever. Unsubscribe across all dimensions with one click.
                </p>
              )}
            </div>
          </div>
        </ScrollAnimation>

        {/* Bottom section */}
        <ScrollAnimation direction="up" delay={0.4}>
          <div className="footer-bottom">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="footer-copyright">
                <span>© {currentYear} Plumbus Industries. All rights reserved across all dimensions.</span>
              </div>

              {/* Legal links */}
              <div className="footer-legal-links">
                {footerLinks.legal.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    className="footer-legal-link focus:outline-none"
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              {/* Made with love */}
              <div className="footer-made-with-love">
                <span>Made with</span>
                <Heart size={16} />
                <span>in the multiverse</span>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Back to top button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="back-to-top focus:outline-none"
        whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
        whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        aria-label="Back to top"
      >
        ↑
      </motion.button>
    </footer>
  );
};