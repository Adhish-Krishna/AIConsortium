import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Event } from '../types';

interface EventsListProps {
  events: Event[];
  onEventClick?: (eventId: string) => void;
}

const EventsList: React.FC<EventsListProps> = ({ events, onEventClick }) => {
  const handleLearnMoreClick = (eventId: string) => {
    if (onEventClick) {
      onEventClick(eventId);
    }
  };

  return (
    <div className="events-list">
      {events.map(event => (
        <div key={event.id} className="event-card">
          <div className="event-image-container">
            <img
              src={event.image}
              alt={event.title}
              className="event-image"
            />
          </div>
          <div className="event-details">
            <div className="event-meta">{event.date} • {event.location}</div>
            <h3 className="event-title">{event.title}</h3>
            <p className="event-description">{event.description}</p>
            <button 
              className="learn-more"
              onClick={() => handleLearnMoreClick(event.id)}
            >
              Learn more <ChevronRight className="small-icon" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsList;
