import React from 'react';
import { StarIcon } from '../icons/OptimizedIcons';
import { testimonials } from '@utils/data';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="section-white">
      <div className="container">
        <div className="text-center" style={{ marginBottom: 'var(--space-8)' }}>
          <h2 className="section-title">
            What Our Customers Are Saying
          </h2>
          <p className="max-w-3xl mx-auto" style={{ fontSize: 'var(--text-xl)', color: 'var(--gray-600)' }}>
            Don't just take our word for it. Hear from satisfied Plumbus owners 
            across multiple dimensions and realities.
          </p>
        </div>

        {/* Featured testimonials - side by side layout */}
        <div className="plumbus-grid cols-2" style={{ marginBottom: 'var(--space-8)' }}>
          {testimonials.slice(0, 2).map((testimonial) => (
            <div key={testimonial.id} className="plumbus-testimonial floating-gentle">
              {/* Rating stars */}
              <div className="flex" style={{ marginBottom: 'var(--space-3)' }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon
                    key={i}
                    size={16}
                    className="star-interactive text-step-yellow"
                    filled
                  />
                ))}
              </div>

              {/* Testimonial content */}
              <div className="testimonial-content">
                "{testimonial.content}"
              </div>

              {/* Author info */}
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  <div className="w-full h-full rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: 'var(--plumbus-pink)' }}>
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div className="testimonial-author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional testimonials grid */}
        <div className="plumbus-grid cols-3">
          {testimonials.slice(2).map((testimonial) => (
            <div key={testimonial.id} className="plumbus-card whimsy-card">
              {/* Mini rating */}
              <div className="flex" style={{ marginBottom: 'var(--space-2)' }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon
                    key={i}
                    size={14}
                    className="star-interactive text-step-yellow"
                    filled
                  />
                ))}
              </div>

              {/* Mini content */}
              <p style={{ color: 'var(--gray-700)', fontSize: 'var(--text-sm)', lineHeight: '1.5', marginBottom: 'var(--space-3)' }}>
                "{testimonial.content.slice(0, 120)}..."
              </p>

              {/* Mini author */}
              <div className="flex items-center pt-3" style={{ gap: 'var(--space-2)', borderTop: '2px solid var(--gray-200)' }}>
                <div className="testimonial-avatar-mini">
                  <div className="w-full h-full rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: 'var(--plumbus-pink)' }}>
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <div style={{ fontWeight: '600', fontSize: 'var(--text-sm)', color: 'var(--blamf-brown)' }}>
                    {testimonial.name}
                  </div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-500)' }}>
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="text-center" style={{ marginTop: 'var(--space-8)' }}>
          <div className="plumbus-card whimsy-card" style={{ backgroundColor: 'var(--gromflomite-beige)' }}>
            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-number" style={{ color: 'var(--plumbus-pink)' }}>50M+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
              <div className="stat-item">
                <div className="stat-number" style={{ color: 'var(--blamf-brown)' }}>4.9/5</div>
                <div className="stat-label">Average Rating</div>
              </div>
              <div className="stat-item">
                <div className="stat-number" style={{ color: 'var(--plumbus-pink)' }}>∞</div>
                <div className="stat-label">Dimensions Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};