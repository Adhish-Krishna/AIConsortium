import React, { useState, useEffect } from 'react';
import './AISpectrumLink.css';

const AISpectrumLink: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Determine what text to display based on screen size
  const getLinkText = () => {
    if (windowWidth <= 360) {
      return 'AI Spec';
    } else if (windowWidth <= 480) {
      return 'The AI Spectrum';
    } else {
      return 'Interenational Conference on The AI Spectrum'
    }
  };

  // This component will navigate to /aispectrum which will be handled by nginx
  return (
    <div className="aispectrum-link">
      <a href="/aispectrum" title="AI Spectrum Conference">
        {getLinkText()}
      </a>
    </div>
  );
};

export default AISpectrumLink;