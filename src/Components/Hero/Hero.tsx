import React from 'react'
import './Hero.css'
import banner from '../Asserts/banner1.jpeg'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>Trendy</h2>
            <h2>Fashion</h2>
            <p>Up To 50% off</p>
            <p>Don't miss the Deal</p>
            <hr />
            <button>Shop Now</button>
        </div>
        <div className="hero-right">
            <img src={banner} alt="" width="430px"/>
        </div>
    </div>
  )
}

export default Hero