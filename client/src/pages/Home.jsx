import React from 'react';

import Hero from '../components/Hero';

import Footer from '../Components/Footer';
import HowItWorks from '../Components/HowItWorks';
import WhyChooseUs from '../Components/WhyChooseUs';
import Testimonials from '../Components/Testimonials';
import ContactUs from '../Components/ContactUs';


const Home = () => {
  return (
    <div className=" text-gray-900 min-h-screen bg-white">
      
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
