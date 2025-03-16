import React from 'react';
import Users from './icons/Users';
import { TimelineItem } from '../types';

interface CommunityHighlightsProps {
  timelineItems?: TimelineItem[];
  title?: string;
}

const CommunityHighlights: React.FC<CommunityHighlightsProps> = ({ 
  title = "Community Highlights",
  timelineItems = [
    {
      id: '1',
      label: 'Latest Achievement',
      title: 'AI Ethics Framework Adopted',
      description: 'Our community-developed AI Ethics Framework has been adopted by 5 major tech companies, setting new industry standards.'
    },
    {
      id: '2',
      label: 'Member Spotlight',
      title: 'Dr. Maya Rodriguez',
      description: 'Recognized for groundbreaking research in neural network optimization, reducing training time by 40% while improving accuracy.'
    },
    {
      id: '3',
      label: 'Community Growth',
      title: '10,000 Member Milestone',
      description: 'Our community has reached 10,000 members across 52 countries, representing diverse perspectives in AI development.'
    }
  ]
}) => {
  return (
    <div className="sidebar-card">
      <h2 className="section-title">
        <Users className="section-icon" />
        {title}
      </h2>

      <div className="timeline">
        {timelineItems.map(item => (
          <div key={item.id} className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-label">{item.label}</div>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityHighlights;
