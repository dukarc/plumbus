import React from 'react';
import { ZapIcon, ShieldIcon, CpuIcon, SparklesIcon, WrenchIcon, GlobeIcon, StarIcon } from '../icons/OptimizedIcons';
import { plumbusFeatures } from '@utils/data';

// Icon mapping for features
const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  'Droplets': ZapIcon,
  'Shield': ShieldIcon,
  'RotateCw': CpuIcon,
  'Scissors': SparklesIcon,
  'RotateCcw': WrenchIcon,
  'Settings': GlobeIcon,
};

export const Features: React.FC = () => {
  return (
    <section id="features" className="section-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Why Every Home Needs a Plumbus
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From fleeb juice optimization to schlami-tested durability, the Plumbus offers 
            unmatched reliability for every household. Experience the difference today.
          </p>
        </div>

        <div className="plumbus-grid cols-3">
          {plumbusFeatures.map((feature) => {
            // Get the optimized icon component
            const IconComponent = iconMap[feature.icon] || ZapIcon;

            return (
              <div key={feature.id} className="feature-card">
                {/* Icon */}
                <div className="feature-icon">
                  <IconComponent 
                    size={32} 
                    className="text-plumbus-pink"
                  />
                </div>

                {/* Title */}
                <h3 className="feature-title">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="feature-description">
                  {feature.description}
                </p>

                {/* Benefit */}
                <div className="bg-pink-50 rounded-lg p-3 mt-4">
                  <p className="text-pink-700 text-sm font-medium">
                    {feature.benefit}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="plumbus-card bg-gradient-to-r from-pink-50 to-purple-50">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Experience the Plumbus Difference?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join millions of satisfied customers across infinite dimensions who have 
              discovered the life-changing power of the Plumbus.
            </p>
            
            <div className="stats-container">
              <div className="stat-item">
                <span className="stat-number">50M+</span>
                <span className="stat-label">Trusted Users</span>
              </div>
              
              <div className="stat-item">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      size={16}
                      className="text-yellow-400 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <span className="stat-label">4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};