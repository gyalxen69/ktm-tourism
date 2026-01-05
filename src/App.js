import React from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import Gallery from './components/Gallery';
import AudioSection from './components/AudioSection';
import Activities from './components/Activities';
import Cart from './components/Cart';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <VideoSection />
          <Gallery />
          <AudioSection />
          <Activities />
          <Cart />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
