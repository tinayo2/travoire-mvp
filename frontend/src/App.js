import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import HeatmapPage from './pages/HeatmapPage';
import AlertsPage from './pages/AlertsPage';
import ItinerariesPage from './pages/ItinerariesPage';
import './App.css'; // You can keep this for general app styling

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/heatmap" element={<HeatmapPage />} />
        <Route path="/alerts" element={<AlertsPage />} />
        <Route path="/itineraries" element={<ItinerariesPage />} />
      </Routes>
    </div>
  );
}

export default App;