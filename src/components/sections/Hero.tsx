import React, { Suspense, lazy } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
// ArrowRightIcon removed - arrows now handled by CSS in design system

// Lazy load complex components
const AnimatedBlobs = lazy(() => import('../ui/AnimatedBlobs').then(module => ({ default: module.AnimatedBlobs })));

// Simple Plumbus SVG - More accurate to the show
const PlumbusSVG: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative">
      <motion.svg 
        width="300" 
        height="300" 
        viewBox="0 0 300 300" 
        className="w-full max-w-sm mx-auto"
        whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
        transition={shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 20 }}
      >
        <title>Plumbus - Rick & Morty All-Purpose Home Device</title>
        <desc>
          Simple plumbus illustration showing the basic anatomy
        </desc>
        
        {/* Simple gradients - more accurate flesh tones */}
        <defs>
          <radialGradient id="plumbusGradient" cx="0.5" cy="0.4" r="0.8">
            <stop offset="0%" stopColor="#E6B885" />
            <stop offset="50%" stopColor="#D4A574" />
            <stop offset="100%" stopColor="#C49668" />
          </radialGradient>
          <filter id="softShadow">
            <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.3"/>
          </filter>
        </defs>
        
        {/* Main Plumbus Body - Organic blob shape */}
        <path 
          d="M 150 130 C 120 130 90 145 90 180 C 90 200 95 210 110 220 C 125 230 150 235 150 235 C 150 235 175 230 190 220 C 205 210 210 200 210 180 C 210 145 180 130 150 130 Z" 
          fill="url(#plumbusGradient)" 
          filter="url(#softShadow)"
        />
        
        {/* Handle/Dingle-Bop - Simple vertical stem */}
        <rect 
          x="140" 
          y="70" 
          width="20" 
          height="110" 
          rx="10" 
          fill="url(#plumbusGradient)" 
          filter="url(#softShadow)"
        />
        
        {/* Top knob */}
        <ellipse 
          cx="150" 
          cy="70" 
          rx="12" 
          ry="8" 
          fill="#E6B885" 
        />
        
        {/* Chumbles (tentacles) with tips */}
        <path 
          d="M 110 220 Q 105 250 110 270" 
          stroke="#C49668" 
          strokeWidth="8" 
          fill="none" 
          strokeLinecap="round"
        />
        <ellipse cx="110" cy="272" rx="6" ry="4" fill="#D4A574" />
        
        <path 
          d="M 130 225 Q 128 255 135 275" 
          stroke="#C49668" 
          strokeWidth="8" 
          fill="none" 
          strokeLinecap="round"
        />
        <ellipse cx="135" cy="277" rx="6" ry="4" fill="#D4A574" />
        
        <path 
          d="M 170 225 Q 172 255 165 275" 
          stroke="#C49668" 
          strokeWidth="8" 
          fill="none" 
          strokeLinecap="round"
        />
        <ellipse cx="165" cy="277" rx="6" ry="4" fill="#D4A574" />
        
        <path 
          d="M 190 220 Q 195 250 190 270" 
          stroke="#C49668" 
          strokeWidth="8" 
          fill="none" 
          strokeLinecap="round"
        />
        <ellipse cx="190" cy="272" rx="6" ry="4" fill="#D4A574" />
        
        {/* Organic surface details */}
        <ellipse cx="130" cy="170" rx="12" ry="8" fill="#E6B885" opacity="0.4" />
        <ellipse cx="170" cy="185" rx="10" ry="6" fill="#E6B885" opacity="0.4" />
        <ellipse cx="150" cy="160" rx="8" ry="5" fill="#B8956A" opacity="0.3" />
        
        {/* Fleeb (blue spot) */}
        <ellipse cx="150" cy="180" rx="15" ry="10" fill="#94BAD1" opacity="0.6" />
        
        {/* Additional organic details */}
        <circle cx="125" cy="155" r="3" fill="#B8956A" opacity="0.4" />
        <circle cx="175" cy="165" r="2" fill="#B8956A" opacity="0.4" />
        <ellipse cx="140" cy="195" rx="5" ry="3" fill="#C49668" opacity="0.3" />
      </motion.svg>
    </div>
  );
};

