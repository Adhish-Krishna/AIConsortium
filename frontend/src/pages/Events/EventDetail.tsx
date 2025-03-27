import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getEventById, EventData } from '../../data/events';
import { ArrowLeft, Calendar, MapPin, Users, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import './EventDetail.css';

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState<EventData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Fetch event data
  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    try {
      const eventData = getEventById(id);
      if (eventData) {
        setEvent(eventData);
      }
    } catch (error) {
      console.error("Error retrieving event data:", error);
    }
    
    setLoading(false);
  }, [id]);

  // Handle carousel auto-play
  useEffect(() => {
    if (!event || !event.image) return;
    
    const images = event.gallery && event.gallery.length > 0 ? event.gallery : [event.image];
    
    if (images.length <= 1) return;
    
    const nextSlide = () => {
      setActiveSlide(prev => (prev + 1) % images.length);
    };
    
    autoPlayRef.current = setInterval(nextSlide, 5000);
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [event]);

  // Navigate carousel
  const goToSlide = (index: number) => {
    if (!event || !event.image) return;
    
    const images = event.gallery && event.gallery.length > 0 ? event.gallery : [event.image];
    
    if (index < 0) {
      setActiveSlide(images.length - 1);
    } else if (index >= images.length) {
      setActiveSlide(0);
    } else {
      setActiveSlide(index);
    }
    
    // Reset timer when manually navigating
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = setInterval(() => {
        setActiveSlide(prev => (prev + 1) % images.length);
      }, 5000);
    }
  };

  // Format date for display without time
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Check if event is same day
  const isSameDay = (start: string, end: string) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    return startDate.toDateString() === endDate.toDateString();
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading event details...</p>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="error-container">
        <div className="error-content">
          <h2>Event Not Found</h2>
          <p>Sorry, we couldn't find the event you're looking for.</p>
          <Link to="/events" className="back-link">
            <ArrowLeft size={18} />
            Back to Events
          </Link>
        </div>
      </div>
    );
  }

  // Generate image array for the carousel
  const images = event.gallery && event.gallery.length > 0 ? event.gallery : (event.image ? [event.image] : []);

  return (
    <div className="event-detail-page">
      <div className='space'>
      <div className="event-detail-hero" style={{ 
        backgroundImage: `linear-gradient(rgba(29, 36, 64, 0.9), rgba(29, 36, 64, 0.7)), url(${event.image})` 
      }}>
        <div className="event-detail-hero-content">
          <button onClick={() => navigate(-1)} className="back-button">
            <ArrowLeft size={18} />
            Back
          </button>
          <h1>{event.title}</h1>
          <div className="event-badges">
            {event.type && <span className="event-badge">{event.type}</span>}
            {event.mode && <span className="event-badge event-badge-mode">{event.mode}</span>}
          </div>
        </div>
      </div>
      
      <div className="event-detail-container">
        <div className="event-detail-grid">
          <div className="event-detail-main">
            {/* Carousel - only show if there are images */}
            {images.length > 0 && (
              <div className="event-carousel">
                <div className="carousel-container" ref={carouselRef}>
                  <div className="carousel-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                    {images.map((img, index) => (
                      <div key={index} className="carousel-slide">
                        <img src={img} alt={`${event.title} - slide ${index + 1}`} />
                      </div>
                    ))}
                  </div>
                  
                  {images.length > 1 && (
                    <>
                      <button 
                        className="carousel-arrow carousel-arrow-left" 
                        onClick={() => goToSlide(activeSlide - 1)}
                      >
                        <ChevronLeft size={24} />
                      </button>
                      
                      <button 
                        className="carousel-arrow carousel-arrow-right" 
                        onClick={() => goToSlide(activeSlide + 1)}
                      >
                        <ChevronRight size={24} />
                      </button>
                      
                      <div className="carousel-indicators">
                        {images.map((_, index) => (
                          <button
                            key={index}
                            className={`carousel-indicator ${activeSlide === index ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
            
            <div className="event-description">
              <h2>About This Event</h2>
              <p>{event.description}</p>
            </div>
          </div>
          
          <div className="event-detail-sidebar">
            <div className="event-info-card">
              <div className="event-info-item">
                <div className="event-info-icon">
                  <Calendar size={20} />
                </div>
                <div className="event-info-content">
                  <h3>Date</h3>
                  {isSameDay(event.start, event.end) ? (
                    <p className="event-date">{formatDate(event.start)}</p>
                  ) : (
                    <>
                      <p className="event-date">From: {formatDate(event.start)}</p>
                      <p className="event-date">To: {formatDate(event.end)}</p>
                    </>
                  )}
                </div>
              </div>
              
              {event.location && (
                <div className="event-info-item">
                  <div className="event-info-icon">
                    <MapPin size={20} />
                  </div>
                  <div className="event-info-content">
                    <h3>Location</h3>
                    <p>{event.location}</p>
                    {event.mode && (
                      <span className={`location-tag ${event.mode}`}>
                        {event.mode === 'online' ? 'Virtual Event' : 'In-Person Event'}
                      </span>
                    )}
                  </div>
                </div>
              )}
              
              {event.organizer && (
                <div className="event-info-item">
                  <div className="event-info-icon">
                    <Users size={20} />
                  </div>
                  <div className="event-info-content">
                    <h3>Organizer</h3>
                    <p>{event.organizer}</p>
                  </div>
                </div>
              )}
              
              {event.type && (
                <div className="event-info-item">
                  <div className="event-info-icon">
                    <Tag size={20} />
                  </div>
                  <div className="event-info-content">
                    <h3>Event Type</h3>
                    <p>{event.type}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default EventDetail;