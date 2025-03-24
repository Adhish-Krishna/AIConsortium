import React from 'react';
import {Users, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import './ProjectDetails.css';
import {Project as ProjectDetailsProps} from '../../data/projects';

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  title,
  description,
  bannerImage,
  fullDescription,
  contributors,
  mentors,
  technologies,
  startDate,
  status,
  repository,
  demoLink
}) => {

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'ongoing': return 'var(--color-primary)';
      case 'completed': return '#4CAF50';
      case 'planned': return 'var(--color-gray-500)';
      default: return 'var(--color-gray-500)';
    }
  };

  return (
    <div className="detail-project-details-container">
      <motion.div
        className="detail-project-banner"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img src={bannerImage} alt={title} className="detail-banner-image" />
        <div className="detail-project-header-content">
          <h1 className="detail-project-title">{title}</h1>
          <p className="detail-project-subtitle">{description}</p>
          <div className="detail-project-meta-info">
            <span className="detail-project-status" style={{ backgroundColor: getStatusColor(status) }}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
            <span className="detail-project-date">Started: {startDate}</span>
          </div>
        </div>
      </motion.div>

      <div className="detail-project-content-grid">
        <motion.div
          className="detail-project-description-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2>About this Project</h2>
          <div className="detail-description-content">
            {fullDescription.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {technologies.length > 0 && (
            <div className="detail-technologies-section">
              <h3>Technologies</h3>
              <div className="detail-tech-tags">
                {technologies.map((tech, index) => (
                  <span key={index} className="detail-tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          )}

          {(repository || demoLink) && (
            <div className="detail-project-links">
              {repository && (
                <a href={repository} target="_blank" rel="noopener noreferrer" className="detail-project-link detail-repo-link">
                  View Repository
                </a>
              )}
              {demoLink && (
                <a href={demoLink} target="_blank" rel="noopener noreferrer" className="detail-project-link detail-demo-link">
                  View Demo
                </a>
              )}
            </div>
          )}
        </motion.div>

        <motion.div
          className="detail-project-sidebar"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="detail-team-section">
            <h3>
              <Users size={18} className="detail-section-icon" />
              Contributors {typeof contributors === 'number' ? `(${contributors})` : `(${contributors.length})`}
            </h3>
            <div className="detail-team-members">
              {Array.isArray(contributors) && contributors.map((contributor) => (
                <div key={contributor.id} className="detail-team-member">
                  <div className="detail-member-info">
                    <span className="detail-member-name">{contributor.name}</span>
                    <span className="detail-member-role">{contributor.role}</span>
                    {contributor.department && <span className="detail-member-department">Dept: {contributor.department}</span>}
                    {contributor.rollno && <span className="detail-member-rollno">Roll: {contributor.rollno}</span>}
                  </div>
                </div>
              ))}
              {typeof contributors === 'number' && (
                <div className="detail-member-count">Total: {contributors} contributors</div>
              )}
            </div>
          </div>

          {mentors.length > 0 && (
            <div className="detail-mentors-section">
              <h3>
                <Star size={18} className="detail-section-icon" />
                Mentors ({mentors.length})
              </h3>
              <div className="detail-team-members">
                {mentors.map((mentor) => (
                  <div key={mentor.id} className="detail-team-member">
                    <div className="detail-member-info">
                      <span className="detail-member-name">{mentor.name}</span>
                      <span className="detail-member-role">{mentor.expertise}</span>
                      {mentor.department && <span className="detail-member-department">Dept: {mentor.department}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;
