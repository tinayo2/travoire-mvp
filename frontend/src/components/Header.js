import React from 'react';
import './Header.css';
import logo from '../assets/images/logo.svg';
import contact from '../assets/images/contact.svg';
import scan from '../assets/images/scan.svg';
import profile from '../assets/images/profile.svg';

function Header({ isLandingPage }) {
  if (isLandingPage) {
    return (
      <Header className="header landing-page-header">
        <img src={logo} alt="Travoire Logo" className="logo" />
      </Header>
    );
  }

  return (
    <header className="header main-app-header">
      <img src={logo} alt="Travoire Logo" className="logo" />
      <div className="nav-icons">
        <img src={contact} alt="Contact Us" className="icon" />
        <img src={scan} alt="Scan QR" className="icon" />
        <img src={profile} alt="Profile" className="icon" />
      </div>
    </header>
  );
}

export default Header;