// src/components/TestimonialCard.jsx
import React from 'react';

const TestimonialCard = ({ card }) => {
  if (!card) return null;

  return (
    <div className="p-4 rounded-lg shadow hover:shadow-lg transition-all duration-200 w-full bg-white">
      <div className="flex gap-2 items-center">
        <img className="size-11 rounded-full" src={card.image} alt="User" />
        <div className="flex flex-col">
          <p className="font-semibold">{card.name}</p>
          <span className="text-xs text-slate-500">{card.handle}</span>
        </div>
      </div>
      <p className="text-sm py-4 text-gray-800">{card.message}</p>
      <div className="text-slate-500 text-xs">Posted on {card.date}</div>
    </div>
  );
};

export default TestimonialCard;
