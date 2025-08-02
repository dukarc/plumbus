import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Zap, Crown, Star, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@components/ui/Button';
import { Card } from '@components/ui/Card';
import { ScrollAnimation } from '@components/ui/ScrollAnimation';
import { useReducedMotion } from '@hooks/useReducedMotion';
import { useToast } from '@components/ui/Notifications';
import { plumbusModels } from '@utils/data';
import { staggerContainer, scaleIn, cardTilt } from '@utils/animations';

export const Pricing: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<string>('premium');
  const prefersReducedMotion = useReducedMotion();
  const toast = useToast();

  const modelIcons = {
    basic: Zap,
    premium: Star,
    enterprise: Crown,
  };

  const [purchaseStates, setPurchaseStates] = useState<{[key: string]: 'idle' | 'loading' | 'success'}>({});
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [celebrationCard, setCelebrationCard] = useState<string | null>(null);

  const handlePurchase = (modelId: string) => {
    setPurchaseStates(prev => ({ ...prev, [modelId]: 'loading' }));
    
    // Show delightful loading toast
    toast.plumbus('Processing your order...', 'Preparing your Plumbus for interdimensional shipping');
    
    // Trigger celebration animation
    setCelebrationCard(modelId);
    setTimeout(() => setCelebrationCard(null), 3000);
    
    // Simulate purchase process
    setTimeout(() => {
      setPurchaseStates(prev => ({ ...prev, [modelId]: 'success' }));
      
      // Show success notification
      toast.plumbus('Wubba Lubba Dub Dub!', `Your ${modelId} Plumbus is ready! Redirecting to checkout...`);
      
      // Reset after showing success
      setTimeout(() => {
        setPurchaseStates(prev => ({ ...prev, [modelId]: 'idle' }));
        // In a real app, this would integrate with a payment processor
        console.log(`Purchasing ${modelId} Plumbus`);
      }, 1500);
    }, 2000);
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <ScrollAnimation direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your{' '}
              <span className="text-gradient bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Plumbus
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From first-time users to interdimensional enterprises, we have the perfect 
              Plumbus configuration for your needs and budget.
            </p>
          </div>
        </ScrollAnimation>

        {/* Pricing cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={prefersReducedMotion ? {} : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {plumbusModels.map((model, index) => {
            const IconComponent = modelIcons[model.id as keyof typeof modelIcons];
            const isPopular = model.popular;
            const isSelected = selectedModel === model.id;

            return (
              <motion.div
                key={model.id}
                variants={prefersReducedMotion ? {} : scaleIn}
                custom={index}
              >
                <motion.div 
                  className={`relative ${isPopular ? 'transform scale-105' : ''}`}
                  onClick={() => setSelectedModel(model.id)}
                  onHoverStart={() => setHoveredCard(model.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                  whileHover={prefersReducedMotion ? {} : {
                    ...cardTilt,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Popular badge */}
                  {isPopular && (
                    <motion.div 
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                      animate={prefersReducedMotion ? {} : {
                        y: [0, -2, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={prefersReducedMotion ? {} : {
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    >
                      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center space-x-1">
                        <Sparkles size={14} />
                        <span>Most Popular</span>
                        <Sparkles size={14} />
                      </div>
                    </motion.div>
                  )}

                  <motion.div
                    whileHover={prefersReducedMotion ? {} : {
                      y: isPopular ? -4 : -8,
                      scale: 1.02,
                      transition: { duration: 0.3, ease: 'easeOut' }
                    }}
                    animate={celebrationCard === model.id && !prefersReducedMotion ? {
                      scale: [1, 1.05, 1],
                      rotate: [0, 2, -2, 0],
                      transition: { duration: 0.6, ease: 'easeInOut' }
                    } : {}}
                  >
                  <Card 
                    hover
                    className={`h-full cursor-pointer transition-all duration-300 ${
                      isSelected 
                        ? 'ring-2 ring-pink-500 shadow-xl' 
                        : isPopular 
                          ? 'border-pink-200 shadow-lg'
                          : ''
                    }`}
                  >
                    <div className="text-center space-y-6">
                      {/* Icon and title */}
                      <div className="space-y-4">
                        <motion.div 
                          className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${
                            isPopular 
                              ? 'bg-gradient-to-br from-pink-500 to-purple-600 text-white' 
                              : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-600'
                          }`}
                          whileHover={prefersReducedMotion ? {} : {
                            rotate: [0, -5, 5, 0],
                            scale: 1.1,
                            transition: { duration: 0.4 }
                          }}
                          animate={hoveredCard === model.id && !prefersReducedMotion ? {
                            y: [0, -5, 0],
                            transition: { duration: 1, repeat: Infinity }
                          } : {}}
                        >
                          <IconComponent size={32} />
                        </motion.div>
                        
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {model.name}
                          </h3>
                          <p className="text-gray-600">{model.description}</p>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-center">
                          <span className="text-4xl font-bold text-gray-900">
                            ${model.price}
                          </span>
                          <span className="text-gray-600 ml-2">
                            one-time
                          </span>
                        </div>
                        <div className="text-sm text-gray-500">
                          Free shipping across all dimensions
                        </div>
                      </div>

                      {/* Features */}
                      <motion.div 
                        className="space-y-3 text-left"
                        variants={prefersReducedMotion ? {} : staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        {model.features.map((feature, featureIndex) => (
                          <motion.div 
                            key={featureIndex} 
                            className="flex items-start space-x-3"
                            variants={prefersReducedMotion ? {} : scaleIn}
                            whileHover={prefersReducedMotion ? {} : {
                              x: 5,
                              transition: { duration: 0.2 }
                            }}
                          >
                            <motion.div 
                              className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5"
                              whileHover={prefersReducedMotion ? {} : {
                                scale: 1.2,
                                backgroundColor: '#10b981',
                                transition: { duration: 0.2 }
                              }}
                            >
                              <Check size={12} className="text-green-600" />
                            </motion.div>
                            <span className="text-gray-700 text-sm leading-relaxed">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button
                          variant={isPopular ? "primary" : "secondary"}
                          size="lg"
                          className="w-full relative overflow-hidden"
                          loading={purchaseStates[model.id] === 'loading'}
                          success={purchaseStates[model.id] === 'success'}
                          showConfetti={purchaseStates[model.id] === 'success'}
                          onClick={() => handlePurchase(model.id)}
                        >
                          <AnimatePresence mode="wait">
                            {purchaseStates[model.id] === 'success' ? (
                              <motion.span
                                key="success"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="flex items-center"
                              >
                                <Check size={16} className="mr-2" />
                                Added to Cart!
                              </motion.span>
                            ) : (
                              <motion.span
                                key="default"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="flex items-center"
                              >
                                <span>{model.buttonText}</span>
                                <ArrowRight size={16} className="ml-2" />
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </Button>
                      </div>
                    </div>
                  </Card>
                  
                  {/* Celebration particles */}
                  <AnimatePresence>
                    {celebrationCard === model.id && !prefersReducedMotion && (
                      <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        {[...Array(8)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"
                            style={{
                              left: `${20 + i * 10}%`,
                              top: `${30 + (i % 3) * 20}%`,
                            }}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                              scale: [0, 1.5, 0],
                              opacity: [0, 1, 0],
                              y: [0, -50],
                              x: [(Math.random() - 0.5) * 100],
                              rotate: [0, 360],
                            }}
                            exit={{ opacity: 0 }}
                            transition={{
                              duration: 2,
                              ease: 'easeOut',
                              delay: i * 0.1,
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </AnimatePresence>
                </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Guarantee and additional info */}
        <ScrollAnimation direction="up" delay={0.5}>
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="space-y-2">
                  <div className="text-3xl">🛡️</div>
                  <h4 className="font-bold text-gray-900">30-Day Guarantee</h4>
                  <p className="text-sm text-gray-600">
                    Not satisfied? Return your Plumbus for a full refund.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="text-3xl">🚀</div>
                  <h4 className="font-bold text-gray-900">Free Shipping</h4>
                  <p className="text-sm text-gray-600">
                    Interdimensional portal delivery to your door.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="text-3xl">💫</div>
                  <h4 className="font-bold text-gray-900">Lifetime Support</h4>
                  <p className="text-sm text-gray-600">
                    24/7 customer support across all timelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Payment methods */}
        <ScrollAnimation direction="up" delay={0.7}>
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Secure payment powered by</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="font-bold text-lg">STRIPE</div>
              <div className="font-bold text-lg">PAYPAL</div>
              <div className="font-bold text-lg">APPLE PAY</div>
              <div className="font-bold text-lg">CRYPTO</div>
            </div>
          </div>
        </ScrollAnimation>

        {/* FAQ teaser */}
        <ScrollAnimation direction="up" delay={0.9}>
          <div className="mt-16 text-center">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Check out our comprehensive FAQ or speak with a Plumbus specialist.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary">
                  View FAQ
                </Button>
                <Button variant="ghost">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};