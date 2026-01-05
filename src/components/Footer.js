import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>Visit Kathmandu</h3>
          <p>
            Discover the magic of Nepal's ancient capital city. From sacred temples 
            to vibrant markets, Kathmandu offers an unforgettable journey through 
            history, culture, and natural beauty.
          </p>
        </div>

        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#video">Explore</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#audio">Sounds</a></li>
            <li><a href="#activities">Activities</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h4>Contact</h4>
          <p>📍 Thamel, Kathmandu, Nepal</p>
          <p>📧 info@visitkathmandu.com</p>
          <p>📱 +977-1-XXXXXXX</p>
        </div>

        <div className="footer-section social">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="YouTube">📺</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Visit Kathmandu - Tourism Promotion Project</p>
        <p className="project-note">
          Created as part of a React-based multimedia web development project.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
