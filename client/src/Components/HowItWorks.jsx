// src/components/HowItWorks.jsx
import React from 'react';
import { landlordSteps, tenantSteps } from "../constants/data";


const StepCard = ({ step, index }) => {
  const Icon = step.icon;
  return (
    <div className="bg-white rounded-xl p-6 shadow-md flex items-center gap-5">
      <div className="bg-blue-100 p-4 rounded-full text-blue-600 text-2xl">
        <Icon />
      </div>
      <div>
        <div className="text-blue-500 font-bold">{index + 1}</div>
        <h4 className="text-lg font-semibold text-indigo-800">{step.title}</h4>
        <p className="text-sm text-gray-600">{step.description}</p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section className="bg-indigo-50 py-16 px-4 md:px-10 lg:px-20">
      <div className="text-center mb-12">
        <span className="inline-block bg-blue-500 text-white text-sm px-4 py-1 rounded-full mb-3 font-medium">
          QUICK POSTING
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-900">
          How FindMyFlat Works?
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* For Landlords */}
        <div>
          <h3 className="text-xl font-bold text-center text-indigo-800 mb-6">For Landlords</h3>
          <div className="space-y-6">
            {landlordSteps.map((step, index) => (
              <StepCard key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>

        {/* For Tenants */}
        <div>
          <h3 className="text-xl font-bold text-center text-indigo-800 mb-6">For Tenants</h3>
          <div className="space-y-6">
            {tenantSteps.map((step, index) => (
              <StepCard key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
