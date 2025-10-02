import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // We'll create this file next
import home from '../assets/images/home_button_active.svg';
import groups from '../assets/images/groups_button.svg';
import itineraries from '../assets/images/itineraries_button.svg';
import heatmap from '../assets/images/heatmap_button.svg';
import alert from '../assets/images/alert_button.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="nav-icons">
        <Link to="/groups">
          <img src={groups} alt="Groups" className="icon" />
        </Link>
        
        <Link to="/itineraries">
          <img src={itineraries} alt="Itineraries" className="icon" />
        </Link>
        
        <Link to="/home">
          <img src={home} alt="Home" className="icon" />
        </Link>
        
        <Link to="/heatmap">
          <img src={heatmap} alt="Heatmap" className="icon" />
        </Link>
        
        <Link to="/alerts">
          <img src={alert} alt="Alert" className="icon" />
        </Link>

      </div>
    </footer>
  );
}

export default Footer;