import React, { useState } from 'react';
import { PlusIcon, MinusIcon, MessageCircleIcon as MessageCircle, HelpCircleIcon as HelpCircle } from '../icons/OptimizedIcons';
import { faqs } from '@utils/data';

export const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(['what-is-plumbus']));

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
    <section id="faq" className="section-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Everything you need to know about your Plumbus, from basic operation 
            to advanced interdimensional functionality.
          </p>
          
          <div className="flex justify-center space-x-4">
            <button className="button-outline whimsy-button" onClick={expandAll}>
              Expand All
            </button>
            <button className="button-outline whimsy-button" onClick={collapseAll}>
              Collapse All
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = openItems.has(faq.id);
              
              return (
                <div
                  key={faq.id}
                  className={`faq-item ${isOpen ? 'active' : ''}`}
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="faq-question"
                    aria-expanded={isOpen}
                    aria-controls={`faq-content-${faq.id}`}
                  >
                    {faq.question}
                    <span className="faq-icon">
                      {isOpen ? <MinusIcon size={20} /> : <PlusIcon size={20} />}
                    </span>
                  </button>
                  
                  {isOpen && (
                    <div
                      id={`faq-content-${faq.id}`}
                      className="faq-answer"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Still need help section */}
        <div className="mt-16 text-center">
          <div className="plumbus-card whimsy-card bg-gradient-to-r from-pink-50 to-purple-50 max-w-3xl mx-auto">
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
                <div className="plumbus-card text-center">
                  <HelpCircle size={24} className="text-pink-500 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Live Chat</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Get instant help from our support team
                  </p>
                  <button className="button-secondary whimsy-button w-full">
                    Start Chat
                  </button>
                </div>
                
                <div className="plumbus-card text-center">
                  <MessageCircle size={24} className="text-purple-500 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Email Support</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Send us a message and we'll get back to you
                  </p>
                  <button className="button-secondary whimsy-button w-full">
                    Send Email
                  </button>
                </div>
              </div>

              <div className="text-sm text-gray-500 space-y-1">
                <p>Average response time: 2.3 minutes</p>
                <p>Available 24/7 across all dimensions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Knowledge base */}
        <div className="mt-12">
          <div className="plumbus-card whimsy-card">
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
                <div
                  key={index}
                  className="text-center p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer whimsy-card"
                >
                  <div className="text-3xl mb-3 emoji-bounce">{item.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};