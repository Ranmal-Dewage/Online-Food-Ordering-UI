import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Components/Home';
import NavBar from "./Components/NavBar";
import ProductsDisplay from './Components/ProductsDisplay';
import Footer from './Components/Footer';

import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path="/products/meat" element={<ProductsDisplay product="Meat" />} />
        </Routes>
        <Routes>
          <Route exact path="/products/seafood" element={<ProductsDisplay product="Sea Food" />} />
        </Routes>
        <Routes>
          <Route exact path="/products/fruit" element={<ProductsDisplay product="Fruit" />} />
        </Routes>
        <Routes>
          <Route exact path="/products/vegetable" element={<ProductsDisplay product="Vegetable" />} />
        </Routes>
        <Routes>
          <Route exact path="/products/search" element={<ProductsDisplay/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
