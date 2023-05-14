import logo from '../../assets/logo.svg';
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-black text-[#f3f3f3c8]">
      <div>
        <img src={logo} alt="" />
        <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
      </div>
      <div>
        <span className="font-bold mb-2 uppercase text-white">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="font-bold mb-2 uppercase text-white">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="font-bold mb-2 uppercase text-white">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;