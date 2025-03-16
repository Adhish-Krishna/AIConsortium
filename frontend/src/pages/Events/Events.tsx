import { useState } from 'react';
import { Event, sampleEvents } from '../../data/eventsData';
import './event.css';

const Events = () => {
  const [events, setEvents] = useState<Event[]>(sampleEvents);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all'); // all, upcoming, past
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.guestSpeakers.some(speaker => speaker.toLowerCase().includes(searchTerm.toLowerCase()));

    if (filter === 'all') return matchesSearch;

    const eventDate = new Date(event.date);
    const today = new Date();

    if (filter === 'upcoming' && eventDate >= today) return matchesSearch;
    if (filter === 'past' && eventDate < today) return matchesSearch;

    return false;
  });

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
  };

  const handleBackClick = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="events-container" style={{ paddingTop: "100px" }}>
      <header className="events-header">
        <h1>AI Consortium Events</h1>
        <p>Discover and participate in our AI-focused events</p>
      </header>

      {!selectedEvent ? (
        <>
          <div className="events-filters">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="filter-options">
              <button
                className={filter === 'all' ? 'active' : ''}
                onClick={() => setFilter('all')}
              >
                All Events
              </button>
              <button
                className={filter === 'upcoming' ? 'active' : ''}
                onClick={() => setFilter('upcoming')}
              >
                Upcoming
              </button>
              <button
                className={filter === 'past' ? 'active' : ''}
                onClick={() => setFilter('past')}
              >
                Past
              </button>
            </div>
          </div>

          <div className="events-list">
            {filteredEvents.length > 0 ? (
              filteredEvents.map(event => (
                <div
                  key={event.id}
                  className="event-card"
                  onClick={() => handleEventClick(event)}
                >
                  <div className="event-header">
                    <h2>{event.title}</h2>
                    <span className={`event-status ${event.status.toLowerCase()}`}>
                      {event.status}
                    </span>
                  </div>
                  <div className="event-details">
                    <div className="event-info">
                      <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
                      <p><strong>Time:</strong> {event.time}</p>
                      <p>
                        <strong>Location:</strong> {event.location.type} - {event.location.details}
                      </p>
                    </div>
                    <p className="event-description">{event.description}</p>
                    <div className="event-speakers">
                      <strong>Speakers:</strong>
                      <p>{event.guestSpeakers.join(', ')}</p>
                    </div>
                    {event.isRegistrationOpen && (
                      <button className="register-button">Register Now</button>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="no-events">No events found matching your criteria</p>
            )}
          </div>
        </>
      ) : (
        <div className="event-details-page">
          <button className="back-button" onClick={handleBackClick}>
            &larr; Back to Events
          </button>

          <div className="event-full-details">
            <div className="event-header-details">
              <h1>{selectedEvent.title}</h1>
              <span className={`event-status ${selectedEvent.status.toLowerCase()}`}>
                {selectedEvent.status}
              </span>
            </div>

            <div className="event-main-details">
              <div className="event-datetime">
                <div className="detail-item">
                  <h3>Date</h3>
                  <p>{new Date(selectedEvent.date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</p>
                </div>

                <div className="detail-item">
                  <h3>Time</h3>
                  <p>{selectedEvent.time}</p>
                </div>

                <div className="detail-item">
                  <h3>Location</h3>
                  <p>{selectedEvent.location.type}</p>
                  <p>{selectedEvent.location.details}</p>
                </div>
              </div>

              <div className="event-description-full">
                <h3>About This Event</h3>
                <p>{selectedEvent.description}</p>
                <p>the Decription of event is not found.</p>
              </div>

              <div className="event-speakers-section">
                <h3>Guest Speakers</h3>
                <div className="speakers-grid">
                  {selectedEvent.guestSpeakers.map((speaker, index) => (
                    <div key={index} className="speaker-card">
                      <div className="speaker-avatar">
                        {speaker.split(' ').map(name => name[0]).join('')}
                      </div>
                      <p>{speaker}</p>
                    </div>
                  ))}
                </div>
              </div>

              {selectedEvent.isRegistrationOpen && (
                <div className="registration-section">
                  <h3>Registration</h3>
                  <p>Seats are limited! Register now to secure your spot.</p>
                  <button className="register-button-large">Register for this Event</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;