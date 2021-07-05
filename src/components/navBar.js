import React from 'react';
import logo from '../images/sislogo.png';
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavBar() {


  const [state, setState] = useState({clicked: false})

  const handleClick = ()=>{
    setState({clicked: !state.clicked})
  }

  return (
    <div className='navbar'>
      <div className="logo">
          <img src={logo} alt="" />
      </div>
      <div className="menu-icon" onClick={handleClick} >
          {state.clicked ?<FontAwesomeIcon className='times' icon={['fas', 'times']} /> : <FontAwesomeIcon className='bars' icon={['fas', 'bars']} /> }
      </div>
      <ul className= {state.clicked? 'navbar-list active':'navbar-list'} >
        <li className='nav-item'><a href="/CisCertifications/#">Home</a></li>
        <li className='nav-item'><a href="/CisCertifications/#/about">About Us</a></li>
        <li className='nav-item'><a href="/CisCertifications/#/services">Services</a></li>
        <li className='nav-item'><a href="/CisCertifications/#/accreditation">Accreditation</a></li>
        <li className='nav-item'><a href="/CisCertifications/#/contact">Contact</a></li>
      </ul>
    </div>
  )
}

export default NavBar
