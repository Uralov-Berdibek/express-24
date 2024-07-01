import React from 'react';
import Ad from './components/Ad/Ad';
import Footer from './components/Footer';
import Header from './components/Header';
import Restaurants from './components/restaurants/Restaurants';
import Shops from './components/shops/Shops';
import './index.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Ad />
      <Shops />
      <Restaurants />
      <Footer />
    </div>
  );
}

export default App;
