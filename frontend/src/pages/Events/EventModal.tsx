import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EventModal.css';
import { EventData } from '../../types/events';

const CustomEventModal = ({ calendarEvent }: { calendarEvent: EventData }) => {
  const navigate = useNavigate();

  // Format dates for better display - more compact
  const formatDate = (dateString) => {
    const date = new Date(dateString);
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
  
  // Format time only (for same-day events)
  const formatTimeOnly = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  // Handle view more click - navigate to specific event
  const handleViewMore = () => {
    // Navigate to the specific event using its ID
    navigate(`/events/${calendarEvent.id}`);
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
                <strong>{new Date(calendarEvent.start).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</strong><br/>
                <span>
                  {formatTimeOnly(calendarEvent.start)} - {formatTimeOnly(calendarEvent.end)}
                </span>
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