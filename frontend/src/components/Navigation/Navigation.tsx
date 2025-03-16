import React, { useState, useEffect } from 'react';
import {Menu, X } from 'lucide-react';
import Logo from '../../assets/logo.png';
import './Navigation.css';
import {useNavigate} from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

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
        <div className="logo" onClick={()=>{navigate('/')}}>
          <img src={Logo} style={{"height":"60px"}}/>
          <span className="logo-text">AI CONSORTIUM</span>
        </div>

        <div className="desktop-menu">
          <a href="events" className="nav-link">Events</a>
          <a href="teams" className="nav-link">Teams</a>
          <a href="#resources" className="nav-link">Collaborators</a>
          {/* <a href="#contact" className="nav-link">Contact</a> */}
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

      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-links">
          <a href="/events" className="nav-link">Events</a>
          <a href="/teams" className="nav-link">Teams</a>
          <a href="/" className="nav-link">Collaborators</a>
          <button className="join-button mobile-join">
            Join Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;