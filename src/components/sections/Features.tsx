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
        <div className="text-center" style={{ marginBottom: 'var(--space-8)' }}>
          <h2 className="section-title">
            Why Every Home Needs a Plumbus
          </h2>
          <p className="max-w-3xl mx-auto" style={{ fontSize: 'var(--text-xl)', color: 'var(--gray-600)' }}>
            From fleeb juice optimization to schlami-tested durability, the Plumbus offers 
            unmatched reliability for every household. Experience the difference today.
          </p>
        </div>

        <div className="plumbus-grid cols-3">
          {plumbusFeatures.map((feature) => {
            // Get the optimized icon component
            const IconComponent = iconMap[feature.icon] || ZapIcon;

            return (
              <div key={feature.id} className="feature-card whimsy-card">
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
                <div className="rounded-lg" style={{ backgroundColor: 'var(--gromflomite-beige)', padding: 'var(--space-2)', marginTop: 'var(--space-3)', border: '2px solid var(--plumbus-pink)' }}>
                  <p style={{ color: 'var(--blamf-brown)', fontSize: 'var(--text-sm)', fontWeight: '500' }}>
                    {feature.benefit}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center" style={{ marginTop: 'var(--space-8)' }}>
          <div className="plumbus-card whimsy-card" style={{ backgroundColor: 'var(--gromflomite-beige)' }}>
            <h3 className="font-bold" style={{ fontSize: 'clamp(var(--text-2xl), 4vw, var(--text-3xl))', color: 'var(--blamf-brown)', marginBottom: 'var(--space-3)', fontFamily: 'var(--font-header)' }}>
              Ready to Experience the Plumbus Difference?
            </h3>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--gray-700)', marginBottom: 'var(--space-4)', fontSize: 'var(--text-base)' }}>
              Join millions of satisfied customers across infinite dimensions who have 
              discovered the life-changing power of the Plumbus.
            </p>
            
            <div className="stats-container">
              <div className="stat-item">
                <span className="stat-number">50M+</span>
                <span className="stat-label">Trusted Users</span>
              </div>
              
              <div className="stat-item">
                <div className="flex items-center justify-center" style={{ gap: 'var(--space-1)', marginBottom: 'var(--space-2)' }}>
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      size={16}
                      className="star-interactive text-step-yellow fill-current"
                      filled
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