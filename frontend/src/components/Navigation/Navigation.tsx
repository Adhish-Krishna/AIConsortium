import React, { useState, useEffect } from 'react';
import {Menu, X } from 'lucide-react';
import './Navigation.css';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <span className="logo-text">AI CONSORTIUM</span>
        </div>

        <div className="desktop-menu">
          <a href="#events" className="nav-link">Events</a>
          <a href="#community" className="nav-link">Community</a>
          <a href="#resources" className="nav-link">Resources</a>
          <a href="#contact" className="nav-link">Contact</a>
          <button className="join-button">
            Join Now
          </button>
        </div>

        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-links">
            <a href="#events" className="nav-link">Events</a>
            <a href="#community" className="nav-link">Community</a>
            <a href="#resources" className="nav-link">Resources</a>
            <a href="#contact" className="nav-link">Contact</a>
            <button className="join-button mobile-join">
              Join Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;