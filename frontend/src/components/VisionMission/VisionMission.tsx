import React from 'react';
import './VisionMission.css';
import { Lightbulb, Compass } from 'lucide-react';

const VisionMission: React.FC = () => {
  return (
    <section className="vision-mission-section">
      <div className="container">
        <div className="vision-mission-grid">
          <div className="vision-card">
            <div className="card-header">
              <Lightbulb className="card-icon" />
              <h2 className="card-title">Our Vision</h2>
            </div>
            <p className="card-content">
              AI consortium strives to be pioneers in the field of Artificial Intelligence 
              to uplift the society with steadfast commitment to responsible and safe AI.
            </p>
          </div>
          
          <div className="mission-card">
            <div className="card-header">
              <Compass className="card-icon" />
              <h2 className="card-title">Our Mission</h2>
            </div>
            <p className="card-content">
              Our mission is to provide a collaborative environment for sharing knowledge 
              and developing innovative AI solutions that empower individuals and organizations 
              while prioritizing ethical standards and societal well-being.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
