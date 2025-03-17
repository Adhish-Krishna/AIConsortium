import React from 'react';
import {ArrowRight } from 'lucide-react';
import './Hero.css';
import NeuralNetworkAnimation from './NeuralNetworkAnimation';
// import FlipWordsDemo from '../ui/flip-words-demo';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import Logo from '../../assets/logo.png';

const Hero: React.FC = () => {
  const subTitle = 'Empowering Progress Innovation and Quality in AI';

  return (
    <section className="hero">
      <div className="hero-background">
        <NeuralNetworkAnimation />
        <div className="gradient-overlay"></div>
        <div className="pattern-overlay"></div>
        <div className="circuit-overlay"></div>
        <div className="dots-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-title-container">
          <img src={Logo} alt="AI Consortium Logo" className='title-logo' />
          <div className="line"></div>
          <h1 className="hero-title text-gradient">AI CONSORTIUM</h1>
        </div>
        <TextGenerateEffect
        duration={1}
        filter={true}
        words={subTitle}
        className='hero-subtitle'
        />
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-value">10+</div>
            <div className="stat-label">AI Labs</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">50+</div>
            <div className="stat-label">Faculties</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">100+</div>
            <div className="stat-label">Students</div>
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