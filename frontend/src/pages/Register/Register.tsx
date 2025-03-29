import React from 'react';
import './Register.css';

const Register: React.FC = () => {
  return (
    <main className="register-container">
      <div className="register-wrapper">
        <h1 className="register-title">Join Our AI Consortium</h1>
        <p className="register-subtitle">Select the registration option that best fits your profile</p>

        <div className="register-sections">
          <section className="register-section">
            <div className="register-section-content">
              <h2 className="register-section-title">Register as an Alumni</h2>
              <p className="register-section-text">
                As an alumni member, you'll gain access to:
              </p>
              <ul className="register-list">
                <li>Exclusive networking events with industry professionals</li>
                <li>Mentorship opportunities with current students</li>
                <li>Updates on the latest AI research and developments</li>
                <li>Invitations to special alumni-only workshops and seminars</li>
              </ul>
              <p className="register-section-text">
                Join our growing community of alumni who continue to contribute to the field of artificial intelligence.
              </p>
            </div>
            <a
              href="https://forms.gle/8XF8dtN2imwhx41N8"
              target="_blank"
              rel="noopener noreferrer"
              className="register-page-register-button"
            >
              Register as Alumni
            </a>
          </section>

          <section className="register-section">
            <div className="register-section-content">
              <h2 className="register-section-title">Register as a Collaborator</h2>
              <p className="register-section-text">
                As a collaborator, you can participate in:
              </p>
              <ul className="register-list">
                <li>Joint research projects with our consortium members</li>
                <li>Knowledge sharing and cross-institutional initiatives</li>
                <li>Access to shared resources and computing infrastructure</li>
                <li>Collaborative grant applications and funding opportunities</li>
              </ul>
              <p className="register-section-text">
                Collaborate with leading researchers and institutions to advance the frontier of AI technology.
              </p>
            </div>
            <a
              href="https://forms.gle/8XF8dtN2imwhx41N8"
              target="_blank"
              rel="noopener noreferrer"
              className="register-page-register-button"
            >
              Register as Collaborator
            </a>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Register;
