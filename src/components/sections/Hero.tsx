import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { Button } from '@components/ui/Button';
import { InteractivePlumbus } from '@components/plumbus/InteractivePlumbus';
import { useReducedMotion } from '@hooks/useReducedMotion';
import { fadeInUp, fadeInDown, staggerContainer } from '@utils/animations';

export const Hero: React.FC = () => {
  const [selectedHotspot, setSelectedHotspot] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
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
                Meet the{' '}
                <span className="text-gradient bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Plumbus
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl">
                The mysterious multi-purpose household device that everyone has but nobody fully understands. 
                Now available with advanced dinglebop technology and quantum fleeb integration.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="primary" size="lg" className="text-lg px-8 py-4">
                Get Your Plumbus - $149
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                className="text-lg px-8 py-4"
                onClick={scrollToFeatures}
              >
                Learn More
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Quantum Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span>Interdimensional Shipping</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span>Rick Approved</span>
              </div>
            </div>
          </motion.div>

          {/* Right side - Interactive Plumbus */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            variants={prefersReducedMotion ? {} : fadeInUp}
          >
            <div className="relative">
              <InteractivePlumbus 
                onHotspotSelect={setSelectedHotspot}
                selectedHotspot={selectedHotspot}
              />
              
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
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <button
            onClick={scrollToFeatures}
            className="flex flex-col items-center space-y-2 text-gray-500 hover:text-pink-600 transition-colors p-4 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 rounded-lg"
            aria-label="Scroll to features"
          >
            <span className="text-sm font-medium">Discover Features</span>
            <motion.div
              animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
              transition={prefersReducedMotion ? {} : { duration: 2, repeat: Infinity }}
            >
              <ArrowDown size={20} />
            </motion.div>
          </button>
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