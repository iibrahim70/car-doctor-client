import React from 'react';
import Banner from '../../components/Banner';
import About from '../shared/About';
import Services from '../services/Services';

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Services/>
    </>
  );
};

export default Home;