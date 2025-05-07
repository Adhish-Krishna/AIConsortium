import React, { useEffect, useRef, useState } from "react";
import grd from './assets/grd.jpg';
import marudhamalai from './assets/marudhamalai.png';
import isha from './assets/isha.png';
import gass from './assets/gass.png';
import gd from './assets/gd.png';
import ilovekovai from './assets/ilovekovai.jpg';
import thiruvalluvar from './assets/thiruvalluvar.jpg';
import boat from './assets/boat.jpg';
import perur from './assets/perur.jpg';
import ooty from './assets/ooty.jpg';
import falls from './assets/falls.jpg';

const WelcomeCardSection = () => {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const speedRef = useRef(0.5); // Reduced from 2 to 0.8 for slower scrolling

  const images = [
    { name: "PSG GRD Museum", img: grd },
    { name: "Marudhamalai Temple", img: marudhamalai },
    { name: "Isha Yoga Center", img: isha },
    { name: "Gass Forest Museum", img: gass },
    { name: "GD Car Museum", img: gd },
    { name: "Ukkadam Lake Spot", img: ilovekovai },
    { name: "Thiruvalluvar Statue", img: thiruvalluvar },
    { name: "Vallankulam Boat House", img: boat },
    { name: "Perur Temple", img: perur },
    { name: "Ooty", img: ooty },
    { name: "Siruvani Falls", img: falls }
  ];

  const repeatedImages = [...images, ...images]; // Duplicate for seamless scroll

  const animate = () => {
    if (scrollRef.current && !isPaused) {
      scrollRef.current.scrollLeft += speedRef.current;
      
      // Reset to start for seamless loop
      if (
        scrollRef.current.scrollLeft >=
        scrollRef.current.scrollWidth / 2
      ) {
        // Use a small offset to avoid visible jump
        scrollRef.current.scrollLeft = 1;
      }
    }
    
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    // Start animation
    animationRef.current = requestAnimationFrame(animate);
    
    // Clean up on unmount
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  return (
    <div
      style={{
        width: "100%",
        padding: "40px 0",
        background: 'linear-gradient(135deg, rgba(0, 74, 173, 0.4), rgba(0, 180, 216, 0.4))',
        color: "#fff",
        textAlign: "center",
        borderRadius: "30px",
        overflow: "hidden",
        marginTop: "30px",
      }}
    >
      <div style={{ width: "90%", margin: "0 auto" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px", fontWeight: "bold" }}>
          Welcome to Coimbatore
        </h2>

        <div
          ref={scrollRef}
          style={{
            display: "flex",
            overflowX: "auto",
            gap: "20px",
            paddingBottom: "10px",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
            willChange: "scroll-position", // Hint for browser optimization
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setTimeout(() => setIsPaused(false), 1000)}
        >
          {repeatedImages.map((place, index) => (
            <div 
              key={index} 
              style={{ 
                minWidth: "250px", 
                textAlign: "center", 
                flexShrink: 0,
                transform: "translateZ(0)", // Force GPU acceleration
              }}
            >
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "16px",
                  transition: "transform 0.3s ease",
                }}
              >
                <img
                  src={place.img}
                  alt={place.name}
                  style={{
                    width: "250px",
                    height: "180px",
                    objectFit: "cover",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                    transition: "transform 0.3s ease",
                    transform: "translateZ(0)", // Force GPU acceleration
                  }}
                  loading={index < 6 ? "eager" : "lazy"} // Load visible images first
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
                    padding: "20px 10px 10px 10px",
                    transform: "translateY(100%)",
                    transition: "transform 0.3s ease",
                    opacity: 0,
                  }}
                  className="card-overlay"
                >
                  <span style={{ fontWeight: "bold" }}>{place.name}</span>
                </div>
              </div>
              <div style={{ marginTop: "8px", fontWeight: "bold" }}>{place.name}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        [ref="scrollRef"]::-webkit-scrollbar {
          display: none;
        }
        
        div:hover .card-overlay {
          transform: translateY(0);
          opacity: 1;
        }
        
        /* Optimize animations */
        @media (prefers-reduced-motion: reduce) {
          * {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default WelcomeCardSection;