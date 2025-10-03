import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HotspotCard.css';

function HotspotCard({ image, title, labels, price, distance, id }) {
  const navigate = useNavigate();

  const handleViewMore = (e) => {
    e.stopPropagation(); 
    navigate(`/itinerary/${id}`);
  };

  return (
    <div className="hotspot-card">
      {/* Outer section for the purple border/shadow effect */}
      <img src={image} alt={title} className="card-image" />
      
      {/* Information Overlay */}
      <div className="card-info">
        <h3 className="card-title">{title}</h3>
        <div className="labels-row">
          {labels.map((label, index) => (
            <span key={index} className="label-tag">
              {label}
            </span>
          ))}
        </div>
        <div className="details-row">
         <div className="details-group">
           <span className="price">{price}</span>
           <span className="distance">{distance}</span>
         </div>
         <button className="view-more-button" onClick={handleViewMore}>View More</button>
        </div>
      </div>
    </div>
  );
}

export default HotspotCard;