import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.tsx';
import Events from './pages/Events/Events.tsx';
import './index.css';
import Team from './pages/Team/Team.tsx';
import Navigation from './components/Navigation/Navigation';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/events" element={<Events />} />
        <Route path="/teams" element={<Team />} />
      </Routes>
    </Router>
  </StrictMode>
);