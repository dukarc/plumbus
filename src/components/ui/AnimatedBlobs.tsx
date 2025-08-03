import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedBlobs: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div 
        className="absolute top-20 left-10 w-32 h-24 bg-amber-200 rounded-full opacity-60" 
        style={{ transform: 'rotate(-15deg)' }}
        animate={{
          y: [0, -10, 0],
          rotate: [-15, -10, -15],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-40 right-20 w-28 h-36 bg-amber-300 rounded-full opacity-50" 
        style={{ transform: 'rotate(25deg)' }}
        animate={{
          y: [0, 8, 0],
          rotate: [25, 30, 25],
          scale: [1, 0.98, 1]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      <motion.div 
        className="absolute bottom-32 left-1/4 w-24 h-32 bg-amber-200 rounded-full opacity-40" 
        style={{ transform: 'rotate(45deg)' }}
        animate={{
          y: [0, -6, 0],
          rotate: [45, 50, 45],
          x: [0, 3, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-1/3 w-36 h-20 bg-amber-300 rounded-full opacity-50" 
        style={{ transform: 'rotate(-30deg)' }}
        animate={{
          y: [0, 12, 0],
          rotate: [-30, -25, -30],
          scale: [1, 1.03, 1]
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />
      <motion.div 
        className="absolute top-1/2 left-8 w-16 h-20 bg-amber-200 rounded-full opacity-30" 
        style={{ transform: 'rotate(60deg)' }}
        animate={{
          y: [0, -8, 0],
          rotate: [60, 65, 60],
          x: [0, -2, 0]
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div 
        className="absolute top-60 right-8 w-20 h-16 bg-amber-300 rounded-full opacity-40" 
        style={{ transform: 'rotate(-45deg)' }}
        animate={{
          y: [0, 7, 0],
          rotate: [-45, -40, -45],
          scale: [1, 0.97, 1]
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5
        }}
      />
    </div>
  );
};