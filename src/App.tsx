import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/footer/footer';
import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import SignUp from './Pages/Signup';
import Login from './Pages/login';
import Contact from './Contact/Contact';

function App() {
  return (
    <>      
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/Contact" element={<Contact/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/SignUp' element={<SignUp />}></Route>
      <Route></Route>
    </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
