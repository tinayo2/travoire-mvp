import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LocationCard from '../components/LocationCard';
import HeatmapFilterBar from '../components/HeatmapFilterBar';
import './HeatmapPage.css';

import scrolldown from '../assets/images/scroll_down.svg'

import HawaMahal from '../assets/images/hawamahal.jpg';
import JantarMantar from '../assets/images/jantarmantar.jpg';
import NahargarhFort from '../assets/images/nahargarh.jpg';
import JalMahal from '../assets/images/fort.jpg';
import BirlaMandir from '../assets/images/birla.jpg';
import AlbertHallMuseum from '../assets/images/albertmuseum.jpg';
import AmberPalace from '../assets/images/amberpalace.jpg';

const dummyLocations = [
    { id: 1, name: "Hawa Mahal", timings: "8:00 a.m. - 6:00 p.m.", details: "The place is 15.7km away from Current location.", image: HawaMahal },
    { id: 2, name: "Jantar Mantar", timings: "8:00 a.m. - 6:00 p.m.", details: "The place is 12.5km away from Current location.", image: JantarMantar },
    { id: 3, name: "Nahargarh Fort", timings: "8:00 a.m. - 6:00 p.m.", details: "The place is 5.4km away from Current location.", image: NahargarhFort },
    { id: 4, name: "Jal Mahal", timings: "8:00 a.m. - 6:00 p.m.", details: "The place is 11.7km away from Current location.", image: JalMahal },
    { id: 5, name: "Birla Mandir", timings: "8:00 a.m. - 6:00 p.m.", details: "The place is 10.8km away from Current location.", image: BirlaMandir },
    { id: 6, name: "Albert Hall Museum", timings: "8:00 a.m. - 6:00 p.m.", details: "The place is 8.7km away from Current location.", image: AlbertHallMuseum },
    { id: 7, name: "Amber Palace", timings: "8:00 a.m. - 6:00 p.m.", details: "The place is 18.2km away from Current location.", image: AmberPalace },

];

function HeatmapPage() {
    return (
        <div className="heatmap-page-container">
            <Header isLandingPage={false} />
            
            <main className="heatmap-main-content">
                <HeatmapFilterBar />

                <div className="map-split-view">
                    <div className="location-list-panel">
                        <p className="results-count">1-4 of 24 results</p>
                        <div className="scrollable-cards">
                          <div className="locations-wrapper">
                            {dummyLocations.map((location, index) => (
                                <LocationCard key={location.id} {...location} index={index} />
                            ))}
                          </div>
                        </div> 
                        <div className="scroll-more-arrow">
                                <img src={scrolldown} alt="Scroll" className="arrow-down" />                       
                        </div>
                    </div>

                    <div className="map-panel">
                        {/* Placeholder for the Heatmap */}
                        <div className="heatmap-placeholder">
                            <img src="/path/to/static/heatmap.jpg" alt="Heatmap Visualization Placeholder" className="heatmap-img" />
                            <button className="fullscreen-button">
                                <span className="fullscreen-icon">⛶</span>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            
            <Footer />
        </div>
    );
}

export default HeatmapPage;