import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar.jsx';

import Comitte from './comitte';
import ThemeSection from './Theme/theme.jsx';
import TopicsSection from './Topics/Topics.jsx';
import CallForPapers from './CallForPaper/CallForPaper.jsx';
import Sponsor from './Sponsor.jsx';
import EventsSection from './events.jsx';
import VenueContactSection from './VenueContactSection.jsx';
import Footer from './Footer.jsx';
import About from './reg-about/about.jsx';
import ImpDates from './reg-about/reg.jsx';
import RegDetails from './reg-about/reg.jsx';
import WelcomeCardSection from './cbeplaces.jsx';
import MainContent from './components/MainContent.jsx';
import TempComponent from './temp.jsx';
import Dates from './imp.jsx';
import SpeakerSection from './speaker.jsx';


function App() {
  const [count, setCount] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // State to handle which component to show
  const [showTemp, setShowTemp] = useState(false);

  // Export showTemp state and setter for Navbar to use
  window.appState = {
    showTemp,
    setShowTemp
  };

  // Handle mouse movement to influence the animation
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Background Animation */}
      <BackgroundAnimation mousePosition={mousePosition} />
      
      {/* Only show Navbar when not displaying TempComponent */}
      {!showTemp && (
        <div style={{ position: 'relative', zIndex: 2 }}>
          <Navbar />
        </div>
      )}

      {/* Conditionally render content based on state */}
      {showTemp ? (
        <div style={{ position: 'relative', zIndex: 1 }}>
          <TempComponent />
          {/* Back button to return to main page */}
          <div style={{
            position: 'fixed',
            top: '20px',
            left: '20px',
            zIndex: 10,
            padding: '10px 20px',
            background: '#004AAD',
            color: 'white',
            borderRadius: '8px',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
          }}
          onClick={() => setShowTemp(false)}>
            ← Back to Main
          </div>
        </div>
      ) : (
        <>
          {/* Main Content */}
          <div id="main-content" className="mainctnt" style={{ position: 'relative', zIndex: 1 }}>
            <MainContent />
          </div>

          {/* Section Content */}
{/* Section Content */}
<div style={{ color: '#FFFFFF', position: 'relative', zIndex: 1 }}>
  <div id="about"><About /></div>
  <br />
  <div id="committee"><SpeakerSection/></div>
  <div id="theme"><ThemeSection /></div><br />
  <div id="cfp"><CallForPapers /></div>
  <div id="topics"><TopicsSection /></div>
  <div id="Dates"><Dates /></div>
  <div id="registration"><RegDetails /></div>
  <div id="events"><EventsSection/></div>
  <div id="venue-contact"><VenueContactSection /></div>
  <div id="sponsors"><Sponsor /></div>
  <div id="welcome"><WelcomeCardSection /></div> {/* Places in Coimbatore */}
  <Footer/>
</div>

        </>
      )}
    </>
  );
}

// Background Animation Component
function BackgroundAnimation({ mousePosition }) {
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    // Generate initial particles
    const generateParticles = () => {
      const newParticles = [];
      const count = 30; // Number of particles
      
      for (let i = 0; i < count; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 6 + 2,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
          opacity: Math.random() * 0.5 + 0.1
        });
      }
      
      setParticles(newParticles);
    };
    
    generateParticles();
    
    // Animation loop
    const animationFrame = setInterval(() => {
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          let newX = particle.x + particle.speedX + (mousePosition.x - 0.5) * 0.05;
          let newY = particle.y + particle.speedY + (mousePosition.y - 0.5) * 0.05;
          
          // Wrap around edges
          if (newX > 100) newX = 0;
          if (newX < 0) newX = 100;
          if (newY > 100) newY = 0;
          if (newY < 0) newY = 100;
          
          return {
            ...particle,
            x: newX,
            y: newY
          };
        })
      );
    }, 50);
    
    return () => clearInterval(animationFrame);
  }, [mousePosition]);
  
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        zIndex: 0
      }}
    >
      {particles.map(particle => (
        <div
          key={particle.id}
          style={{
            position: 'absolute',
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            opacity: particle.opacity,
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
            transform: 'translate(-50%, -50%)',
            transition: 'left 0.5s ease, top 0.5s ease'
          }}
        />
      ))}
    </div>
  );
}

export default App;