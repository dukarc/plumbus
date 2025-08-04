import React, { useState, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface SimplePlumbusHeroProps {
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SimplePlumbusHero: React.FC<SimplePlumbusHeroProps> = ({
  alt = "Plumbus - Rick & Morty All-Purpose Home Device",
  className = "",
  style = {}
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [clickCount, setClickCount] = useState(0);
  const [isGlowing, setIsGlowing] = useState(false);
  const lastClickTime = useRef(0);

  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 2, -2, 0],
      transition: {
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        },
        rotate: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    }
  };

  const breathingAnimation = {
    animate: {
      scale: [1, 1.02, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Enhanced Rick & Morty easter eggs
  const handlePlumbusClick = () => {
    const now = Date.now();
    const timeSinceLastClick = now - lastClickTime.current;
    
    // Reset count if more than 2 seconds between clicks
    if (timeSinceLastClick > 2000) {
      setClickCount(1);
    } else {
      setClickCount(prev => prev + 1);
    }
    
    lastClickTime.current = now;
    
    // Easter eggs based on click count
    const rickQuotes = [
      "*burp* That's a quality plumbus, Morty!",
      "Wubba lubba dub dub! You found the secret!",
      "*burp* This plumbus has been through dimension C-137!",
      "Schwifty plumbus activation detected!",
      "*burp* Jerry could never appreciate this level of plumbus quality!"
    ];
    
    if (clickCount >= 3) {
      // Trigger special glow effect
      setIsGlowing(true);
      setTimeout(() => setIsGlowing(false), 2000);
      
      // Show random Rick quote
      const quote = rickQuotes[Math.floor(Math.random() * rickQuotes.length)];
      if ((window as any).triggerEasterEgg) {
        (window as any).triggerEasterEgg(quote, 'rick');
      } else {
        console.log(`🛸 Rick: ${quote}`);
      }
      
      setClickCount(0);
    }
  };

  // Advanced hover animations for different sizes
  const getHoverAnimation = () => {
    if (shouldReduceMotion) return {};
    
    return {
      scale: 1.08, // Slightly more dramatic for smaller sizes
      rotate: [0, -3, 3, -2, 2, 0], // More playful wobble
      y: -5, // Slight lift effect
      transition: { 
        scale: { type: "spring", stiffness: 400, damping: 15 },
        rotate: { duration: 0.4, ease: "easeInOut" },
        y: { type: "spring", stiffness: 300, damping: 20 }
      }
    };
  };

  // Glowing effect for easter egg
  const glowStyle = isGlowing ? {
    filter: 'drop-shadow(0 10px 20px rgba(237, 130, 158, 0.3)) drop-shadow(0 0 30px rgba(0, 255, 0, 0.6)) drop-shadow(0 0 60px rgba(0, 255, 0, 0.4))',
    transform: 'scale(1.1)'
  } : {};

  return (
    <motion.div 
      className={`relative inline-block ${className}`}
      style={style}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        variants={shouldReduceMotion ? {} : floatingAnimation}
        animate={shouldReduceMotion ? {} : "animate"}
      >
        <motion.div
          variants={shouldReduceMotion ? {} : breathingAnimation}
          animate={shouldReduceMotion ? {} : "animate"}
          whileHover={getHoverAnimation()}
          whileTap={shouldReduceMotion ? {} : {
            scale: 0.95,
            rotate: [0, -8, 8, 0],
            transition: { duration: 0.2 }
          }}
          onClick={handlePlumbusClick}
          style={{ cursor: 'pointer', ...glowStyle }}
        >
          <img 
            src="/plumbus-hero.png"
            alt={alt}
            className="w-full h-auto mx-auto"
            loading="lazy"
            width="240"
            height="240"
            style={{ 
              filter: 'drop-shadow(0 8px 16px rgba(237, 130, 158, 0.2))',
              willChange: 'transform',
              transition: 'filter 0.3s ease, transform 0.3s ease'
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SimplePlumbusHero;