import React from 'react';
import './SavedItiCards.css';

function SavedItiCards({ image, title, location }) {
  return (
    <div className="ip-card">
      <img src={image} alt={title} className="ip-card-image" />
      <div className="ip-card-info">
        <h3>{title}</h3>
        <p>{location}</p>
      </div>
    </div>
  );
}

export default SavedItiCards;