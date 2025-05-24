import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.tsx';
import Events from './pages/Events/Events.tsx';
import './index.css';
import Team from './pages/Team/Team.tsx';
import Navigation from './components/Navigation/Navigation';
import Collaborators from './pages/Collaborators/Collaborators.tsx';
import About from './pages/About/About.tsx';
import Register from './pages/Register/Register.tsx';
import ProjectDetailsContainer from './components/ProjectDetails/index';
import PublicationDetailsPage from './components/PublicationDetails/index.tsx';
// import ChatBubble from './components/ChatBubble/ChatBubble.tsx';
import EventDetail from './pages/Events/EventDetail.tsx';
import DirectorsDesk from './pages/DirectorsDesk/DirectorsDesk.tsx';
import Gallery from './pages/Gallery/Gallery.tsx';
import AIWing from './pages/AIWing/AIWing.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Navigation />
      {/* <ChatBubble/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/teams" element={<Team />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path='/register' element={<Register/>}/>
        <Route path="/collaborators" element={<Collaborators/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/projects/:projectId" element={<ProjectDetailsContainer />} />
        <Route path = "/publications/:id" element={<PublicationDetailsPage/>}/>
        <Route path='/directordesk' element={<DirectorsDesk/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/aiwing' element={<AIWing/>}/>
      </Routes>
    </Router>
  </StrictMode>
);
