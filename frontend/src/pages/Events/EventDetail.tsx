import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getEventById } from '../../data/events';
import { EventData } from '../../types/events';
import { ArrowLeft, Calendar, MapPin, Users, Tag } from 'lucide-react';
import './EventDetail.css';

const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [event, setEvent] = useState<EventData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    const eventData = getEventById(id);
    if (eventData) {
      setEvent(eventData);
      // Only set active image if image exists
      if (eventData.image) {
        setActiveImage(eventData.image);
      }
    }
    setLoading(false);
  }, [id]);

  const formatDateRange = (start: string, end: string) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    
    // Format for displaying dates
    const dateOptions: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    
    // Format for time
    const timeOptions: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    };

    // If same day event
    if (startDate.toDateString() === endDate.toDateString()) {
      return (
        <>
          <div className="date">{startDate.toLocaleDateString('en-US', dateOptions)}</div>
          <div className="time">
            {startDate.toLocaleTimeString('en-US', timeOptions)} - {endDate.toLocaleTimeString('en-US', timeOptions)}
          </div>
        </>
      );
    }
    
    // Multi-day event
    return (
      <>
        <div className="date">
          {startDate.toLocaleDateString('en-US', dateOptions)} - {endDate.toLocaleDateString('en-US', dateOptions)}
        </div>
        <div className="time">
          {startDate.toLocaleTimeString('en-US', timeOptions)} - {endDate.toLocaleTimeString('en-US', timeOptions)}
        </div>
      </>
    );
  };

  if (loading) {
    return (
      <div className="event-detail-loading">
        <div className="loader"></div>
        <p>Loading event details...</p>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="event-detail-error">
        <h2>Event Not Found</h2>
        <p>Sorry, we couldn't find the event you're looking for.</p>
        <button onClick={() => navigate('/events')} className="back-button">
          <ArrowLeft size={18} /> Back to Events
        </button>
      </div>
    );
  }

  return (
    <div className="event-detail-container">
      <div className="event-detail-header">
        <button onClick={() => navigate(-1)} className="back-button">
          <ArrowLeft size={18} /> Back
        </button>
        <h1 className="event-detail-title">{event.title}</h1>
        <div className="event-detail-meta">
          {event.type && <span className="event-detail-type">{event.type}</span>}
          {event.organizer && <span className="event-detail-organizer">by {event.organizer}</span>}
        </div>
      </div>

      <div className="event-detail-content">
        <div className="event-detail-main">
          {/* Only show image gallery if there are images */}
          {event.image && (
            <div className="event-detail-image-gallery">
              <div className="main-image-container">
                <img src={activeImage || event.image} alt={event.title} className="main-image" />
              </div>
              {event.gallery && event.gallery.length > 1 && (
                <div className="image-thumbnails">
                  {event.gallery.map((img, index) => (
                    <img 
                      key={index}
                      src={img} 
                      alt={`${event.title} - image ${index + 1}`}
                      className={`thumbnail ${activeImage === img ? 'active' : ''}`}
                      onClick={() => setActiveImage(img)}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Only show description if it exists */}
          {event.description && (
            <div className="event-detail-description">
              <h2>About This Event</h2>
              <p>{event.description}</p>
            </div>
          )}
        </div>

        <div className="event-detail-sidebar">
          <div className="event-detail-card">
            {/* Date and time are always shown as they're required */}
            <div className="event-card-item">
              <Calendar size={18} className="event-card-icon" />
              <div className="event-card-content">
                <h3>Date & Time</h3>
                {formatDateRange(event.start, event.end)}
              </div>
            </div>

            {/* Only show location if it exists */}
            {event.location && (
              <div className="event-card-item">
                <MapPin size={18} className="event-card-icon" />
                <div className="event-card-content">
                  <h3>Location</h3>
                  {event.mode && <p className="location-mode">{event.mode === 'online' ? 'Online Event' : 'In-person Event'}</p>}
                  <p>{event.location}</p>
                </div>
              </div>
            )}

            {/* Only show organizer if it exists */}
            {event.organizer && (
              <div className="event-card-item">
                <Users size={18} className="event-card-icon" />
                <div className="event-card-content">
                  <h3>Organizer</h3>
                  <p>{event.organizer}</p>
                </div>
              </div>
            )}

            {/* Only show event type if it exists */}
            {event.type && (
              <div className="event-card-item">
                <Tag size={18} className="event-card-icon" />
                <div className="event-card-content">
                  <h3>Event Type</h3>
                  <p>{event.type}</p>
                </div>
              </div>
            )}
          </div>

          <button className="register-button">Register Now</button>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;