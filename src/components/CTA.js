import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section id="cta" className="section cta-section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Join us in redefining local logistics</h2>
          <p className="cta-subtitle">Invest today and drive the green delivery revolution</p>
          <div className="cta-buttons">
            <button className="btn-primary large">Schedule a Meeting</button>
            <button className="btn-secondary large">Download Pitch Deck</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;