import React from 'react';
// Import the image for preconference
import workshops from './assets/workshops.png';
import keynote from './assets/keynote.jpg';
import expo from './assets/expo.png';
import paper from './assets/paper.png';

const eventData = [
  { title: 'Preconference Workshop', img: workshops },
  { title: 'Keynote Speakers Address', img: keynote },
  { title: 'Project Expo', img: expo },
  { title: 'Paper Presentation', img: paper },
];

const EventsSection = () => {
  return (
    <div style={{ 
      margin: '40px auto', 
      padding: '30px', 
      background: 'linear-gradient(135deg, rgba(0, 74, 173, 0.4), rgba(0, 180, 216, 0.4))', 
      borderRadius: '20px', 
      maxWidth: '1200px', 
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)' 
    }}>
      <h2 style={{ 
        color: 'white', 
        textAlign: 'center', 
        marginBottom: '30px', 
        fontSize: '32px', 
        fontWeight: 'bold' 
      }}>
        Events
      </h2>

      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        flexWrap: 'wrap', 
        gap: '30px' 
      }}>
        {eventData.map((event, index) => (
          <div 
            key={index}
            style={{
              width: '250px',
              background: '#0c3c6c', // updated dark blue color
              borderRadius: '16px',
              overflow: 'hidden',
              textAlign: 'center',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img 
              src={event.img} 
              alt={event.title} 
              style={{ width: '100%', height: '250px', objectFit: 'cover' }}
            />
            <div style={{ padding: '10px' }}>
              <h3 style={{ 
                color: 'white', 
                fontSize: '18px', 
                fontWeight: 'bold', 
                marginTop: '10px' 
              }}>
                {event.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsSection;

