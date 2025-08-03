import React from 'react';
import { motion } from 'framer-motion';
import { ScrollAnimation } from '@components/ui/ScrollAnimation';
import { useReducedMotion } from '@hooks/useReducedMotion';

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
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16">
        <ScrollAnimation direction="up">
          <div className="grid lg:grid-cols-5 gap-8 mb-12">
            {/* Brand section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <span className="text-2xl font-bold text-white">Plumbus</span>
              </div>
              
              <p className="text-gray-400 leading-relaxed max-w-md">
                The ultimate multi-purpose household device that everyone needs but nobody 
                fully understands. Serving satisfied customers across infinite dimensions 
                since the beginning of time.
              </p>

              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-pink-400" />
                  <span className="text-sm">support@plumbus.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-pink-400" />
                  <span className="text-sm">1-800-PLUMBUS</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={16} className="text-pink-400" />
                  <span className="text-sm">Dimension C-137, Sector 12</span>
                </div>
              </div>

              {/* Social links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.button
                    key={social.label}
                    onClick={() => scrollToSection(social.href)}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                    whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
                    whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                    aria-label={`Follow us on ${social.label}`}
                  >
                    <social.icon size={16} />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Navigation links */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:col-span-3">
              <div>
                <h3 className="text-white font-semibold mb-4">Product</h3>
                <ul className="space-y-3">
                  {footerLinks.product.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-400 hover:text-pink-400 transition-colors text-sm focus:outline-none focus:text-pink-400"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4">Support</h3>
                <ul className="space-y-3">
                  {footerLinks.support.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-400 hover:text-pink-400 transition-colors text-sm focus:outline-none focus:text-pink-400 flex items-center"
                      >
                        {link.label}
                        {!link.href.startsWith('#') && (
                          <ExternalLink size={12} className="ml-1" />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-400 hover:text-pink-400 transition-colors text-sm focus:outline-none focus:text-pink-400 flex items-center"
                      >
                        {link.label}
                        <ExternalLink size={12} className="ml-1" />
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
          <div className="border-t border-gray-800 pt-8 mb-8">
            <div className="bg-gradient-to-r from-pink-900/20 to-purple-900/20 rounded-2xl p-8 text-center">
              <h3 className="text-white text-xl font-bold mb-4">
                Stay Updated on Plumbus Innovations
              </h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Get the latest news about Plumbus updates, new features, and exclusive 
                offers delivered straight to your interdimensional inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                  Subscribe
                </button>
              </div>
              
              <p className="text-xs text-gray-500 mt-4">
                No spam, ever. Unsubscribe across all dimensions with one click.
              </p>
            </div>
          </div>
        </ScrollAnimation>

        {/* Bottom section */}
        <ScrollAnimation direction="up" delay={0.4}>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>© {currentYear} Plumbus Industries. All rights reserved across all dimensions.</span>
              </div>

              {/* Legal links */}
              <div className="flex flex-wrap justify-center gap-6">
                {footerLinks.legal.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-500 hover:text-pink-400 transition-colors text-sm focus:outline-none focus:text-pink-400"
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              {/* Made with love */}
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>Made with</span>
                <Heart size={16} className="text-pink-500 fill-current" />
                <span>in the multiverse</span>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Back to top button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 z-50"
        whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
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