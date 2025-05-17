import React, { useState, useRef, useEffect } from 'react';
import {TrendingUp, Calendar, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import './ContentTabs.css';
import { projects as sourceProjects, Project as DataProject } from '../../data/projects';
import { events } from '../../data/events';
import { publications } from '../../data/publications';

import ProjectsList from './components/ProjectsList';
import EventsList from './components/EventsList';
import PublicationsList from './components/PublicationsList';
import { UIProject } from '../../data/projects';

const ContentTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('events');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const convertProjects = (dataProjects: DataProject[]): UIProject[] => {
    return dataProjects.map(project => {
      return {
        id: project.id,
        title: project.title,
        contributors: Array.isArray(project.contributors)
          ? project.contributors.length
          : project.contributors,
        description: project.description
      };
    });
  };

  const uiProjects = convertProjects(sourceProjects);

  const checkScrollability = () => {
    const container = scrollContainerRef.current;
    if (container) {
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
    if (scrollContainerRef.current) {
      const scrollElement = scrollContainerRef.current.querySelector('.projects-list, .events-list, .publications-list');
      if (scrollElement) {
        scrollElement.scrollLeft = 0;
      }
    }

    setTimeout(checkScrollability, 300);

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

        setTimeout(checkScrollability, 300);
      }
    }
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
            <button
              className={`tab ${activeTab === 'publications' ? 'active' : ''}`}
              onClick={() => setActiveTab('publications')}
            >
              <FileText className="tab-icon" /> Publications
            </button>
          </div>
        </div>

        <div className="content-grid full-width">
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
                  Events
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
                    projects={uiProjects}
                  />
                )}

                {activeTab === 'events' && (
                  <EventsList
                    events={events}
                  />
                )}

                {activeTab === 'publications' && (
                  <PublicationsList
                    publications={publications}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentTabs;