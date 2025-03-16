import React from 'react';
import { Brain, Twitter, Linkedin, Github, Mail } from 'lucide-react';
import './Footer.css';
import { LinkPreview } from "../ui/LinkPreview"; // Adjust the import path as needed

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
              <LinkPreview url="https://github.com/suryanarayanaa/" className="social-link">
                <Twitter />
              </LinkPreview>
              <LinkPreview url="https://linkedin.com" className="social-link">
                <Linkedin />
              </LinkPreview>
              <LinkPreview url="https://github.com" className="social-link">
                <Github />
              </LinkPreview>
            </div>
          </div>
          
          <div className="footer-links">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-list">
              <li><LinkPreview url="/about" className="footer-link">About Us</LinkPreview></li>
              <li><LinkPreview url="/events" className="footer-link">Events</LinkPreview></li>
              <li><LinkPreview url="/resources" className="footer-link">Resources</LinkPreview></li>
              <li><LinkPreview url="/community" className="footer-link">Community</LinkPreview></li>
              <li><LinkPreview url="/contact" className="footer-link">Contact</LinkPreview></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h3 className="footer-heading">Resources</h3>
            <ul className="footer-list">
              <li><LinkPreview url="/blog" className="footer-link">Blog</LinkPreview></li>
              <li><LinkPreview url="/whitepapers" className="footer-link">Whitepapers</LinkPreview></li>
              <li><LinkPreview url="/research" className="footer-link">Research Papers</LinkPreview></li>
              <li><LinkPreview url="/tutorials" className="footer-link">Tutorials</LinkPreview></li>
              <li><LinkPreview url="/webinars" className="footer-link">Webinars</LinkPreview></li>
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
            <LinkPreview url="/privacy" className="legal-link">Privacy Policy</LinkPreview>
            <LinkPreview url="/terms" className="legal-link">Terms of Service</LinkPreview>
            <LinkPreview url="/cookies" className="legal-link">Cookie Policy</LinkPreview>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;