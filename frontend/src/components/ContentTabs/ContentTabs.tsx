import React, { useState, useRef, useEffect } from 'react';
import {TrendingUp, Calendar, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
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

// import {useNavigate} from 'react-router-dom';

const ContentTabs: React.FC = () => {
  // const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('projects');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true); // Default to true for better UX

  const checkScrollability = () => {
    const container = scrollContainerRef.current;
    if (container) {
      // Get the actual scroll element (first child with overflow)
      const scrollElement = container.querySelector('.projects-list, .events-list, .publications-list');

      if (scrollElement) {
        setCanScrollLeft(scrollElement.scrollLeft > 5);
        setCanScrollRight(
          scrollElement.scrollLeft < scrollElement.scrollWidth - scrollElement.clientWidth - 5
        );
      }
    }
  };

  useEffect(() => {
    // Reset scroll position when changing tabs
    if (scrollContainerRef.current) {
      const scrollElement = scrollContainerRef.current.querySelector('.projects-list, .events-list, .publications-list');
      if (scrollElement) {
        scrollElement.scrollLeft = 0;
      }
    }

    // Check scrollability after tab change with a slight delay to allow rendering
    setTimeout(checkScrollability, 300);

    // Add listener for window resize
    window.addEventListener('resize', checkScrollability);
    return () => window.removeEventListener('resize', checkScrollability);
  }, [activeTab]);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollElement = container.querySelector('.projects-list, .events-list, .publications-list');

      if (scrollElement) {
        const scrollAmount = scrollElement.clientWidth * 0.75;
        scrollElement.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth'
        });

        // Update scroll buttons after scrolling
        setTimeout(checkScrollability, 300);
      }
    }
  };

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

  // const handleViewAllClick = ()=>{
  //   if(activeTab == 'projects'){
  //     navigate('/projects');
  //   }
  //   else if(activeTab == 'events'){
  //     navigate('/events');
  //   }
  //   else if(activeTab == 'publications'){
  //     navigate('/publications');
  //   }
  // }

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
            <h2 className="content-tabs-section-title">
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

            <div className="scrollable-wrapper">
              <button
                className={`content-scroll-arrow left ${!canScrollLeft ? 'disabled' : ''}`}
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                aria-label="Scroll left"
              >
                <ChevronLeft />
              </button>

              <div
                ref={scrollContainerRef}
                className="scrollable-container"
              >
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
              </div>

              <button
                className={`content-scroll-arrow right ${!canScrollRight ? 'disabled' : ''}`}
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                aria-label="Scroll right"
              >
                <ChevronRight />
              </button>
            </div>

            {/* <div className="view-all-container">
              <button className="view-all-button" onClick={handleViewAllClick}>
                View All
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentTabs;