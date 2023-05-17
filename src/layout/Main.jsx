import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer';
import Navbar from '../pages/shared/Navbar';

const Main = () => {
  return (
    <>
      <Navbar/>
      <div className='w-[90%] mx-auto'>
        <Outlet/>
      </div>
      <Footer/>
    </>
  );
};

export default Main;