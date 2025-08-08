import React from 'react';
import { Link } from 'react-router-dom';
import user1 from '../assets/hidden.png';
import user2 from '../assets/broker.jpg';
import user3 from '../assets/home.jpg';
import user4 from '../assets/user.jpg';

const Hero = () => {
  return (
    <section className="w-full px-6 md:px-16 lg:px-24 xl:px-32 py-12 bg-gradient-to-b from-white to-blue-50">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Your next home is just a click away.{' '}
            <span className="animate-bounce text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500 inline-block">
              FindMyFlat
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-gray-600 text-base lg:text-lg">
            Browse 1000+ listings from real people — students, professionals, and families.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
            <Link
              to="/listing"
              className="bg-indigo-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-indigo-700 transition"
            >
              View Listings
            </Link>
            <Link
              to="/create-listing"
              className="bg-indigo-100 text-indigo-600 px-6 py-3 rounded-full text-sm font-semibold hover:bg-indigo-200 transition"
            >
              Post a Room
            </Link>
          </div>
        </div>

        {/* Right Image Grid */}
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
          <img src={user1} alt="User 1" className="rounded-xl shadow-md object-cover w-full aspect-square" />
          <img src={user2} alt="User 2" className="rounded-xl shadow-md object-cover w-full aspect-square" />
          <img src={user3} alt="User 3" className="rounded-xl shadow-md object-cover w-full aspect-square" />
          <img src={user4} alt="User 4" className="rounded-xl shadow-md object-cover w-full aspect-square" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
