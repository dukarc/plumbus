import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StarIcon } from '../icons/OptimizedIcons';
import { testimonials } from '@utils/data';

// Carousel configuration
const CAROUSEL_CONFIG = {
  autoRotateInterval: 4500, // 4.5 seconds
  itemsPerPage: {
    mobile: 1,
    tablet: 2, 
    desktop: 3
  }
};

// Animation variants
const carouselVariants = {
  enter: {
    scale: 0.8,
    opacity: 0,
    y: 20
  },
  center: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3
    }
  }
};

const dotVariants = {
  active: {
    scale: 1.2,
    backgroundColor: 'var(--plumbus-pink)',
    boxShadow: '0 0 10px var(--plumbus-pink)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10
    }
  },
  inactive: {
    scale: 1,
    backgroundColor: 'var(--gray-300)',
    boxShadow: 'none'
  }
};

// Whimsical testimonial card variants
const testimonialCardVariants = {
  idle: {
    rotate: 0,
    scale: 1,
    y: 0
  },
  hover: {
    rotate: [0, -1, 1, -1, 0],
    scale: 1.02,
    y: -5,
    transition: {
      rotate: {
        duration: 0.5,
        ease: 'easeInOut'
      },
      scale: {
        duration: 0.2
      },
      y: {
        duration: 0.2,
        type: 'spring',
        stiffness: 300
      }
    }
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 }
  }
};

// Star pop-in effect
const starVariants = {
  hidden: {
    scale: 0,
    rotate: -180,
    opacity: 0
  },
  visible: (i: number) => ({
    scale: [0, 1.3, 1],
    rotate: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      type: 'spring',
      stiffness: 500,
      damping: 15
    }
  }),
  hover: {
    scale: 1.2,
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  }
};

// Navigation button variants
const navButtonVariants = {
  idle: {
    scale: 1,
    rotate: 0,
    backgroundColor: 'white'
  },
  hover: {
    scale: 1.1,
    rotate: [0, -5, 5, 0],
    backgroundColor: 'var(--plumbus-pink)',
    color: 'white',
    boxShadow: '0 4px 15px rgba(255, 105, 180, 0.3)',
    transition: {
      duration: 0.3,
      rotate: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    }
  },
  tap: {
    scale: 0.9,
    transition: { duration: 0.1 }
  }
};

