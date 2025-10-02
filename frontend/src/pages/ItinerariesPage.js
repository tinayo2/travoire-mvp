import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SavedItiCards from '../components/SavedItiCards'; 
import './ItinerariesPage.css';

import varanasighats from '../assets/images/varanasighats.jpg';
import hawamahal from '../assets/images/hawamahal.jpg';
import charminaar from '../assets/images/charminaar.jpg';
import agondabeach from '../assets/images/agondabeach.jpg';
import mahabalipuram from '../assets/images/mahabalipuram.jpg';
import tajmahal from '../assets/images/tajmahal.jpg';
import mysorepalace from '../assets/images/mysorepalace.jpg';
import ItineraryButtons from '../components/ItineraryButtons';

// --- Dummy Data ---
const itinerariesData = [
  { id: 1, title: 'Varanasi Ghat', location: 'Varanasi', image: varanasighats, month: 'This Month' },
  { id: 2, title: 'Hawa Mahal', location: 'Jaipur', image: hawamahal, month: 'This Month' },
  { id: 3, title: 'Charminar', location: 'Hyderabad', image: charminaar, month: 'This Month' },
  { id: 4, title: 'Agonda Beach', location: 'Goa', image: agondabeach, month: 'Next Month' },
  { id: 5, title: 'Mahabalipuram', location: 'Tamil Nadu', image: mahabalipuram, month: 'Next Month' },
  { id: 6, title: 'Taj Mahal', location: 'Agra', image: tajmahal, month: 'Next Month' },
  { id: 7, title: 'Mysore Palace', location: 'Karnataka', image: mysorepalace, month: 'Next Month' },
];

function ItinerariesPage() {
  const thisMonth = itinerariesData.filter(item => item.month === 'This Month');
  const nextMonth = itinerariesData.filter(item => item.month === 'Next Month');

  return (
    <div className="itineraries-page-container">
      <Header isLandingPage={false} />
      
      <main className="itineraries-main-content">

        <div className="page-header-actions">
          <h1>My Itineraries</h1>
          <ItineraryButtons />
        </div>

        {/* Section 1: This Month */}
        <div className="itinerary-section">
          <h2>This Month</h2>
          <div className="scroll-container">
            {thisMonth.map((item, index) => (
              <SavedItiCards key={index} {...item} />
            ))}
          </div>
        </div>

        {/* Section 2: Next Month */}
        <div className="itinerary-section">
          <h2>Next Month</h2>
          <div className="scroll-container">
            {nextMonth.map((item, index) => (
              <SavedItiCards key={index + 10} {...item} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ItinerariesPage;