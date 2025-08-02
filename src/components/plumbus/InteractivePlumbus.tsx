import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '@hooks/useReducedMotion';
import { plumbusBreathing, hotspotPulse } from '@utils/animations';
import { plumbusHotspots } from '@utils/data';
import { PlumbusHotspot } from '../../types/plumbus';

interface InteractivePlumbusProps {
  onHotspotSelect: (hotspotId: string | null) => void;
  selectedHotspot: string | null;
}

export const InteractivePlumbus: React.FC<InteractivePlumbusProps> = ({
  onHotspotSelect,
  selectedHotspot,
}) => {
  const [hoveredHotspot, setHoveredHotspot] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const handleHotspotClick = (hotspot: PlumbusHotspot) => {
    if (selectedHotspot === hotspot.id) {
      onHotspotSelect(null);
    } else {
      onHotspotSelect(hotspot.id);
    }
  };

  return (
    <div className="relative w-96 h-96 mx-auto">
      {/* Main Plumbus SVG */}
      <motion.div
        className="w-full h-full"
        variants={prefersReducedMotion ? {} : plumbusBreathing}
        animate={prefersReducedMotion ? {} : 'animate'}
      >
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full drop-shadow-2xl"
          role="img"
          aria-label="Interactive Plumbus diagram"
        >
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="plumbusGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f9a8d4" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#be185d" />
            </linearGradient>
            <radialGradient id="hotspotGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#d97706" stopOpacity="0.4" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Main Plumbus body */}
          <g>
            {/* Base body */}
            <ellipse
              cx="200"
              cy="200"
              rx="120"
              ry="80"
              fill="url(#plumbusGradient)"
              stroke="#be185d"
              strokeWidth="2"
            />
            
            {/* Top bulb */}
            <ellipse
              cx="200"
              cy="140"
              rx="90"
              ry="50"
              fill="#f9a8d4"
              stroke="#be185d"
              strokeWidth="2"
            />
            
            {/* Bottom extension */}
            <ellipse
              cx="200"
              cy="260"
              rx="70"
              ry="35"
              fill="#f9a8d4"
              stroke="#be185d"
              strokeWidth="2"
            />

            {/* Left protrusion */}
            <circle
              cx="120"
              cy="180"
              r="25"
              fill="#ec4899"
              stroke="#be185d"
              strokeWidth="2"
            />

            {/* Right protrusion */}
            <circle
              cx="280"
              cy="180"
              r="20"
              fill="#ec4899"
              stroke="#be185d"
              strokeWidth="2"
            />

            {/* Decorative lines */}
            <path
              d="M 160 200 Q 200 220 240 200"
              stroke="#be185d"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M 170 160 Q 200 170 230 160"
              stroke="#be185d"
              strokeWidth="2"
              fill="none"
            />

            {/* Surface details */}
            <circle cx="180" cy="130" r="3" fill="#be185d" />
            <circle cx="220" cy="130" r="3" fill="#be185d" />
            <circle cx="200" cy="110" r="2" fill="#be185d" />
            <circle cx="160" cy="190" r="2" fill="#be185d" />
            <circle cx="240" cy="190" r="2" fill="#be185d" />
          </g>

          {/* Interactive hotspots */}
          {plumbusHotspots.map((hotspot) => {
            const x = (hotspot.x / 100) * 400;
            const y = (hotspot.y / 100) * 400;
            const isSelected = selectedHotspot === hotspot.id;
            const isHovered = hoveredHotspot === hotspot.id;

            return (
              <g key={hotspot.id}>
                {/* Hotspot button */}
                <motion.circle
                  cx={x}
                  cy={y}
                  r={isSelected || isHovered ? "12" : "8"}
                  fill="url(#hotspotGradient)"
                  stroke="#f59e0b"
                  strokeWidth="2"
                  filter="url(#glow)"
                  className="cursor-pointer"
                  variants={prefersReducedMotion ? {} : hotspotPulse}
                  animate={prefersReducedMotion ? {} : 'animate'}
                  whileHover={prefersReducedMotion ? {} : { scale: 1.2 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.9 }}
                  onClick={() => handleHotspotClick(hotspot)}
                  onMouseEnter={() => setHoveredHotspot(hotspot.id)}
                  onMouseLeave={() => setHoveredHotspot(null)}
                  role="button"
                  aria-label={`Learn about ${hotspot.title}`}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleHotspotClick(hotspot);
                    }
                  }}
                />

                {/* Hotspot label on hover */}
                <AnimatePresence>
                  {(isHovered || isSelected) && (
                    <motion.g
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Label background */}
                      <rect
                        x={x - 60}
                        y={y - 40}
                        width="120"
                        height="20"
                        rx="10"
                        fill="rgba(0, 0, 0, 0.8)"
                        pointerEvents="none"
                      />
                      {/* Label text */}
                      <text
                        x={x}
                        y={y - 27}
                        textAnchor="middle"
                        className="text-xs font-medium"
                        fill="white"
                        pointerEvents="none"
                      >
                        {hotspot.title}
                      </text>
                    </motion.g>
                  )}
                </AnimatePresence>
              </g>
            );
          })}
        </svg>
      </motion.div>

      {/* Detailed hotspot information */}
      <AnimatePresence>
        {selectedHotspot && (
          <motion.div
            className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-lg p-6 max-w-sm z-10"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {(() => {
              const hotspot = plumbusHotspots.find(h => h.id === selectedHotspot);
              if (!hotspot) return null;

              return (
                <div className="text-center">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {hotspot.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {hotspot.description}
                  </p>
                  <div className="bg-pink-50 rounded-lg p-3">
                    <p className="text-pink-700 text-xs font-medium">
                      ✨ {hotspot.feature}
                    </p>
                  </div>
                </div>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-pink-300 rounded-full opacity-60"
            style={{
              left: `${20 + (i * 12)}%`,
              top: `${30 + (i * 8)}%`,
            }}
            animate={prefersReducedMotion ? {} : {
              y: [-20, -40, -20],
              x: [-5, 5, -5],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={prefersReducedMotion ? {} : {
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </div>
  );
};