import React, { useState, useEffect } from 'react'
import './styles.css'
import Locations from './components/Locations/Locations'
import MenuVideo from './components/MenuVideo/MenuVideo'
import Menu from './components/Menu/Menu'
import FeedbackForm from './components/FeedbackForm/FeedbackForm'
import header from './assets/header.png'
import logo from './assets/logo.png'

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showScrollButton, setShowScrollButton] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(`[data-qa="${sectionId}"]`)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true)
      } else {
        setShowScrollButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
            <li><a onClick={() => scrollToSection('beverages')} href="#Beverages">Beverages</a></li>
            <li><a onClick={() => scrollToSection('food')} href="#Food">Food</a></li>
            <li className="nav-logo"><img src={logo} alt="Logo" className="logo" /></li>
            <li><a href="#Company">Company</a></li>
            <li><a onClick={() => scrollToSection('feedback')} href="#Feedback">Feedback</a></li>
          </ul>
        </nav>

        <div className="header-text">
          <h1>Brewed</h1>
          <h1>For</h1>
          <h1>Friends</h1>
        </div>

        <img
          className="headerImage"
          src={header}
          alt="Coffee Club Logo"
          draggable="false"
          onContextMenu={(e) => e.preventDefault()}
          onCopy={(e) => e.preventDefault()}
        />
      </header>

      <main>
        <Locations />
        <MenuVideo />
        <Menu />
        <FeedbackForm />
      </main>

      {showScrollButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          &#8679;
        </button>
      )}
    </div>
  )
}

export default App
