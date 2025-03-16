import React from 'react';
import { Briefcase } from 'lucide-react';
import { Member } from '../types';

interface MembersListProps {
  members: Member[];
  introText?: string;
  onMemberClick?: (memberId: string) => void;
}

const MembersList: React.FC<MembersListProps> = ({ 
  members, 
  introText = "Meet the leadership team behind the AI Consortium. Our members bring diverse expertise from academia, industry, and policy.",
  onMemberClick 
}) => {
  return (
    <div className="members-list">
      <p className="members-intro">
        {introText}
      </p>

      {members.map(member => (
        <div 
          key={member.id} 
          className="member-card"
          onClick={() => onMemberClick && onMemberClick(member.id)}
        >
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

export default MembersList;
