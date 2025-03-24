import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EventModal.css';

const CustomEventModal = ({ calendarEvent }) => {
  const navigate = useNavigate();

  // Format dates for better display - more compact
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    // More compact date format
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
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

  // Handle view more click
  const handleViewMore = () => {
    // This will redirect to a common details page for all events
    navigate('/events/details');
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
          <p className="event-modal-description">{calendarEvent.description}</p>
        )}
        
        <div className="event-modal-section">
          <div className="event-modal-icon">📅</div>
          <div className="event-modal-info">
            {isSameDay() ? (
              <>
                <strong>{new Date(calendarEvent.start).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</strong><br/>
                {formatDate(calendarEvent.start)} - {formatDate(calendarEvent.end).split(' ')[1]}
              </>
            ) : (
              <>
                <strong>Start:</strong> {formatDate(calendarEvent.start)}<br />
                <strong>End:</strong> {formatDate(calendarEvent.end)}
              </>
            )}
            {calendarEvent.allDay && <span> (All day)</span>}
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
        <button className="view-more-btn" onClick={handleViewMore}>
          View More Details
        </button>
      </div>
    </div>
  );
};

export default CustomEventModal;