import React from 'react';
import { ChevronRight } from 'lucide-react';
import BookOpen from './icons/BookOpen';
import { Resource } from '../types';

interface LatestResourcesProps {
  resources?: Resource[];
  title?: string;
  viewAllLabel?: string;
  onViewAllClick?: () => void;
  onResourceClick?: (resourceId: string) => void;
}

const LatestResources: React.FC<LatestResourcesProps> = ({ 
  title = "Latest Resources",
  viewAllLabel = "View All Resources",
  onViewAllClick,
  onResourceClick,
  resources = [
    {
      id: '1',
      title: "Beginner's Guide to Neural Networks",
      description: "Comprehensive introduction to neural network architectures and applications."
    },
    {
      id: '2',
      title: "AI Ethics Whitepaper",
      description: "Exploring ethical considerations in AI development and deployment."
    },
    {
      id: '3',
      title: "Machine Learning Algorithms Comparison",
      description: "Detailed analysis of popular ML algorithms with performance metrics."
    }
  ]
}) => {
  return (
    <div className="sidebar-card">
      <h2 className="section-title">
        <BookOpen className="section-icon" />
        {title}
      </h2>

      <div className="resources-list">
        {resources.map(resource => (
          <div 
            key={resource.id} 
            className="resource-item"
            onClick={() => onResourceClick && onResourceClick(resource.id)}
          >
            <div className="resource-icon-container">
              {resource.icon || <BookOpen className="resource-icon" />}
            </div>
            <div className="resource-content">
              <h3 className="resource-title">{resource.title}</h3>
              <p className="resource-description">{resource.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="view-all-button" onClick={onViewAllClick}>
        {viewAllLabel} <ChevronRight className="small-icon" />
      </button>
    </div>
  );
};

export default LatestResources;
