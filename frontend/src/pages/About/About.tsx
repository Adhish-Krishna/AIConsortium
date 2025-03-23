import {Cpu, Code, Network, Database, BookOpen, Rocket } from 'lucide-react';
import './About.css';
import PSG from '../../assets/PSG.jpeg';

function About() {
  return (
    <div className="min-h-screen bg-gray-100">

      <div className="abt-about-container">
        <div className="abt-hero-section">
          <div className="abt-hero-grid">
            <div className="abt-hero-text">
              <h1 className="abt-epiq-title">EPIQ</h1>
              <p className="abt-epiq-subtitle">Empowering Progress Innovation and Quality in AI</p>
            </div>
          </div>
        </div>

        <div className="abt-cards-container">
          <section className="abt-card psg-section">
            <div className="abt-card-header">
              <h1 className="text-4xl font-bold">About PSG College of Technology</h1>
            </div>
            <div className="abt-card-content">
              <div className="abt-content-image">
                <img
                  src={PSG}
                  alt="PSG College Campus"
                />
              </div>
              <div className="content-text">
                <p className="mb-4 abt-content-text">
                PSG College of Technology, is a Govt. Aided, Autonomous, Affiliated to Anna University and ISO 9001:2015 certified Institution. This is one of the foremost institutions founded by the PSG & Sons' Charities Trust (1926). The College was established in the year 1951 and the Founders wisely decided to locate it in the same campus as the PSG Industrial Institute for effective industry-institute interaction.
                </p>
                <p className="mb-4 abt-content-text" style={{"marginTop":"10px"}}>
                PSG College of Technology is situated at about 8 km from Coimbatore Railway Station and 5 km from Airport. The campus is spread over 45 acres of land, economically utilized for the College, Hostels, Staff Quarters, Play Fields and Gardens.
                </p>
                <div className="abt-stats-container">
                  <div className="abt-stat-item">
                    <span className="abt-stat-value">70+</span>
                    <span className="stat-label">Years of Excellence</span>
                  </div>
                  <div className="abt-stat-item">
                    <span className="abt-stat-value">50+</span>
                    <span className="stat-label">Programs Offered</span>
                  </div>
                  <div className="abt-stat-item">
                    <span className="abt-stat-value">200+</span>
                    <span className="stat-label">Research Projects</span>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <section className="abt-card ai-section">
            <div className="abt-card-header">
              <h2 className="text-3xl font-bold">About PSG - AI Consortium</h2>
            </div>
            <div className="abt-features-grid">
              {[
                { icon: Cpu, title: "Advanced Computing", desc: "Next-gen AI Infrastructure" },
                { icon: Code, title: "AI Development", desc: "Cutting-edge Solutions" },
                { icon: Network, title: "Neural Networks", desc: "Deep Learning Systems" },
                { icon: Database, title: "Big Data Analytics", desc: "Intelligent Processing" },
                { icon: BookOpen, title: "AI Research", desc: "Innovation Hub" },
                { icon: Rocket, title: "Future Tech", desc: "Tomorrow's Solutions" }
              ].map((feature, index) => (
                <div className="abt-feature-card" key={index}>
                  <feature.icon size={24} className="feature-icon" />
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                  <div className="connection-dots"></div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;