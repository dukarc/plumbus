import React, { useState } from 'react';
import { ZapIcon, CrownIcon, StarIcon } from '../icons/OptimizedIcons';
import { plumbusModels } from '@utils/data';
import { LoadingDots } from '@components/ui/LoadingStates';

export const Pricing: React.FC = () => {
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});
  const [purchaseSuccess, setPurchaseSuccess] = useState<Record<string, boolean>>({});
  
  const modelIcons = {
    basic: ZapIcon,
    premium: StarIcon,
    enterprise: CrownIcon,
  };

  const handlePurchase = async (modelId: string) => {
    setLoadingStates(prev => ({ ...prev, [modelId]: true }));
    
    try {
      // Simulate API call to payment processor
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setPurchaseSuccess(prev => ({ ...prev, [modelId]: true }));
      
      // Reset success state after 3 seconds
      setTimeout(() => {
        setPurchaseSuccess(prev => ({ ...prev, [modelId]: false }));
      }, 3000);
      
      // In a real app, this would redirect to checkout
      console.log(`Redirecting to checkout for ${modelId} Plumbus`);
    } catch (error) {
      console.error('Purchase failed:', error);
    } finally {
      setLoadingStates(prev => ({ ...prev, [modelId]: false }));
    }
  };

  return (
    <section id="pricing" className="section-beige">
      <div className="container">
        <div className="text-center" style={{ marginBottom: 'var(--space-8)' }}>
          <h2 className="section-title">
            Choose Your Plumbus
          </h2>
          <p className="max-w-3xl mx-auto" style={{ fontSize: 'var(--text-xl)', color: 'var(--gray-600)' }}>
            From first-time users to interdimensional enterprises, we have the perfect 
            Plumbus configuration for your needs and budget.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="pricing-container">
          {plumbusModels.map((model) => {
            const IconComponent = modelIcons[model.id as keyof typeof modelIcons];
            const isPopular = model.popular;

            return (
              <div key={model.id} className={`pricing-card whimsy-card ${isPopular ? 'featured' : ''}`}>
                {/* Popular badge */}
                {isPopular && (
                  <div className="absolute left-1/2 transform -translate-x-1/2" style={{ top: '-12px' }}>
                    <div className="text-white rounded-full font-bold" style={{ backgroundColor: 'var(--plumbus-pink)', padding: 'var(--space-1) var(--space-3)', fontSize: 'var(--text-sm)' }}>
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Icon and title */}
                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <div className="inline-flex items-center justify-center w-16 h-16" style={{
                    borderRadius: 'var(--border-radius-lg)',
                    backgroundColor: isPopular ? 'var(--plumbus-pink)' : 'var(--gray-200)',
                    color: isPopular ? 'var(--white)' : 'var(--gray-600)',
                    marginBottom: 'var(--space-3)'
                  }}>
                    <IconComponent size={32} />
                  </div>
                  
                  <div>
                    <h3 className="pricing-title">
                      {model.name}
                    </h3>
                    <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-base)' }}>{model.description}</p>
                  </div>
                </div>

                {/* Price */}
                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <div className="pricing-price" style={{ marginBottom: 'var(--space-2)' }}>
                    ${model.price}
                  </div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-500)' }}>
                    Free shipping across all dimensions
                  </div>
                </div>

                {/* Features */}
                <ul className="pricing-features">
                  {model.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div style={{ paddingTop: 'var(--space-3)' }}>
                  <button
                    className={`${isPopular ? 'button-primary whimsy-button w-full' : 'button-secondary whimsy-button w-full'} flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed`}
                    onClick={() => handlePurchase(model.id)}
                    disabled={loadingStates[model.id] || purchaseSuccess[model.id]}
                  >
                    {loadingStates[model.id] ? (
                      <>
                        <LoadingDots size="sm" color={isPopular ? 'bg-white' : 'bg-pink-500'} />
                        <span>Processing...</span>
                      </>
                    ) : purchaseSuccess[model.id] ? (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Added to Cart!</span>
                      </>
                    ) : (
                      <span>{model.buttonText}</span>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee and additional info */}
        <div className="text-center" style={{ marginTop: 'var(--space-8)' }}>
          <div className="plumbus-card whimsy-card max-w-4xl mx-auto" style={{ backgroundColor: 'var(--step-green)' }}>
            <div className="plumbus-grid cols-3" style={{ alignItems: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <div className="emoji-bounce" style={{ fontSize: 'var(--text-4xl)', marginBottom: 'var(--space-2)' }}>🛡️</div>
                <h4 className="font-bold" style={{ color: 'var(--blamf-brown)', marginBottom: 'var(--space-1)', fontFamily: 'var(--font-header)' }}>30-Day Guarantee</h4>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-700)' }}>
                  Not satisfied? Return your Plumbus for a full refund.
                </p>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div className="emoji-bounce" style={{ fontSize: 'var(--text-4xl)', marginBottom: 'var(--space-2)' }}>🚀</div>
                <h4 className="font-bold" style={{ color: 'var(--blamf-brown)', marginBottom: 'var(--space-1)', fontFamily: 'var(--font-header)' }}>Free Shipping</h4>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-700)' }}>
                  Interdimensional portal delivery to your door.
                </p>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div className="emoji-bounce" style={{ fontSize: 'var(--text-4xl)', marginBottom: 'var(--space-2)' }}>💫</div>
                <h4 className="font-bold" style={{ color: 'var(--blamf-brown)', marginBottom: 'var(--space-1)', fontFamily: 'var(--font-header)' }}>Lifetime Support</h4>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-700)' }}>
                  24/7 customer support across all timelines.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment methods */}
        <div className="text-center" style={{ marginTop: 'var(--space-8)' }}>
          <p style={{ color: 'var(--gray-600)', marginBottom: 'var(--space-3)', fontSize: 'var(--text-base)' }}>Secure payment powered by</p>
          <div className="flex justify-center items-center" style={{ gap: 'var(--space-6)', opacity: '0.6' }}>
            <div className="font-bold" style={{ fontSize: 'var(--text-lg)' }}>STRIPE</div>
            <div className="font-bold" style={{ fontSize: 'var(--text-lg)' }}>PAYPAL</div>
            <div className="font-bold" style={{ fontSize: 'var(--text-lg)' }}>APPLE PAY</div>
            <div className="font-bold" style={{ fontSize: 'var(--text-lg)' }}>CRYPTO</div>
          </div>
        </div>

        {/* FAQ teaser */}
        <div className="text-center" style={{ marginTop: 'var(--space-8)' }}>
          <div className="plumbus-card whimsy-card" style={{ backgroundColor: 'var(--gray-100)' }}>
            <h3 className="font-bold" style={{ fontSize: 'var(--text-xl)', color: 'var(--blamf-brown)', marginBottom: 'var(--space-3)', fontFamily: 'var(--font-header)' }}>
              Still have questions?
            </h3>
            <p style={{ color: 'var(--gray-600)', marginBottom: 'var(--space-4)', fontSize: 'var(--text-base)' }}>
              Check out our comprehensive FAQ or speak with a Plumbus specialist.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <button 
                className="button-secondary whimsy-button flex items-center justify-center space-x-2"
                onClick={() => {
                  const faqElement = document.getElementById('faq');
                  if (faqElement) {
                    faqElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <span>View FAQ</span>
              </button>
              <button 
                className="button-outline whimsy-button flex items-center justify-center space-x-2"
                onClick={() => {
                  window.location.href = 'mailto:support@plumbus.com?subject=Plumbus Support Request';
                }}
              >
                <span>Contact Support</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};