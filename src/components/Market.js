import React from 'react';
import './Market.css';

const Market = () => {
  const stats = [
    { number: '90%', label: 'of retailers expect to adopt crowdsourced delivery by 2028' },
    { number: '2028', label: 'Target year for mass adoption' },
    { number: 'Nordic', label: 'Scalable across Nordic markets' }
  ];

  return (
    <section id="market" className="section market-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Market Opportunity</h2>
          <div className="section-line"></div>
        </div>
        <div className="market-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="market-details">
          <div className="market-focus">
            <h3>🎯 Pilot Region: Vestland, Norway</h3>
            <p>High rural‑urban traffic and dense SME cluster make it the perfect testing ground.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Market;