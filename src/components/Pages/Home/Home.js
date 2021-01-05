import React from 'react';
import '../../../App.css';
import Cards from '../../Cards/Cards';
import HeroSection from '../../Hero/HeroSection';
import About from '../About/About';

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Cards />
    </>
  );
};

export default Home;
