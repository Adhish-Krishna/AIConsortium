import React from 'react';
import { Brain, Twitter, Linkedin, Github, Mail } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <Brain className="footer-logo-icon" />
              <span className="footer-logo-text">AI CONSORTIUM</span>
            </div>
            <p className="footer-description">
              The premier community for AI professionals, researchers, and enthusiasts.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <Twitter />
              </a>
              <a href="#" className="social-link">
                <Linkedin />
              </a>
              <a href="#" className="social-link">
                <Github />
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">About Us</a></li>
              <li><a href="#" className="footer-link">Events</a></li>
              <li><a href="#" className="footer-link">Resources</a></li>
              <li><a href="#" className="footer-link">Community</a></li>
              <li><a href="#" className="footer-link">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h3 className="footer-heading">Resources</h3>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Blog</a></li>
              <li><a href="#" className="footer-link">Whitepapers</a></li>
              <li><a href="#" className="footer-link">Research Papers</a></li>
              <li><a href="#" className="footer-link">Tutorials</a></li>
              <li><a href="#" className="footer-link">Webinars</a></li>
            </ul>
          </div>
          
          <div className="footer-newsletter">
            <h3 className="footer-heading">Subscribe</h3>
            <p className="newsletter-description">
              Stay updated with the latest in AI research and community events.
            </p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Your email" 
                className="newsletter-input"
              />
              <button className="newsletter-button">
                <Mail />
              </button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            © 2025 AI CONSORTIUM. All rights reserved.
          </div>
          <div className="legal-links">
            <a href="#" className="legal-link">Privacy Policy</a>
            <a href="#" className="legal-link">Terms of Service</a>
            <a href="#" className="legal-link">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;