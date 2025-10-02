import React, {useState} from 'react';
import './SearchFilterBar.css';
import search from '../assets/images/search.svg';
import calendar from '../assets/images/calendar.svg';
import dropdown from '../assets/images/dropdown.svg';

function SearchFilterBar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const budgetOptions = ['$', '$$', '$$$', '$$$$'];
  const distanceOptions = ['< 1 km', '1 - 5 km', '5 - 15 km', '> 15 km'];
  const kindOptions = ['Nature', 'Historical', 'Foodie', 'Adventure', 'Relaxation'];

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };
  

  return (
    <div className="search-filter-bar">
      <div className="search-box">
        <img src={search} alt="search" className="search-icon" />
        <input type="text" placeholder="Search destinations, spots, or itineraries..." />
        <img src={calendar} alt="calendar" className="calendar-icon" />
      </div>
      <div className="filter-buttons">
        <div className="filter-dropdown-container">
          <button
            className={`filter-button ${activeDropdown === 'budget' ? 'active' : ''}`}
            onClick={() => toggleDropdown('budget')}
          >
            Budget
            <img src={dropdown} alt="dropdown" className="dropdown-icon" />
          </button>
          {activeDropdown === 'budget' && (
            <div className="dropdown-menu">
              <ul className="dropdown-list">
                {budgetOptions.map((option) => (
                  <li key={option} className="dropdown-item">{option}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="filter-dropdown-container">
          <button
            className={`filter-button ${activeDropdown === 'distance' ? 'active' : ''}`}
            onClick={() => toggleDropdown('distance')}
          >
            Distance
            <img src={dropdown} alt="dropdown" className="dropdown-icon" />
          </button>
          {activeDropdown === 'distance' && (
            <div className="dropdown-menu">
              <ul className="dropdown-list">
                {distanceOptions.map((option) => (
                  <li key={option} className="dropdown-item">{option}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="filter-dropdown-container">
          <button
            className={`filter-button ${activeDropdown === 'kind' ? 'active' : ''}`}
            onClick={() => toggleDropdown('kind')}
          >
            Kind
            <img src={dropdown} alt="dropdown" className="dropdown-icon" />
          </button>
          {activeDropdown === 'kind' && (
            <div className="dropdown-menu">
              <ul className="dropdown-list">
                {kindOptions.map((option) => (
                  <li key={option} className="dropdown-item">{option}</li>
                ))}
              </ul>
            </div>
          )}
        </div>  
        <button className="filter-button active">Local Fav</button>
        <button className="filter-button active">Trending</button>
        <button className="filter-button clear">Clear Filters</button>
      </div>
    </div>
  );
}

export default SearchFilterBar;