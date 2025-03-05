import React from 'react';
import './CallToAction.css';

const CallToAction: React.FC = () => {
  return (
    <section className="cta-section">
      <div className="cta-background">
        <div className="cta-gradient"></div>
        <div className="cta-grid"></div>
      </div>
      
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title text-gradient">
            Join the AI Revolution
          </h2>
          <p className="cta-subtitle">
            Connect with like-minded AI enthusiasts, access exclusive resources, and shape the future of artificial intelligence.
          </p>
          <div className="cta-buttons">
            <button className="cta-primary-button">
              Become a Member
            </button>
            <button className="cta-secondary-button">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;