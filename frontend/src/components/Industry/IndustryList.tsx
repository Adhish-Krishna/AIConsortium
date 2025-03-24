import React from 'react';
import { Industry as IndustryType } from '../../data/collaborator';
import Industry from './Industry';
import './industry.css';

interface IndustryListProps {
  industries: IndustryType[];
}

const IndustryList: React.FC<IndustryListProps> = ({ industries }) => {
  return (
    <div className="industry-container">
      {industries.map((industry, index) => (
        <Industry key={index} industry={industry} />
      ))}
    </div>
  );
};

export default IndustryList;
