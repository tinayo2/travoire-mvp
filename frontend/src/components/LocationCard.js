import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LocationCard.css'; 

function LocationCard({ name, timings, details, image, id, index }) {
  const navigate = useNavigate();

  const handleAddItinerary = (e) => {
    // Crucial: Stop click from affecting any parent element if present
    e.stopPropagation(); 
    // Redirects to the dynamic detail page using the location's unique ID
    navigate(`/itinerary/${id}`); 
  };

  return (
    <div className="location-card">
      <div className="location-details">
        <h3 className="location-name">{name}</h3>
        <p className="location-timings">{timings}</p>
        <p className="location-info">
          <span className="info-icon">ⓘ</span>
          {details}
        </p>
        <button className="add-button" onClick={handleAddItinerary}>Add to Itinerary</button>
      </div>
      <div className="location-placeholder">
        <img src={image} alt="Location Preview" className="placeholder-image" />
      </div>
    </div>
  );
}

export default LocationCard;