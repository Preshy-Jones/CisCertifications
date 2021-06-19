import React from 'react';
import logo from '../images/sislogo.png';

function navBar() {
  return (
    <div className='navbar'>
      <div className="logo">
          <img src={logo} alt="" />
      </div>
      <ul className='navbar-list'>
        <li className='nav-item'>Home</li>
        <li className='nav-item'>About Us</li>
        <li className='nav-item'>Accreditation</li>
        <li className='nav-item'>Contact</li>
      </ul>
    </div>
  )
}

export default navBar
