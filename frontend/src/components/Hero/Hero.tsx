import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import './Hero.css';
import NeuralNetworkAnimation from './NeuralNetworkAnimation';
import FlipWordsDemo from '../ui/flip-words-demo';

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

      <div className="container hero-content flex flex-col items-center text-center">
        {/* TODO : SOMEONE FIX THIS  */}
      <div className="relative bg-white dark:bg-black p-10 text-center">
  <h1 className="hero-title text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700 inline-block">
    AI Consortium
  </h1>
</div>


  <FlipWordsDemo 
  staticTextBefore="Join the premier community where" 
  words={["AI innovators", "researchers", "enthusiasts"]} 
  staticTextAfter="converge to define tomorrow's intelligent systems."
  className="text-2xl max-w-4xl mx-auto mb-12 font-extrabold tracking-wide text-[var(--color-primary-dark)] dark:text-[var(--color-secondary-dark)] drop-shadow-lg"
  flipWordsClassName="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)]"
/>


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