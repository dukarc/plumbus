import React from 'react';
import { StarIcon } from '../icons/OptimizedIcons';
import { testimonials } from '@utils/data';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="section-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            What Our Customers Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from satisfied Plumbus owners 
            across multiple dimensions and realities.
          </p>
        </div>

        {/* Featured testimonials - side by side layout */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.slice(0, 2).map((testimonial) => (
            <div key={testimonial.id} className="plumbus-testimonial">
              {/* Rating stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon
                    key={i}
                    size={16}
                    className="text-yellow-400"
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
                  <div className="w-full h-full bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
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
            <div key={testimonial.id} className="plumbus-card">
              {/* Mini rating */}
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon
                    key={i}
                    size={14}
                    className="text-yellow-400"
                    filled
                  />
                ))}
              </div>

              {/* Mini content */}
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
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
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="plumbus-card bg-gradient-to-r from-pink-50 to-purple-50">
            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-number text-pink-600">50M+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
              <div className="stat-item">
                <div className="stat-number text-purple-600">4.9/5</div>
                <div className="stat-label">Average Rating</div>
              </div>
              <div className="stat-item">
                <div className="stat-number text-pink-600">∞</div>
                <div className="stat-label">Dimensions Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};