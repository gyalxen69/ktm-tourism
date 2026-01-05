import React, { useState, useRef } from 'react';
import './VideoSection.css';

function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef(null);

  const handlePlayClick = async () => {
    setIsPlaying(true);
    const video = videoRef.current;
    if (video) {
      try {
        // play() returns a promise in modern browsers
        await video.play();
      } catch (err) {
        console.error('Video playback failed:', err);
      }
    }
  };

  return (
    <section id="video" className="video-section">
      <div className="section-header">
        <h2>Experience Kathmandu</h2>
        <p>Take a virtual tour through the streets and temples of this magical city</p>
      </div>

      <div className="video-container">
        <div className="video-wrapper">
          {!isPlaying && (
            <div className="video-placeholder" onClick={handlePlayClick}>
              <div className="play-button">
                <span className="play-icon">▶</span>
              </div>
              <p className="placeholder-text">
                Click to play promotional video
              </p>
            </div>
          )}
          
          <video 
            id="promo-video"
            ref={videoRef}
            className={`promo-video ${isPlaying ? 'visible' : ''}`}
            controls
            preload="metadata"
            poster=""
          >
            <source src="/media/videos/kathmandu-tour.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="video-info">
          <h3>What You'll See</h3>
          <ul className="video-highlights">
            <li>🏛️ Ancient Durbar Squares</li>
            <li>🙏 Sacred Temples & Stupas</li>
            <li>🛍️ Vibrant Local Markets</li>
            <li>🏔️ Himalayan Panoramas</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
