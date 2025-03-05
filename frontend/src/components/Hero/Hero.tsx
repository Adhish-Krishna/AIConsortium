import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import './Hero.css';
import NeuralNetworkAnimation from './NeuralNetworkAnimation';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <NeuralNetworkAnimation />
        <div className="gradient-overlay"></div>
        <div className="pattern-overlay"></div>
        <div className="circuit-overlay"></div>
        <div className="dots-overlay"></div>
      </div>

      <div className="container hero-content">
        <h1 className="hero-title text-gradient">
          AI Consortium
        </h1>
        <p className="hero-subtitle">
          Join the premier community where AI innovators, researchers, and enthusiasts converge to define tomorrow's intelligent systems.
        </p>
        <button className="hero-cta">
          Join the Forum <ChevronRight className="inline-icon" />
        </button>

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-value">10K+</div>
            <div className="stat-label">Members</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">500+</div>
            <div className="stat-label">Events</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">50+</div>
            <div className="stat-label">Countries</div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <ArrowRight className="arrow-down" />
      </div>
    </section>
  );
};

export default Hero;