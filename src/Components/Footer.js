import React from 'react';
import './Footer.css'; // Ensure you import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Nirmaan</h2>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <p>Contact Us</p>
          <p>Email: info@nirmaan.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 sr. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
