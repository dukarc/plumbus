import React, { Suspense, lazy } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRightIcon } from '../icons/OptimizedIcons';

// Lazy load complex components
const AnimatedBlobs = lazy(() => import('../ui/AnimatedBlobs').then(module => ({ default: module.AnimatedBlobs })));

// Enhanced Plumbus SVG Component with interactive elements and tooltips
const PlumbusSVG: React.FC = () => {
  const [hoveredPart, setHoveredPart] = React.useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const partTooltips = {
    grumbo: "Grumbo - The main body that houses all essential components",
    fleeb: "Fleeb - Contains the vital plumbus juice for optimal function",
    chumble1: "Chumble - Precision-engineered for maximum dexterity",
    chumble2: "Chumble - Each one is hand-crafted by experts",
    chumble3: "Chumble - The secret to plumbus flexibility",
    chumble4: "Chumble - Never needs recalibration",
    dingleBop: "Dingle-Bop - Ergonomic handle with anti-slip coating",
    floob: "Floob - Premium quality, extracted from the spline",
    grodus: "Grodus - Secondary extension for advanced operations"
  };

  return (
    <div className="relative">
      <motion.svg 
        width="400" 
        height="380" 
        viewBox="0 0 400 380" 
        className="w-full max-w-md mx-auto cursor-pointer"
        whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
        transition={shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Grumbo (Main Body) - Large pink rounded shape */}
        <motion.ellipse 
          cx="200" 
          cy="200" 
          rx="120" 
          ry="80" 
          fill="#ED829E" 
          onMouseEnter={() => setHoveredPart('grumbo')}
          onMouseLeave={() => setHoveredPart(null)}
          whileHover={{ scale: 1.05, fill: "#F08FB0" }}
          transition={{ duration: 0.2 }}
          style={{ cursor: 'pointer' }}
        />
        
        {/* Fleeb (Internal) - Visible internal component */}
        <motion.ellipse 
          cx="180" 
          cy="190" 
          rx="30" 
          ry="20" 
          fill="#D1477A" 
          opacity="0.8"
          onMouseEnter={() => setHoveredPart('fleeb')}
          onMouseLeave={() => setHoveredPart(null)}
          whileHover={{ scale: 1.1, opacity: 1 }}
          transition={{ duration: 0.2 }}
          style={{ cursor: 'pointer' }}
        />
        
        {/* Chumbles (Tentacles) - 4 finger-like extensions at bottom with slight variations */}
        <motion.path 
          d="M140 260 Q135 290 130 320" 
          stroke="#ED829E" 
          strokeWidth="22" 
          strokeLinecap="round" 
          fill="none"
          onMouseEnter={() => setHoveredPart('chumble1')}
          onMouseLeave={() => setHoveredPart(null)}
          whileHover={{ strokeWidth: 26, stroke: "#F08FB0" }}
          transition={{ duration: 0.2 }}
          style={{ cursor: 'pointer' }}
        />
        <motion.path 
          d="M170 270 Q165 300 160 330" 
          stroke="#ED829E" 
          strokeWidth="19" 
          strokeLinecap="round" 
          fill="none"
          onMouseEnter={() => setHoveredPart('chumble2')}
          onMouseLeave={() => setHoveredPart(null)}
          whileHover={{ strokeWidth: 23, stroke: "#F08FB0" }}
          transition={{ duration: 0.2 }}
          style={{ cursor: 'pointer' }}
        />
        <motion.path 
          d="M230 270 Q235 300 240 330" 
          stroke="#ED829E" 
          strokeWidth="17" 
          strokeLinecap="round" 
          fill="none"
          onMouseEnter={() => setHoveredPart('chumble3')}
          onMouseLeave={() => setHoveredPart(null)}
          whileHover={{ strokeWidth: 21, stroke: "#F08FB0" }}
          transition={{ duration: 0.2 }}
          style={{ cursor: 'pointer' }}
        />
        <motion.path 
          d="M260 260 Q265 290 270 320" 
          stroke="#ED829E" 
          strokeWidth="21" 
          strokeLinecap="round" 
          fill="none"
          onMouseEnter={() => setHoveredPart('chumble4')}
          onMouseLeave={() => setHoveredPart(null)}
          whileHover={{ strokeWidth: 25, stroke: "#F08FB0" }}
          transition={{ duration: 0.2 }}
          style={{ cursor: 'pointer' }}
        />
        
        {/* Dingle-Bop (Handle) - Cylindrical handle extending upward */}
        <motion.rect 
          x="185" 
          y="80" 
          width="30" 
          height="120" 
          rx="15" 
          fill="#B85C7A"
          onMouseEnter={() => setHoveredPart('dingleBop')}
          onMouseLeave={() => setHoveredPart(null)}
          whileHover={{ scale: 1.05, fill: "#C96D8A" }}
          transition={{ duration: 0.2 }}
          style={{ cursor: 'pointer' }}
        />
        
        {/* Floob (Top Element) - Rounded top connected to Dingle-Bop */}
        <motion.circle 
          cx="200" 
          cy="80" 
          r="25" 
          fill="#D1477A"
          onMouseEnter={() => setHoveredPart('floob')}
          onMouseLeave={() => setHoveredPart(null)}
          whileHover={{ scale: 1.1, fill: "#E1578A" }}
          transition={{ duration: 0.2 }}
          style={{ cursor: 'pointer' }}
        />
        
        {/* Grodus (Protrusion) - Secondary extension from main body */}
        <motion.ellipse 
          cx="320" 
          cy="180" 
          rx="25" 
          ry="40" 
          fill="#B85C7A"
          onMouseEnter={() => setHoveredPart('grodus')}
          onMouseLeave={() => setHoveredPart(null)}
          whileHover={{ scale: 1.08, fill: "#C96D8A" }}
          transition={{ duration: 0.2 }}
          style={{ cursor: 'pointer' }}
        />
        
        {/* Additional details for visual depth */}
        <ellipse cx="200" cy="200" rx="100" ry="65" fill="none" stroke="#B85C7A" strokeWidth="2" opacity="0.3" />
        <circle cx="170" cy="170" r="8" fill="#D1477A" opacity="0.6" />
        <circle cx="230" cy="210" r="6" fill="#D1477A" opacity="0.6" />
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
    </div>
  );
};

