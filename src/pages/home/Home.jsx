import React from 'react';
import Banner from './Banner';
import About from './About';
import Services from './Services';

const Home = () => {
  return (
    <div className='w-[90%] mx-auto'>
      <Banner/>
      <About/>
      <Services/>
    </div>
  );
};

export default Home;