// Assembly steps now use design system classes directly in JSX

// Testimonials now use design system classes directly in JSX

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      {/* Main Hero Section */}
      <section id="hero" className="plumbus-hero">
        {/* Enhanced floating organic blob decorations - Only render if motion is not reduced */}
        {!shouldReduceMotion && (
          <Suspense fallback={null}>
            <AnimatedBlobs />
          </Suspense>
        )}

        {/* Main Content */}
        <div className="plumbus-hero-content">
          {/* Header */}
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            PLUMBUS
          </motion.h1>
          
          {/* Tagline */}
          <motion.p 
            className="text-2xl mb-6"
            style={{ color: 'var(--blamf-brown)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Everyone needs a plumbus *burp*
          </motion.p>
          
          {/* Sub-copy */}
          <motion.p 
            className="text-lg mb-12 max-w-2xl mx-auto"
            style={{ color: 'var(--blamf-brown)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A plumbus is an all-purpose home device. Get your first plumbus today! Even Jerry can use it.
          </motion.p>
          
          {/* Large Plumbus Illustration */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <PlumbusSVG />
          </motion.div>
          
          {/* Enhanced CTA Button with personality */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                rotate: [0, -1, 1, 0],
              }}
              whileTap={{ 
                scale: 0.98,
                rotate: -2
              }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 17,
                rotate: { duration: 0.3 }
              }}
            >
              <button 
                className="button-primary whimsy-button px-8 py-4 text-lg font-semibold portal-gun-effect science-approved"
                onClick={() => {
                  console.log('Wubba lubba dub dub! *burp* Initiating plumbus acquisition protocol...');
                  // Trigger global easter egg
                  if ((window as any).triggerEasterEgg) {
                    (window as any).triggerEasterEgg('*burp* Excellent choice, Morty! Plumbus acquisition in progress!', 'rick');
                  }
                }}
              >
                <span className="inline-flex items-center gap-2">
                  Get Your Plumbus
                  <motion.span
                    animate={{ 
                      x: [0, 3, 0],
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      rotate: { duration: 2, repeat: Infinity },
                      scale: { duration: 1, repeat: Infinity }
                    }}
                  >
                    🛸
                  </motion.span>
                </span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Assembly Process Section */}
      <section className="section-white">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            How a Plumbus is Made
          </motion.h2>
          
          <div className="process-container">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotate: [0, -1, 1, 0]
              }}
            >
              <div className="plumbus-card step-1 process-step assembly-step-wobble">
                <motion.div 
                  className="process-step-number"
                  whileHover={{ scale: 1.2, color: 'var(--white)' }}
                >1</motion.div>
                <h3 className="card-title text-center mb-3">Fleeb Preparation</h3>
                <p className="text-sm text-center leading-relaxed">First, they take the dingle-bop (Rick-approved process)</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotate: [0, 1, -1, 0]
              }}
            >
              <div className="plumbus-card step-2 process-step assembly-step-wobble">
                <motion.div 
                  className="process-step-number"
                  whileHover={{ scale: 1.2, color: 'var(--white)' }}
                >2</motion.div>
                <h3 className="card-title text-center mb-3">Grumbo Assembly</h3>
                <p className="text-sm text-center leading-relaxed">Then smooth it out with schleem (*burp* quality schleem)</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotate: [0, -1, 1, 0]
              }}
            >
              <div className="plumbus-card step-3 process-step assembly-step-wobble">
                <motion.div 
                  className="process-step-number"
                  whileHover={{ scale: 1.2, color: 'var(--white)' }}
                >3</motion.div>
                <h3 className="card-title text-center mb-3">Schlami Processing</h3>
                <p className="text-sm text-center leading-relaxed">The schlami shows up and rubs it (not like Jerry would)</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotate: [0, 1, -1, 0]
              }}
            >
              <div className="plumbus-card step-4 process-step assembly-step-wobble">
                <motion.div 
                  className="process-step-number"
                  whileHover={{ scale: 1.2, color: 'var(--white)' }}
                >4</motion.div>
                <h3 className="card-title text-center mb-3">Final Touches</h3>
                <p className="text-sm text-center leading-relaxed">Cut the fleeb and you have a plumbus (Science!)</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};