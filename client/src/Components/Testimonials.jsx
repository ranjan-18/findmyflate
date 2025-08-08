import React from 'react';
import { testimonials } from '../constants/data';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  return (
    <>
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee {
          display: flex;
          animation: scrollLeft 60s linear infinite;
          width: max-content;
        }
      `}</style>

      <section className="bg-indigo-50 py-16 px-4 md:px-10 lg:px-20 overflow-hidden">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-500 text-white text-sm px-4 py-1 rounded-full mb-3 font-medium">
            SUCCESS STORIES
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-900">
            What People Say About FindMyFlat
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="marquee gap-6">
            {[...testimonials, ...testimonials].map((card, index) => (
              <TestimonialCard key={index} card={card} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
