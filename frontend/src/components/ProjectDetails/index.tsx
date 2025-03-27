import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProjectDetails from './ProjectDetails';
import { projects, Project } from '../../data/projects';
import {Project as ProjectDetailsProps} from '../../data/projects';

const ProjectDetailsContainer: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [projectData, setProjectData] = useState<ProjectDetailsProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch project details from the projects data
    const fetchProjectDetails = () => {
      try {
        // Find the project by ID
        const project = projects.find(p => p.id === projectId);

        if (project) {
          // Convert project to ProjectDetailsProps format
          const formatContributors = (contributors: Project['contributors']) => {
            if (Array.isArray(contributors)) {
              return contributors;
            } else {
              // If contributors is just a number, return an empty array
              // In a real app, you might want to generate some placeholder contributors
              return [];
            }
          };

          const projectDetails: ProjectDetailsProps = {
            id: project.id,
            title: project.title,
            description: project.description,
            fullDescription: project.fullDescription,
            contributors: formatContributors(project.contributors),
            contributors_count: project.contributors_count,
            mentors: project.mentors,
            technologies: project.technologies,
            sactionedDate: project.sactionedDate,
            completedDate: project.completedDate,
            duration: project.duration,
            currentStatus: project.currentStatus,
            investigatorName: project.investigatorName,
            collaboratingAgenices: project.collaboratingAgenices,
            sponsorOrganization: project.sponsorOrganization,
            amount: project.amount,
            PI_CO_PI: project.PI_CO_PI,
            proogofAproval: project.proogofAproval,
            repository: project.repository,
            demoLink: project.demoLink,
            projectDepartments: project.projectDepartments,
          };

          // Simulate a short loading time for better UX
          setTimeout(() => {
            setProjectData(projectDetails);
            setLoading(false);
          }, 300);
        } else {
          console.error('Project not found');
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching project details:', error);
        setLoading(false);
      }
    };

    fetchProjectDetails();
  }, [projectId]);

  if (loading) {
    return <div className="loading-container">Loading project details...</div>;
  }

  if (!projectData) {
    return <div className="error-container">Project not found</div>;
  }

  return <ProjectDetails {...projectData} />;
};

export default ProjectDetailsContainer;
