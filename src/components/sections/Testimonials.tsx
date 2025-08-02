import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Card } from '@components/ui/Card';
import { ScrollAnimation } from '@components/ui/ScrollAnimation';
import { useReducedMotion } from '@hooks/useReducedMotion';
import { testimonials } from '@utils/data';

export const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying || prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, prefersReducedMotion]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <div className="container mx-auto px-4">
        <ScrollAnimation direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Customers{' '}
              <span className="text-gradient bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Are Saying
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Hear from satisfied Plumbus owners 
              across multiple dimensions and realities.
            </p>
          </div>
        </ScrollAnimation>

        {/* Main testimonial carousel */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="text-center"
              >
                <Card className="relative overflow-hidden bg-gradient-to-br from-white to-pink-50 border-pink-100">
                  {/* Quote decoration */}
                  <div className="absolute top-4 left-4 text-pink-200">
                    <Quote size={48} fill="currentColor" />
                  </div>
                  <div className="absolute bottom-4 right-4 text-pink-200 rotate-180">
                    <Quote size={48} fill="currentColor" />
                  </div>

                  <div className="relative z-10 py-8 px-4">
                    {/* Rating stars */}
                    <div className="flex justify-center mb-6">
                      {[...Array(current.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={24}
                          className="text-yellow-400 fill-current mx-1"
                        />
                      ))}
                    </div>

                    {/* Testimonial content */}
                    <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8 max-w-3xl mx-auto">
                      "{current.content}"
                    </blockquote>

                    {/* Author info */}
                    <div className="flex flex-col items-center space-y-3">
                      <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                        {current.name.charAt(0)}
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-lg text-gray-900">
                          {current.name}
                        </div>
                        <div className="text-gray-600">
                          {current.role} at {current.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-pink-600 hover:bg-pink-50 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-pink-600 hover:bg-pink-50 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 ${
                  index === currentTestimonial
                    ? 'bg-pink-500 w-8'
                    : 'bg-gray-300 hover:bg-pink-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* All testimonials grid */}
        <ScrollAnimation direction="up" delay={0.3}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  hover 
                  className={`cursor-pointer transition-all duration-200 ${
                    index === currentTestimonial 
                      ? 'ring-2 ring-pink-500 shadow-lg' 
                      : 'hover:shadow-lg'
                  }`}
                  onClick={() => goToTestimonial(index)}
                >
                  <div className="space-y-4">
                    {/* Mini rating */}
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="text-yellow-400 fill-current"
                        />
                      ))}
                    </div>

                    {/* Mini content */}
                    <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                      "{testimonial.content.slice(0, 120)}..."
                    </p>

                    {/* Mini author */}
                    <div className="flex items-center space-x-3 pt-3 border-t border-gray-100">
                      <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-gray-900">
                          {testimonial.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </ScrollAnimation>

        {/* Trust indicators */}
        <ScrollAnimation direction="up" delay={0.5}>
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-pink-600 mb-2">50M+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">4.9/5</div>
                  <div className="text-gray-600">Average Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-600 mb-2">∞</div>
                  <div className="text-gray-600">Dimensions Served</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};