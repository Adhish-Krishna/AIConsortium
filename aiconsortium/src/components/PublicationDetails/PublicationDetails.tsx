import React from 'react';
import { Users, Book, ExternalLink, Calendar, Award,} from 'lucide-react';
import { motion } from 'framer-motion';
import './PublicationDetails.css';
import { Publication } from '../../data/publications';

const PublicationDetails: React.FC<Publication> = ({
  title,
  abstract,
  authors,
  mentors,
  journal,
  year,
  doi,
  keywords,
  citations,
  pdfLink,
  collaborators,
  publisher,
  issn_no,
  isbn_no
}) => {
  return (
    <div className="detail-publication-container">
      <motion.div
        className="detail-publication-banner no-image"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="detail-publication-header-content">
          <h1 className="detail-publication-title">
            {title}
          </h1>
          <p className="detail-publication-subtitle">
            {abstract && abstract.length > 150
              ? `${abstract.substring(0, 150)}...`
              : abstract}
          </p>
          <div className="detail-publication-meta-info">
            <span className="detail-publication-journal">
              <Book size={14} className="detail-icon" />
              {journal}
            </span>
            <span className="detail-publication-year">
              <Calendar size={14} className="detail-icon" />
              {year}
            </span>
            {citations && (
              <span className="detail-publication-citations">
                Citations: {citations}
              </span>
            )}
          </div>
        </div>
      </motion.div>

      <div className="detail-publication-content-grid">
        <motion.div
          className="detail-publication-main-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2>Abstract</h2>
          <div className="detail-abstract-content">
            <p>{abstract}</p>
          </div>

          {keywords && keywords.length > 0 && (
            <div className="detail-keywords-section">
              <h3>Keywords</h3>
              <div className="detail-keyword-tags">
                {keywords.map((keyword, index) => (
                  <span key={index} className="detail-keyword-tag">{keyword}</span>
                ))}
              </div>
            </div>
          )}

          {(doi || pdfLink) && (
            <div className="detail-publication-links">
              {doi && (
                <a href={`https://doi.org/${doi}`} target="_blank" rel="noopener noreferrer" className="detail-publication-link detail-doi-link">
                  <ExternalLink size={14} /> View on DOI
                </a>
              )}
              {/* {pdfLink && (
                <a href={pdfLink} target="_blank" rel="noopener noreferrer" className="detail-publication-link detail-pdf-link">
                  <ExternalLink size={14} /> Download PDF
                </a>
              )} */}
            </div>
          )}
        </motion.div>

        <motion.div
          className="detail-publication-sidebar"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="detail-authors-section">
            <h3>
              <Users size={18} className="detail-section-icon" />
              Authors
            </h3>
            <div className="detail-authors-list">
              {Array.isArray(authors) && authors.map((author, index) => (
                <div key={index} className="detail-author-item">
                  <span className="detail-author-name">{author.name}</span>
                  {author.department && <span className="detail-author-department">{author.department}</span>}
                  {author.rollno && <span className="detail-author-rollno">Roll No: {author.rollno}</span>}
                  {author.affiliation && <span className="detail-author-affiliation">{author.affiliation}</span>}
                </div>
              ))}
            </div>
          </div>

          {mentors && mentors.length > 0 && (
            <div className="detail-mentors-section">
              <h3>
                <Award size={18} className="detail-section-icon" />
                Mentors
              </h3>
              <div className="detail-mentors-list">
                {mentors.map((mentor, index) => (
                  <div key={index} className="detail-mentor-item">
                    <span className="detail-mentor-name">{mentor.name}</span>
                    <span className="detail-mentor-designation">{mentor.designation}</span>
                    <span className="detail-mentor-department">{mentor.department}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {collaborators && collaborators.length > 0 && (
            <div className="detail-collaborators-section">
              <h3>
                <Users size={18} className="detail-section-icon" />
                Collaborating Institutions
              </h3>
              <div className="detail-collaborators-list">
                {collaborators.map((collaborator, index) => (
                  <div key={index} className="detail-collaborator-item">
                    <span className="detail-collaborator-name">{collaborator}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="detail-journal-section">
            <h3>
              <Book size={18} className="detail-section-icon" />
              Journal Information
            </h3>
            <div className="detail-journal-info">
              <p><strong>Journal:</strong> {journal}</p>
              <p><strong>Publisher:</strong> <span className="detail-publisher">{publisher}</span></p>
              <p><strong>Year:</strong> {year}</p>
              {doi && <p><strong>DOI:</strong> {doi}</p>}
              {issn_no && <p><strong>ISSN No:</strong> {issn_no}</p>}
              <p><strong>ISBN No:</strong> {isbn_no}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PublicationDetails;
