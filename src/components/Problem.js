import React from 'react';
import './Problem.css';

const Problem = () => {
  const problems = [
    {
      id: 1,
      icon: '📈',
      title: 'High Last-Mile Costs',
      description: 'Small businesses, farmers and online sellers face high last-mile logistics costs that erode margins and limit growth.'
    },
    {
      id: 2,
      icon: '🚗',
      title: 'Wasted Capacity',
      description: 'Thousands of commuters drive with empty boot space every day—untapped capacity ready to be monetised.'
    }
  ];

  return (
    <section id="problem" className="section problem-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">The Problem</h2>
          <div className="section-line"></div>
        </div>
        <div className="problem-grid">
          {problems.map((problem) => (
            <div key={problem.id} className="problem-card">
              <div className="problem-icon">{problem.icon}</div>
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;