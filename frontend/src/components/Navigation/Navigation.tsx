import React, { useState, useEffect } from 'react';
import {Menu, X } from 'lucide-react';
import Logo from '../../assets/logo.png';
import './Navigation.css';
import {useNavigate} from 'react-router-dom';
import PSGLogo from '../../assets/PSGlogo.png';
import AICTELogo from '../../assets/aictelogo.png';

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
      <div className="nav-container">
        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X/> : <Menu/>}
        </button>
        <div className="logo-container">
          <div className="logo" onClick={()=>{navigate('/')}} style={{"cursor":"pointer"}} >
            <img src={PSGLogo} style={{"height":"60px", "marginTop":"10px", "marginRight":"5px"}} />
            <div className="sep-line"></div>
            <img src={Logo} style={{"height":"80px"}}/>
            <span className="logo-text">PSG - AI CONSORTIUM</span>
          </div>

          <div className="aicte-logo">
            <img src={AICTELogo} style={{"height":"80px"}} />
          </div>
        </div>
      </div>

      <div className={`sidebar-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-menu-links">
          <a href="/events" className="nav-link">Events</a>
          <a href="/teams" className="nav-link">Teams</a>
          <a href="/collaborators" className="nav-link">Collaborators</a>
          <button className="join-button mobile-join">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;