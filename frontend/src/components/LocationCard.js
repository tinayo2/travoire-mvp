import React from 'react';
import './LocationCard.css'; 

function LocationCard({ name, timings, details, image, index }) {
  return (
    <div className="location-card">
      <div className="location-details">
        <h3 className="location-name">{name}</h3>
        <p className="location-timings">{timings}</p>
        <p className="location-info">
          <span className="info-icon">ⓘ</span>
          {details}
        </p>
        <button className="add-button">Add to Itinerary</button>
      </div>
      <div className="location-placeholder">
        <img src={image} alt="Location Preview" className="placeholder-image" />
      </div>
    </div>
  );
}

export default LocationCard;