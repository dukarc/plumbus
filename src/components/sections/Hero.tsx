import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { Button } from '@components/ui/Button';
import { InteractivePlumbus } from '@components/plumbus/InteractivePlumbus';
import { FloatingElement, MouseFollower, ParticleSystem } from '@components/ui/ParallaxScroll';
import { useReducedMotion } from '@hooks/useReducedMotion';
import { fadeInUp, fadeInDown, staggerContainer, floatingBubble, sparkleTrail, bounceIn } from '@utils/animations';

export const Hero: React.FC = () => {
  const [selectedHotspot, setSelectedHotspot] = useState<string | null>(null);
  const [showFloatingElements] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        
        {/* Floating elements */}
        {showFloatingElements && (
          <>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full opacity-40"
                style={{
                  left: `${10 + i * 12}%`,
                  top: `${20 + (i % 3) * 25}%`,
                }}
                variants={prefersReducedMotion ? {} : floatingBubble}
                animate={prefersReducedMotion ? {} : 'animate'}
                custom={i}
              />
            ))}
            
            {/* Sparkle trail */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`sparkle-${i}`}
                className="absolute w-2 h-2 bg-yellow-300 rounded-full opacity-60"
                style={{
                  right: `${5 + i * 8}%`,
                  top: `${30 + i * 10}%`,
                }}
                variants={prefersReducedMotion ? {} : sparkleTrail}
                animate={prefersReducedMotion ? {} : 'animate'}
                custom={i}
              />
            ))}
          </>
        )}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={prefersReducedMotion ? {} : staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Left side - Content */}
          <motion.div
            className="text-center lg:text-left space-y-8"
            variants={prefersReducedMotion ? {} : fadeInUp}
          >
            <div className="space-y-4">
              <motion.div
                className="inline-flex items-center space-x-2 bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium"
                variants={prefersReducedMotion ? {} : fadeInDown}
              >
                <Sparkles size={16} />
                <span>The Ultimate Household Device</span>
              </motion.div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                <motion.span
                  variants={prefersReducedMotion ? {} : bounceIn}
                  className="inline-block"
                >
                  Meet the{' '}
                </motion.span>
                <motion.span 
                  className="text-gradient bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent inline-block"
                  variants={prefersReducedMotion ? {} : bounceIn}
                  whileHover={prefersReducedMotion ? {} : {
                    scale: 1.05,
                    rotate: [0, 2, -2, 0],
                    transition: { duration: 0.4 }
                  }}
                >
                  Plumbus
                </motion.span>
              </h1>
              
              <motion.p 
                className="text-xl text-gray-600 max-w-2xl"
                variants={prefersReducedMotion ? {} : fadeInUp}
                whileInView={prefersReducedMotion ? {} : {
                  opacity: [0.8, 1, 0.8],
                  transition: { duration: 3, repeat: Infinity }
                }}
              >
                The mysterious multi-purpose household device that everyone has but nobody fully understands. 
                Now available with advanced dinglebop technology and quantum fleeb integration.
              </motion.p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.div
                whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              >
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="text-lg px-8 py-4 relative overflow-hidden"
                >
                  <span className="relative z-10">Get Your Plumbus - $149</span>
                  {/* Enhanced shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 rounded-lg"
                    animate={prefersReducedMotion ? {} : {
                      x: ['-100%', '100%'],
                      scale: [1, 1.02, 1]
                    }}
                    transition={prefersReducedMotion ? {} : {
                      duration: 2.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      repeatDelay: 4
                    }}
                  />
                  
                  {/* Pulse effect */}
                  <motion.div
                    className="absolute inset-0 bg-pink-400 rounded-lg opacity-10"
                    animate={prefersReducedMotion ? {} : {
                      scale: [1, 1.05, 1],
                      opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={prefersReducedMotion ? {} : {
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />
                </Button>
              </motion.div>
              
              <Button 
                variant="secondary" 
                size="lg" 
                className="text-lg px-8 py-4"
                onClick={scrollToFeatures}
              >
                Learn More
              </Button>
            </div>

            <motion.div 
              className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-500"
              variants={prefersReducedMotion ? {} : staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {[
                { color: 'bg-green-500', text: 'Quantum Certified', icon: '⚛️' },
                { color: 'bg-blue-500', text: 'Interdimensional Shipping', icon: '🌀' },
                { color: 'bg-purple-500', text: 'Rick Approved', icon: '🧪' }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-2"
                  variants={prefersReducedMotion ? {} : fadeInUp}
                  whileHover={prefersReducedMotion ? {} : {
                    scale: 1.05,
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div 
                    className={`w-2 h-2 ${item.color} rounded-full`}
                    animate={prefersReducedMotion ? {} : {
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={prefersReducedMotion ? {} : {
                      duration: 2 + index * 0.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.3
                    }}
                  />
                  <span className="hover:text-gray-700 transition-colors cursor-default">
                    {item.icon} {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Interactive Plumbus */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            variants={prefersReducedMotion ? {} : fadeInUp}
          >
            <div className="relative">
              <MouseFollower intensity={0.05} className="relative">
                <FloatingElement intensity={15} duration={6} className="relative">
                  <InteractivePlumbus 
                    onHotspotSelect={setSelectedHotspot}
                    selectedHotspot={selectedHotspot}
                  />
                </FloatingElement>
              </MouseFollower>
              
              {/* Hotspot tooltip */}
              <AnimatePresence>
                {selectedHotspot && (
                  <motion.div
                    className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs z-20"
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-sm">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Selected: {selectedHotspot}
                      </h4>
                      <p className="text-gray-600">
                        Click on the glowing areas to learn about different Plumbus components!
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedHotspot(null)}
                      className="absolute top-1 right-1 w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
                      aria-label="Close tooltip"
                    >
                      ×
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Background particle system */}
              <ParticleSystem 
                count={12}
                colors={['#f9a8d4', '#c084fc', '#fbbf24', '#60a5fa', '#34d399']}
                size={{ min: 3, max: 8 }}
                speed={{ min: 15, max: 25 }}
                className="absolute inset-0 -z-10"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.button
            onClick={scrollToFeatures}
            className="group flex flex-col items-center space-y-2 text-gray-500 hover:text-pink-600 transition-colors p-4 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 rounded-lg"
            aria-label="Scroll to features"
            whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
          >
            <span className="text-sm font-medium group-hover:text-pink-600 transition-colors">Discover Features</span>
            
            {/* Animated arrow with trail effect */}
            <div className="relative">
              <motion.div
                animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
                transition={prefersReducedMotion ? {} : { duration: 2, repeat: Infinity }}
              >
                <ArrowDown size={20} className="relative z-10" />
              </motion.div>
              
              {/* Trail arrows */}
              {!prefersReducedMotion && (
                <>
                  <motion.div
                    className="absolute inset-0 opacity-50"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
                  >
                    <ArrowDown size={20} />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 opacity-25"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                  >
                    <ArrowDown size={20} />
                  </motion.div>
                </>
              )}
            </div>
            
            {/* Pulsing ring indicator */}
            <motion.div
              className="absolute inset-0 rounded-lg border-2 border-pink-300 opacity-0 group-hover:opacity-100 transition-opacity"
              animate={prefersReducedMotion ? {} : {
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={prefersReducedMotion ? {} : {
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </motion.button>
        </motion.div>
      </div>

      {/* Custom styles for blob animation */}
      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};