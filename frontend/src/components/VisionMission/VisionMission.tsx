import React, { useRef } from 'react';
import './VisionMission.css';
import { Lightbulb, Compass } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const VisionMission: React.FC = () => {
  const visionRef = useRef(null);
  const missionRef = useRef(null);
  const isVisionInView = useInView(visionRef, { once: true, amount: 0.3 });
  const isMissionInView = useInView(missionRef, { once: true, amount: 0.3 });

  return (
    <section className="vision-mission-section">
      <div className="container">
        <div className="vision-mission-grid">
          <motion.div
            ref={visionRef}
            className="vision-card"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="card-header">
              <Lightbulb className="card-icon" />
              <h2 className="card-title">Our Vision</h2>
            </div>
            <p className="card-content">
              AI consortium strives to be pioneers in the field of Artificial Intelligence
              to uplift the society with steadfast commitment to responsible and safe AI.
            </p>
          </motion.div>

          <motion.div
            ref={missionRef}
            className="mission-card"
            initial={{ opacity: 0, y: 50 }}
            animate={isMissionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="card-header">
              <Compass className="card-icon" />
              <h2 className="card-title">Our Mission</h2>
            </div>
            <p className="card-content">
              Our mission is to provide a collaborative environment for sharing knowledge
              and developing innovative AI solutions that empower individuals and organizations
              while prioritizing ethical standards and societal well-being.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
