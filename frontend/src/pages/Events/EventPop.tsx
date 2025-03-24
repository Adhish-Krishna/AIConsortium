import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EventPop.css';

const CustomEvent = ({ calendarEvent }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to a new page with event details
    navigate(`/event/${calendarEvent.id}`);
  };

  return (
    <div
      className="custom-event"
      onClick={handleClick}
    >
      <span className="event-title">{calendarEvent.title}</span>
      <div className="event-popup">
        <p>{calendarEvent.description}</p>
        {/* Add more event details as needed */}
      </div>
    </div>
  );
};

export default CustomEvent;


