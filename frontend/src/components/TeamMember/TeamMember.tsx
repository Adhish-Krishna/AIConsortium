import React, { useState } from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM for createPortal
import './TeamMember.css';

interface TeamMemberProps {
  image: string;
  name: string;
  designation: string;
  shortDetails: string;
  fullDetails: string;
  achievements?: string[];
  contact?: {
    email?: string;
    linkedin?: string;
  };
}

const TeamMember: React.FC<TeamMemberProps> = ({
  image,
  name,
  designation,
  shortDetails,
  fullDetails,
  achievements = [],
  contact = {}
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleOpenPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  // Render the popup content to be used inside the portal
  const renderPopupContent = () => (
    <div className="team-member-popup-overlay" onClick={handleClosePopup}>
      <div className="team-member-popup" onClick={(e) => e.stopPropagation()}>
        <button className="close-popup-btn" onClick={handleClosePopup}>×</button>

        <div className="popup-content">
          <div className="popup-header">
            <img src={image} alt={`${name}`} className="popup-image" />
            <div>
              <h2 className="popup-name">{name}</h2>
              <h3 className="popup-designation">{designation}</h3>
            </div>
          </div>

          <div className="popup-details">
            <p>{fullDetails}</p>

            {achievements.length > 0 && (
              <div className="achievements-section">
                <h4>Achievements</h4>
                <ul>
                  {achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}

            {(contact.email || contact.linkedin) && (
              <div className="contact-section">
                <h4>Contact</h4>
                {contact.email && <p>Email: {contact.email}</p>}
                {contact.linkedin && (
                  <p>LinkedIn: <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">{contact.linkedin}</a></p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div
        className="team-member-card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="team-member-image-container">
          <img src={image} alt={`${name}`} className="team-member-image" />
        </div>
        <div className="team-member-info">
          <h3 className="team-member-name">{name}</h3>
          <h4 className="team-member-designation">{designation}</h4>
          <p className="team-member-short-details">{shortDetails}</p>

          {isHovered && (
            <button
              className="view-details-btn"
              onClick={handleOpenPopup}
            >
              View Details
            </button>
          )}
        </div>
      </div>

      {/* Render popup using portal to attach it to document.body */}
      {showPopup && ReactDOM.createPortal(
        renderPopupContent(),
        document.body
      )}
    </>
  );
};

export default TeamMember;
