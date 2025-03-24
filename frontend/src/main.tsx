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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/teams" element={<Team />} />
        <Route path='/register' element={<Register/>}/>
        <Route path="/collaborators" element={<Collaborators/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/projects/:projectId" element={<ProjectDetailsContainer />} />
      </Routes>
    </Router>
  </StrictMode>
);