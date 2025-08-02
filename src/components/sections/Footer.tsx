import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Heart,
  ExternalLink
} from 'lucide-react';
import { ScrollAnimation } from '@components/ui/ScrollAnimation';
import { useReducedMotion } from '@hooks/useReducedMotion';

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