import React, { useState } from 'react';
import {TrendingUp, Calendar } from 'lucide-react';
import './ContentTabs.css';
import {projects } from '../../data/content';
// Import or define events data
import { events } from '../../data/events'; // You may need to create this file if it doesn't exist

// Import our components
import ProjectsList from './components/ProjectsList';
import EventsList from './components/EventsList'; // We'll create this component

const ContentTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const handleProjectClick = (projectId: string) => {
    console.log(`Project clicked: ${projectId}`);
    // Add navigation or modal logic here
  };

  const handleEventClick = (eventId: string) => {
    console.log(`Event clicked: ${eventId}`);
    // Add navigation or modal logic here
  };

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
              ) : (
                <>
                  <Calendar className="section-icon" />
                  Upcoming Events
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentTabs;