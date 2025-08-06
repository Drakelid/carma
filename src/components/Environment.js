import React, { useState, useEffect } from 'react';
import './Environment.css';

const Environment = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const metrics = [
    { icon: '🌱', value: '1,247', label: 'tonnes CO₂ saved', description: 'Equivalent to planting 56,000 trees', isPrimary: true },
    { icon: '🚗', value: '42%', label: 'Fewer delivery vehicles' },
    { icon: '⛽', value: '89,000L', label: 'Fuel saved annually' },
    { icon: '📍', value: '2.3M', label: 'Kilometers reduced' }
  ];

  const features = [
    {
      icon: '🔄',
      title: 'Trip Consolidation',
      description: 'Leverages existing commuter routes instead of creating new delivery trips, reducing overall traffic and emissions.',
      stat: { number: '65%', text: 'reduction in delivery trips' }
    },
    {
      icon: '⚡',
      title: 'EV Incentives',
      description: 'Built-in bonuses and priority matching for electric vehicle drivers to accelerate green transport adoption.',
      stat: { number: '78%', text: 'of drivers use EVs or hybrids' }
    },
    {
      icon: '🇳🇴',
      title: 'Norway\'s Green Goals',
      description: 'Directly supporting Norway\'s 2030 climate targets and sustainable transport initiatives.',
      stat: { number: '2030', text: 'carbon neutral target' }
    },
    {
      icon: '📊',
      title: 'Real-time Tracking',
      description: 'Live monitoring of environmental impact with transparent reporting for businesses and consumers.',
      stat: { number: '24/7', text: 'impact monitoring' }
    }
  ];

  const badges = [
    { icon: '🌍', text: 'Carbon Negative by 2026' },
    { icon: '🔋', text: '100% Renewable Energy' },
    { icon: '📈', text: 'Transparent Reporting' }
  ];

  useEffect(() => {
    const animateCounterCallback = () => {
      if (hasAnimated) return;
      
      const target = 1247;
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounterValue(Math.floor(current));
      }, 16);
      
      setHasAnimated(true);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasAnimated) {
            animateCounterCallback();
          }
        });
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById('environment');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  // Animation logic moved inline to useEffect to fix dependency warning

  return (
    <section id="environment" className="section environment-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Environmental Impact</h2>
          <div className="section-line"></div>
          <p className="section-subtitle">Driving sustainable change through smart logistics</p>
        </div>
        
        {/* Impact Metrics Grid */}
        <div className="impact-metrics-grid">
          {metrics.map((metric, index) => (
            <div key={index} className={`metric-card ${metric.isPrimary ? 'primary-metric' : ''}`}>
              <div className={metric.isPrimary ? 'metric-icon-large' : 'metric-icon'}>
                {metric.icon}
              </div>
              <div className={metric.isPrimary ? 'metric-value-large' : 'metric-value'}>
                {metric.isPrimary ? counterValue.toLocaleString() : metric.value}
              </div>
              <div className={metric.isPrimary ? 'metric-label-large' : 'metric-label'}>
                {metric.label}
              </div>
              {metric.description && (
                <div className="metric-description">{metric.description}</div>
              )}
            </div>
          ))}
        </div>
        
        {/* Impact Features */}
        <div className="impact-features-section">
          <h3 className="features-title">How We Make a Difference</h3>
          <div className="impact-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="impact-feature-card">
                <div className="feature-header">
                  <div className="feature-icon">{feature.icon}</div>
                  <h4>{feature.title}</h4>
                </div>
                <p>{feature.description}</p>
                <div className="feature-stat">
                  <span className="stat-number">{feature.stat.number}</span>
                  <span className="stat-text">{feature.stat.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Environmental Commitment */}
        <div className="environmental-commitment">
          <div className="commitment-content">
            <h3>Our Environmental Commitment</h3>
            <p>Every delivery through Carma contributes to a cleaner, more sustainable future. We're not just reducing emissions—we're reimagining how goods move through our communities.</p>
            <div className="commitment-badges">
              {badges.map((badge, index) => (
                <div key={index} className="badge">
                  <span className="badge-icon">{badge.icon}</span>
                  <span className="badge-text">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Environment;