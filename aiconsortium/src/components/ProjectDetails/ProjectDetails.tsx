import React from 'react';
import {Users, Star, Calendar,Building, FileText, Link, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import './ProjectDetails.css';
import {Project as ProjectDetailsProps} from '../../data/projects';

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  title,
  description,
  fullDescription,
  contributors,
  contributors_count,
  mentors,
  technologies,
  sactionedDate,
  completedDate,
  duration,
  currentStatus,
  investigatorName,
  collaboratingAgenices,
  sponsorOrganization,
  amount,
  PI_CO_PI,
  proogofAproval,
  repository,
  demoLink,
  projectDepartments,
}) => {

  const getStatusColor = (status: string | undefined) => {
    if (!status) return 'var(--color-gray-500)';

    switch(status.toLowerCase()) {
      case 'ongoing': return 'var(--color-primary)';
      case 'completed': return '#4CAF50';
      case 'planned': return 'var(--color-gray-500)';
      default: return 'var(--color-gray-500)';
    }
  };

  return (
    <div className="detail-project-details-container">
      {/* Header Section */}
      <motion.div
        className={`detail-project-banner ${currentStatus ? `detail-project-status-${currentStatus.toLowerCase()}` : ''}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="detail-project-header-content">
          <h1 className="detail-project-title">{title}</h1>
          <p className="detail-project-subtitle">{description}</p>
          <div className="detail-project-meta-info">
            {currentStatus && (
              <span className="detail-project-status" style={{ backgroundColor: getStatusColor(currentStatus) }}>
                {currentStatus.charAt(0).toUpperCase() + currentStatus.slice(1)}
              </span>
            )}

            <div className="detail-project-dates">
              {sactionedDate && (
                <span className="detail-project-date">
                  <Calendar size={14} />
                  Sanctioned: {sactionedDate}
                </span>
              )}

              {completedDate && (
                <span className="detail-project-date">
                  <Calendar size={14} />
                  Completed: {completedDate}
                </span>
              )}

              {duration && (
                <span className="detail-project-date">
                  <Clock size={14} />
                  Duration: {duration}
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="detail-project-content-grid">
        <div className="detail-project-main-content">
          {/* Investigators Section */}
          {investigatorName && investigatorName.length > 0 && (
            <motion.div
              className="detail-section detail-investigators-section"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="detail-section-title">
                <FileText size={20} className="detail-section-icon" />
                Investigators
              </h2>
              <div className="detail-team-members">
                {investigatorName.map((investigator) => (
                  <div key={investigator.id} className="detail-team-member">
                    <div className="detail-member-info">
                      <span className="detail-member-name">{investigator.name}</span>
                    </div>
                  </div>
                ))}
              </div>

              {PI_CO_PI && (
                <div className="detail-pi-copi">
                  <h3>PI/CO-PI</h3>
                  <p>{PI_CO_PI}</p>
                </div>
              )}
            </motion.div>
          )}

          {/* Project Description Section */}
          <motion.div
            className="detail-section detail-project-description-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="detail-section-title">About this Project</h2>
            <div className="detail-description-content">
              {fullDescription.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {technologies && technologies.length > 0 && (
              <div className="detail-technologies-section">
                <h3>Technologies</h3>
                <div className="detail-tech-tags">
                  {technologies.map((tech, index) => (
                    <span key={index} className="detail-tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Project Links */}
            {(repository || demoLink) && (
              <div className="detail-project-links">
                {repository && (
                  <a href={repository} target="_blank" rel="noopener noreferrer" className="detail-project-link detail-repo-link">
                    <Link size={16} /> View Repository
                  </a>
                )}
                {demoLink && (
                  <a href={demoLink} target="_blank" rel="noopener noreferrer" className="detail-project-link detail-demo-link">
                    <Link size={16} /> View Demo
                  </a>
                )}
              </div>
            )}

            {/* Project Details */}
            <div className="detail-project-additional-info">
              {amount && (
                <div className="detail-info-item">
                  <span className="detail-info-icon">₹</span>
                  <div>
                    <strong>Amount:</strong> {amount}
                  </div>
                </div>
              )}

              {sponsorOrganization && (
                <div className="detail-info-item">
                  <Building size={16} className="detail-info-icon" />
                  <div>
                    <strong>Sponsor Organization:</strong> {sponsorOrganization}
                  </div>
                </div>
              )}

              {projectDepartments && (
                <div className="detail-info-item">
                  <strong>Departments: </strong>{projectDepartments}
                </div>
              )}

              {proogofAproval && (
                <div className="detail-info-item">
                  <FileText size={16} className="detail-info-icon" />
                  <div>
                    <strong>Proof of Approval:</strong> {proogofAproval}
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Collaborating Agencies */}
          {collaboratingAgenices && collaboratingAgenices.length > 0 && (
            <motion.div
              className="detail-section detail-agencies-section"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="detail-section-title">
                <Building size={20} className="detail-section-icon" />
                Collaborating Agencies
              </h2>
              <div className="detail-agencies-list">
                {collaboratingAgenices.map((agency) => (
                  <div key={agency.id} className="detail-agency-item">
                    <h3 className="detail-agency-name">{agency.name}</h3>
                    <p className="detail-agency-address">{agency.address}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        <div className="detail-project-sidebar">
          {/* Mentors Section */}
          {mentors && mentors.length > 0 && (
            <motion.div
              className="detail-section detail-mentors-section"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3>
                <Star size={18} className="detail-section-icon" />
                Mentors ({mentors.length})
              </h3>
              <div className="detail-team-members">
                {mentors.map((mentor) => (
                  <div key={mentor.id} className="detail-team-member">
                    <div className="detail-member-info">
                      <span className="detail-member-name">{mentor.name}</span>
                      <span className="detail-member-role">{mentor.designation}</span>
                      <span className="detail-member-expertise">{mentor.expertise}</span>
                      {mentor.department && <span className="detail-member-department">Dept: {mentor.department}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Contributors Section */}
          { contributors && contributors.length>0 && (
            <motion.div
              className="detail-section detail-team-section"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3>
                <Users size={18} className="detail-section-icon" />
                Contributors {Array.isArray(contributors) ? `(${contributors.length})` : contributors_count ? `(${contributors_count})` : ''}
              </h3>
              <div className="detail-team-members">
                {Array.isArray(contributors) && contributors.map((contributor) => (
                  <div key={contributor.id} className="detail-team-member">
                    <div className="detail-member-info">
                      <span className="detail-member-name">{contributor.name}</span>
                      {contributor.role && <span className="detail-member-role">{contributor.role}</span>}
                      {contributor.department && <span className="detail-member-department">Dept: {contributor.department}</span>}
                      {contributor.rollno && <span className="detail-member-rollno">Roll: {contributor.rollno}</span>}
                    </div>
                  </div>
                ))}
                {!Array.isArray(contributors) && contributors_count && (
                  <div className="detail-member-count">Total: {contributors_count} contributors</div>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
