import React, { useEffect, useRef } from "react";
import "./index.css";

const Collab = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const alumni = [
    { name: "Dr. Sarah Chen", description: "AI Ethics Researcher and former lead of our Ethics Committee. Now working at Google's Responsible AI division." },
    { name: "Prof. Michael Rodriguez", description: "Machine Learning pioneer who helped establish our first neural network research lab. Currently teaching at MIT." },
    { name: "Aria Patel", description: "Former student ambassador who developed our community outreach program. Now an AI Policy Advisor at UNESCO." },
  ];

  const industryPartners = [
    { name: "TechVision AI", description: "Collaborating on research for explainable AI systems and providing internship opportunities for our students." },
    { name: "Neural Dynamics", description: "Funding our research on neural networks and supporting the annual AI Ethics Symposium." },
    { name: "Global AI Initiative", description: "Working with us on AI education programs for underrepresented communities and sharing resources." },
  ];

  useEffect(() => {
    // Staggered animation for items when they enter the viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('hologram-reveal');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    // Observe all hologram items
    const hologramItems = document.querySelectorAll('.hologram-item');
    hologramItems.forEach(item => observer.observe(item));

    return () => {
      hologramItems.forEach(item => observer.unobserve(item));
    };
  }, []);

  return (
    <div className="collab-container holographic-bg" style={{ paddingTop: "100px" }}>
      <div className="scan-line"></div>
      <div className="hologram-overlay"></div>
      
      <div className="collab-section hologram-panel" ref={sectionRef}>
        <h1 className="hologram-title">
          <span className="hologram-text">Consortium Collaborators</span>
          <div className="hologram-subtitle">// Data Access: Authorized</div>
        </h1>
        
        <div className="hologram-section">
          <h2 className="hologram-heading">
            <span className="hologram-text">Alumni Database</span>
            <span className="hologram-badge">3 Records</span>
          </h2>
          
          <div className="hologram-grid">
            {alumni.map((alum, index) => (
              <div key={index} className="hologram-item" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="hologram-header">
                  <h3 className="hologram-name">{alum.name}</h3>
                  <div className="hologram-status">Alumni</div>
                </div>
                <div className="hologram-content">
                  <p>{alum.description}</p>
                </div>
                <div className="hologram-footer">
                  <div className="hologram-id">ID: A{(100 + index).toString().padStart(3, '0')}</div>
                  <div className="hologram-date">Last Updated: {new Date().toLocaleDateString()}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="hologram-divider">
          <span className="hologram-text">System Transition</span>
        </div>
        
        <div className="hologram-section">
          <h2 className="hologram-heading">
            <span className="hologram-text">Industry Partners</span>
            <span className="hologram-badge">3 Records</span>
          </h2>
          
          <div className="hologram-grid">
            {industryPartners.map((partner, index) => (
              <div key={index} className="hologram-item" style={{ animationDelay: `${(index + alumni.length) * 0.2}s` }}>
                <div className="hologram-header">
                  <h3 className="hologram-name">{partner.name}</h3>
                  <div className="hologram-status">Active</div>
                </div>
                <div className="hologram-content">
                  <p>{partner.description}</p>
                </div>
                <div className="hologram-footer">
                  <div className="hologram-id">ID: P{(200 + index).toString().padStart(3, '0')}</div>
                  <div className="hologram-date">Partnership Since: 2023</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="hologram-terminal">
          <div className="terminal-line">// End of data transmission</div>
          <div className="terminal-line blink">_</div>
        </div>
      </div>
    </div>
  );
};

export default Collab;