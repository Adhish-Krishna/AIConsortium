import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.tsx';
import Events from './Events.tsx';
import './index.css';
import Navigation from './components/Navigation/Navigation';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navigation />
    <Router>
      <Routes>

        <Route path="/" element={<App />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  </StrictMode>
);