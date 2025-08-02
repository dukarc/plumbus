import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Clock, Zap, Settings } from 'lucide-react';
import { Card } from '@components/ui/Card';
import { ScrollAnimation } from '@components/ui/ScrollAnimation';
import { useReducedMotion } from '@hooks/useReducedMotion';
import { manufacturingSteps } from '@utils/data';
import { staggerContainer, fadeInLeft } from '@utils/animations';

export const Manufacturing: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(1);
  const prefersReducedMotion = useReducedMotion();

  const currentStep = manufacturingSteps.find(step => step.id === selectedStep);

  return (
    <section id="manufacturing" className="py-20 bg-gradient-to-br from-gray-50 to-pink-50">
      <div className="container mx-auto px-4">
        <ScrollAnimation direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How Every Plumbus Is{' '}
              <span className="text-gradient bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Crafted
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our time-tested manufacturing process ensures every Plumbus meets the highest 
              standards of quantum functionality and interdimensional compatibility.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Steps navigation */}
          <ScrollAnimation direction="left">
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Manufacturing Steps</h3>
              <div className="space-y-2">
                {manufacturingSteps.map((step) => (
                  <motion.button
                    key={step.id}
                    onClick={() => setSelectedStep(step.id)}
                    className={`
                      w-full text-left p-4 rounded-xl transition-all duration-200
                      focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2
                      ${
                        selectedStep === step.id
                          ? 'bg-pink-500 text-white shadow-lg'
                          : 'bg-white text-gray-700 hover:bg-pink-50 hover:text-pink-700 shadow-sm'
                      }
                    `}
                    whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                    whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`
                          w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                          ${
                            selectedStep === step.id
                              ? 'bg-white text-pink-500'
                              : 'bg-pink-100 text-pink-600'
                          }
                        `}>
                          {step.id}
                        </div>
                        <div>
                          <div className="font-semibold">{step.title}</div>
                          <div className={`text-sm ${
                            selectedStep === step.id ? 'text-pink-100' : 'text-gray-500'
                          }`}>
                            {step.duration}
                          </div>
                        </div>
                      </div>
                      <ChevronRight 
                        size={20} 
                        className={selectedStep === step.id ? 'text-white' : 'text-gray-400'}
                      />
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Step details */}
          <ScrollAnimation direction="right">
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {currentStep && (
                  <motion.div
                    key={currentStep.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card padding="lg" className="h-full">
                      <div className="space-y-6">
                        {/* Step header */}
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center space-x-3 mb-2">
                              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                                {currentStep.id}
                              </div>
                              <div>
                                <h3 className="text-2xl font-bold text-gray-900">
                                  {currentStep.title}
                                </h3>
                                <div className="flex items-center space-x-2 text-gray-500">
                                  <Clock size={16} />
                                  <span className="text-sm">{currentStep.duration}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-500 mb-1">Step</div>
                            <div className="text-2xl font-bold text-pink-600">
                              {currentStep.id}/{manufacturingSteps.length}
                            </div>
                          </div>
                        </div>

                        {/* Step description */}
                        <div className="bg-gray-50 rounded-xl p-6">
                          <p className="text-lg text-gray-700 leading-relaxed">
                            {currentStep.description}
                          </p>
                        </div>

                        {/* Technical details */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-pink-50 rounded-xl p-4">
                            <div className="flex items-center space-x-2 mb-3">
                              <Settings size={20} className="text-pink-600" />
                              <h4 className="font-semibold text-pink-800">Technical Process</h4>
                            </div>
                            <p className="text-pink-700 text-sm leading-relaxed">
                              {currentStep.technicalDetails}
                            </p>
                          </div>

                          <div className="bg-blue-50 rounded-xl p-4">
                            <div className="flex items-center space-x-2 mb-3">
                              <Zap size={20} className="text-blue-600" />
                              <h4 className="font-semibold text-blue-800">Quality Assurance</h4>
                            </div>
                            <div className="space-y-2 text-sm text-blue-700">
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full" />
                                <span>Quantum field stability verified</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full" />
                                <span>Dimensional resonance calibrated</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full" />
                                <span>Rick Sanchez approved</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Progress indicator */}
                        <div className="bg-gray-100 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-pink-500 to-purple-600"
                            initial={{ width: 0 }}
                            animate={{ width: `${(currentStep.id / manufacturingSteps.length) * 100}%` }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                          />
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ScrollAnimation>
        </div>

        {/* Manufacturing stats */}
        <ScrollAnimation direction="up" delay={0.3}>
          <div className="mt-16">
            <motion.div
              className="grid md:grid-cols-4 gap-6"
              variants={prefersReducedMotion ? {} : staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {([
                { label: 'Plumbuses Made Daily', value: '50,000+', icon: '🏭' },
                { label: 'Quality Control Tests', value: '847', icon: '🔬' },
                { label: 'Dimensions Served', value: 'Infinite', icon: '🌌' },
                { label: 'Customer Satisfaction', value: '99.8%', icon: '⭐' },
              ] as const).map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={prefersReducedMotion ? {} : fadeInLeft}
                >
                  <Card hover={false} className="text-center">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};