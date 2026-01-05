# Kathmandu Tourism Promotion Web Page

A React-based tourism promotion website for Kathmandu, Nepal featuring multimedia integration and interactive activity selection.

## Project Structure

```
src/
├── App.js                    # Main application component
├── index.js                  # Entry point
├── context/
│   └── CartContext.js        # State management for activity cart
├── components/
│   ├── Header.js             # Navigation header with cart count
│   ├── Hero.js               # Hero section with edited background image
│   ├── VideoSection.js       # Video/3D animation section
│   ├── Gallery.js            # Photo gallery with lightbox
│   ├── AudioSection.js       # Audio player with track list
│   ├── Activities.js         # Tourist activities with filtering
│   ├── Cart.js               # Activity cart/itinerary
│   ├── Footer.js             # Footer component
│   └── *.css                 # Component styles
└── styles/
    ├── index.css             # Global styles and CSS variables
    └── App.css               # App container styles

public/
└── media/                    # MULTIMEDIA FILES GO HERE
    ├── images/
    │   ├── hero-background.jpg      # Edited hero image (REQUIRED)
    │   ├── boudhanath-stupa.jpg
    │   ├── pashupatinath.jpg
    │   ├── swayambhunath.jpg
    │   ├── durbar-square.jpg
    │   ├── thamel-street.jpg
    │   ├── himalayan-view.jpg
    │   └── activities/
    │       ├── pashupatinath-tour.jpg
    │       ├── boudhanath-walk.jpg
    │       ├── durbar-square-tour.jpg
    │       ├── food-tour.jpg
    │       ├── swayambhu-trek.jpg
    │       ├── pottery-class.jpg
    │       ├── mountain-flight.jpg
    │       └── cooking-class.jpg
    ├── videos/
    │   └── kathmandu-tour.mp4       # Promo video (REQUIRED)
    └── audio/
        ├── temple-bells.mp3         # Audio clip (REQUIRED - 30+ seconds)
        ├── thamel-sounds.mp3
        └── narrated-guide.mp3
```

## Multimedia Requirements

### 1. Video or 3D Animation (REQUIRED)
- **Location**: `/public/media/videos/kathmandu-tour.mp4`
- **Options**: 
  - Promotional video of Kathmandu
  - Street tour footage
  - 3D animation you created
- **Formats supported**: MP4, WebM, OGG

### 2. Edited Image (REQUIRED)
- **Location**: `/public/media/images/` (any image marked as "edited")
- **Must show evidence of editing**:
  - Color correction
  - Compositing
  - Filters
  - Text overlay
  - Other photo manipulation
- The first gallery image (`boudhanath-stupa.jpg`) is marked as the edited image

### 3. Audio Clip (REQUIRED - 30+ seconds)
- **Location**: `/public/media/audio/`
- **Options**:
  - Background music
  - Ambient city sounds
  - Narrated guide
  - Local tale/story
- **Formats supported**: MP3, WAV, OGG

## Setup Instructions

1. **Create a new React app** (if not already done):
   ```bash
   npx create-react-app kathmandu-tourism
   cd kathmandu-tourism
   ```

2. **Copy the source files**:
   - Copy all files from `src/kathmandu-tourism/` to your project's `src/` folder
   - Replace the existing `src/App.js` and `src/index.js`

3. **Create multimedia folders**:
   ```bash
   mkdir -p public/media/images/activities
   mkdir -p public/media/videos
   mkdir -p public/media/audio
   ```

4. **Add your multimedia files** to the respective folders

5. **Install dependencies** (if needed):
   ```bash
   npm install
   ```

6. **Start the development server**:
   ```bash
   npm start
   ```

## Features

### Multimedia Integration
- ✅ Video section with play controls
- ✅ Photo gallery with lightbox
- ✅ Audio player with multiple tracks
- ✅ All placeholders ready for your content

### User Interaction
- ✅ Tourist activities with category filtering
- ✅ Add/remove activities to itinerary (cart)
- ✅ Booking request functionality
- ✅ Responsive design for all devices

### Technical Features
- ✅ React-based SPA
- ✅ Context API for state management
- ✅ Reusable components
- ✅ CSS custom properties (variables)
- ✅ Mobile-responsive design
- ✅ Smooth scroll navigation

## Customization

### Colors
Edit the CSS variables in `styles/index.css`:
```css
:root {
  --primary: #c41e3a;        /* Temple Red */
  --secondary: #d4a574;      /* Golden/Brass */
  --accent: #2e8b57;         /* Forest Green */
  /* ... more variables */
}
```

### Activities
Edit the `tourActivities` array in `components/Activities.js` to add/modify tourist activities.

### Gallery Images
Edit the `galleryImages` array in `components/Gallery.js` to customize the photo gallery.

### Audio Tracks
Edit the `audioTracks` array in `components/AudioSection.js` to add your audio files.

## Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge

## License
This project is created for educational purposes as part of a multimedia web development project.
