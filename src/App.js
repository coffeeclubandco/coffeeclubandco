import React, { useState } from 'react'
import './styles.css'
import Locations from './components/Locations/Locations'
import MenuVideo from './components/MenuVideo/MenuVideo'
import Menu from './components/Menu/Menu'
import FeedbackForm from './components/FeedbackForm'
import header from './assets/header.png'
import logo from './assets/logo.png'

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(`[data-qa="${sectionId}"]`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <div className="app">
      {isMenuOpen && <div className="menu-backdrop" onClick={closeMenu}></div>}
      <header className="header">
        <nav className="navbar">
          <div className="menu-icon" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {isMenuOpen && <button className="close-btn" onClick={closeMenu}>&times;</button>}

            <li><a href="#Home">Home</a></li>
            <li><a onClick={() => scrollToSection('beverages')} href="#Beverages">Beverages</a></li>
            <li className="nav-logo">
              <img src={logo} alt="Logo" className="logo" />
            </li>
            <li><a onClick={() => scrollToSection('food')} href="#Food">Food</a></li>
            <li><a href="#Company">Company</a></li>
          </ul>
        </nav> 
        <div className="header-text">
          <h1>Brewed</h1>
          <h1>For</h1>
          <h1>Friends</h1>
        </div>
        <img className="headerImage" src={header} alt="Coffee Club Logo" />
      </header>
      <main>
        <Locations/>
        <MenuVideo />
        {/* <Menu />
        <FeedbackForm /> */}
      </main>
    </div>
  );
};

export default App;