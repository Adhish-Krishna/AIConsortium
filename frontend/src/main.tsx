import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.tsx';
import Events from './pages/Events/Events.tsx';
import './index.css';
import Team from './pages/Team/Team.tsx';
import Navigation from './components/Navigation/Navigation';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/events" element={<Events />} />
        <Route path="/teams" element={<Team />} />
      </Routes>
    </Router>
  </StrictMode>
);