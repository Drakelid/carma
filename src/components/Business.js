import React from 'react';
import './Business.css';

const Business = () => {
  const revenueStreams = [
    {
      icon: '💳',
      title: 'Distance‑based dynamic pricing',
      description: 'Flexible pricing model that adjusts based on delivery distance and demand'
    },
    {
      icon: '👥',
      title: 'Membership discounts for frequent senders',
      description: 'Loyalty program encouraging repeat business from regular customers'
    },
    {
      icon: '⚡',
      title: 'Premium rush service',
      description: 'Higher-tier service for urgent deliveries with premium pricing'
    },
    {
      icon: '🛡️',
      title: 'Higher insurance tiers',
      description: 'Optional enhanced coverage for valuable or fragile items'
    },
    {
      icon: '📱',
      title: 'In‑app promotions',
      description: 'Advertising revenue from local businesses and service providers'
    }
  ];

  return (
    <section id="business" className="section business-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Business Model</h2>
          <div className="section-line"></div>
        </div>
        <div className="business-model">
          <div className="revenue-split">
            <h3>Revenue Split</h3>
            <div className="split-visual">
              <div className="platform-share">
                <span className="percentage">20%</span>
                <span className="label">Platform Commission</span>
              </div>
              <div className="driver-share">
                <span className="percentage">80%</span>
                <span className="label">Driver Earnings</span>
              </div>
            </div>
            <p className="split-description">
              Our commission model ensures drivers keep the majority of earnings while 
              providing sustainable revenue for platform development and operations.
            </p>
          </div>
          <div className="revenue-streams">
            <h3>Revenue Streams</h3>
            <div className="stream-list">
              {revenueStreams.map((stream, index) => (
                <div key={index} className="stream-item">
                  <span className="stream-icon">{stream.icon}</span>
                  <div className="stream-content">
                    <h4>{stream.title}</h4>
                    <p>{stream.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;