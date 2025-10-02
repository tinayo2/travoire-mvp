import React from 'react';
import Header from '../components/Header';
//import Footer from '../components/Footer';
import ItineraryCard from '../components/ItineraryCard';
import LoginForm from '../components/LoginForm';
import './LandingPage.css';

import tajmahal from '../assets/images/tajmahal.jpg';
import varanasighats from '../assets/images/varanasighats.jpg';
import goldentemple from '../assets/images/goldentemple.jpg';
import joshimath from '../assets/images/joshimath.jpg';
import rishikesh from '../assets/images/rishikesh.jpg';
import ujjaintemple from '../assets/images/ujjaintemple.jpg';
import hawamahal from '../assets/images/hawamahal.jpg';
import mysorepalace from '../assets/images/mysorepalace.jpg';
import tirupatibalaji from '../assets/images/tirupatibalaji.jpg';
import vaishnodevi from '../assets/images/vaishnodevi.jpg';
import mahabalipuram from '../assets/images/mahabalipuram.jpg';
import darjeeling from '../assets/images/darjeeling.jpg';
import charminaar from '../assets/images/charminaar.jpg';
import kedarnath from '../assets/images/kedarnath.jpg';
import agondabeach from '../assets/images/agondabeach.jpg';
import backwaters from '../assets/images/backwaters.jpg';
import pushkarfair from '../assets/images/pushkarfair.jpg';

const featuredDestinations = [
  { id: 1, title: 'Taj Mahal', location: 'Agra', image: tajmahal },
  { id: 2, title: 'Varanasi Ghats', location: 'Varanasi', image: varanasighats },
  { id: 3, title: 'Golden Temple', location: 'Amritsar', image: goldentemple },
  { id: 4, title: 'Joshimath', location: 'Uttarakhand', image: joshimath },
  { id: 5, title: 'Rishikesh', location: 'Uttarakhand', image: rishikesh },
  { id: 6, title: 'Ujjain Temple', location: 'Madhya Pradesh', image: ujjaintemple },

  { id: 7, title: 'Hawa Mahal', location: 'Jaipur', image: hawamahal },
  { id: 8, title: 'Mysore Palace', location: 'Karnataka', image: mysorepalace },
  { id: 9, title: 'Tirupati Balaji', location: 'Tirumala', image: tirupatibalaji },
  { id: 10, title: 'Vaishno Devi', location: 'Katra', image: vaishnodevi},
  { id: 11, title: 'Mahabalipuram', location: 'Tamil Nadu', image: mahabalipuram },
  { id: 12, title: 'Darjeeling', location: 'West Bengal', image: darjeeling },
  
  { id: 13, title: 'Charminar', location: 'Hyderabad', image: charminaar },
  { id: 14, title: 'Kedarnath', location: 'Uttarakhand', image: kedarnath },
  { id: 15, title: 'Agonda Beach', location: 'Goa', image: agondabeach },
  { id: 16, title: 'Backwaters', location: 'Kerala', image: backwaters },
  { id: 17, title: 'Darjeeling', location: 'West Bengal', image: darjeeling },
  { id: 18, title: 'Pushkar Fair', location: 'Rajasthan', image: pushkarfair },
];


function LandingPage() {
  return (
    <div className="landing-page-container">
      {/* Use the header component and pass the prop */}
      <Header isLandingPage={true} />

      <div className="landing-page-split">
        <div className="left-panel">
          <div className="card-grid infinite-scroll-container"> 
             {featuredDestinations.map((destination, index) => (
                <ItineraryCard key={`original-${index}`} {...destination} /> 
             ))}
    
             {/* DUPLICATE CARDS (For seamless loop) */}
             {featuredDestinations.map((destination, index) => (
                <ItineraryCard key={`duplicate-${index}`} {...destination} /> 
             ))}

             {featuredDestinations.map((destination, index) => (
                <ItineraryCard key={`duplicate-${index}`} {...destination} /> 
             ))}

             {featuredDestinations.map((destination, index) => (
                <ItineraryCard key={`duplicate-${index}`} {...destination} /> 
             ))}
          </div>
        </div>  

        <div className="right-panel">
          {/* This panel is for the login form */}
          <main className="landing-page-content">
            <h1>Your crowd-free passport to India's best.</h1>
            <LoginForm />
          </main>
        </div>
      </div>

      {/* The footer component */}
      
    </div>
  );
}

export default LandingPage;