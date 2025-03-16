import { useEffect, useState } from 'react';
// import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import VisionMission from './components/VisionMission/VisionMission';
import ContentTabs from './components/ContentTabs/ContentTabs';
import DataVisualization from './components/DataVisualization/DataVisualization';
import CallToAction from './components/CallToAction/CallToAction';
import Footer from './components/Footer/Footer';
import {GlobeDemo} from './components/ui/globedemo';

function App() {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    // Function to check if screen width is less than threshold
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth < 500);
    };

    // Initial check
    checkMobileView();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobileView);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobileView);
  }, []);

  return (
    <div className="app" style={{
      overflow: 'hidden',
      maxWidth: '100vw',
      position: 'relative'
    }}>
      {/* <Navigation /> */}
      <Hero />
      <VisionMission />
      <ContentTabs />
      <DataVisualization />
      <CallToAction />
      <Footer />
      {/* Only render GlobeDemo when not in mobile view */}
      {!isMobileView && <GlobeDemo />}
    </div>
  );
}

export default App;