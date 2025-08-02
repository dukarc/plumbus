import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { Card } from '@components/ui/Card';
import { ScrollAnimation } from '@components/ui/ScrollAnimation';
import { useReducedMotion } from '@hooks/useReducedMotion';
import { plumbusFeatures } from '@utils/data';
import { staggerContainer, scaleIn } from '@utils/animations';

export const Features: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <ScrollAnimation direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Every Home Needs a{' '}
              <span className="text-gradient bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Plumbus
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From quantum heat generation to interdimensional security, the Plumbus offers 
              unmatched versatility for modern households across all dimensions.
            </p>
          </div>
        </ScrollAnimation>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={prefersReducedMotion ? {} : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {plumbusFeatures.map((feature) => {
            // Dynamically get the Lucide icon
            const IconComponent = (LucideIcons as any)[feature.icon] || LucideIcons.Zap;

            return (
              <motion.div
                key={feature.id}
                variants={prefersReducedMotion ? {} : scaleIn}
              >
                <Card hover className="h-full">
                  <div className="text-center space-y-4">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl">
                      <IconComponent 
                        size={32} 
                        className="text-pink-600" 
                        aria-hidden="true"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Benefit */}
                    <div className="bg-pink-50 rounded-lg p-3 mt-4">
                      <p className="text-pink-700 text-sm font-medium">
                        💫 {feature.benefit}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <ScrollAnimation direction="up" delay={0.5}>
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Ready to Experience the Plumbus Difference?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join millions of satisfied customers across infinite dimensions who have 
                discovered the life-changing power of the Plumbus.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                      >
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <span>Trusted by 50M+ users</span>
                </div>
                
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <LucideIcons.Star
                      key={i}
                      size={16}
                      className="text-yellow-400 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">4.9/5 rating</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};