// Enhanced Assembly Process Step Component with whimsical interactions
const AssemblyStep: React.FC<{ 
  step: number; 
  title: string; 
  description: string; 
  color: string;
  isLast?: boolean;
}> = ({ step, title, description, color, isLast }) => (
  <div className="flex items-center">
    <motion.div 
      className={`${color} p-6 text-center min-w-[200px] cursor-pointer`}
      style={{
        borderRadius: '20px 15px 25px 18px', // Organic asymmetric corners
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}
      whileHover={{ 
        scale: 1.05,
        rotate: [0, -1, 1, 0],
        boxShadow: '0 8px 30px rgba(0,0,0,0.15)'
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 15,
        rotate: { duration: 0.3 }
      }}
    >
      <motion.div 
        className="text-2xl font-bold text-white mb-2"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        {step}
      </motion.div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-white/90">{description}</p>
    </motion.div>
    {!isLast && (
      <motion.div
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <ArrowRightIcon className="mx-4 text-amber-700" size={24} />
      </motion.div>
    )}
  </div>
);

// Enhanced Testimonial Speech Bubble Component with floating animation
const TestimonialBubble: React.FC<{
  quote: string;
  author: string;
  role: string;
  position: 'left' | 'right';
}> = ({ quote, author, role, position }) => (
  <div className={`flex ${position === 'left' ? 'justify-start' : 'justify-end'} mb-8`}>
    <div className="max-w-sm">
      <motion.div 
        className="bg-white p-6 shadow-lg relative cursor-pointer"
        style={{
          borderRadius: position === 'left' ? '25px 20px 20px 8px' : '20px 25px 8px 20px', // Organic bubble shape
        }}
        whileHover={{ 
          scale: 1.02,
          y: -2,
          boxShadow: '0 12px 25px rgba(0,0,0,0.15)'
        }}
        animate={{
          y: [0, -3, 0],
        }}
        transition={{
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          hover: { duration: 0.2 }
        }}
      >
        <p className="text-gray-700 mb-4 italic">"{quote}"</p>
        <div className="flex items-center">
          <motion.div 
            className={`w-10 h-10 rounded-full ${position === 'left' ? 'bg-blue-200' : 'bg-green-200'} flex items-center justify-center mr-3`}
            whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-sm font-bold">{author[0]}</span>
          </motion.div>
          <div>
            <div className="font-semibold text-gray-900">{author}</div>
            <div className="text-sm text-gray-600">{role}</div>
          </div>
        </div>
        {/* Speech bubble tail */}
        <div className={`absolute top-6 ${position === 'left' ? '-left-2' : '-right-2'} w-4 h-4 bg-white transform rotate-45`} />
      </motion.div>
    </div>
  </div>
);

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      {/* Main Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#F6E8CB' }}>
        {/* Enhanced floating organic blob decorations - Only render if motion is not reduced */}
        {!shouldReduceMotion && (
          <Suspense fallback={null}>
            <AnimatedBlobs />
          </Suspense>
        )}

        {/* Main Content */}
        <div className="container mx-auto px-4 py-20 relative z-10 text-center">
          {/* Header */}
          <motion.h1 
            className="text-6xl lg:text-8xl font-bold mb-4"
            style={{ color: '#8B5A3C' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            PLUMBUS
          </motion.h1>
          
          {/* Tagline */}
          <motion.p 
            className="text-2xl mb-6"
            style={{ color: '#8B5A3C' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Everyone needs a plumbus
          </motion.p>
          
          {/* Sub-copy */}
          <motion.p 
            className="text-lg mb-12 max-w-2xl mx-auto"
            style={{ color: '#8B5A3C' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A plumbus is an all-purpose home device. Get your first plumbus today!
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
              <button className="button-primary px-8 py-4 text-lg font-semibold">
                <span className="inline-flex items-center gap-2">
                  Get Your Plumbus
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    🚀
                  </motion.span>
                </span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Assembly Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            How a Plumbus is Made
          </motion.h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-4 overflow-x-auto pb-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <AssemblyStep 
                step={1}
                title="Fleeb Preparation"
                description="First, they take the dingle-bop"
                color="bg-blue-500"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <AssemblyStep 
                step={2}
                title="Grumbo Assembly"
                description="Then smooth it out with schleem"
                color="bg-yellow-500"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <AssemblyStep 
                step={3}
                title="Schlami Processing"
                description="The schlami shows up and rubs it"
                color="bg-green-500"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <AssemblyStep 
                step={4}
                title="Final Touches"
                description="Cut the fleeb and you have a plumbus"
                color="bg-red-500"
                isLast
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16" style={{ backgroundColor: '#F6E8CB' }}>
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12"
            style={{ color: '#8B5A3C' }}
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
            >
              <TestimonialBubble 
                quote="I don't know how I ever lived without a plumbus"
                author="Rulenein"
                role="Plumbus Expert"
                position="left"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <TestimonialBubble 
                quote="The plumbus changed my life. It's wonderful!"
                author="Gumde"
                role="Satisfied Customer"
                position="right"
              />
            </motion.div>
          </div>
        </div>

      </section>
    </div>
  );
};