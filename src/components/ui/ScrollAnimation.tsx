import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@hooks/useIntersectionObserver';
import { useReducedMotion } from '@hooks/useReducedMotion';
import { getSlideAnimation } from '@utils/animations';
import { ScrollAnimationProps } from '../../types/plumbus';

export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
}) => {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '-50px 0px',
    triggerOnce: true,
  });

  const prefersReducedMotion = useReducedMotion();

  const animation = getSlideAnimation(direction);

  const motionProps = prefersReducedMotion
    ? { initial: false, animate: 'visible' }
    : {
        initial: 'hidden',
        animate: isIntersecting ? 'visible' : 'hidden',
        variants: {
          ...animation,
          visible: {
            ...animation.visible,
            transition: {
              duration,
              delay,
              ease: 'easeOut',
            },
          },
        },
      };

  return (
    <motion.div ref={targetRef as any} {...motionProps}>
      {children}
    </motion.div>
  );
};