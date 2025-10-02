import React from 'react';
import './AlertItem.css'; 

function AlertItem({ image, description, time }) {
  return (
    <div className="alert-item">
      <div className="alert-content">
        <img src={image} alt="Alert Icon" className="alert-icon" />
        <p className="alert-description">{description}</p>
      </div>
      <div className="alert-actions">
        <button className="view-map-button">View on Map</button>
        <span className="alert-time">{time}</span>
      </div>
    </div>
  );
}

export default AlertItem;