// Easter egg counter for curious users
const useEasterEgg = () => {
  const [_clickCount, setClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  
  const handleSecretClick = () => {
    setClickCount(prev => {
      const newCount = prev + 1;
      if (newCount === 5) {
        setShowEasterEgg(true);
        setTimeout(() => setShowEasterEgg(false), 3000);
        return 0; // Reset
      }
      return newCount;
    });
  };
  
  return { showEasterEgg, handleSecretClick };
};

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(CAROUSEL_CONFIG.itemsPerPage.desktop);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const { showEasterEgg, handleSecretClick } = useEasterEgg();

  // Handle responsive items per page
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setItemsPerPage(CAROUSEL_CONFIG.itemsPerPage.mobile);
      } else if (width < 1024) {
        setItemsPerPage(CAROUSEL_CONFIG.itemsPerPage.tablet);
      } else {
        setItemsPerPage(CAROUSEL_CONFIG.itemsPerPage.desktop);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate total pages
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % totalPages);
    }, CAROUSEL_CONFIG.autoRotateInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalPages]);

  // Get current testimonials to display
  const getCurrentTestimonials = useCallback(() => {
    const startIndex = currentIndex * itemsPerPage;
    return testimonials.slice(startIndex, startIndex + itemsPerPage);
  }, [currentIndex, itemsPerPage]);

  // Navigation handlers
  const goToPage = (pageIndex: number) => {
    setCurrentIndex(pageIndex);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? totalPages - 1 : currentIndex - 1;
    goToPage(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % totalPages;
    goToPage(newIndex);
  };

  return (
    <section id="testimonials" className="section-white">
      <div className="container">
        <div className="text-center" style={{ marginBottom: 'var(--space-8)' }}>
          <h2 className="section-title">
            What Our Customers Are Saying
          </h2>
          <p className="max-w-3xl mx-auto" style={{ fontSize: 'var(--text-xl)', color: 'var(--gray-600)' }}>
            Don't just take our word for it. Hear from satisfied Plumbus owners 
            across multiple dimensions and realities.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="testimonial-carousel" style={{ marginBottom: 'var(--space-8)' }}>
          <div className="carousel-container" style={{ 
            position: 'relative',
            overflow: 'hidden',
            minHeight: '320px',
            marginBottom: 'var(--space-6)'
          }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={carouselVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="carousel-content"
                style={{
                  display: 'grid',
                  gridTemplateColumns: `repeat(${itemsPerPage}, 1fr)`,
                  gap: 'var(--space-6)',
                  padding: '0 var(--space-2)'
                }}
              >
                {getCurrentTestimonials().map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    className="plumbus-testimonial floating-gentle testimonial-card-whimsy"
                    variants={testimonialCardVariants}
                    initial={{ scale: 0.9, opacity: 0, y: 30 }}
                    animate={{ 
                      scale: 1, 
                      opacity: 1,
                      y: 0,
                      transition: { 
                        delay: index * 0.15,
                        type: 'spring',
                        stiffness: 300,
                        damping: 20
                      }
                    }}
                    whileHover="hover"
                    whileTap="tap"
                    onHoverStart={() => setHoveredCard(testimonial.id)}
                    onHoverEnd={() => setHoveredCard(null)}
                    onClick={handleSecretClick}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* Rating stars with whimsical effects */}
                    <div className="flex" style={{ marginBottom: 'var(--space-3)' }}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          variants={starVariants}
                          initial="hidden"
                          animate="visible"
                          whileHover="hover"
                          custom={i}
                          style={{ cursor: 'pointer', position: 'relative' }}
                        >
                          <StarIcon
                            size={16}
                            className="star-interactive text-step-yellow star-sparkle"
                            filled
                          />
                          {/* Sparkle effect when card is hovered */}
                          {hoveredCard === testimonial.id && (
                            <motion.div
                              className="star-particle"
                              initial={{ scale: 0, opacity: 1 }}
                              animate={{ 
                                scale: [0, 1.5, 0],
                                opacity: [1, 0.7, 0],
                                x: [0, Math.random() * 20 - 10],
                                y: [0, Math.random() * 20 - 10]
                              }}
                              transition={{ 
                                duration: 1,
                                delay: i * 0.1,
                                repeat: Infinity,
                                repeatDelay: 1
                              }}
                              style={{
                                position: 'absolute',
                                width: '4px',
                                height: '4px',
                                backgroundColor: 'var(--step-yellow)',
                                borderRadius: '50%',
                                pointerEvents: 'none'
                              }}
                            />
                          )}
                        </motion.div>
                      ))}
                    </div>

                    {/* Testimonial content */}
                    <div className="testimonial-content">
                      "{testimonial.content}"
                    </div>

                    {/* Author info with avatar bounce */}
                    <div className="testimonial-author">
                      <motion.div 
                        className="testimonial-avatar"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: [0, -5, 5, 0],
                          transition: { duration: 0.3 }
                        }}
                      >
                        <div className="w-full h-full rounded-full flex items-center justify-center text-white font-bold avatar-glow" style={{ backgroundColor: 'var(--plumbus-pink)' }}>
                          {testimonial.name.charAt(0)}
                        </div>
                      </motion.div>
                      <div className="testimonial-author-info">
                        <motion.h4
                          whileHover={{ 
                            scale: 1.05,
                            color: 'var(--plumbus-pink)',
                            transition: { duration: 0.2 }
                          }}
                        >
                          {testimonial.name}
                        </motion.h4>
                        <p>{testimonial.role} at {testimonial.company}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="carousel-controls" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 'var(--space-4)'
          }}>
            {/* Previous Button with whimsical effects */}
            <motion.button
              onClick={goToPrevious}
              className="carousel-nav-btn nav-btn-whimsy"
              variants={navButtonVariants}
              initial="idle"
              whileHover="hover"
              whileTap="tap"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '2px solid var(--plumbus-pink)',
                backgroundColor: 'white',
                color: 'var(--plumbus-pink)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                fontWeight: 'bold',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <motion.span
                animate={{ x: [-20, 0] }}
                transition={{ duration: 0.3 }}
              >
                ‹
              </motion.span>
            </motion.button>

            {/* Dots Indicators with playful interactions */}
            <div className="carousel-dots" style={{
              display: 'flex',
              gap: 'var(--space-2)'
            }}>
              {Array.from({ length: totalPages }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToPage(index)}
                  className="carousel-dot dot-whimsy"
                  variants={dotVariants}
                  animate={index === currentIndex ? 'active' : 'inactive'}
                  whileHover={{ 
                    scale: 1.4,
                    rotate: [0, 180, 360],
                    transition: { duration: 0.5 }
                  }}
                  whileTap={{ scale: 0.8 }}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}
                >
                  {/* Ripple effect on active dot */}
                  {index === currentIndex && (
                    <motion.div
                      className="dot-ripple"
                      initial={{ scale: 0, opacity: 0.8 }}
                      animate={{ 
                        scale: [0, 2.5],
                        opacity: [0.8, 0]
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: 'easeOut'
                      }}
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--plumbus-pink)',
                        pointerEvents: 'none'
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Next Button with whimsical effects */}
            <motion.button
              onClick={goToNext}
              className="carousel-nav-btn nav-btn-whimsy"
              variants={navButtonVariants}
              initial="idle"
              whileHover="hover"
              whileTap="tap"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '2px solid var(--plumbus-pink)',
                backgroundColor: 'white',
                color: 'var(--plumbus-pink)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                fontWeight: 'bold',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <motion.span
                animate={{ x: [20, 0] }}
                transition={{ duration: 0.3 }}
              >
                ›
              </motion.span>
            </motion.button>
          </div>

          {/* Auto-play indicator */}
          <div className="text-center" style={{ marginTop: 'var(--space-4)' }}>
            <motion.p 
              style={{ 
                fontSize: 'var(--text-sm)', 
                color: 'var(--gray-500)',
                opacity: isAutoPlaying ? 1 : 0.5
              }}
              animate={{ opacity: isAutoPlaying ? [1, 0.5, 1] : 0.5 }}
              transition={{ 
                duration: 2, 
                repeat: isAutoPlaying ? Infinity : 0,
                ease: 'easeInOut'
              }}
            >
              {isAutoPlaying ? 'Auto-rotating every 4.5 seconds' : 'Manual navigation active'}
            </motion.p>
          </div>
        </div>

        {/* Trust indicators with animated stats */}
        <div className="text-center" style={{ marginTop: 'var(--space-8)' }}>
          <motion.div 
            className="plumbus-card whimsy-card stats-card-whimsy" 
            style={{ backgroundColor: 'var(--gromflomite-beige)' }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="stats-container">
              <motion.div 
                className="stat-item"
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -2, 2, 0],
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="stat-number" 
                  style={{ color: 'var(--plumbus-pink)' }}
                  animate={{ 
                    scale: [1, 1.05, 1],
                    transition: { duration: 2, repeat: Infinity }
                  }}
                >
                  50M+
                </motion.div>
                <div className="stat-label">Happy Customers</div>
              </motion.div>
              <motion.div 
                className="stat-item"
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, 2, -2, 0],
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="stat-number" 
                  style={{ color: 'var(--blamf-brown)' }}
                  animate={{ 
                    scale: [1, 1.05, 1],
                    transition: { duration: 2, repeat: Infinity, delay: 0.5 }
                  }}
                >
                  4.9/5
                </motion.div>
                <div className="stat-label">Average Rating</div>
              </motion.div>
              <motion.div 
                className="stat-item"
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -2, 2, 0],
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="stat-number" 
                  style={{ color: 'var(--plumbus-pink)' }}
                  animate={{ 
                    rotate: [0, 360],
                    transition: { duration: 3, repeat: Infinity, ease: 'linear' }
                  }}
                >
                  ∞
                </motion.div>
                <div className="stat-label">Dimensions Served</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Easter Egg Modal */}
        <AnimatePresence>
          {showEasterEgg && (
            <motion.div
              className="easter-egg-modal"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                rotate: 0,
                transition: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 20
                }
              }}
              exit={{ 
                opacity: 0, 
                scale: 0, 
                rotate: 180,
                transition: { duration: 0.3 }
              }}
              style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'var(--plumbus-pink)',
                color: 'white',
                padding: 'var(--space-4)',
                borderRadius: 'var(--border-radius-lg)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                zIndex: 1000,
                textAlign: 'center',
                maxWidth: '300px'
              }}
            >
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 0.5, repeat: 2 }}
                style={{ fontSize: '2rem', marginBottom: 'var(--space-2)' }}
              >
                🛸
              </motion.div>
              <h3 style={{ marginBottom: 'var(--space-2)' }}>Wubba Lubba Dub Dub!</h3>
              <p style={{ fontSize: 'var(--text-sm)' }}>
                You found the secret! Rick would be proud of your curiosity.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};