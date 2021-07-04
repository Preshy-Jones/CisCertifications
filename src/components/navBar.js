import React from 'react';
import logo from '../images/sislogo.png';

function navBar() {
  return (
    <div className='navbar'>
      <div className="logo">
          <img src={logo} alt="" />
      </div>
      <ul className='navbar-list'>
        <li className='nav-item'><a href="/CisCertifications/#">Home</a></li>
        <li className='nav-item'><a href="/CisCertifications/#/about">About Us</a></li>
        <li className='nav-item'><a href="/CisCertifications/#/services">Services</a></li>
        <li className='nav-item'><a href="/CisCertifications/#/accreditation">Accreditation</a></li>
        <li className='nav-item'><a href="/CisCertifications/#/contact">Contact</a></li>
      </ul>
    </div>
  )
}

export default navBar
