import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/footer/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login';
import Home from './pages/Home';
import DisplayProduct from './pages/DisplayProduct';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Cart from './pages/Cart';
import Product from './pages/Product';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/product' element={<DisplayProduct />}></Route>
          <Route path='/product/:productId' element={<Product/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/Account' element={<Login />}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
