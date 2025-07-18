import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Search from '../components/Search';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';

import Testimonials from '../components/Testimonials';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className=" text-gray-900 min-h-screen bg-white">
      <Search/>
      <Hero />
      <HowItWorks/>
      <WhyChooseUs/>
      <Testimonials/>
      <ContactUs/>
      <Footer/>
    </div>
  );
};

export default Home;
