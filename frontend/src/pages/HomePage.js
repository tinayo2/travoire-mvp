import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './HomePage.css'; 
import HotspotCard from '../components/HotspotCard';
import SearchFilterBar from '../components/SearchFilterBar';

import fort from '../assets/images/fort.jpg';
import trek from '../assets/images/trek.jpg';
import chandnichowk from '../assets/images/chandnichowk.jpg';
import Houseboat from '../assets/images/Houseboat.jpg';
import GangaAarti from '../assets/images/GangaAarti.jpg';
import roadtrip from '../assets/images/roadtrip.jpeg';

const baseHotspotData = [
  { id: 1, title: "Royal Rajasthan: Jaipur's Golden Triangle", image: fort, labels: ['Architecture', 'Historical','Palace'], price: '₹₹₹', distance: '4.4 kms' },
  { id: 2, title: "Varanasi: The Spiritual Journey", image: GangaAarti , labels: ['Spiritual', 'Event','Cultural'], price: '₹', distance: '5.2 kms' },
  { id: 3, title: "Himalayan Trek: Manali to Hampta Pass", image: trek , labels: ['Nature', 'Trekking','Adventure'], price: '₹₹', distance: '12 kms' },
  { id: 4, title: "Kerala Backwaters: A Slow-Travel Itinerary", image: Houseboat, labels: ['Relaxation', 'SouthIndia'], price: '₹₹', distance: '8.1 kms' },
  { id: 5, title: "The Ultimate Ladakh Road Trip", image: roadtrip, labels: ['RoadTrip', 'Scenic'], price: '₹₹', distance: '8.1 kms' },
  { id: 6, title: "Old Delhi Food & Bazaar Walk", image: chandnichowk, labels: ['Foodie', 'LocalFav','Heritage'], price: '₹₹', distance: '8.1 kms' },
];

const hotspotData = [
  ...baseHotspotData, // Start with the 6 unique items
  //...Array(1).fill(baseHotspotData[0]), // Duplicate 3 times from the base data
];

function HomePage() {
  return (
    <div className="home-page-container">
      <Header isLandingPage={false} />
      
      <main className="main-content">
        <SearchFilterBar />
        
        <div className="hotspot-section">
          <h2>This Week's Hotspots</h2>
          <div className="scroll-wrapper">
            <div className="horizontal-scroll-container">
              {hotspotData.map((item, index) => (
                <HotspotCard key={index} {...item} />
              ))}
            </div>
            {/* Simple static arrow to indicate scrollability */}
            <div className="scroll-arrow">›</div> 
          </div>
        </div>

        <div className="hotspot-section">
          <h2>Popular Itineraries</h2>
          <div className="scroll-wrapper">
            <div className="horizontal-scroll-container">
              {hotspotData.map((item, index) => (
                <HotspotCard key={index + hotspotData.length} {...item} />
              ))}
            </div>
             <div className="scroll-arrow">›</div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;