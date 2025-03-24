import React from 'react';
import { Industry as IndustryType } from '../../data/collaborator';
import './industry.css';

interface IndustryProps {
  industry: IndustryType;
}

const Industry: React.FC<IndustryProps> = ({ industry }) => {
  const { logo, name, description } = industry;

  // Use first letter of name as fallback if logo is empty
  const hasLogo = logo && logo.trim() !== '';

  return (
    <div className="industry-card">
      <div className="industry-logo-container">
        {hasLogo ? (
          <img src={logo} alt={`${name} logo`} className="industry-logo" />
        ) : (
          <div className="industry-logo-fallback">{name.charAt(0)}</div>
        )}
      </div>
      <h4 className="industry-name">{name}</h4>
      <p className="industry-description">{description}</p>
    </div>
  );
};

export default Industry;
