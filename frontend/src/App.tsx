import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import VisionMission from './components/VisionMission/VisionMission';
import ContentTabs from './components/ContentTabs/ContentTabs';
import DataVisualization from './components/DataVisualization/DataVisualization';
import CallToAction from './components/CallToAction/CallToAction';
import Footer from './components/Footer/Footer';
import {GlobeDemo} from './components/ui/globedemo';

function App() {
  return (
    <div className="app">
      {/* <Navigation /> */}
      <Hero />
      <VisionMission />
      <ContentTabs />
      <DataVisualization />
      <CallToAction />
      <Footer />
      <GlobeDemo />
    </div>
  );
}

export default App;