import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EventModal.css';
import { EventData } from '../../data/events'; // Fixed path

const CustomEventModal = ({ calendarEvent }: { calendarEvent: EventData }) => {
  const navigate = useNavigate();

  // Format dates for better display without time
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Generate background color dynamically based on event type
  const headerStyle = {
    backgroundColor: calendarEvent.color || 'var(--color-primary)'
  };

  // Determine if it's a single-day event
  const isSameDay = () => {
    const startDate = new Date(calendarEvent.start);
    const endDate = new Date(calendarEvent.end);
    return startDate.toDateString() === endDate.toDateString();
  };

  // Handle view more click with debugging
  const handleViewMore = () => {
    console.log("Navigating to event details with ID:", calendarEvent.id);
    navigate(`/events/${calendarEvent.id}`);
  };

  // Truncate description to approximate 2 lines
  const truncateDescription = (text) => {
    if (!text) return '';
    const maxLength = 150; // Roughly 2 lines worth of characters
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <div className="event-modal">
      <div className="event-modal-header" style={headerStyle}>
        <h2 className="event-modal-title">{calendarEvent.title}</h2>
        {calendarEvent.type && (
          <span className="event-modal-type">{calendarEvent.type}</span>
        )}
      </div>
      
      <div className="event-modal-body">
        {calendarEvent.description && (
          <p className="event-modal-description">{truncateDescription(calendarEvent.description)}</p>
        )}
        
        <div className="event-modal-section">
          <div className="event-modal-icon">📅</div>
          <div className="event-modal-info">
            {isSameDay() ? (
              <strong>{formatDate(calendarEvent.start)}</strong>
            ) : (
              <>
                <strong>From:</strong> {formatDate(calendarEvent.start)}<br />
                <strong>To:</strong> {formatDate(calendarEvent.end)}
              </>
            )}
          </div>
        </div>
        
        {calendarEvent.location && (
          <div className="event-modal-section">
            <div className="event-modal-icon">📍</div>
            <div className="event-modal-info">{calendarEvent.location}</div>
          </div>
        )}
        
        {calendarEvent.organizer && (
          <div className="event-modal-section">
            <div className="event-modal-icon">👤</div>
            <div className="event-modal-info">
              <strong>Organizer:</strong> {calendarEvent.organizer}
            </div>
          </div>
        )}
      </div>
      
      <div className="event-modal-footer">
        <button 
          className="view-more-btn" 
          onClick={handleViewMore}
          data-event-id={calendarEvent.id} // Add data attribute for debugging
        >
          View More Details
        </button>
      </div>
    </div>
  );
};

export default CustomEventModal;