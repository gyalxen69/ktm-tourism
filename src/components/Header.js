import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Header.css';

function Header() {
  const { cartItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Visit Kathmandu</h1>
          <span className="tagline">The City of Temples</span>
        </div>

        <button 
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${menuOpen ? 'open' : ''}`}></span>
        </button>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><button onClick={() => scrollToSection('hero')}>Home</button></li>
            <li><button onClick={() => scrollToSection('video')}>Explore</button></li>
            <li><button onClick={() => scrollToSection('gallery')}>Gallery</button></li>
            <li><button onClick={() => scrollToSection('audio')}>Sounds</button></li>
            <li><button onClick={() => scrollToSection('activities')}>Activities</button></li>
            <li>
              <button onClick={() => scrollToSection('cart')} className="cart-btn">
                <span className="cart-icon">🛒</span>
                {cartItems.length > 0 && (
                  <span className="cart-count">{cartItems.length}</span>
                )}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
