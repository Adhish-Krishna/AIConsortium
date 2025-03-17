import React from 'react';
import { Zap, ChevronRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectsListProps {
  projects: Project[];
  onProjectClick?: (projectId: string) => void;
}

const ProjectsList: React.FC<ProjectsListProps> = ({ projects, onProjectClick }) => {
  return (
    <div className="projects-list">
      {projects.map(project => (
        <div
          key={project.id}
          className="project-card"
          onClick={() => onProjectClick && onProjectClick(project.id)}
        >
          {project.image && (
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>
          )}
          <div className="project-details">
            <div className="project-meta">
              <span className="contributor-count">{project.contributors} contributors</span>
            </div>
            <h3 className="project-title">
              <Zap className="project-icon" />
              {project.title}
            </h3>
            <p className="project-description">{project.description}</p>
            <button className="learn-more">
              Learn more <ChevronRight className="small-icon" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsList;
