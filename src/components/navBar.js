import React from 'react';
import logo from '../images/sislogo.png';

function navBar() {
  return (
    <div className='navbar'>
      <div className="logo">
          <img src={logo} alt="" />
      </div>
      <ul className='navbar-list'>
        <li className='nav-item'><a href="/">Home</a></li>
        <li className='nav-item'><a href="/about">About Us</a></li>
        <li className='nav-item'><a href="/accreditation">Accreditation</a></li>
        <li className='nav-item'><a href="/contact">Contact</a></li>
      </ul>
    </div>
  )
}

export default navBar
