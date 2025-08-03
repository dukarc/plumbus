import React, { Suspense, lazy } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
// ArrowRightIcon removed - arrows now handled by CSS in design system

// Lazy load complex components
const AnimatedBlobs = lazy(() => import('../ui/AnimatedBlobs').then(module => ({ default: module.AnimatedBlobs })));

// Enhanced Plumbus SVG Component with authentic, organic design and interactive elements
const PlumbusSVG: React.FC = () => {
  const [hoveredPart, setHoveredPart] = React.useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const partTooltips = {
    grumbo: "Grumbo - The main body that houses all essential components",
    fleeb: "Fleeb - Contains the vital plumbus juice for optimal function",
    chumble1: "Chumble - Precision-engineered for maximum dexterity",
    chumble2: "Chumble - Each one is hand-crafted by experts",
    chumble3: "Chumble - The secret to plumbus flexibility",
    chumble4: "Chumble - Never needs recalibration",
    dingleBop: "Dingle-Bop - Ergonomic handle with anti-slip coating",
    floob: "Floob - Premium quality, extracted from the spline",
    grodus: "Grodus - Secondary extension for advanced operations"
  };

  return (
    <div className="relative">
      <motion.svg 
        width="400" 
        height="380" 
        viewBox="0 0 400 380" 
        className="w-full max-w-md mx-auto cursor-pointer"
        whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
        transition={shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Gradient Definitions for Organic Feel */}
        <defs>
          {/* Grumbo gradient with organic depth */}
          <radialGradient id="grumboGradient" cx="0.3" cy="0.3" r="0.8">
            <stop offset="0%" stopColor="#F5A3BD" />
            <stop offset="50%" stopColor="#ED829E" />
            <stop offset="100%" stopColor="#D1477A" />
          </radialGradient>
          
          {/* Fleeb juice gradient with translucent effect */}
          <radialGradient id="fleebGradient" cx="0.4" cy="0.2" r="0.9">
            <stop offset="0%" stopColor="#E8F4FD" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#B3D9F2" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#7FB8D3" stopOpacity="0.7" />
          </radialGradient>
          
          {/* Dingle-bop grip texture gradient */}
          <linearGradient id="dingleBopGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#D1477A" />
            <stop offset="50%" stopColor="#B85C7A" />
            <stop offset="100%" stopColor="#9F4A6B" />
          </linearGradient>
          
          {/* Floob organic gradient */}
          <radialGradient id="floobGradient" cx="0.4" cy="0.3" r="0.8">
            <stop offset="0%" stopColor="#E1578A" />
            <stop offset="70%" stopColor="#D1477A" />
            <stop offset="100%" stopColor="#B85C7A" />
          </radialGradient>
          
          {/* Chumble organic gradient */}
          <linearGradient id="chumbleGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F08FB0" />
            <stop offset="50%" stopColor="#ED829E" />
            <stop offset="100%" stopColor="#D1477A" />
          </linearGradient>
          
          {/* Grodus natural gradient */}
          <radialGradient id="grodusGradient" cx="0.2" cy="0.3" r="0.9">
            <stop offset="0%" stopColor="#C96D8A" />
            <stop offset="60%" stopColor="#B85C7A" />
            <stop offset="100%" stopColor="#9F4A6B" />
          </radialGradient>
          
          {/* Texture patterns for organic feel */}
          <pattern id="grumboTexture" patternUnits="userSpaceOnUse" width="8" height="8">
            <circle cx="4" cy="4" r="1" fill="#D1477A" opacity="0.1" />
            <circle cx="2" cy="2" r="0.5" fill="#B85C7A" opacity="0.08" />
            <circle cx="6" cy="6" r="0.8" fill="#9F4A6B" opacity="0.06" />
          </pattern>
          
          <pattern id="dingleBopTexture" patternUnits="userSpaceOnUse" width="4" height="6">
            <rect x="0" y="0" width="4" height="2" fill="#9F4A6B" opacity="0.1" />
            <rect x="0" y="4" width="4" height="2" fill="#9F4A6B" opacity="0.1" />
          </pattern>
        </defs>

        {/* Grumbo (Main Body) - Organic blob shape with natural asymmetry */}
        <motion.path 
          d="M 85 200 Q 75 150 120 140 Q 160 135 200 145 Q 240 140 280 150 Q 315 165 320 200 Q 318 235 285 250 Q 240 260 200 255 Q 160 258 120 245 Q 88 230 85 200 Z"
          fill="url(#grumboGradient)"
          onMouseEnter={() => setHoveredPart('grumbo')}
          onMouseLeave={() => setHoveredPart(null)}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          style={{ cursor: 'pointer' }}
        />
        
        {/* Grumbo texture overlay for organic bumpy surface */}
        <motion.path 
          d="M 85 200 Q 75 150 120 140 Q 160 135 200 145 Q 240 140 280 150 Q 315 165 320 200 Q 318 235 285 250 Q 240 260 200 255 Q 160 258 120 245 Q 88 230 85 200 Z"
          fill="url(#grumboTexture)"
          onMouseEnter={() => setHoveredPart('grumbo')}
          onMouseLeave={() => setHoveredPart(null)}
          style={{ cursor: 'pointer', pointerEvents: 'none' }}
        />
        
        {/* Fleeb (Internal) - Translucent juice chamber with organic shape */}
        <motion.ellipse 
          cx="175" 
          cy="185" 
          rx="35" 
          ry="22" 
          fill="url(#fleebGradient)"
          onMouseEnter={() => setHoveredPart('fleeb')}
          onMouseLeave={() => setHoveredPart(null)}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
          style={{ cursor: 'pointer' }}
        />
        
        {/* Fleeb juice bubbles for authenticity */}
        <circle cx="168" cy="180" r="3" fill="#B3D9F2" opacity="0.6" />
        <circle cx="182" cy="190" r="2" fill="#7FB8D3" opacity="0.5" />
        <circle cx="175" cy="185" r="1.5" fill="#E8F4FD" opacity="0.8" />
        
        {/* Chumbles (Tentacles) - Natural finger-like extensions with organic curves */}
        <motion.path 
          d="M 130 255 Q 125 275 118 295 Q 115 315 120 335 Q 122 340 125 340 Q 128 340 130 335 Q 135 315 132 295 Q 135 275 140 255"
          fill="url(#chumbleGradient)"
          onMouseEnter={() => setHoveredPart('chumble1')}
          onMouseLeave={() => setHoveredPart(null)}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          style={{ cursor: 'pointer' }}
        />
        
        <motion.path 
          d="M 165 260 Q 160 280 155 300 Q 152 320 157 340 Q 159 345 162 345 Q 165 345 167 340 Q 172 320 169 300 Q 172 280 177 260"
          fill="url(#chumbleGradient)"
          onMouseEnter={() => setHoveredPart('chumble2')}
          onMouseLeave={() => setHoveredPart(null)}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          style={{ cursor: 'pointer' }}
        />
        
        <motion.path 
          d="M 235 260 Q 240 280 245 300 Q 248 320 243 340 Q 241 345 238 345 Q 235 345 233 340 Q 228 320 231 300 Q 228 280 223 260"
          fill="url(#chumbleGradient)"
          onMouseEnter={() => setHoveredPart('chumble3')}
          onMouseLeave={() => setHoveredPart(null)}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          style={{ cursor: 'pointer' }}
        />
        
        <motion.path 
          d="M 270 255 Q 275 275 282 295 Q 285 315 280 335 Q 278 340 275 340 Q 272 340 270 335 Q 265 315 268 295 Q 265 275 260 255"
          fill="url(#chumbleGradient)"
          onMouseEnter={() => setHoveredPart('chumble4')}
          onMouseLeave={() => setHoveredPart(null)}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          style={{ cursor: 'pointer' }}
        />
        
        {/* Dingle-Bop (Handle) - Ergonomic grip with texture */}
        <motion.rect 
          x="180" 
          y="75" 
          width="40" 
          height="130" 
          rx="20" 
          fill="url(#dingleBopGradient)"
          onMouseEnter={() => setHoveredPart('dingleBop')}
          onMouseLeave={() => setHoveredPart(null)}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          style={{ cursor: 'pointer' }}
        />
        
        {/* Dingle-Bop grip texture */}
        <motion.rect 
          x="180" 
          y="75" 
          width="40" 
          height="130" 
          rx="20" 
          fill="url(#dingleBopTexture)"
          style={{ pointerEvents: 'none' }}
        />
        
        {/* Floob (Top Element) - Organic bulbous top with natural imperfections */}
        <motion.path 
          d="M 200 80 Q 185 65 200 50 Q 215 65 225 75 Q 220 85 215 90 Q 200 95 185 90 Q 180 85 185 75 Q 190 70 200 80 Z"
          fill="url(#floobGradient)"
          onMouseEnter={() => setHoveredPart('floob')}
          onMouseLeave={() => setHoveredPart(null)}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
          style={{ cursor: 'pointer' }}
        />
        
        {/* Grodus (Protrusion) - Natural protrusion with realistic proportions */}
        <motion.path 
          d="M 320 165 Q 340 160 350 175 Q 355 190 348 205 Q 340 220 325 215 Q 315 210 320 195 Q 318 180 320 165 Z"
          fill="url(#grodusGradient)"
          onMouseEnter={() => setHoveredPart('grodus')}
          onMouseLeave={() => setHoveredPart(null)}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.2 }}
          style={{ cursor: 'pointer' }}
        />
        
        {/* Subtle organic details and surface imperfections */}
        <circle cx="195" cy="170" r="4" fill="#B85C7A" opacity="0.3" />
        <circle cx="215" cy="195" r="3" fill="#9F4A6B" opacity="0.25" />
        <circle cx="185" cy="210" r="2" fill="#D1477A" opacity="0.2" />
        
        {/* Connection seams for authenticity */}
        <path d="M 180 140 Q 200 135 220 140" stroke="#9F4A6B" strokeWidth="1" opacity="0.4" fill="none" />
        <path d="M 320 200 Q 300 205 285 200" stroke="#9F4A6B" strokeWidth="1" opacity="0.3" fill="none" />
      </motion.svg>
      
      {/* Floating tooltip */}
      {hoveredPart && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap z-10 shadow-lg"
        >
          {partTooltips[hoveredPart as keyof typeof partTooltips]}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45" />
        </motion.div>
      )}
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
            Everyone needs a plumbus
          </motion.p>
          
          {/* Sub-copy */}
          <motion.p 
            className="text-lg mb-12 max-w-2xl mx-auto"
            style={{ color: 'var(--blamf-brown)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A plumbus is an all-purpose home device. Get your first plumbus today!
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
              <button className="button-primary whimsy-button px-8 py-4 text-lg font-semibold">
                <span className="inline-flex items-center gap-2">
                  Get Your Plumbus
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    🚀
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
            >
              <div className="plumbus-card step-1 process-step assembly-step-wobble">
                <div className="process-step-number">1</div>
                <h3 className="card-title text-center mb-3">Fleeb Preparation</h3>
                <p className="text-sm text-center leading-relaxed">First, they take the dingle-bop</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="plumbus-card step-2 process-step assembly-step-wobble">
                <div className="process-step-number">2</div>
                <h3 className="card-title text-center mb-3">Grumbo Assembly</h3>
                <p className="text-sm text-center leading-relaxed">Then smooth it out with schleem</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="plumbus-card step-3 process-step assembly-step-wobble">
                <div className="process-step-number">3</div>
                <h3 className="card-title text-center mb-3">Schlami Processing</h3>
                <p className="text-sm text-center leading-relaxed">The schlami shows up and rubs it</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="plumbus-card step-4 process-step assembly-step-wobble">
                <div className="process-step-number">4</div>
                <h3 className="card-title text-center mb-3">Final Touches</h3>
                <p className="text-sm text-center leading-relaxed">Cut the fleeb and you have a plumbus</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section-beige">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            What Our Customers Say
          </motion.h2>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-start mb-8"
            >
              <div className="max-w-sm">
                <div className="plumbus-testimonial floating-gentle">
                  <div className="testimonial-content">
                    "I don't know how I ever lived without a plumbus"
                  </div>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">
                      <div className="w-full h-full rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: 'var(--step-blue)' }}>
                        R
                      </div>
                    </div>
                    <div className="testimonial-author-info">
                      <h4>Rulenein</h4>
                      <p>Plumbus Expert</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-end mb-8"
            >
              <div className="max-w-sm">
                <div className="plumbus-testimonial floating-gentle">
                  <div className="testimonial-content">
                    "The plumbus changed my life. It's wonderful!"
                  </div>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">
                      <div className="w-full h-full rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: 'var(--step-green)' }}>
                        G
                      </div>
                    </div>
                    <div className="testimonial-author-info">
                      <h4>Gumde</h4>
                      <p>Satisfied Customer</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </section>
    </div>
  );
};