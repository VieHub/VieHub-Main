import React from 'react';
import logoImage from '../../../assets/Logo.png';


const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logoImage} alt="Vie Hub Logo" className="logo" />
      </div>
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Contest</a>
        <a href="#">Host Contest</a>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search" className="search-input" />
        <button className="signup-btn">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;