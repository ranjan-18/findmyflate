// src/components/WhyChooseUs.jsx
import React from 'react';
import { whyChooseUsData } from '../constants/data';

const WhyChooseUs = () => {
  return (
    <section className="py-16 px-4 md:px-10 lg:px-20 bg-white">
      <div className="text-center mb-12">
        <span className="inline-block bg-indigo-600 text-white text-sm px-4 py-1 rounded-full mb-3 font-medium">
          WHY FINDMYFLAT?
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Why Choose Us?
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {whyChooseUsData.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-indigo-50 rounded-xl p-6 shadow hover:shadow-md transition-all"
            >
              <div className="text-indigo-600 text-3xl mb-4">
                <Icon />
              </div>
              <h3 className="text-xl font-semibold text-indigo-800 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseUs;
