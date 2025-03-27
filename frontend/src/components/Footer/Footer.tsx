import React from 'react';
import {Twitter, Linkedin, Github} from 'lucide-react';
import './Footer.css';
import Logo from '../../assets/logo.png';
import { LinkPreview } from "../ui/LinkPreview"; // Adjust the import path as needed

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={Logo} alt=""  style={{"height":"50px"}}/>
              <span className="footer-logo-text">PSG - AI CONSORTIUM</span>
            </div>
            <p className="footer-description">
            Empowering Progress Innovation and Quality in AI.
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
              <li><a href="/about" className="footer-link">About Us</a></li>
              <li><a href="/events" className="footer-link">Events</a></li>
              <li><a href="/collaborators" className="footer-link">Collaborators</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3 className="footer-heading">Resources</h3>
            <ul className="footer-list">
              <li><a href="/teams" className="footer-link">Teams</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3 className="footer-heading">Contact</h3>
            <ul className="footer-list">
              <li>
                <p className="footer-link">aiconsortium@psgtech.ac.in</p>
              </li>
            </ul>
          </div>

          {/* <div className="footer-newsletter">
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
          </div> */}
        </div>

        {/* <div className="footer-bottom">
          <div className="copyright">
            © 2025 PSG - AI CONSORTIUM. All rights reserved.
          </div>
          <div className="legal-links">
            <LinkPreview url="/privacy" className="legal-link">Privacy Policy</LinkPreview>
            <LinkPreview url="/terms" className="legal-link">Terms of Service</LinkPreview>
            <LinkPreview url="/cookies" className="legal-link">Cookie Policy</LinkPreview>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;