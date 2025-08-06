import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const statBubbles = [
    { id: 1, icon: '💰', text: '30% Cost Savings' },
    { id: 2, icon: '🌱', text: '50% Less CO₂' },
    { id: 3, icon: '⚡', text: 'Real-time Tracking' }
  ];
  
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [imageExists, setImageExists] = useState(false);

  useEffect(() => {
    // Check if image exists
    const img = new Image();
    img.onload = () => {
      setImageExists(true);
      setShowPlaceholder(false);
    };
    img.onerror = () => {
      setImageExists(false);
      setShowPlaceholder(true);
    };
    img.src = '/hero-sections.png';
  }, []);

  const handleBubbleClick = (id) => {
    // Add click animation
    const bubble = document.querySelector(`.stat-bubble-${id}`);
    if (bubble) {
      bubble.style.transform = 'scale(0.95)';
      setTimeout(() => {
        bubble.style.transform = 'scale(1.05)';
        setTimeout(() => {
          bubble.style.transform = '';
        }, 150);
      }, 100);
    }
  };

  const createRipple = (e, id) => {
    const bubble = e.currentTarget;
    const ripple = document.createElement('div');
    ripple.className = 'bubble-ripple';
    
    const rect = bubble.getBoundingClientRect();
    const size = 60;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    
    bubble.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 1000);
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Unlock Efficient, Green Last‑Mile Delivery
            <span className="highlight">Powered by Your Daily Commute</span>
          </h1>
          <p className="hero-subtitle">
            Our crowdsourced platform matches local senders with drivers already on the road, 
            cutting delivery costs by up to <strong>30%</strong> and CO₂ emissions at the same time.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">See How It Works</button>
            <button className="btn-secondary">View Pitch Deck</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-container">
            {!imageExists ? (
              <div className="hero-image-placeholder">
                <div className="placeholder-content">
                  <div className="placeholder-icon">🚚</div>
                  <h3>Carma Delivery Network</h3>
                  <p>Interactive delivery visualization</p>
                </div>
                <div className="placeholder-note">
                  <small>
                    💡 Image not found at /hero-sections.png<br/>
                    Place 'hero-sections.png' in the public/ folder and refresh
                  </small>
                </div>
              </div>
            ) : (
              <img 
                src="/hero-sections.png" 
                alt="Carma Delivery Network Visualization" 
                className="hero-image"
              />
            )}
          </div>
          <div className="hero-stats">
            {statBubbles.map((stat) => (
              <div 
                key={stat.id}
                className={`stat-bubble stat-${stat.id} stat-bubble-${stat.id}`}
                onClick={() => handleBubbleClick(stat.id)}
                onMouseEnter={(e) => createRipple(e, stat.id)}
              >
                <span className="stat-icon">{stat.icon}</span>
                <span className="stat-text">{stat.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;