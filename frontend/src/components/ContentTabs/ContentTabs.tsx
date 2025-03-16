import React, { useState } from 'react';
import {TrendingUp, Globe } from 'lucide-react';
import './ContentTabs.css';
import {projects } from '../../data/content';
import { members } from '../../data/members.ts';

// Import our new components
import ProjectsList from './components/ProjectsList';
import MembersList from './components/MembersList';
import CommunityHighlights from './components/CommunityHighlights';
import LatestResources from './components/LatestResources';
import Users from './components/icons/Users'; // Use our extracted icon component

const ContentTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('projects');

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