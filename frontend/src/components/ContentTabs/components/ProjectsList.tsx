import React from 'react';
import { Zap, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { UIProject} from '../../../data/projects';
import { useNavigate } from 'react-router-dom';

export interface ProjectsListProps {
  projects: UIProject[];
}

const ProjectsList: React.FC<ProjectsListProps> = ({ projects}) => {
  const navigate = useNavigate();

  const handleLearnMore = (projectId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/projects/${projectId}`);
  };

  const handleProjectClick = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <div className="projects-list">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          className="project-card"
          onClick={() => handleProjectClick(project.id)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="project-details">
            <div className="project-meta">
              <span className="contributor-count">{project.contributors} contributors</span>
            </div>
            <h3 className="project-title">
              <Zap className="project-icon" />
              {project.title}
            </h3>
            <p className="project-description">{project.description}</p>
            <button
              className="learn-more"
              onClick={(e) => handleLearnMore(project.id, e)}
              aria-label={`Learn more about ${project.title}`}
            >
              Learn more <ChevronRight className="small-icon" />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectsList;
