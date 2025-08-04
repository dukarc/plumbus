import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ZapIcon, ShieldIcon, CpuIcon, SparklesIcon, WrenchIcon, GlobeIcon } from '../icons/OptimizedIcons';
import { plumbusFeatures } from '@utils/data';

// Icon mapping for features
const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  'Droplets': ZapIcon,
  'Shield': ShieldIcon,
  'RotateCw': CpuIcon,
  'Scissors': SparklesIcon,
  'RotateCcw': WrenchIcon,
  'Settings': GlobeIcon,
};

export const Features: React.FC = () => {
  const [easterEggCount, setEasterEggCount] = useState(0);
  const [showRickQuote, setShowRickQuote] = useState(false);
  const [squanchMode, setSquanchMode] = useState(false);
  const [showSquanchToggle, setShowSquanchToggle] = useState(false);
  
  const handleEasterEgg = () => {
    setEasterEggCount(prev => prev + 1);
    if (easterEggCount === 2) {
      setShowSquanchToggle(true);
    }
    if (easterEggCount === 4) {
      setShowRickQuote(true);
      setTimeout(() => setShowRickQuote(false), 3000);
      setEasterEggCount(0);
    }
  };
  
  const transformText = (text: string) => {
    if (!squanchMode) return text;
    return text.replace(/\b(use|need|want|love|like|enjoy|have|get|buy)\b/gi, 'squanch');
  };
  
  return (
    <section id="features" className="section-white">
      <div className="container">
        <div className="text-center" style={{ marginBottom: 'var(--space-8)' }}>
          <motion.h2 
            className="section-title"
            onClick={handleEasterEgg}
            whileHover={{ scale: 1.02 }}
            style={{ cursor: 'pointer' }}
          >
            Why Every Home Needs a Plumbus
          </motion.h2>
          <p className="max-w-3xl mx-auto" style={{ fontSize: 'var(--text-xl)', color: 'var(--gray-600)' }}>
            {transformText('From fleeb juice optimization to schlami-tested durability, the Plumbus offers unmatched reliability for every household. Experience the difference today.')}
          </p>
          
          {/* Squanch Mode Toggle */}
          {showSquanchToggle && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-4"
            >
              <motion.button
                onClick={() => {
                  setSquanchMode(!squanchMode);
                  console.log(squanchMode ? 'Squanch mode deactivated' : 'I squanch this feature! Squanch mode activated!');
                }}
                className="squanch-word px-4 py-2 rounded-full text-sm"
                style={{ 
                  background: squanchMode ? 'var(--plumbus-pink)' : 'var(--gromflomite-beige)',
                  color: squanchMode ? 'white' : 'var(--blamf-brown)',
                  border: '2px solid var(--plumbus-pink)'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {squanchMode ? '🚀 Squanch Mode ON' : '🚀 Activate Squanch Mode'}
              </motion.button>
            </motion.div>
          )}
          
          {/* Rick's Easter Egg Quote */}
          {showRickQuote && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="rick-quote mt-4 max-w-2xl mx-auto"
            >
              "Listen Morty, *burp* I've designed a lot of interdimensional gadgets, but even I gotta admit - everyone actually does need a plumbus. It's like, basic household stuff, Morty!"
              <div className="text-sm mt-2" style={{ color: 'var(--gray-500)' }}>- Rick Sanchez, Dimension C-137</div>
            </motion.div>
          )}
        </div>

        <div className="plumbus-grid cols-3">
          {plumbusFeatures.map((feature) => {
            // Get the optimized icon component
            const IconComponent = iconMap[feature.icon] || ZapIcon;

            return (
              <motion.div 
                key={feature.id} 
                className="feature-card whimsy-card"
                whileHover={{ 
                  scale: 1.03,
                  rotate: [0, -0.5, 0.5, 0]
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Icon */}
                <motion.div 
                  className="feature-icon"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <IconComponent 
                    size={32} 
                    className="text-plumbus-pink"
                  />
                </motion.div>

                {/* Title */}
                <h3 className="feature-title">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="feature-description">
                  {transformText(feature.description)}
                </p>

                {/* Benefit */}
                <motion.div 
                  className="rounded-lg" 
                  style={{ backgroundColor: 'var(--gromflomite-beige)', padding: 'var(--space-2)', marginTop: 'var(--space-3)', border: '2px solid var(--plumbus-pink)' }}
                  whileHover={{ 
                    backgroundColor: 'var(--plumbus-pink)', 
                    scale: 1.02
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.p 
                    style={{ color: 'var(--blamf-brown)', fontSize: 'var(--text-sm)', fontWeight: '500' }}
                    whileHover={{ color: 'var(--white)' }}
                  >
                    {transformText(feature.benefit)}
                  </motion.p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center" style={{ marginTop: 'var(--space-8)' }}>
          <motion.div 
            className="plumbus-card whimsy-card" 
            style={{ backgroundColor: 'var(--gromflomite-beige)' }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <motion.h3 
              className="font-bold" 
              style={{ fontSize: 'clamp(var(--text-2xl), 4vw, var(--text-3xl))', color: 'var(--blamf-brown)', marginBottom: 'var(--space-3)', fontFamily: 'var(--font-header)' }}
              whileHover={{ 
                color: 'var(--plumbus-pink)',
                textShadow: '0 0 10px rgba(237, 130, 158, 0.3)'
              }}
            >
              Ready to Experience the Plumbus Difference?
            </motion.h3>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--gray-700)', marginBottom: 'var(--space-4)', fontSize: 'var(--text-base)' }}>
              {transformText('Join millions of satisfied customers across infinite dimensions who have discovered the life-changing power of the Plumbus. *burp* Seriously, even Jerry figured it out.')}
            </p>
            
            <div className="stats-container">
              <motion.div 
                className="stat-item"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.span 
                  className="stat-number"
                  whileHover={{ color: 'var(--plumbus-pink)' }}
                >∞</motion.span>
                <span className="stat-label">Dimensions Served</span>
              </motion.div>
              
              <motion.div 
                className="stat-item"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 400, delay: 0.1 }}
              >
                <motion.span 
                  className="stat-number"
                  whileHover={{ color: 'var(--plumbus-pink)' }}
                >5★</motion.span>
                <span className="stat-label">Customer Rating</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Hidden Mr. Meeseeks reference */}
        <motion.div 
          className="text-center mt-4"
          style={{ opacity: easterEggCount > 2 ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-sm" style={{ color: 'var(--fleeb-blue)' }}>
            🎯 "{transformText('Ooh, can do! Mr. Meeseeks loves helping with Plumbus features!')}" - Click the title {5 - easterEggCount} more times
          </p>
        </motion.div>
        
        {/* Squanch Mode Hint */}
        {squanchMode && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-4"
          >
            <p className="text-sm squanch-word">
              🚀 Squanch mode activated! Everything is now extra squanchy!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};