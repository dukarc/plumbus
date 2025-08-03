import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from '../icons/OptimizedIcons';

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
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
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


  return (
    <header className="plumbus-nav">
      <nav className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => scrollToSection('#hero')}
              className="plumbus-nav-logo"
              aria-label="Go to homepage"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span>Plumbus</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <ul className="plumbus-nav-menu">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={activeSection === item.id ? 'active' : ''}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <button className="button-primary">
                Get Your Plumbus
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="plumbus-nav-hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 px-4 bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-pink-600 bg-pink-50'
                      : 'text-gray-700 hover:text-pink-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <button className="button-primary w-full">
                  Get Your Plumbus
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};