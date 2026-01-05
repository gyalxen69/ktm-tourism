import React from 'react';
import './Hero.css';

function Hero() {
  const scrollToActivities = () => {
    const element = document.getElementById('activities');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background" style={{ backgroundImage: "url('/media/images/hero-background.jpg')" }}>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-subtitle">Welcome to</span>
          Kathmandu
        </h1>
        <p className="hero-description">
          Discover the ancient temples, vibrant culture, and breathtaking 
          Himalayan views of Nepal's historic capital city.
        </p>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">7</span>
            <span className="stat-label">UNESCO Sites</span>
          </div>
          <div className="stat">
            <span className="stat-number">1400+</span>
            <span className="stat-label">Years of History</span>
          </div>
          <div className="stat">
            <span className="stat-number">2700+</span>
            <span className="stat-label">Temples</span>
          </div>
        </div>
        <button className="cta-button" onClick={scrollToActivities}>
          Plan Your Adventure
        </button>
      </div>
    </section>
  );
}

export default Hero;
