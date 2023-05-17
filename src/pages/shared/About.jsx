import React from 'react';
import person from '../../assets/images/about_us/person.jpg';
import parts from '../../assets/images/about_us/parts.jpg';

const About = () => {
  return (
    <div className="hero my-20">
      <div className="hero-content p-0 flex-col lg:flex-row">
        <div className='lg:w-1/2 relative'>
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img src={parts} className="w-1/2 absolute shadow-2xl right-20 top-1/2 border-t-8 border-l-8 border-t-white border-l-white" />
        </div>
        <div className='lg:w-1/2 space-y-5'>
          <h3 className='text-2xl text-[#FF3811] font-bold'>About Us</h3>
          <h1 className="text-5xl font-bold">We are qualified <br /> and of experience <br /> in this field</h1>
          <p className='capitalize text-justify'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
          <p className='capitalize text-justify'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
          <button className="px-4 py-2 border border-[#FF3811] bg-[#FF3811] text-white font-medium rounded-md uppercase">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;