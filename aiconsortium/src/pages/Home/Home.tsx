import { useEffect, useState } from 'react';
// import Navigation from './components/Navigation/Navigation';
import Hero from '../../components/Hero/Hero';
import VisionMission from '../../components/VisionMission/VisionMission';
import ContentTabs from '../../components/ContentTabs/ContentTabs';
import CallToAction from '../../components/CallToAction/CallToAction';
import Footer from '../../components/Footer/Footer';
// import {GlobeDemo} from '../../components/ui/globedemo';
// import LatestAINews from '../../components/LatestAINews/LatestAINews';
import PhotoGallery from '../../components/Gallery/PhotoGallery';

//importing styles
import './Home.css';

function Home() {
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
      <div className="home-photo-gallery">
        <h1 className="home-photo-gallery-font">Photo Gallery</h1>
        <PhotoGallery/>
      </div>
      {/* <LatestAINews/> */}
      <CallToAction />
      <Footer />
      {/* Only render GlobeDemo when not in mobile view */}
      {/* {!isMobileView && <GlobeDemo />} */}
      {/*Add this globe under the call to action section*/}
    </div>
  );
}

export default Home;