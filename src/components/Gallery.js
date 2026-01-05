import React, { useState } from 'react';
import './Gallery.css';

/*
  PLACEHOLDER IMAGES - Replace with your edited images
  
  Place your images in: /public/media/images/
  
  At least ONE image must show evidence of editing:
  - Color correction
  - Compositing
  - Filters
  - Text overlay
  - Other photo manipulation
*/

const galleryImages = [
  {
    id: 1,
    src: '/media/images/boudhanath-stupa.jpg',
    alt: 'Boudhanath Stupa - The largest spherical stupa in Nepal',
    title: 'Boudhanath Stupa',
    description: 'One of the largest spherical stupas in Nepal and the holiest Tibetan Buddhist temple outside Tibet.',
    isEdited: true, // Mark this as your edited image
  },
  {
    id: 2,
    src: '/media/images/pashupatinath.jpg',
    alt: 'Pashupatinath Temple - Sacred Hindu temple complex',
    title: 'Pashupatinath Temple',
    description: 'A UNESCO World Heritage Site and one of the most sacred Hindu temples dedicated to Lord Shiva.',
    isEdited: false,
  },
  {
    id: 3,
    src: '/media/images/swayambhunath.jpg',
    alt: 'Swayambhunath Temple - The Monkey Temple',
    title: 'Swayambhunath (Monkey Temple)',
    description: 'An ancient religious complex atop a hill with the all-seeing Buddha eyes watching over the valley.',
    isEdited: false,
  },
  {
    id: 4,
    src: '/media/images/durbar-square.jpg',
    alt: 'Kathmandu Durbar Square - Historic royal palace square',
    title: 'Kathmandu Durbar Square',
    description: 'A spectacular plaza surrounded by temples, palaces, and courtyards built between the 12th-18th centuries.',
    isEdited: false,
  },
  {
    id: 5,
    src: '/media/images/thamel-street.jpg',
    alt: 'Thamel Street - Tourist hub of Kathmandu',
    title: 'Thamel District',
    description: 'The vibrant tourist hub filled with shops, restaurants, and the heartbeat of modern Kathmandu.',
    isEdited: false,
  },
  {
    id: 6,
    src: '/media/images/himalayan-view.jpg',
    alt: 'Himalayan Mountain View from Kathmandu',
    title: 'Himalayan Panorama',
    description: 'Breathtaking views of the snow-capped Himalayan range visible from various points in the city.',
    isEdited: false,
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
              PLACEHOLDER: Replace src with your actual image paths
              Example: src="/media/images/your-image.jpg"
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
