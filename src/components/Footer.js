import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            {!logoError ? (
              <img 
                src="/logo.png" 
                alt="Carma Logo" 
                className="footer-logo-image"
                onError={() => setLogoError(true)}
              />
            ) : (
              <span className="logo-icon">🚚</span>
            )}
          </div>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;