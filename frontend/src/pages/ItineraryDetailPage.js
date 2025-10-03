import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ItineraryDetailPage.css';

import fort from '../assets/images/fort.jpg';
import trek from '../assets/images/trek.jpg';
import chandnichowk from '../assets/images/chandnichowk.jpg';
import Houseboat from '../assets/images/Houseboat.jpg';
import GangaAarti from '../assets/images/GangaAarti.jpg';
import roadtrip from '../assets/images/roadtrip.jpeg';

// --- Dummy Data ---
const dummyDetailData = {
  id: 1,
  title: "Royal Rajasthan: Jaipur's Golden Triangle",
  nights: 3,
  price: '₹25,000',
  reviewScore: 4.8,
  image: fort,
  itinerary: [
    { day: 1, time: 'MORNING', activity: 'Arrive in Jaipur, transfer to hotel. Free leisure time.' },
    { day: 1, time: 'NOON TO EVENING', activity: 'Amber Fort & Jal Mahal guided tour.' },
    { day: 2, time: 'FULL DAY', activity: 'Jaipur Pink City Sightseeing: Hawa Mahal, City Palace, Jantar Mantar.' },
    { day: 3, time: 'MORNING TO NOON', activity: 'Shopping at local bazaars and street food walk.' },
    { day: 3, time: 'EVENING', activity: 'Farewell Dinner and transfer to airport.' },
  ]
};

// Component for a single timeline item
const ItineraryDay = ({ day, time, activity }) => (
    <div className="itinerary-day-row">
        <div className="timeline-day">Day {day}</div>
        <div className="timeline-activity">
            <span className="timeline-time">{time}</span>
            <p>{activity}</p>
        </div>
    </div>
);

function ItineraryDetailPage() {
  const data = dummyDetailData; // In a real app, you'd fetch this using the ID from the URL

  return (
    <div className="detail-page-container">
      <Header isLandingPage={false} />
      
      <main className="detail-main-content">
        
        {/* 1. Hero Section (Image, Title, Price) */}
        <div className="hero-section">
          <img src={data.image} alt={data.title} className="hero-image" />
          <div className="hero-overlay">
            <h1>{data.title} - {data.nights} Nights</h1>
            <p className="price-tag">Price: {data.price} (Avg.)</p>
            <p className="review-tag">⭐ {data.reviewScore} ({Math.floor(Math.random() * 100) + 50} Reviews)</p>
          </div>
        </div>

        {/* 2. Action Buttons */}
        <div className="action-buttons-bar">
          <button className="contact-button whatsapp-btn">
            <span className="icon">💬</span> WhatsApp (API Placeholder)
          </button>
          <button className="contact-button call-btn">
            <span className="icon">📞</span> Call Us (API Placeholder)
          </button>
          <button className="save-button">+ Add/Save Itinerary</button>
        </div>
        
        {/* 3. Itinerary Flow / Timeline */}
        <div className="itinerary-timeline-card">
          <h2>Itinerary Guide</h2>
          {data.itinerary.map((item, index) => (
              <ItineraryDay key={index} {...item} />
          ))}
        </div>
        
        {/* 4. Heatmap Placeholder (API Integration Point) */}
        <div className="heatmap-section">
            <h2>Real-Time Crowd Map</h2>
            <div className="heatmap-placeholder-box">
                Heatmap Visualization Placeholder (Live API Data)
            </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default ItineraryDetailPage;