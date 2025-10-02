import React, {useState} from 'react';
import './ItineraryButtons.css';
import dropdown from '../assets/images/dropdown.svg';

function ItineraryButtons() {

  const [activeDropdown, setActiveDropdown] = useState(null);
  const itineraryOptions = ['$', '$$', '$$$', '$$$$'];
  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <div className="search-filter-bar">
      <div className="filter-buttons">
        <div className="filter-dropdown-container">
                  <button
                    className={`filter-button ${activeDropdown === 'itineraries' ? 'active' : ''}`}
                    onClick={() => toggleDropdown('itineraries')}
                  >
                    All Itineraries
                    <img src={dropdown} alt="dropdown" className="dropdown-icon" />
                  </button>
                  {activeDropdown === 'itineraries' && (
                    <div className="dropdown-menu">
                      <ul className="dropdown-list">
                        {itineraryOptions.map((option) => (
                          <li key={option} className="dropdown-item">{option}</li>
                        ))}
                      </ul>
                    </div>
                  )}
        </div>
        <button className="filter-button active">New Itinerary</button>
        
      </div>
    </div>
  );
}

export default ItineraryButtons;