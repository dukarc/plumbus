import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Crown, Star, ArrowRight } from 'lucide-react';
import { Button } from '@components/ui/Button';
import { Card } from '@components/ui/Card';
import { ScrollAnimation } from '@components/ui/ScrollAnimation';
import { useReducedMotion } from '@hooks/useReducedMotion';
import { plumbusModels } from '@utils/data';
import { staggerContainer, scaleIn } from '@utils/animations';

export const Pricing: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<string>('premium');
  const prefersReducedMotion = useReducedMotion();

  const modelIcons = {
    basic: Zap,
    premium: Star,
    enterprise: Crown,
  };

  const handlePurchase = (modelId: string) => {
    // In a real app, this would integrate with a payment processor
    console.log(`Purchasing ${modelId} Plumbus`);
    alert(`Redirecting to checkout for ${modelId} Plumbus...`);
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
                <div 
                  className={`relative ${isPopular ? 'transform scale-105' : ''}`}
                  onClick={() => setSelectedModel(model.id)}
                >
                  {/* Popular badge */}
                  {isPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                        Most Popular
                      </div>
                    </div>
                  )}

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
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${
                          isPopular 
                            ? 'bg-gradient-to-br from-pink-500 to-purple-600 text-white' 
                            : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-600'
                        }`}>
                          <IconComponent size={32} />
                        </div>
                        
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
                      <div className="space-y-3 text-left">
                        {model.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                            <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                              <Check size={12} className="text-green-600" />
                            </div>
                            <span className="text-gray-700 text-sm leading-relaxed">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button
                          variant={isPopular ? "primary" : "secondary"}
                          size="lg"
                          className="w-full"
                          onClick={() => handlePurchase(model.id)}
                        >
                          <span>{model.buttonText}</span>
                          <ArrowRight size={16} className="ml-2" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
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