import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SavedItiCards.css';

function SavedItiCards({ image, title, location,id }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    // Use the id to navigate to the dynamic route
    navigate(`/itinerary/${id}`); 
  };
  return (
    <div className="ip-card" onClick={handleCardClick}>
      <img src={image} alt={title} className="ip-card-image" />
      <div className="ip-card-info">
        <h3>{title}</h3>
        <p>{location}</p>
      </div>
    </div>
  );
}

export default SavedItiCards;