import React from 'react';
import './Solution.css';

const Solution = () => {
  const features = [
    {
      id: 1,
      icon: '📱',
      title: 'Smart Marketplace',
      description: 'A mobile‑ and web‑based marketplace that lets senders post deliveries and instantly match them with vetted drivers travelling the same route.'
    },
    {
      id: 2,
      icon: '💰',
      title: 'Cost Savings',
      description: 'Same‑day or next‑day service at 20‑30% below traditional courier rates, with real‑time tracking and proof of delivery.'
    }
  ];

  return (
    <section id="solution" className="section solution-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Solution</h2>
          <div className="section-line"></div>
        </div>
        <div className="solution-content">
          <div className="solution-text">
            {features.map((feature) => (
              <div key={feature.id} className="solution-feature">
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="solution-visual">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="app-interface">
                  <div className="app-header">Carma</div>
                  <div className="map-area"></div>
                  <div className="delivery-list">
                    <div className="delivery-item">📦 Bergen → Oslo</div>
                    <div className="delivery-item">🌸 Stavanger → Haugesund</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;