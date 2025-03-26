import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { events } from '../../../data/events';

// Accept events prop but use the imported events as fallback
const EventsList = ({ events: propEvents }) => {
  const navigate = useNavigate();
  
  // Use props if provided, otherwise use imported events
  const displayEvents = propEvents || events;
  
  if (!displayEvents || displayEvents.length === 0) {
    return <p className="events-intro">No upcoming events at the moment.</p>;
  }

  // Format date nicely
  const formatEventDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  // Navigate to event details page with debugging
  const onEventClick = (eventId) => {
    console.log("Navigating to event from homepage with ID:", eventId);
    navigate(`/events/${eventId}`);
  };

  return (
    <div className="events-list">
      {displayEvents.map((event, index) => (
        <motion.div
          key={event.id}
          className="event-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {event.image && (
            <div className="event-image-container">
              <img src={event.image} alt={event.title} className="event-image" />
            </div>
          )}
          <div className="event-details">
            <div className="event-meta">
              <Calendar className="meta-icon" /> {formatEventDate(event.start)}
              {event.location && <span className="event-location"> • {event.location}</span>}
            </div>
            <h3 className="event-title">{event.title}</h3>
            {event.description && <p className="event-description">{event.description}</p>}
            <button 
              className="learn-more" 
              onClick={() => onEventClick(event.id)}
              data-event-id={event.id}
            >
              Learn More <ChevronRight className="small-icon" />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default EventsList;