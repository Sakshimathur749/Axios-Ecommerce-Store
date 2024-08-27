import React from 'react'
import './Navbar.css'
import Logo from '../Asserts/logo.png'
import LoginUser from '../Asserts/loginUser.png'
import Carticon from '../Asserts/Cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className="nav-logo">
        <img src={Logo} alt="" width="250px" height="200px" />
      </div>
      <ul className='nav-menu'>
        <li><Link to='/' style={{textDecoration: 'none'}}>Home</Link></li>
        <li> <Link to='/men' style={{textDecoration: 'none'}}>Men</Link></li>
        <li> <Link to='/women' style={{textDecoration: 'none'}}>Women</Link></li>
        <li> <Link to='/baby' style={{textDecoration: 'none'}}>Baby Collection</Link></li>
        <li><Link to='/pages' style={{textDecoration: 'none'}}>Pages</Link><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-compact-down" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67" />
        </svg></li>
        <li><Link to='/contact' style={{textDecoration: 'none'}}>Contact</Link></li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/SignUp'><img src={LoginUser} alt="" width="40px" /></Link>
        <Link to='/'><img src={Carticon} alt="" /></Link>
        <div className="nav-cart-count" >0</div>
      </div>
    </div >
  )
}

export default Navbar