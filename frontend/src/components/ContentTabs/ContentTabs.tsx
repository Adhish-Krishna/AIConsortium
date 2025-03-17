import React, { useState } from 'react';
import {TrendingUp, Calendar, FileText } from 'lucide-react';
import './ContentTabs.css';
import {projects } from '../../data/projects';
// Import or define events data
import { events } from '../../data/events';
// Import publications data
import { publications } from '../../data/publications';

// Import our components
import ProjectsList from './components/ProjectsList';
import EventsList from './components/EventsList';
import PublicationsList from './components/PublicationsList';

import {useNavigate} from 'react-router-dom';

const ContentTabs: React.FC = () => {

  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('projects');

  const handleProjectClick = (projectId: string) => {
    console.log(`Project clicked: ${projectId}`);
    // Add navigation or modal logic here
  };

  const handleEventClick = (eventId: string) => {
    console.log(`Event clicked: ${eventId}`);
    // Add navigation or modal logic here
  };

  const handlePublicationClick = (publicationId: string) => {
    console.log(`Publication clicked: ${publicationId}`);
    // Add navigation or modal logic here
  };

  const handleViewAllClick = ()=>{
    if(activeTab == 'projects'){
      navigate('/projects');
    }
    else if(activeTab == 'events'){
      navigate('/events');
    }
    else if(activeTab == 'publications'){
      navigate('/publications');
    }
  }

  return (
    <section id="content" className="content-section">
      <div className="container">
        <div className="tabs-container">
          <div className="tabs">
            <button
              className={`tab ${activeTab === 'projects' ? 'active' : ''}`}
              onClick={() => setActiveTab('projects')}
            >
              <TrendingUp className="tab-icon" /> Projects
            </button>
            <button
              className={`tab ${activeTab === 'events' ? 'active' : ''}`}
              onClick={() => setActiveTab('events')}
            >
              <Calendar className="tab-icon" /> Events
            </button>
            <button
              className={`tab ${activeTab === 'publications' ? 'active' : ''}`}
              onClick={() => setActiveTab('publications')}
            >
              <FileText className="tab-icon" /> Publications
            </button>
          </div>
        </div>

        <div className="content-grid full-width">
          {/* Main Content */}
          <div className="content-card">
            <h2 className="section-title">
              {activeTab === 'projects' ? (
                <>
                  <TrendingUp className="section-icon" />
                  Featured Projects
                </>
              ) : activeTab === 'events' ? (
                <>
                  <Calendar className="section-icon" />
                  Upcoming Events
                </>
              ) : (
                <>
                  <FileText className="section-icon" />
                  Recent Publications
                </>
              )}
            </h2>

            {activeTab === 'projects' && (
              <ProjectsList
                projects={projects}
                onProjectClick={handleProjectClick}
              />
            )}

            {activeTab === 'events' && (
              <EventsList
                events={events}
                onEventClick={handleEventClick}
              />
            )}

            {activeTab === 'publications' && (
              <PublicationsList
                publications={publications}
                onPublicationClick={handlePublicationClick}
              />
            )}
            <div className="view-all-container">
              <button className="view-all-button" onClick={handleViewAllClick}>
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentTabs;