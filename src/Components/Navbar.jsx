import React from 'react';
import './Navbar.css';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="contact-info">
        <span>
          <FaPhone />
          <a href="tel:+918888222992"> +8888222992</a>
        </span>
        <br/>
        <span> | </span>
        <span>
          <FaEnvelope />
          <a href="mailto:info@motocrossindia.in"> info@motocrossindia.in</a>
        </span>
      </div>
      <div className="social-icons">
        <a href="https://www.facebook.com/motocrossind/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://x.com/MotocrossIndia" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://in.linkedin.com/company/motocrossindia" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://www.instagram.com/motocrossind/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.youtube.com/channel/UCzzHG1i136eR4VFyJXBw0oA" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
      </div>
    </nav>
  );
};

export default Navbar;
