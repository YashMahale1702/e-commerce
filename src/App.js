import React from 'react';
import { HomePage } from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/header.component';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/shop' element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;