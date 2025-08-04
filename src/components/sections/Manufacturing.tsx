import React from 'react';
import { manufacturingSteps } from '@utils/data';

export const Manufacturing: React.FC = () => {
  return (
    <section id="manufacturing" className="section-beige">
      <div className="container">
        <div className="text-center" style={{ marginBottom: 'var(--space-8)' }}>
          <h2 className="section-title">
            How Every Plumbus Is Crafted
          </h2>
          <p className="max-w-3xl mx-auto" style={{ fontSize: 'var(--text-xl)', color: 'var(--gray-600)' }}>
            Our time-tested manufacturing process ensures every Plumbus meets the highest 
            standards of quantum functionality and interdimensional compatibility.
          </p>
        </div>

        {/* Simple 4-step process cards */}
        <div className="process-container">
          {manufacturingSteps.slice(0, 4).map((step, index) => (
            <div key={step.id} className={`plumbus-card step-${index + 1} process-step assembly-step-wobble`}>
              <div className="process-step-number">
                {step.id}
              </div>
              <h3 className="card-title text-center mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-center leading-relaxed" style={{ marginBottom: 'var(--space-3)' }}>
                {step.description}
              </p>
              <div className="text-center">
                <span style={{ fontSize: 'var(--text-xs)', opacity: '0.75' }}>
                  Duration: {step.duration}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Manufacturing stats */}
        <div style={{ marginTop: 'var(--space-8)' }}>
          <div className="stats-container">
            {[
              { label: 'Plumbuses Made Daily', value: '50,000+' },
              { label: 'Quality Control Tests', value: '847' },
              { label: 'Dimensions Served', value: 'Infinite' },
              { label: 'Customer Satisfaction', value: '99.8%' },
            ].map((stat) => (
              <div key={stat.label} className="stat-item">
                <div className="stat-number">
                  {stat.value}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};