import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  getRandomRickQuote, 
  getRandomMortyQuote, 
  KonamiCodeListener,
  ultimateEasterEggs,
  logEasterEgg 
} from '@utils/easterEggs';

interface EasterEggManagerProps {
  children: React.ReactNode;
}

const EasterEggManager: React.FC<EasterEggManagerProps> = ({ children }) => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [easterEggMessage, setEasterEggMessage] = useState('');
  const [easterEggType, setEasterEggType] = useState<'rick' | 'morty' | 'ultimate'>('rick');
  const [showUltimateEgg, setShowUltimateEgg] = useState(false);

  // Initialize Konami code listener
  useEffect(() => {
    new KonamiCodeListener(() => {
      const ultimateMessage = ultimateEasterEggs[Math.floor(Math.random() * ultimateEasterEggs.length)];
      setEasterEggMessage(ultimateMessage);
      setEasterEggType('ultimate');
      setShowUltimateEgg(true);
      setShowEasterEgg(true);
      
      logEasterEgg('KONAMI CODE ACTIVATED! Ultimate easter egg unlocked!', 'rick');
      
      // Hide after 5 seconds
      setTimeout(() => {
        setShowEasterEgg(false);
        setShowUltimateEgg(false);
      }, 5000);
    });

    // Global click counter for random easter eggs
    let clickCount = 0;
    const handleGlobalClick = () => {
      clickCount++;
      
      // Random easter egg every 20-30 clicks
      if (clickCount > 20 && Math.random() < 0.1) {
        const isRick = Math.random() > 0.5;
        const message = isRick ? getRandomRickQuote() : getRandomMortyQuote();
        
        setEasterEggMessage(message);
        setEasterEggType(isRick ? 'rick' : 'morty');
        setShowEasterEgg(true);
        
        logEasterEgg(message, isRick ? 'rick' : 'morty');
        
        setTimeout(() => setShowEasterEgg(false), 3000);
        clickCount = 0; // Reset counter
      }
    };

    document.addEventListener('click', handleGlobalClick);
    
    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  // Expose trigger function globally for other components
  useEffect(() => {
    (window as any).triggerEasterEgg = (message: string, type: 'rick' | 'morty' | 'ultimate' = 'rick') => {
      setEasterEggMessage(message);
      setEasterEggType(type);
      setShowEasterEgg(true);
      
      setTimeout(() => setShowEasterEgg(false), 3000);
    };
  }, []);

  const getEasterEggStyles = () => {
    switch (easterEggType) {
      case 'rick':
        return {
          background: 'linear-gradient(135deg, #00ff41 0%, #00d936 100%)',
          color: '#000',
          border: '2px solid #00ff41'
        };
      case 'morty':
        return {
          background: 'linear-gradient(135deg, #ffff00 0%, #ffd700 100%)',
          color: '#000',
          border: '2px solid #ffff00'
        };
      case 'ultimate':
        return {
          background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 50%, #5f27cd 100%)',
          color: '#fff',
          border: '2px solid #ff6b6b',
          boxShadow: '0 0 30px rgba(255, 107, 107, 0.5)'
        };
      default:
        return {};
    }
  };

  return (
    <>
      {children}
      
      {/* Easter Egg Toast */}
      <AnimatePresence>
        {showEasterEgg && (
          <motion.div
            initial={{ opacity: 0, y: -100, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: showUltimateEgg ? [1, 1.1, 1] : 1,
              rotate: showUltimateEgg ? [0, -2, 2, 0] : 0
            }}
            exit={{ opacity: 0, y: -100, scale: 0.8 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20,
              rotate: { duration: 0.5, repeat: showUltimateEgg ? Infinity : 0 }
            }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 max-w-md mx-4"
            style={{
              ...getEasterEggStyles(),
              padding: '16px 24px',
              borderRadius: '20px 15px 25px 18px',
              fontSize: '14px',
              fontWeight: easterEggType === 'ultimate' ? 'bold' : 'normal',
              textAlign: 'center',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                {easterEggType === 'ultimate' && (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="inline-block mr-2"
                  >
                    🛸
                  </motion.div>
                )}
                {easterEggMessage}
                {easterEggType === 'ultimate' && (
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="inline-block ml-2"
                  >
                    🌀
                  </motion.div>
                )}
              </div>
              
              <motion.button
                onClick={() => setShowEasterEgg(false)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className="ml-4 text-lg opacity-70 hover:opacity-100"
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                ×
              </motion.button>
            </div>
            
            {showUltimateEgg && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-2 text-xs opacity-80"
              >
                You found the ultimate secret! 🎉
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Hidden clue for keen observers */}
      <div 
        style={{ 
          position: 'fixed', 
          bottom: '10px', 
          right: '10px', 
          opacity: 0.01, 
          fontSize: '1px',
          pointerEvents: 'none',
          zIndex: -1
        }}
      >
        {/* Easter egg hunters: try the Konami code! ↑↑↓↓←→←→BA */}
      </div>
    </>
  );
};

export default EasterEggManager;