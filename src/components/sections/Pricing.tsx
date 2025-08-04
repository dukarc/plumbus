import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ZapIcon, CrownIcon, StarIcon } from '../icons/OptimizedIcons';
import { plumbusModels } from '@utils/data';
import { LoadingDots } from '@components/ui/LoadingStates';

// Whimsical pricing card variants
const pricingCardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50, 
    scale: 0.9,
    rotateY: -15
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateY: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.6,
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  }),
  hover: {
    y: -8,
    scale: 1.03,
    rotateY: 2,
    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
    transition: {
      duration: 0.3,
      type: 'spring',
      stiffness: 300
    }
  }
};

// Popular badge bounce animation
const popularBadgeVariants = {
  initial: {
    scale: 0,
    rotate: -180,
    y: -10
  },
  animate: {
    scale: [0, 1.2, 1],
    rotate: 0,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.8,
      type: 'spring',
      stiffness: 300
    }
  },
  hover: {
    scale: 1.1,
    rotate: [0, -5, 5, 0],
    transition: {
      duration: 0.4
    }
  }
};

// Icon animation variants
const iconVariants = {
  idle: {
    scale: 1,
    rotate: 0
  },
  hover: {
    scale: 1.2,
    rotate: [0, -10, 10, -5, 0],
    transition: {
      duration: 0.6,
      ease: 'easeInOut'
    }
  }
};

// Price number bounce effect
const priceVariants = {
  idle: { scale: 1 },
  hover: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 0.4,
      ease: 'easeInOut'
    }
  }
};

// Feature list stagger animation
const featureListVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const featureItemVariants = {
  hidden: { 
    opacity: 0, 
    x: -20,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20
    }
  }
};

// Button magic effect
const buttonVariants = {
  idle: {
    scale: 1,
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
  },
  hover: {
    scale: 1.05,
    boxShadow: '0 8px 25px rgba(255, 105, 180, 0.3)',
    transition: {
      duration: 0.2
    }
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1
    }
  }
};

// Confetti particle system for popular card hover
const ConfettiParticle: React.FC<{ delay: number }> = ({ delay }) => {
  const colors = ['var(--plumbus-pink)', 'var(--step-yellow)', 'var(--step-green)', 'var(--blamf-brown)'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  return (
    <motion.div
      initial={{ 
        opacity: 0,
        scale: 0,
        x: 0,
        y: 0,
        rotate: 0
      }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0.5],
        x: [0, (Math.random() - 0.5) * 100],
        y: [0, -50 - Math.random() * 50],
        rotate: [0, Math.random() * 360]
      }}
      transition={{
        duration: 1.5,
        delay,
        ease: 'easeOut'
      }}
      style={{
        position: 'absolute',
        width: '6px',
        height: '6px',
        backgroundColor: randomColor,
        borderRadius: '50%',
        top: '50%',
        left: '50%',
        pointerEvents: 'none',
        zIndex: 10
      }}
    />
  );
};

