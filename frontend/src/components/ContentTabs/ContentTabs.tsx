import React, { useState } from 'react';
import { Calendar, TrendingUp, Globe, ChevronRight, Zap, Users as UsersIcon, Briefcase } from 'lucide-react';
import './ContentTabs.css';
import { events, projects } from '../../data/content';
import { members } from '../../data/members';

const ContentTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('events');

  return (
    <section id="content" className="content-section">
      <div className="container">
        <div className="tabs-container">
          <div className="tabs">
            <button
              className={`tab ${activeTab === 'events' ? 'active' : ''}`}
              onClick={() => setActiveTab('events')}
            >
              <Calendar className="tab-icon" /> Events
            </button>
            <button
              className={`tab ${activeTab === 'projects' ? 'active' : ''}`}
              onClick={() => setActiveTab('projects')}
            >
              <TrendingUp className="tab-icon" /> Projects
            </button>
            <button
              className={`tab ${activeTab === 'members' ? 'active' : ''}`}
              onClick={() => setActiveTab('members')}
            >
              <UsersIcon className="tab-icon" /> Members
            </button>
          </div>
        </div>

        <div className="content-grid">
          {/* Left Section */}
          <div className="content-card">
            <h2 className="section-title">
              <Globe className="section-icon" />
              Featured Content
            </h2>

            {activeTab === 'events' && (
              <div className="events-list">
                {events.map(event => (
                  <div key={event.id} className="event-card">
                    <div className="event-image-container">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="event-image"
                      />
                    </div>
                    <div className="event-details">
                      <div className="event-meta">{event.date} • {event.location}</div>
                      <h3 className="event-title">{event.title}</h3>
                      <p className="event-description">{event.description}</p>
                      <button className="learn-more">
                        Learn more <ChevronRight className="small-icon" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="projects-list">
                {projects.map(project => (
                  <div key={project.id} className="project-card">
                    <h3 className="project-title">
                      <Zap className="project-icon" />
                      {project.title}
                    </h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-meta">
                      <div className="contributors">
                        <span className="contributor-count">{project.contributors}</span> contributors
                      </div>
                      <div className="stars">
                        {project.stars}
                        <svg xmlns="http://www.w3.org/2000/svg" className="star-icon" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'members' && <MembersList />}
          </div>

          {/* Right Section */}
          <div className="sidebar">
            <CommunityHighlights />
            <LatestResources />
          </div>
        </div>
      </div>
    </section>
  );
};

const MembersList: React.FC = () => {
  return (
    <div className="members-list">
      <p className="members-intro">
        Meet the leadership team behind the AI Consortium. Our members bring diverse expertise from academia, industry, and policy.
      </p>

      {members.map(member => (
        <div key={member.id} className="member-card">
          <div className="member-avatar-container">
            <img
              src={member.avatar}
              alt={member.name}
              className="member-avatar"
            />
          </div>
          <div className="member-details">
            <h3 className="member-name">{member.name}</h3>
            <div className="member-position">
              <Briefcase className="position-icon" />
              {member.position}
            </div>
            <p className="member-bio">{member.bio}</p>
            <div className="member-expertise">
              {member.expertise.map((skill, index) => (
                <span key={index} className="expertise-tag">{skill}</span>
              ))}
            </div>
            <div className="member-contact">
              {member.contact?.email && (
                <a href={`mailto:${member.contact.email}`} className="contact-link">
                  <svg xmlns="http://www.w3.org/2000/svg" className="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
              )}
              {member.contact?.linkedin && (
                <a href={`https://linkedin.com/in/${member.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="contact-link">
                  <svg xmlns="http://www.w3.org/2000/svg" className="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              )}
              {member.contact?.twitter && (
                <a href={`https://twitter.com/${member.contact.twitter}`} target="_blank" rel="noopener noreferrer" className="contact-link">
                  <svg xmlns="http://www.w3.org/2000/svg" className="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const CommunityHighlights: React.FC = () => {
  return (
    <div className="sidebar-card">
      <h2 className="section-title">
        <Users className="section-icon" />
        Community Highlights
      </h2>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-content">
            <div className="timeline-label">Latest Achievement</div>
            <h3 className="timeline-title">AI Ethics Framework Adopted</h3>
            <p className="timeline-description">Our community-developed AI Ethics Framework has been adopted by 5 major tech companies, setting new industry standards.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <div className="timeline-label">Member Spotlight</div>
            <h3 className="timeline-title">Dr. Maya Rodriguez</h3>
            <p className="timeline-description">Recognized for groundbreaking research in neural network optimization, reducing training time by 40% while improving accuracy.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <div className="timeline-label">Community Growth</div>
            <h3 className="timeline-title">10,000 Member Milestone</h3>
            <p className="timeline-description">Our community has reached 10,000 members across 52 countries, representing diverse perspectives in AI development.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Users: React.FC<{ className: string }> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
};

const LatestResources: React.FC = () => {
  return (
    <div className="sidebar-card">
      <h2 className="section-title">
        <BookOpen className="section-icon" />
        Latest Resources
      </h2>

      <div className="resources-list">
        <div className="resource-item">
          <div className="resource-icon-container">
            <BookOpen className="resource-icon" />
          </div>
          <div className="resource-content">
            <h3 className="resource-title">Beginner's Guide to Neural Networks</h3>
            <p className="resource-description">Comprehensive introduction to neural network architectures and applications.</p>
          </div>
        </div>

        <div className="resource-item">
          <div className="resource-icon-container">
            <BookOpen className="resource-icon" />
          </div>
          <div className="resource-content">
            <h3 className="resource-title">AI Ethics Whitepaper</h3>
            <p className="resource-description">Exploring ethical considerations in AI development and deployment.</p>
          </div>
        </div>

        <div className="resource-item">
          <div className="resource-icon-container">
            <BookOpen className="resource-icon" />
          </div>
          <div className="resource-content">
            <h3 className="resource-title">Machine Learning Algorithms Comparison</h3>
            <p className="resource-description">Detailed analysis of popular ML algorithms with performance metrics.</p>
          </div>
        </div>
      </div>

      <button className="view-all-button">
        View All Resources <ChevronRight className="small-icon" />
      </button>
    </div>
  );
};

const BookOpen: React.FC<{ className: string }> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
};

export default ContentTabs;