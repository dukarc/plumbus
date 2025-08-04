import React, { Suspense, lazy } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import SimplePlumbusHero from '../SimplePlumbusHero';
// ArrowRightIcon removed - arrows now handled by CSS in design system

// Lazy load complex components
const AnimatedBlobs = lazy(() => import('../ui/AnimatedBlobs').then(module => ({ default: module.AnimatedBlobs })));

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
          
          {/* Tagline with Rick's personality */}
          <motion.p 
            className="text-2xl mb-6"
            style={{ color: 'var(--blamf-brown)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onDoubleClick={() => {
              if ((window as any).triggerEasterEgg) {
                (window as any).triggerEasterEgg('*burp* Double-click detected! You\'re getting schwifty with it, Morty!', 'rick');
              }
            }}
          >
            Everyone needs a plumbus *burp*
          </motion.p>
          
          {/* Sub-copy with Jerry reference */}
          <motion.p 
            className="text-lg mb-12 max-w-2xl mx-auto"
            style={{ color: 'var(--blamf-brown)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            onMouseEnter={() => {
              // Subtle Jerry easter egg on hover
              const jerryQuotes = [
                "Wait, how does this thing work again?",
                "I'm not sure I understand the purpose of this...",
                "Beth, is this another one of Rick's weird inventions?"
              ];
              const randomQuote = jerryQuotes[Math.floor(Math.random() * jerryQuotes.length)];
              console.log(`😕 Jerry: ${randomQuote}`);
            }}
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
            <SimplePlumbusHero className="w-full max-w-[150px] sm:max-w-[180px] lg:max-w-[200px] mx-auto" />
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
                onClick={(e) => {
                  // Enhanced click handler with multiple easter eggs
                  const clickX = e.clientX;
                  const clickY = e.clientY;
                  
                  // Create portal effect at click location
                  const portal = document.createElement('div');
                  portal.style.cssText = `
                    position: fixed;
                    left: ${clickX - 25}px;
                    top: ${clickY - 25}px;
                    width: 50px;
                    height: 50px;
                    background: radial-gradient(circle, rgba(0, 255, 0, 0.8) 0%, transparent 70%);
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 9999;
                    animation: portalBurst 0.6s ease-out forwards;
                  `;
                  document.body.appendChild(portal);
                  setTimeout(() => portal.remove(), 600);
                  
                  // Add portal burst animation dynamically
                  if (!document.getElementById('portal-burst-style')) {
                    const style = document.createElement('style');
                    style.id = 'portal-burst-style';
                    style.textContent = `
                      @keyframes portalBurst {
                        0% { transform: scale(0) rotate(0deg); opacity: 1; }
                        50% { transform: scale(1.5) rotate(180deg); opacity: 0.8; }
                        100% { transform: scale(3) rotate(360deg); opacity: 0; }
                      }
                    `;
                    document.head.appendChild(style);
                  }
                  
                  console.log('Wubba lubba dub dub! *burp* Initiating plumbus acquisition protocol...');
                  
                  // Trigger enhanced easter egg with portal effect
                  if ((window as any).triggerEasterEgg) {
                    (window as any).triggerEasterEgg('*burp* Excellent choice, Morty! Portal gun engaged - plumbus acquisition in progress!', 'rick');
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
                    whileHover={{
                      scale: 1.3,
                      rotate: [0, 360],
                      transition: { duration: 0.5 }
                    }}
                    style={{ display: 'inline-block' }}
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
                <div className="text-xs text-center mt-2 opacity-75" style={{ color: 'var(--fleeb-blue)' }}>*burp* Science!</div>
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
                <div className="text-xs text-center mt-2 opacity-75" style={{ color: 'var(--step-blue)' }}>🧪 Premium grade</div>
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
                <div className="text-xs text-center mt-2 opacity-75" style={{ color: 'var(--step-green)' }}>🙄 Jerry-proof</div>
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
                <div className="text-xs text-center mt-2 opacity-75" style={{ color: 'var(--step-coral)' }}>✨ Dimension C-137 certified</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};