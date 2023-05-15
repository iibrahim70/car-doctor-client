import logo from '../../assets/logo.svg';
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-black text-[#f3f3f3c8]">
      <div>
        <img src={logo} alt="" />
        <p>Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial .</p>
      </div>
      <div>
        <span className="font-bold mb-2 uppercase text-white">About</span>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Service</a>
        <a className="link link-hover">Contact</a>
      </div>
      <div>
        <span className="font-bold mb-2 uppercase text-white">Company</span>
        <a className="link link-hover">Why Car Doctor</a>
        <a className="link link-hover">About</a>
      </div>
      <div>
        <span className="font-bold mb-2 uppercase text-white">Support</span>
        <a className="link link-hover">Support Center</a>
        <a className="link link-hover">Feedback</a>
        <a className="link link-hover">Accesbility</a>
      </div>
    </footer>
  );
};

export default Footer;