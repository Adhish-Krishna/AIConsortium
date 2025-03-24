import React from 'react';
import './EventModal.css';

const CustomEventModal = ({ calendarEvent }) => {
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

  // Generate background color dynamically or use event color
  const headerStyle = {
    backgroundColor: calendarEvent.color || '#001f3f'
  };

  // Determine if it's a single-day event
  const isSameDay = () => {
    const startDate = new Date(calendarEvent.start);
    const endDate = new Date(calendarEvent.end);
    return startDate.toDateString() === endDate.toDateString();
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
    </div>
  );
};

export default CustomEventModal;