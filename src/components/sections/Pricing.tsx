import React from 'react';
import { ZapIcon, CrownIcon, StarIcon } from '../icons/OptimizedIcons';
import { plumbusModels } from '@utils/data';

export const Pricing: React.FC = () => {
  const modelIcons = {
    basic: ZapIcon,
    premium: StarIcon,
    enterprise: CrownIcon,
  };

  const handlePurchase = (modelId: string) => {
    // In a real app, this would integrate with a payment processor
    console.log(`Purchasing ${modelId} Plumbus`);
    alert(`Redirecting to checkout for ${modelId} Plumbus...`);
  };

  return (
    <section id="pricing" className="section-beige">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Choose Your Plumbus
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              <div key={model.id} className={`pricing-card ${isPopular ? 'featured' : ''}`}>
                {/* Popular badge */}
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Icon and title */}
                <div className="space-y-4 mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${
                    isPopular 
                      ? 'bg-gradient-to-br from-pink-500 to-purple-600 text-white' 
                      : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-600'
                  }`}>
                    <IconComponent size={32} />
                  </div>
                  
                  <div>
                    <h3 className="pricing-title">
                      {model.name}
                    </h3>
                    <p className="text-gray-600">{model.description}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="space-y-2 mb-6">
                  <div className="pricing-price">
                    ${model.price}
                  </div>
                  <div className="text-sm text-gray-500">
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
                <div className="pt-4">
                  <button
                    className={isPopular ? 'button-primary w-full' : 'button-secondary w-full'}
                    onClick={() => handlePurchase(model.id)}
                  >
                    {model.buttonText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee and additional info */}
        <div className="mt-16 text-center">
          <div className="plumbus-card bg-gradient-to-r from-green-50 to-blue-50 max-w-4xl mx-auto">
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

        {/* Payment methods */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Secure payment powered by</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="font-bold text-lg">STRIPE</div>
            <div className="font-bold text-lg">PAYPAL</div>
            <div className="font-bold text-lg">APPLE PAY</div>
            <div className="font-bold text-lg">CRYPTO</div>
          </div>
        </div>

        {/* FAQ teaser */}
        <div className="mt-16 text-center">
          <div className="plumbus-card bg-gray-50">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Check out our comprehensive FAQ or speak with a Plumbus specialist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="button-secondary">
                View FAQ
              </button>
              <button className="button-outline">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};