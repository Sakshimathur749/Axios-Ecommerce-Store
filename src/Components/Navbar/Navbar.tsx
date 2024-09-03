import React from 'react'
import './Navbar.css'
import Logo from '../Asserts/logo.png'
import Wishlist from '../Asserts/Wishlist.jpg'
import UserAccount from '../Asserts/loginUser.png'
import Carticon from '../Asserts/Cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className="nav-logo">
        <img src={Logo} alt="" height="100px" width="150px" />
      </div>
      <div className='nav-menu'>
        <ul>
          <li><Link to='/' style={{ textDecoration: 'none',  color:'#2e6f40'}}>Home</Link></li>
          <li> <Link to='/Product' style={{ textDecoration: 'none' ,  color:'#2e6f40'}}>Product</Link></li>
          <li><Link to='/about' style={{ textDecoration: 'none' ,  color:'#2e6f40'}}>About</Link></li>
          <li><Link to='/contact' style={{ textDecoration: 'none' ,  color:'#2e6f40'}}>Contact</Link></li>
        </ul>
      </div>
      <div className="nav-login-cart">
        <Link to='/Account'><img src={UserAccount} alt="" /></Link>
        <Link to='/Wishlist'><img src={Wishlist} alt="" height='44px' width="55px" /></Link>
        <Link to='/'><img src={Carticon} alt="" /></Link>
        <div className="nav-cart-count" >0</div>
      </div>
    </div >
  )
}

export default Navbar