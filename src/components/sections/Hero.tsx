import React, { Suspense, lazy } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
// ArrowRightIcon removed - arrows now handled by CSS in design system

// Lazy load complex components
const AnimatedBlobs = lazy(() => import('../ui/AnimatedBlobs').then(module => ({ default: module.AnimatedBlobs })));

// Authentic Rick & Morty Plumbus SVG - Organic, fleshy, and disturbing as intended
const PlumbusSVG: React.FC = () => {
  const [hoveredPart, setHoveredPart] = React.useState<string | null>(null);
  const [clickCount, setClickCount] = React.useState(0);
  const [showJerryWarning, setShowJerryWarning] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  const partTooltips = {
    grumbo: "Grumbo - The main fleshy body (disturbingly squishy) *burp*",
    fleeb: "Fleeb - Contains the vital plumbus juice (Rick-approved organic fluid)",
    chumble1: "Chumble - Tentacle-like appendage (uncomfortably wiggly like Jerry)",
    chumble2: "Chumble - Another fleshy protrusion (naturally occurring, not Jerry-made)",
    chumble3: "Chumble - Organic extension (feels emotions, unlike Jerry)",
    chumble4: "Chumble - Biological appendage (senses other plumbuses across dimensions)",
    dingleBop: "Dingle-Bop - Fleshy handle (scientifically designed by Rick Sanchez)",
    floob: "Floob - Bulbous top part (organically grown in dimension C-137)",
    grodus: "Grodus - Side protrusion (interdimensionally suggestive)",
    bristles: "Hair-like bristles (inspired by The Fly and Rick's hair)"
  };

  const handlePlumbusClick = () => {
    setClickCount(prev => prev + 1);
    if (clickCount === 6) {
      setShowJerryWarning(true);
      setTimeout(() => setShowJerryWarning(false), 4000);
      setClickCount(0);
      console.log('🙄 Jerry Warning: Please don\'t let Jerry near the plumbus!');
    }
  };

  return (
    <div className="relative">
      <motion.svg 
        width="400" 
        height="400" 
        viewBox="0 0 400 400" 
        className="w-full max-w-md mx-auto cursor-pointer"
        whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
        transition={shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 20 }}
        onClick={handlePlumbusClick}
      >
        {/* Gradient Definitions for Organic Flesh-like Feel */}
        <defs>
          {/* Main flesh gradient - muted pinkish tones */}
          <radialGradient id="fleshGradient" cx="0.3" cy="0.3" r="0.9">
            <stop offset="0%" stopColor="#E8B5A8" />
            <stop offset="30%" stopColor="#D49C8F" />
            <stop offset="70%" stopColor="#C08876" />
            <stop offset="100%" stopColor="#A67360" />
          </radialGradient>
          
          {/* Darker flesh for shadows and crevices */}
          <radialGradient id="fleshShadow" cx="0.5" cy="0.5" r="0.8">
            <stop offset="0%" stopColor="#C08876" />
            <stop offset="50%" stopColor="#A67360" />
            <stop offset="100%" stopColor="#8C5E4A" />
          </radialGradient>
          
          {/* Fleeb juice - more organic bluish fluid */}
          <radialGradient id="fleebJuice" cx="0.4" cy="0.2" r="0.9">
            <stop offset="0%" stopColor="#B8D4E3" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#94BAD1" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#6FA0BF" stopOpacity="0.6" />
          </radialGradient>
          
          {/* Organic bumpy texture pattern */}
          <pattern id="fleshTexture" patternUnits="userSpaceOnUse" width="12" height="12">
            <circle cx="3" cy="3" r="1.5" fill="#A67360" opacity="0.15" />
            <circle cx="9" cy="6" r="1" fill="#8C5E4A" opacity="0.12" />
            <circle cx="6" cy="9" r="0.8" fill="#C08876" opacity="0.08" />
            <ellipse cx="8" cy="2" rx="1.2" ry="0.6" fill="#A67360" opacity="0.1" />
          </pattern>
          
          {/* Hair/bristle pattern */}
          <pattern id="bristlePattern" patternUnits="userSpaceOnUse" width="8" height="8">
            <line x1="2" y1="0" x2="2" y2="8" stroke="#8C5E4A" strokeWidth="0.5" opacity="0.3" />
            <line x1="5" y1="0" x2="5" y2="8" stroke="#6B4A37" strokeWidth="0.3" opacity="0.4" />
            <line x1="7" y1="0" x2="7" y2="8" stroke="#A67360" strokeWidth="0.4" opacity="0.25" />
          </pattern>
        </defs>

        {/* Main Grumbo Body - Highly organic, lumpy, fleshy blob */}
        <motion.path 
          d="M 90 220 C 85 180 95 160 130 155 C 160 150 185 148 200 152 C 220 148 245 150 275 160 C 300 155 315 170 320 190 C 325 210 322 230 315 245 C 310 265 295 275 275 280 C 250 285 225 283 200 280 C 175 283 150 285 125 275 C 105 270 88 250 90 220 Z"
          fill="url(#fleshGradient)"
          onMouseEnter={() => setHoveredPart('grumbo')}
          onMouseLeave={() => setHoveredPart(null)}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          style={{ cursor: 'pointer' }}
        />
        
        {/* Grumbo organic lumps and protrusions */}
        <ellipse cx="140" cy="190" rx="18" ry="12" fill="url(#fleshShadow)" opacity="0.6" />
        <ellipse cx="260" cy="205" rx="15" ry="20" fill="url(#fleshShadow)" opacity="0.5" />
        <ellipse cx="200" cy="240" rx="12" ry="8" fill="url(#fleshShadow)" opacity="0.4" />
        
        {/* Flesh texture overlay */}
        <motion.path 
          d="M 90 220 C 85 180 95 160 130 155 C 160 150 185 148 200 152 C 220 148 245 150 275 160 C 300 155 315 170 320 190 C 325 210 322 230 315 245 C 310 265 295 275 275 280 C 250 285 225 283 200 280 C 175 283 150 285 125 275 C 105 270 88 250 90 220 Z"
          fill="url(#fleshTexture)"
          style={{ pointerEvents: 'none' }}
        />
        
        {/* Fleeb - Organic fluid-filled sac (disturbing but essential) */}
        <motion.path 
          d="M 150 200 C 145 190 155 185 170 188 C 185 185 195 190 200 200 C 198 210 188 215 175 212 C 162 215 152 210 150 200 Z"
          fill="url(#fleebJuice)"
          onMouseEnter={() => setHoveredPart('fleeb')}
          onMouseLeave={() => setHoveredPart(null)}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.3 }}
          style={{ cursor: 'pointer' }}
        />
        
        {/* Fleeb juice bubbles and organic fluid */}
        <circle cx="165" cy="195" r="2.5" fill="#94BAD1" opacity="0.7" />
        <circle cx="180" cy="203" r="1.8" fill="#6FA0BF" opacity="0.6" />
        <circle cx="172" cy="198" r="1.2" fill="#B8D4E3" opacity="0.8" />
        <ellipse cx="175" cy="200" rx="3" ry="1.5" fill="#6FA0BF" opacity="0.4" />
        
        {/* Chumbles - Organic tentacle-like appendages (uncomfortably wiggly) */}
        <motion.path 
          d="M 125 275 C 120 285 115 300 112 320 C 110 340 115 355 122 365 C 125 370 128 368 130 365 C 133 360 135 345 132 325 C 135 305 138 290 140 275 C 138 270 132 270 125 275 Z"
          fill="url(#fleshGradient)"
          onMouseEnter={() => setHoveredPart('chumble1')}
          onMouseLeave={() => setHoveredPart(null)}
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ duration: 0.3 }}
          style={{ cursor: 'pointer' }}
        />
        
        <motion.path 
          d="M 165 280 C 158 295 153 315 155 335 C 157 350 162 365 168 370 C 171 372 174 370 175 365 C 176 360 177 345 174 325 C 177 305 180 285 182 275 C 180 270 172 272 165 280 Z"
          fill="url(#fleshGradient)"
          onMouseEnter={() => setHoveredPart('chumble2')}
          onMouseLeave={() => setHoveredPart(null)}
          whileHover={{ scale: 1.05, rotate: -1 }}
          transition={{ duration: 0.3 }}
          style={{ cursor: 'pointer' }}
        />
        
        <motion.path 
          d="M 235 280 C 242 295 247 315 245 335 C 243 350 238 365 232 370 C 229 372 226 370 225 365 C 224 360 223 345 226 325 C 223 305 220 285 218 275 C 220 270 228 272 235 280 Z"
          fill="url(#fleshGradient)"
          onMouseEnter={() => setHoveredPart('chumble3')}
          onMouseLeave={() => setHoveredPart(null)}
          whileHover={{ scale: 1.05, rotate: 1.5 }}
          transition={{ duration: 0.3 }}
          style={{ cursor: 'pointer' }}
        />
        
        <motion.path 
          d="M 275 275 C 280 285 285 300 288 320 C 290 340 285 355 278 365 C 275 370 272 368 270 365 C 267 360 265 345 268 325 C 265 305 262 290 260 275 C 262 270 268 270 275 275 Z"
          fill="url(#fleshGradient)"
          onMouseEnter={() => setHoveredPart('chumble4')}
          onMouseLeave={() => setHoveredPart(null)}
          whileHover={{ scale: 1.05, rotate: -2 }}
          transition={{ duration: 0.3 }}
          style={{ cursor: 'pointer' }}
        />
        
        {/* Chumble texture and shadow details */}
        <ellipse cx="128" cy="320" rx="3" ry="8" fill="url(#fleshShadow)" opacity="0.4" />
        <ellipse cx="169" cy="325" rx="3" ry="8" fill="url(#fleshShadow)" opacity="0.4" />
        <ellipse cx="231" cy="325" rx="3" ry="8" fill="url(#fleshShadow)" opacity="0.4" />
        <ellipse cx="273" cy="320" rx="3" ry="8" fill="url(#fleshShadow)" opacity="0.4" />
        
        {/* Dingle-Bop - Fleshy handle (disturbingly phallic as intended) */}
        <motion.path 
          d="M 185 80 C 175 85 175 100 180 120 C 178 140 182 155 185 170 C 188 185 190 200 195 210 C 200 215 205 215 210 210 C 215 200 217 185 220 170 C 222 155 218 140 220 120 C 225 100 225 85 215 80 C 210 75 205 75 200 78 C 195 75 190 75 185 80 Z"
          fill="url(#fleshGradient)"
          onMouseEnter={() => setHoveredPart('dingleBop')}
          onMouseLeave={() => setHoveredPart(null)}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.3 }}
          style={{ cursor: 'pointer' }}
        />
        
        {/* Dingle-bop organic ridges and texture */}
        <ellipse cx="190" cy="110" rx="8" ry="3" fill="url(#fleshShadow)" opacity="0.5" />
        <ellipse cx="210" cy="140" rx="8" ry="3" fill="url(#fleshShadow)" opacity="0.5" />
        <ellipse cx="195" cy="170" rx="8" ry="3" fill="url(#fleshShadow)" opacity="0.5" />
        <ellipse cx="205" cy="190" rx="6" ry="4" fill="url(#fleshShadow)" opacity="0.6" />
        
        {/* Floob - Bulbous top part (organically grown and lumpy) */}
        <motion.path 
          d="M 200 75 C 185 70 180 55 190 45 C 200 35 210 35 220 45 C 230 55 225 70 210 75 C 215 85 210 95 200 95 C 190 95 185 85 190 75 C 195 70 200 75 200 75 Z"
          fill="url(#fleshGradient)"
          onMouseEnter={() => setHoveredPart('floob')}
          onMouseLeave={() => setHoveredPart(null)}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.3 }}
          style={{ cursor: 'pointer' }}
        />
        
        {/* Floob organic lumps */}
        <ellipse cx="195" cy="60" rx="6" ry="8" fill="url(#fleshShadow)" opacity="0.4" />
        <ellipse cx="210" cy="65" rx="5" ry="6" fill="url(#fleshShadow)" opacity="0.3" />
        
        {/* Grodus - Side protrusion (uncomfortably suggestive) */}
        <motion.path 
          d="M 320 180 C 330 175 340 178 345 185 C 350 195 348 205 342 212 C 335 220 325 218 320 210 C 315 205 318 195 320 185 C 318 180 320 180 320 180 Z"
          fill="url(#fleshGradient)"
          onMouseEnter={() => setHoveredPart('grodus')}
          onMouseLeave={() => setHoveredPart(null)}
          whileHover={{ scale: 1.06, rotate: 1 }}
          transition={{ duration: 0.3 }}
          style={{ cursor: 'pointer' }}
        />
        
        {/* Grodus tip detail */}
        <ellipse cx="340" cy="198" rx="4" ry="6" fill="url(#fleshShadow)" opacity="0.5" />
        
        {/* Hair-like bristles inspired by The Fly (disturbing organic detail) */}
        <g onMouseEnter={() => setHoveredPart('bristles')} onMouseLeave={() => setHoveredPart(null)} style={{ cursor: 'pointer' }}>
          {/* Bristles on main body */}
          <line x1="160" y1="170" x2="155" y2="180" stroke="#6B4A37" strokeWidth="1" opacity="0.6" />
          <line x1="165" y1="165" x2="158" y2="175" stroke="#8C5E4A" strokeWidth="0.8" opacity="0.5" />
          <line x1="170" y1="175" x2="162" y2="185" stroke="#6B4A37" strokeWidth="0.6" opacity="0.7" />
          
          <line x1="240" y1="175" x2="245" y2="185" stroke="#6B4A37" strokeWidth="1" opacity="0.6" />
          <line x1="235" y1="170" x2="242" y2="180" stroke="#8C5E4A" strokeWidth="0.8" opacity="0.5" />
          <line x1="230" y1="180" x2="238" y2="190" stroke="#6B4A37" strokeWidth="0.6" opacity="0.7" />
          
          {/* Bristles on floob */}
          <line x1="190" y1="50" x2="185" y2="45" stroke="#6B4A37" strokeWidth="0.8" opacity="0.5" />
          <line x1="210" y1="55" x2="215" y2="50" stroke="#8C5E4A" strokeWidth="0.6" opacity="0.6" />
          <line x1="200" y1="45" x2="200" y2="40" stroke="#6B4A37" strokeWidth="1" opacity="0.7" />
          
          {/* Bristles on grodus */}
          <line x1="340" y1="190" x2="345" y2="185" stroke="#8C5E4A" strokeWidth="0.8" opacity="0.5" />
          <line x1="338" y1="205" x2="343" y2="210" stroke="#6B4A37" strokeWidth="0.6" opacity="0.6" />
        </g>
        
        {/* Organic surface blemishes and imperfections */}
        <ellipse cx="180" cy="190" rx="3" ry="2" fill="#8C5E4A" opacity="0.4" />
        <ellipse cx="220" cy="210" rx="2.5" ry="4" fill="#A67360" opacity="0.3" />
        <ellipse cx="250" cy="185" rx="2" ry="3" fill="#8C5E4A" opacity="0.35" />
        <circle cx="200" cy="175" r="1.5" fill="#6B4A37" opacity="0.5" />
        
        {/* Fleshy seams and connection points */}
        <path d="M 185 155 C 200 150 215 152 230 160" stroke="#8C5E4A" strokeWidth="1.5" opacity="0.3" fill="none" />
        <path d="M 315 190 C 305 195 295 200 285 205" stroke="#A67360" strokeWidth="1" opacity="0.4" fill="none" />
        <path d="M 200 210 C 185 215 170 220 155 225" stroke="#8C5E4A" strokeWidth="1" opacity="0.3" fill="none" />
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
      
      {/* Jerry Warning Easter Egg */}
      {showJerryWarning && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 jerry-incompetent px-4 py-3 rounded-lg text-sm text-center z-20 max-w-xs"
          style={{ 
            backgroundColor: 'var(--warning-orange)',
            color: 'white',
            border: '2px solid var(--error-red)'
          }}
        >
          🙄 <strong>Jerry Warning:</strong> Please keep Jerry away from the plumbus. We are not responsible for Jerry-related incidents.
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45" style={{ backgroundColor: 'var(--warning-orange)' }} />
        </motion.div>
      )}
      
      {/* Click counter hint */}
      {clickCount > 3 && !showJerryWarning && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-xs text-center"
          style={{ color: 'var(--fleeb-blue)' }}
        >
          👂 Keep clicking... {7 - clickCount} more to go!
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
                      <p>Plumbus Expert (Dimension C-137)</p>
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
                      <p>Satisfied Customer (Not Jerry)</p>
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