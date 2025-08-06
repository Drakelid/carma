import React from 'react';
import './Funding.css';

const Funding = () => {
  const fundingBreakdown = [
    {
      category: 'Platform Development',
      amount: '2.5M NOK',
      percentage: '36%',
      description: 'Complete full-scale platform, mobile apps, and core infrastructure',
      icon: '💻'
    },
    {
      category: 'Team Expansion',
      amount: '2.0M NOK',
      percentage: '29%',
      description: 'Hire key tech, operations, and business development roles',
      icon: '👥'
    },
    {
      category: 'Market Expansion',
      amount: '1.5M NOK',
      percentage: '21%',
      description: 'Scale pilot to adjacent regions and acquire new users',
      icon: '📈'
    },
    {
      category: 'Operations & Legal',
      amount: '1.0M NOK',
      percentage: '14%',
      description: 'Insurance, compliance, legal framework, and operational costs',
      icon: '⚖️'
    }
  ];

  const milestones = [
    {
      timeline: 'Q1 2025',
      milestone: 'Platform Launch',
      description: 'Full platform deployment with 50+ active drivers'
    },
    {
      timeline: 'Q2 2025',
      milestone: 'Regional Expansion',
      description: 'Expand to 3 adjacent regions in Vestland'
    },
    {
      timeline: 'Q3 2026',
      milestone: 'Scale Target',
      description: 'Reach 2,000 deliveries/month milestone'
    },
    {
      timeline: 'Q4 2026',
      milestone: 'Profitability',
      description: 'Achieve regional break-even and prepare for Series A'
    }
  ];

  const investmentHighlights = [
    {
      title: 'Proven Market Demand',
      description: '90% of retailers expect to adopt crowdsourced delivery by 2028',
      icon: '📊'
    },
    {
      title: 'Environmental Impact',
      description: 'Aligned with Norway\'s 2030 carbon neutral goals',
      icon: '🌱'
    },
    {
      title: 'Scalable Model',
      description: 'Ready for Nordic expansion with proven unit economics',
      icon: '🚀'
    },
    {
      title: 'Strong Team',
      description: 'Experienced founders with logistics and SaaS backgrounds',
      icon: '⭐'
    }
  ];

  return (
    <section id="funding" className="section funding-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Funding Ask</h2>
          <div className="section-line"></div>
          <p className="section-subtitle">
            Seeking NOK 7 million in seed funding to scale our green delivery revolution
          </p>
        </div>
        
        <div className="funding-overview">
          <div className="funding-amount">
            <div className="amount-display">
              <span className="currency">NOK</span>
              <span className="amount">7M</span>
            </div>
            <p className="funding-type">Seed Round</p>
            <p className="funding-structure">Combining Innovasjon Norge grant and equity investment</p>
          </div>
          
          <div className="investment-highlights">
            <h3>Why Invest Now</h3>
            <div className="highlights-grid">
              {investmentHighlights.map((highlight, index) => (
                <div key={index} className="highlight-card">
                  <div className="highlight-icon">{highlight.icon}</div>
                  <h4>{highlight.title}</h4>
                  <p>{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="funding-breakdown">
          <h3>Use of Funds</h3>
          <div className="breakdown-grid">
            {fundingBreakdown.map((item, index) => (
              <div key={index} className="breakdown-card">
                <div className="breakdown-header">
                  <div className="breakdown-icon">{item.icon}</div>
                  <div className="breakdown-amount">
                    <span className="amount">{item.amount}</span>
                    <span className="percentage">({item.percentage})</span>
                  </div>
                </div>
                <h4>{item.category}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="funding-milestones">
          <h3>Key Milestones</h3>
          <div className="milestones-timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="milestone-item">
                <div className="milestone-timeline">{milestone.timeline}</div>
                <div className="milestone-content">
                  <h4>{milestone.milestone}</h4>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="funding-cta">
          <div className="cta-content">
            <h3>Ready to Drive the Future of Delivery?</h3>
            <p>Join us in building a sustainable, profitable, and scalable logistics platform that benefits businesses, drivers, and the environment.</p>
            <div className="cta-buttons">
              <button className="btn-primary large">Request Investment Deck</button>
              <button className="btn-secondary large">Schedule Meeting</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Funding;