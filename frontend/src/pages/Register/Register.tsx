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
              href="https://forms.gle/ugKvjR4y4Xhg1PA79"
              target="_blank"
              rel="noopener noreferrer"
              className="register-page-register-button"
            >
              Register as Alumni
            </a>
          </section>

          <section className="register-section">
            <div className="register-section-content">
              <h2 className="register-section-title">Register as an Industry</h2>
              <p className="register-section-text">
                As an industry partner, you'll benefit from:
              </p>
              <ul className="register-list">
                <li>Access to cutting-edge AI research and talent pipeline</li>
                <li>Opportunities to influence research directions and applications</li>
                <li>Collaborative projects to solve industry-specific challenges</li>
                <li>Visibility and networking with academic and research communities</li>
              </ul>
              <p className="register-section-text">
                Partner with us to implement AI solutions and drive innovation in your organization.
              </p>
            </div>
            <a
              href="https://forms.gle/QKwKF7ZijLfKnjDc6"
              target="_blank"
              rel="noopener noreferrer"
              className="register-page-register-button"
            >
              Register as Industry
            </a>
          </section>

          <section className="register-section">
            <div className="register-section-content">
              <h2 className="register-section-title">Register as Academics
              </h2>
              <p className="register-section-text">
                As an academic member, you can engage in:
              </p>
              <ul className="register-list">
                <li>Interdisciplinary research collaborations across institutions</li>
                <li>Student exchange and joint supervision opportunities</li>
                <li>Shared curriculum development and educational resources</li>
                <li>Enhanced visibility and impact of academic publications</li>
              </ul>
              <p className="register-section-text">
                Join our academic network to enhance your research and educational initiatives in AI.
              </p>
            </div>
            <a
              href=" https://forms.gle/irdtHsJWuk8zHWLC6"
              target="_blank"
              rel="noopener noreferrer"
              className="register-page-register-button"
            >
              Register as  Academics

            </a>
          </section>

          <section className="register-section">
            <div className="register-section-content">
              <h2 className="register-section-title">Register as Research Labs</h2>
              <p className="register-section-text">
                As a research lab partner, you'll receive:
              </p>
              <ul className="register-list">
                <li>Opportunities for joint grant applications and funding</li>
                <li>Access to expanded datasets and computational resources</li>
                <li>Cross-lab collaboration on breakthrough AI technologies</li>
                <li>Participation in specialized workshops and research symposiums</li>
              </ul>
              <p className="register-section-text">
                Accelerate your research impact through our collaborative lab network and shared resources.
              </p>
            </div>
            <a
              href="https://forms.gle/wg9RyYQEuqyEfjsj9 "
              target="_blank"
              rel="noopener noreferrer"
              className="register-page-register-button"
            >
              Register as Research Labs
            </a>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Register;
