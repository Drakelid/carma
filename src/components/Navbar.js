import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <span className="logo-icon">🚚</span>
          <span className="logo-text">Carma</span>
        </div>
        <div className="nav-links">
          <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>Home</a>
          <a href="#problem" onClick={(e) => { e.preventDefault(); scrollToSection('problem'); }}>Problem</a>
          <a href="#solution" onClick={(e) => { e.preventDefault(); scrollToSection('solution'); }}>Solution</a>
          <a href="#market" onClick={(e) => { e.preventDefault(); scrollToSection('market'); }}>Market</a>
          <a href="#funding" onClick={(e) => { e.preventDefault(); scrollToSection('funding'); }}>Funding</a>
          <a href="#environment" onClick={(e) => { e.preventDefault(); scrollToSection('environment'); }}>Impact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;