import React from 'react';
import './Traction.css';

const Traction = () => {
  const milestones = [
    {
      status: 'completed',
      title: 'MVP Complete',
      description: 'Platform ready for pilot launch',
      date: 'Q2 2025'
    },
    {
      status: 'active',
      title: '20-30 Drivers',
      description: 'Pilot launching with anchor businesses',
      date: 'Q3 2025'
    },
    {
      status: 'future',
      title: 'Break-even Target',
      description: 'Regional profitability milestone',
      date: 'Q4 2026'
    }
  ];

  const anchorPartners = [
    { icon: '🥖', name: 'Local Bakery', type: 'Daily fresh deliveries' },
    { icon: '🌸', name: 'Florist', type: 'Event & occasion deliveries' },
    { icon: '🚜', name: 'Farm Co-op', type: 'Fresh produce distribution' }
  ];

  const kpiTargets = [
    { metric: '2,000', label: 'Deliveries/month by Q3 2026', icon: '📦' },
    { metric: 'Q4 2026', label: 'Break-even in pilot region', icon: '💰' },
    { metric: 'Live', label: 'CO₂ savings tracked per delivery', icon: '🌱' }
  ];

  return (
    <section id="traction" className="section traction-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Traction & Pilot Highlights</h2>
          <div className="section-line"></div>
        </div>
        <div className="traction-content">
          <div className="milestone-timeline">
            <h3>Development Milestones</h3>
            <div className="timeline">
              {milestones.map((milestone, index) => (
                <div key={index} className="milestone">
                  <div className={`milestone-marker ${milestone.status}`}></div>
                  <div className="milestone-content">
                    <div className="milestone-date">{milestone.date}</div>
                    <h4>{milestone.title}</h4>
                    <p>{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="anchor-businesses">
            <h3>Anchor Partners</h3>
            <div className="partner-grid">
              {anchorPartners.map((partner, index) => (
                <div key={index} className="partner-card">
                  <div className="partner-icon">{partner.icon}</div>
                  <h4>{partner.name}</h4>
                  <p>{partner.type}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="kpi-targets">
            <h3>Key Indicators</h3>
            <div className="kpi-grid">
              {kpiTargets.map((kpi, index) => (
                <div key={index} className="kpi-card">
                  <div className="kpi-icon">{kpi.icon}</div>
                  <div className="kpi-metric">{kpi.metric}</div>
                  <div className="kpi-label">{kpi.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Traction;