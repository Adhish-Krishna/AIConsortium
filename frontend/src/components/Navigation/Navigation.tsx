import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navigation.css';
import { Link } from 'react-router-dom';

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
          <Link to="/" className="logo-text">AI CONSORTIUM</Link>
        </div>

        <div className="desktop-menu">
          <Link to="/events" className="nav-link">Events</Link>
          <Link to="/teams" className="nav-link">Teams</Link>
          <Link to="/collaborators" className="nav-link">Collaborators</Link>
          <button className="join-button">
            Register
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
            <Link to="/events" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Events</Link>
            <Link to="/teams" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Teams</Link>
            <Link to="/collaborators" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Collaborators</Link>
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