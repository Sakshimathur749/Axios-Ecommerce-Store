import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/footer/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './pages/Signup';
import Login from './pages/login';
import Home from './pages/Home';
import DisplayProduct from './pages/DisplayProduct';
import About from './Components/About/About';
import Contact from './Contact/Contact';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/product' element={<DisplayProduct />}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/SignUp' element={<SignUp />}></Route>
          <Route></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
