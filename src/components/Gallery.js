import React, { useState } from 'react';
import './Gallery.css';

const galleryImages = [
  {
    id: 1,
    src: process.env.PUBLIC_URL + '/media/images/boudhanath-stupa.jpg',
    alt: 'Boudhanath Stupa - The largest spherical stupa in Nepal',
    title: 'Boudhanath Stupa',
    description: 'One of the largest spherical stupas in Nepal and the holiest Tibetan Buddhist temple outside Tibet.',
    isEdited: true, 
  },
  {
    id: 2,
    src: process.env.PUBLIC_URL + '/media/images/pashupatinath.jpg',
    alt: 'Pashupatinath Temple - Sacred Hindu temple complex',
    title: 'Pashupatinath Temple',
    description: 'A UNESCO World Heritage Site and one of the most sacred Hindu temples dedicated to Lord Shiva.',
    isEdited: true,
  },
  {
    id: 3,
    src: process.env.PUBLIC_URL + '/media/images/swayambhunath.jpg',
    alt: 'Swayambhunath Temple - The Monkey Temple',
    title: 'Swayambhunath (Monkey Temple)',
    description: 'An ancient religious complex atop a hill with the all-seeing Buddha eyes watching over the valley.',
    isEdited: true,
  },
  {
    id: 4,
    src: process.env.PUBLIC_URL + '/media/images/durbar-square.jpg',
    alt: 'Kathmandu Durbar Square - Historic royal palace square',
    title: 'Kathmandu Durbar Square',
    description: 'A spectacular plaza surrounded by temples, palaces, and courtyards built between the 12th-18th centuries.',
    isEdited: false,
  },
  {
    id: 5,
    src: process.env.PUBLIC_URL + '/media/images/thamel-street.jpg',
    alt: 'Thamel Street - Tourist hub of Kathmandu',
    title: 'Thamel District',
    description: 'The vibrant tourist hub filled with shops, restaurants, and the heartbeat of modern Kathmandu.',
    isEdited: true,
  },
  {
    id: 6,
    src: process.env.PUBLIC_URL + '/media/images/himalayan-view.jpg',
    alt: 'Himalayan Mountain View from Kathmandu',
    title: 'Himalayan Panorama',
    description: 'Breathtaking views of the snow-capped Himalayan range visible from various points in the city.',
    isEdited: true,
  },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="section-header">
        <h2>Photo Gallery</h2>
        <p>Discover the visual splendor of Kathmandu through our curated collection</p>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((image) => (
          <div 
            key={image.id} 
            className={`gallery-item ${image.isEdited ? 'edited' : ''}`}
            onClick={() => openLightbox(image)}
          >
            {/* 
              
            */}
            <div className="image-placeholder">
              <img 
                src={image.src} 
                alt={image.alt}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="placeholder-content" style={{ display: 'none' }}>
                <span className="placeholder-icon">🖼️</span>
                <span className="placeholder-label">{image.title}</span>
                <small>Add: {image.src}</small>
              </div>
            </div>
            {image.isEdited && <span className="edited-badge">✨ Edited</span>}
            <div className="image-overlay">
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeLightbox}>×</button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
              {selectedImage.isEdited && (
                <span className="edited-note">
                  ✨ This image has been professionally edited
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