export const Pricing: React.FC = () => {
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});
  const [purchaseSuccess, setPurchaseSuccess] = useState<Record<string, boolean>>({});
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState<Record<string, boolean>>({});
  
  const modelIcons = {
    basic: ZapIcon,
    premium: StarIcon,
    enterprise: CrownIcon,
  };

  const handlePurchase = async (modelId: string) => {
    setLoadingStates(prev => ({ ...prev, [modelId]: true }));
    
    try {
      // Simulate API call to payment processor
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setPurchaseSuccess(prev => ({ ...prev, [modelId]: true }));
      
      // Reset success state after 3 seconds
      setTimeout(() => {
        setPurchaseSuccess(prev => ({ ...prev, [modelId]: false }));
      }, 3000);
      
      // In a real app, this would redirect to checkout
      console.log(`Redirecting to checkout for ${modelId} Plumbus`);
    } catch (error) {
      console.error('Purchase failed:', error);
    } finally {
      setLoadingStates(prev => ({ ...prev, [modelId]: false }));
    }
  };

  return (
    <section id="pricing" className="section-beige">
      <div className="container">
        <div className="text-center" style={{ marginBottom: 'var(--space-8)' }}>
          <h2 className="section-title">
            Choose Your Plumbus
          </h2>
          <p className="max-w-3xl mx-auto" style={{ fontSize: 'var(--text-xl)', color: 'var(--gray-600)' }}>
            From first-time users to interdimensional enterprises, we have the perfect 
            Plumbus configuration for your needs and budget.
          </p>
        </div>

        {/* Pricing cards with whimsical animations */}
        <div className="pricing-container">
          {plumbusModels.map((model, index) => {
            const IconComponent = modelIcons[model.id as keyof typeof modelIcons];
            const isPopular = model.popular;

            return (
              <motion.div 
                key={model.id} 
                className={`pricing-card whimsy-card pricing-card-whimsy ${isPopular ? 'featured' : ''}`} 
                style={{ 
                  marginTop: isPopular ? 'var(--space-4)' : '0',
                  position: 'relative',
                  overflow: isPopular ? 'visible' : 'hidden'
                }}
                variants={pricingCardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                custom={index}
                onHoverStart={() => {
                  setHoveredCard(model.id);
                  if (isPopular) {
                    setShowConfetti(prev => ({ ...prev, [model.id]: true }));
                    setTimeout(() => setShowConfetti(prev => ({ ...prev, [model.id]: false })), 1500);
                  }
                }}
                onHoverEnd={() => setHoveredCard(null)}
              >
                {/* Popular badge with bounce animation */}
                {isPopular && (
                  <div className="absolute left-1/2 transform -translate-x-1/2" style={{ top: '-20px', zIndex: 5 }}>
                    <motion.div 
                      className="text-white rounded-full font-bold popular-badge" 
                      style={{ 
                        backgroundColor: 'var(--plumbus-pink)', 
                        padding: 'var(--space-1) var(--space-3)', 
                        fontSize: 'var(--text-sm)',
                        boxShadow: 'var(--shadow-soft)',
                        border: '2px solid var(--white)',
                        position: 'relative'
                      }}
                      variants={popularBadgeVariants}
                      initial="initial"
                      animate="animate"
                      whileHover="hover"
                    >
                      Most Popular
                      {/* Sparkle effects around popular badge */}
                      {hoveredCard === model.id && (
                        <>
                          <motion.div
                            className="badge-sparkle"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ 
                              scale: [0, 1, 0],
                              opacity: [0, 1, 0],
                              rotate: [0, 360]
                            }}
                            transition={{ duration: 1, repeat: Infinity }}
                            style={{
                              position: 'absolute',
                              top: '-5px',
                              right: '-5px',
                              width: '8px',
                              height: '8px',
                              backgroundColor: 'var(--step-yellow)',
                              borderRadius: '50%'
                            }}
                          />
                          <motion.div
                            className="badge-sparkle"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ 
                              scale: [0, 1, 0],
                              opacity: [0, 1, 0],
                              rotate: [0, -360]
                            }}
                            transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
                            style={{
                              position: 'absolute',
                              bottom: '-5px',
                              left: '-5px',
                              width: '6px',
                              height: '6px',
                              backgroundColor: 'var(--step-green)',
                              borderRadius: '50%'
                            }}
                          />
                        </>
                      )}
                    </motion.div>
                  </div>
                )}

                {/* Confetti particles for popular card */}
                {isPopular && showConfetti[model.id] && (
                  <div className="confetti-container" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none' }}>
                    {Array.from({ length: 15 }).map((_, i) => (
                      <ConfettiParticle key={i} delay={i * 0.1} />
                    ))}
                  </div>
                )}

                {/* Icon and title with hover effects */}
                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 icon-container-whimsy" 
                    style={{
                      borderRadius: 'var(--border-radius-lg)',
                      backgroundColor: isPopular ? 'var(--plumbus-pink)' : 'var(--gray-200)',
                      color: isPopular ? 'var(--white)' : 'var(--gray-600)',
                      marginBottom: 'var(--space-3)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    variants={iconVariants}
                    initial="idle"
                    whileHover="hover"
                  >
                    <IconComponent size={32} />
                    {/* Glow effect on hover */}
                    {hoveredCard === model.id && (
                      <motion.div
                        className="icon-glow"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                          opacity: [0, 0.3, 0],
                          scale: [0.8, 1.2, 1.4]
                        }}
                        transition={{ duration: 1, repeat: Infinity }}
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: '100%',
                          height: '100%',
                          backgroundColor: isPopular ? 'rgba(255, 255, 255, 0.3)' : 'var(--plumbus-pink)',
                          borderRadius: 'var(--border-radius-lg)',
                          pointerEvents: 'none'
                        }}
                      />
                    )}
                  </motion.div>
                  
                  <div>
                    <h3 className="pricing-title">
                      {model.name}
                    </h3>
                    <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-base)' }}>{model.description}</p>
                  </div>
                </div>

                {/* Price with bounce effect */}
                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <motion.div 
                    className="pricing-price price-whimsy" 
                    style={{ marginBottom: 'var(--space-2)' }}
                    variants={priceVariants}
                    initial="idle"
                    whileHover="hover"
                  >
                    ${model.price}
                  </motion.div>
                  <motion.div 
                    style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-500)' }}
                    animate={hoveredCard === model.id ? { 
                      color: 'var(--plumbus-pink)',
                      scale: 1.05
                    } : {}}
                    transition={{ duration: 0.2 }}
                  >
                    Free shipping across all dimensions
                  </motion.div>
                </div>

                {/* Features with stagger animation */}
                <motion.ul 
                  className="pricing-features"
                  variants={featureListVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {model.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex}
                      variants={featureItemVariants}
                      whileHover={{ 
                        x: 5,
                        color: 'var(--plumbus-pink)',
                        transition: { duration: 0.2 }
                      }}
                    >
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>

                {/* CTA Button with magic effects */}
                <div style={{ paddingTop: 'var(--space-3)' }}>
                  <motion.button
                    className={`${isPopular ? 'button-primary whimsy-button w-full' : 'button-secondary whimsy-button w-full'} flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed button-magic`}
                    onClick={() => handlePurchase(model.id)}
                    disabled={loadingStates[model.id] || purchaseSuccess[model.id]}
                    variants={buttonVariants}
                    initial="idle"
                    whileHover="hover"
                    whileTap="tap"
                    style={{ position: 'relative', overflow: 'hidden' }}
                  >
                    {loadingStates[model.id] ? (
                      <>
                        <LoadingDots size="sm" color={isPopular ? 'bg-white' : 'bg-pink-500'} />
                        <span>Processing...</span>
                      </>
                    ) : purchaseSuccess[model.id] ? (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Added to Cart!</span>
                      </>
                    ) : (
                      <span>{model.buttonText}</span>
                    )}
                    {/* Button shine effect */}
                    {hoveredCard === model.id && !loadingStates[model.id] && !purchaseSuccess[model.id] && (
                      <motion.div
                        className="button-shine"
                        initial={{ x: '-100%', opacity: 0 }}
                        animate={{ x: '100%', opacity: [0, 1, 0] }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                          pointerEvents: 'none'
                        }}
                      />
                    )}
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Guarantee and additional info with whimsical animations */}
        <div className="text-center" style={{ marginTop: 'var(--space-8)' }}>
          <motion.div 
            className="plumbus-card whimsy-card max-w-4xl mx-auto guarantee-card-whimsy" 
            style={{ backgroundColor: 'var(--step-green)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring' }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="plumbus-grid cols-3" style={{ alignItems: 'center' }}>
              <motion.div 
                style={{ textAlign: 'center' }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="emoji-bounce guarantee-emoji" 
                  style={{ fontSize: 'var(--text-4xl)', marginBottom: 'var(--space-2)' }}
                  animate={{ 
                    rotate: [0, -5, 5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  whileHover={{
                    scale: 1.3,
                    rotate: [0, 10, -10, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  🛡️
                </motion.div>
                <h4 className="font-bold" style={{ color: 'var(--blamf-brown)', marginBottom: 'var(--space-1)', fontFamily: 'var(--font-header)' }}>30-Day Guarantee</h4>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-700)' }}>
                  Not satisfied? Return your Plumbus for a full refund.
                </p>
              </motion.div>
              
              <motion.div 
                style={{ textAlign: 'center' }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="emoji-bounce guarantee-emoji" 
                  style={{ fontSize: 'var(--text-4xl)', marginBottom: 'var(--space-2)' }}
                  animate={{ 
                    y: [0, -5, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: 0.5,
                    ease: 'easeInOut'
                  }}
                  whileHover={{
                    scale: 1.3,
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  🚀
                </motion.div>
                <h4 className="font-bold" style={{ color: 'var(--blamf-brown)', marginBottom: 'var(--space-1)', fontFamily: 'var(--font-header)' }}>Free Shipping</h4>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-700)' }}>
                  Interdimensional portal delivery to your door.
                </p>
              </motion.div>
              
              <motion.div 
                style={{ textAlign: 'center' }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="emoji-bounce guarantee-emoji" 
                  style={{ fontSize: 'var(--text-4xl)', marginBottom: 'var(--space-2)' }}
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 4, repeat: Infinity, ease: 'linear' },
                    scale: { duration: 2, repeat: Infinity, delay: 1 }
                  }}
                  whileHover={{
                    scale: 1.3,
                    rotate: [0, 180, 360],
                    transition: { duration: 0.5 }
                  }}
                >
                  💫
                </motion.div>
                <h4 className="font-bold" style={{ color: 'var(--blamf-brown)', marginBottom: 'var(--space-1)', fontFamily: 'var(--font-header)' }}>Lifetime Support</h4>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-700)' }}>
                  24/7 customer support across all timelines.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Payment methods with stagger animation */}
        <div className="text-center" style={{ marginTop: 'var(--space-8)' }}>
          <motion.p 
            style={{ color: 'var(--gray-600)', marginBottom: 'var(--space-3)', fontSize: 'var(--text-base)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Secure payment powered by
          </motion.p>
          <motion.div 
            className="flex justify-center items-center payment-methods-whimsy" 
            style={{ gap: 'var(--space-6)', opacity: '0.6' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {['STRIPE', 'PAYPAL', 'APPLE PAY', 'CRYPTO'].map((method, index) => (
              <motion.div 
                key={method}
                className="font-bold payment-method-item" 
                style={{ fontSize: 'var(--text-lg)' }}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.4 + (index * 0.1),
                  type: 'spring',
                  stiffness: 300
                }}
                whileHover={{ 
                  scale: 1.1,
                  opacity: 1,
                  color: 'var(--plumbus-pink)',
                  transition: { duration: 0.2 }
                }}
              >
                {method}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* FAQ teaser with Rick and Morty easter egg */}
        <div className="text-center" style={{ marginTop: 'var(--space-8)' }}>
          <motion.div 
            className="plumbus-card whimsy-card faq-card-whimsy" 
            style={{ backgroundColor: 'var(--gray-100)' }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring' }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.h3 
              className="font-bold" 
              style={{ fontSize: 'var(--text-xl)', color: 'var(--blamf-brown)', marginBottom: 'var(--space-3)', fontFamily: 'var(--font-header)' }}
              whileHover={{ 
                scale: 1.05,
                color: 'var(--plumbus-pink)',
                transition: { duration: 0.2 }
              }}
            >
              Still have questions?
            </motion.h3>
            <motion.p 
              style={{ color: 'var(--gray-600)', marginBottom: 'var(--space-4)', fontSize: 'var(--text-base)' }}
              animate={{ 
                opacity: [0.8, 1, 0.8],
                transition: { duration: 3, repeat: Infinity }
              }}
            >
              Check out our comprehensive FAQ or speak with a Plumbus specialist.
            </motion.p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <motion.button 
                className="button-secondary whimsy-button flex items-center justify-center space-x-2 faq-button-whimsy"
                onClick={() => {
                  const faqElement = document.getElementById('faq');
                  if (faqElement) {
                    faqElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 8px 25px rgba(255, 105, 180, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View FAQ</span>
              </motion.button>
              <motion.button 
                className="button-outline whimsy-button flex items-center justify-center space-x-2 support-button-whimsy"
                onClick={() => {
                  window.location.href = 'mailto:support@plumbus.com?subject=Plumbus Support Request';
                }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'var(--plumbus-pink)',
                  color: 'white',
                  borderColor: 'var(--plumbus-pink)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Contact Support</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};