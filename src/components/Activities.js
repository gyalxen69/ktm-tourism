import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Activities.css';

const tourActivities = [
  {
    id: 1,
    name: 'Pashupatinath Temple Tour',
    description: 'Visit one of the most sacred Hindu temples in the world, located on the banks of the Bagmati River.',
    price: 25,
    duration: '3 hours',
    category: 'Cultural',
    image: '/media/images/activities/pashupatinath-tour.jpg',
    highlights: ['Guided tour', 'Aarti ceremony', 'Photography allowed'],
  },
  {
    id: 2,
    name: 'Boudhanath Stupa Walk',
    description: 'Experience the peaceful atmosphere around the largest stupa in Nepal, a UNESCO World Heritage Site.',
    price: 15,
    duration: '2 hours',
    category: 'Spiritual',
    image: '/media/images/activities/boudhanath-walk.jpg',
    highlights: ['Prayer wheel spinning', 'Buddhist monasteries', 'Butter tea experience'],
  },
  {
    id: 3,
    name: 'Kathmandu Durbar Square',
    description: 'Explore the historic royal palace complex with ancient temples, palaces, and courtyards.',
    price: 20,
    duration: '4 hours',
    category: 'Historical',
    image: '/media/images/activities/durbar-square-tour.jpg',
    highlights: ['Expert guide', 'Living Goddess temple', 'Architecture tour'],
  },
  {
    id: 4,
    name: 'Thamel Food Tour',
    description: 'Taste authentic Nepali cuisine with a guided food walk through the vibrant Thamel district.',
    price: 35,
    duration: '3 hours',
    category: 'Food',
    image: '/media/images/activities/food-tour.jpg',
    highlights: ['6+ food stops', 'Local restaurants', 'Vegetarian options'],
  },
  {
    id: 5,
    name: 'Swayambhunath Sunrise Trek',
    description: 'Climb to the Monkey Temple at dawn for breathtaking views of the valley and Himalayas.',
    price: 30,
    duration: '4 hours',
    category: 'Adventure',
    image: '/media/images/activities/swayambhu-trek.jpg',
    highlights: ['Sunrise views', '365 steps', 'Panoramic photos'],
  },
  {
    id: 6,
    name: 'Traditional Pottery Class',
    description: 'Learn the ancient art of pottery in Bhaktapur from master craftsmen using traditional techniques.',
    price: 40,
    duration: '3 hours',
    category: 'Workshop',
    image: '/media/images/activities/pottery-class.jpg',
    highlights: ['Hands-on experience', 'Take your creation', 'Local artisans'],
  },
  {
    id: 7,
    name: 'Himalayan View Flight',
    description: 'Experience a scenic mountain flight with views of Mount Everest and other Himalayan peaks.',
    price: 200,
    duration: '1 hour',
    category: 'Adventure',
    image: '/media/images/activities/mountain-flight.jpg',
    highlights: ['Everest views', 'Window seat guaranteed', 'Certificate included'],
  },
  {
    id: 8,
    name: 'Nepali Cooking Class',
    description: 'Learn to cook authentic Nepali dishes including dal bhat, momos, and traditional desserts.',
    price: 45,
    duration: '4 hours',
    category: 'Food',
    image: '/media/images/activities/cooking-class.jpg',
    highlights: ['Market visit', 'Hands-on cooking', 'Recipe booklet'],
  },
];

const categories = ['All', 'Cultural', 'Spiritual', 'Historical', 'Food', 'Adventure', 'Workshop'];

function Activities() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { addToCart, removeFromCart, isInCart } = useCart();

  const filteredActivities = selectedCategory === 'All' 
    ? tourActivities 
    : tourActivities.filter(activity => activity.category === selectedCategory);

  const handleCartAction = (activity) => {
    if (isInCart(activity.id)) {
      removeFromCart(activity.id);
    } else {
      addToCart(activity);
    }
  };

  return (
    <section id="activities" className="activities-section">
      <div className="section-header">
        <h2>Tourist Activities</h2>
        <p>Select your favorite activities and add them to your travel itinerary</p>
      </div>

      {/* Category Filter */}
      <div className="category-filter">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Activities Grid */}
      <div className="activities-grid">
        {filteredActivities.map((activity) => (
          <div key={activity.id} className="activity-card">
            <div className="activity-image">
              {/* Placeholder for activity image */}
              <div className="image-placeholder">
                <img 
                  src={activity.image} 
                  alt={activity.name}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="placeholder-content" style={{ display: 'none' }}>
                  <span>📷</span>
                  <small>{activity.name}</small>
                </div>
              </div>
              <span className="category-badge">{activity.category}</span>
            </div>
            
            <div className="activity-content">
              <h3>{activity.name}</h3>
              <p className="activity-description">{activity.description}</p>
              
              <div className="activity-meta">
                <span className="duration">⏱️ {activity.duration}</span>
                <span className="price">${activity.price}</span>
              </div>
              
              <ul className="highlights-list">
                {activity.highlights.map((highlight, index) => (
                  <li key={index}>✓ {highlight}</li>
                ))}
              </ul>
              
              <button
                className={`add-to-cart-btn ${isInCart(activity.id) ? 'in-cart' : ''}`}
                onClick={() => handleCartAction(activity)}
              >
                {isInCart(activity.id) ? '✓ In Itinerary' : '+ Add to Itinerary'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Activities;
