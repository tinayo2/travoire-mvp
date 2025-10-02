import React, {useState} from 'react';
import './AlertsFilterBar.css';

function AlertsFilterBar() {
  return (
    <div className="search-filter-bar">
      <div className="filter-buttons">
        <button className="filter-button select">All</button>
        <button className="filter-button active">Transport</button>
        <button className="filter-button active">Weather</button>
        <button className="filter-button active">Event</button>
        <button className="filter-button active">Place</button>
        <button className="filter-button active">Trending</button>
        <button className="filter-button active">Price Drop</button>
        
      </div>
    </div>
  );
}

export default AlertsFilterBar;