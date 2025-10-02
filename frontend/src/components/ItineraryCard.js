import React from 'react';
import './ItineraryCard.css';

function ItineraryCard({ image, title, location }) {
  return (
    <div className="lp-card">
      <img src={image} alt={title} className="lp-card-image" />
      <div className="lp-card-info">
        <h3>{title}</h3>
        <p>{location}</p>
      </div>
    </div>
  );
}

export default ItineraryCard;