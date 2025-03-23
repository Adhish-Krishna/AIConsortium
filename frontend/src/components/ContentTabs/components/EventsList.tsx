import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  image?: string;
  location?: string;
}

interface EventsListProps {
  events: Event[];
  onEventClick: (eventId: string) => void;
}

const EventsList: React.FC<EventsListProps> = ({ events, onEventClick }) => {
  if (!events || events.length === 0) {
    return <p className="events-intro">No upcoming events at the moment.</p>;
  }

  return (
    <div className="events-list">
      {events.map((event, index) => (
        <motion.div
          key={event.id}
          className="event-card"
          onClick={() => onEventClick(event.id)}
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
              <Calendar className="meta-icon" /> {event.date}
              {event.location && <span className="event-location"> • {event.location}</span>}
            </div>
            <h3 className="event-title">{event.title}</h3>
            <p className="event-description">{event.description}</p>
            <button className="learn-more">
              Learn More <ChevronRight className="small-icon" />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default EventsList;
