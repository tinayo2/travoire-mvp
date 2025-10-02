import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AlertItem from '../components/AlertItem';
import AlertsFilterBar from '../components/AlertsFilterBar';
import './AlertsPage.css';

import event from'../assets/images/alert_tags/event.svg';
import place from'../assets/images/alert_tags/place.svg';
import pricedrop from'../assets/images/alert_tags/pricedrop.svg';
import transport from'../assets/images/alert_tags/transport.svg';
import trending from'../assets/images/alert_tags/trending.svg';
import weather from'../assets/images/alert_tags/weather.svg';

const dummyAlerts = [
    { id:1, image: transport, description: "Blue Line trains delayed by 15 minutes.", time: "5 minutes ago", type: 'Transport' },
    { id:2, image: place, description: "The Taj Mahal will be closed for tourists on Friday morning due to a VIP visit.", time: "5 minutes ago", type: 'Place' },
    { id:3, image: event, description: "Cultural dance festival in Kochi extended by one more day – additional shows on Sunday.", time: "5 minutes ago", type: 'Event' },
    { id:4, image: trending, description: "Mehrangarh Fort night view event is trending – over 500+ visitors checked in today.", time: "5 minutes ago", type: 'Trending' },
    { id:5, image: weather, description: "Heavy rainfall expected in Jaipur tonight (7 PM onwards). Outdoor activities may be disrupted.", time: "5 minutes ago", type: 'Weather' },
    { id:6, image: pricedrop, description: "Flight fares to Goa are expected to rise after midnight – consider booking now.", time: "5 minutes ago", type: 'Price Drop' },
];

function AlertsPage() {
    return (
        <div className="alerts-page-container">
            <Header isLandingPage={false} />
            
            <main className="alerts-main-content">
                <AlertsFilterBar />
                
                <div className="scrollable-alerts">
                  <div className="alerts-list">
                    {dummyAlerts.map((alert, index) => (
                        <AlertItem key={alert.id} {...alert} index={index} />
                    ))}
                  </div>
                </div>  
            </main>
            
            <Footer />
        </div>
    );
}

export default AlertsPage;