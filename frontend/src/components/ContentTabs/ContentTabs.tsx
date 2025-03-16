import React, { useState } from 'react';
import { Calendar, TrendingUp, Globe } from 'lucide-react';
import './ContentTabs.css';
import { events, projects } from '../../data/content';
import { members } from '../../data/members';

// Import our new components
import EventsList from './components/EventsList';
import ProjectsList from './components/ProjectsList';
import MembersList from './components/MembersList';
import CommunityHighlights from './components/CommunityHighlights';
import LatestResources from './components/LatestResources';
import Users from './components/icons/Users'; // Use our extracted icon component

const ContentTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('events');

  const handleEventClick = (eventId: string) => {
    console.log(`Event clicked: ${eventId}`);
    // Add navigation or modal logic here
  };

  const handleProjectClick = (projectId: string) => {
    console.log(`Project clicked: ${projectId}`);
    // Add navigation or modal logic here
  };

  const handleMemberClick = (memberId: string) => {
    console.log(`Member clicked: ${memberId}`);
    // Add navigation or modal logic here
  };

  const handleResourceClick = (resourceId: string) => {
    console.log(`Resource clicked: ${resourceId}`);
    // Add navigation or modal logic here
  };

  const handleViewAllResourcesClick = () => {
    console.log('View all resources clicked');
    // Add navigation logic here
  };

  return (
    <section id="content" className="content-section">
      <div className="container">
        <div className="tabs-container">
          <div className="tabs">
            <button
              className={`tab ${activeTab === 'events' ? 'active' : ''}`}
              onClick={() => setActiveTab('events')}
            >
              <Calendar className="tab-icon" /> Events
            </button>
            <button
              className={`tab ${activeTab === 'projects' ? 'active' : ''}`}
              onClick={() => setActiveTab('projects')}
            >
              <TrendingUp className="tab-icon" /> Projects
            </button>
            <button
              className={`tab ${activeTab === 'members' ? 'active' : ''}`}
              onClick={() => setActiveTab('members')}
            >
              <Users className="tab-icon" /> Members
            </button>
          </div>
        </div>

        <div className="content-grid">
          {/* Left Section */}
          <div className="content-card">
            <h2 className="section-title">
              <Globe className="section-icon" />
              Featured Content
            </h2>

            {activeTab === 'events' && (
              <EventsList 
                events={events} 
                onEventClick={handleEventClick} 
              />
            )}

            {activeTab === 'projects' && (
              <ProjectsList 
                projects={projects} 
                onProjectClick={handleProjectClick} 
              />
            )}

            {activeTab === 'members' && (
              <MembersList 
                members={members}
                onMemberClick={handleMemberClick} 
              />
            )}
          </div>

          {/* Right Section */}
          <div className="sidebar">
            <CommunityHighlights />
            <LatestResources 
              onResourceClick={handleResourceClick}
              onViewAllClick={handleViewAllResourcesClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentTabs;