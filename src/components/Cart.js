import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Cart.css';

function Cart() {
  const { cartItems, removeFromCart, clearCart, getTotalPrice } = useCart();
  const [isExpanded, setIsExpanded] = useState(true);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  const handleBooking = () => {
    if (cartItems.length === 0) return;
    
    // Simulate booking submission
    setBookingSubmitted(true);
    setTimeout(() => {
      setBookingSubmitted(false);
      clearCart();
    }, 3000);
  };

  const totalDuration = cartItems.reduce((total, item) => {
    const hours = parseInt(item.duration);
    return total + (isNaN(hours) ? 0 : hours);
  }, 0);

  return (
    <section id="cart" className="cart-section">
      <div className="cart-container">
        <div className="cart-header" onClick={() => setIsExpanded(!isExpanded)}>
          <h2>
            <span className="cart-icon">🗓️</span>
            Your Travel Itinerary
            <span className="item-count">({cartItems.length} activities)</span>
          </h2>
          <button className="expand-btn">
            {isExpanded ? '▼' : '▲'}
          </button>
        </div>

        {isExpanded && (
          <div className="cart-content">
            {bookingSubmitted ? (
              <div className="booking-success">
                <div className="success-icon">✅</div>
                <h3>Booking Request Submitted!</h3>
                <p>Thank you for planning your Kathmandu adventure with us.</p>
                <p>We'll contact you shortly to confirm your itinerary.</p>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="empty-cart">
                <div className="empty-icon">🎒</div>
                <h3>Your itinerary is empty</h3>
                <p>Start adding activities to plan your perfect Kathmandu adventure!</p>
                <button 
                  className="browse-btn"
                  onClick={() => {
                    document.getElementById('activities')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Browse Activities
                </button>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                      <div className="item-info">
                        <h4>{item.name}</h4>
                        <div className="item-meta">
                          <span className="item-duration">⏱️ {item.duration}</span>
                          <span className="item-category">{item.category}</span>
                        </div>
                      </div>
                      <div className="item-price">${item.price}</div>
                      <button 
                        className="remove-btn"
                        onClick={() => removeFromCart(item.id)}
                        aria-label="Remove item"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>

                <div className="cart-summary">
                  <div className="summary-row">
                    <span>Total Activities:</span>
                    <span>{cartItems.length}</span>
                  </div>
                  <div className="summary-row">
                    <span>Estimated Duration:</span>
                    <span>~{totalDuration} hours</span>
                  </div>
                  <div className="summary-row total">
                    <span>Total Price:</span>
                    <span>${getTotalPrice()}</span>
                  </div>
                </div>

                <div className="cart-actions">
                  <button className="clear-btn" onClick={clearCart}>
                    Clear All
                  </button>
                  <button className="book-btn" onClick={handleBooking}>
                    Request Booking
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;
