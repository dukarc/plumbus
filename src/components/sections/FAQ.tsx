import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle, HelpCircle } from 'lucide-react';
import { ScrollAnimation } from '@components/ui/ScrollAnimation';
import { Button } from '@components/ui/Button';
import { useReducedMotion } from '@hooks/useReducedMotion';
import { faqs } from '@utils/data';

export const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(['what-is-plumbus']));
  const prefersReducedMotion = useReducedMotion();

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const expandAll = () => {
    setOpenItems(new Set(faqs.map(faq => faq.id)));
  };

  const collapseAll = () => {
    setOpenItems(new Set());
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4">
        <ScrollAnimation direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked{' '}
              <span className="text-gradient bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Everything you need to know about your Plumbus, from basic operation 
              to advanced interdimensional functionality.
            </p>
            
            <div className="flex justify-center space-x-4">
              <Button variant="ghost" size="sm" onClick={expandAll}>
                Expand All
              </Button>
              <Button variant="ghost" size="sm" onClick={collapseAll}>
                Collapse All
              </Button>
            </div>
          </div>
        </ScrollAnimation>

        <div className="max-w-4xl mx-auto">
          <ScrollAnimation direction="up" delay={0.2}>
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openItems.has(faq.id);
                
                return (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-inset hover:bg-gray-50 transition-colors"
                      aria-expanded={isOpen}
                      aria-controls={`faq-content-${faq.id}`}
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </h3>
                        <div className="flex-shrink-0">
                          <motion.div
                            animate={prefersReducedMotion ? {} : { rotate: isOpen ? 45 : 0 }}
                            transition={{ duration: 0.2 }}
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              isOpen 
                                ? 'bg-pink-100 text-pink-600' 
                                : 'bg-gray-100 text-gray-600'
                            }`}
                          >
                            {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                          </motion.div>
                        </div>
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          id={`faq-content-${faq.id}`}
                          initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
                          animate={prefersReducedMotion ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
                          exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6">
                            <div className="border-t border-gray-100 pt-4">
                              <p className="text-gray-700 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </ScrollAnimation>
        </div>

        {/* Still need help section */}
        <ScrollAnimation direction="up" delay={0.5}>
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                    <MessageCircle size={32} className="text-white" />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Still need help?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Our interdimensional support team is standing by to help you with 
                    any Plumbus-related questions or concerns.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-6 text-center">
                    <HelpCircle size={24} className="text-pink-500 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Live Chat</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Get instant help from our support team
                    </p>
                    <Button variant="secondary" size="sm" className="w-full">
                      Start Chat
                    </Button>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 text-center">
                    <MessageCircle size={24} className="text-purple-500 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Email Support</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Send us a message and we'll get back to you
                    </p>
                    <Button variant="secondary" size="sm" className="w-full">
                      Send Email
                    </Button>
                  </div>
                </div>

                <div className="text-sm text-gray-500 space-y-1">
                  <p>Average response time: 2.3 minutes</p>
                  <p>Available 24/7 across all dimensions</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Knowledge base */}
        <ScrollAnimation direction="up" delay={0.7}>
          <div className="mt-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Plumbus Knowledge Base
                </h3>
                <p className="text-gray-600">
                  Explore our comprehensive guides and tutorials
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Getting Started Guide',
                    description: 'Learn the basics of Plumbus operation',
                    icon: '📚',
                  },
                  {
                    title: 'Advanced Techniques',
                    description: 'Master complex Plumbus configurations',
                    icon: '⚡',
                  },
                  {
                    title: 'Troubleshooting',
                    description: 'Solve common issues quickly',
                    icon: '🔧',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={prefersReducedMotion ? {} : { y: -4 }}
                    className="text-center p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};