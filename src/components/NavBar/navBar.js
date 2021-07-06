import React from 'react';
import logo from '../../images/sislogo.png';
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavBarData from './NavBarData'


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
        {NavBarData.map(data=>{
          return(
          <li className='nav-item'>
            <a href={data.link} onClick={handleClick} >
            {data.name}
            </a>
          </li>
          )
        })}
      </ul>
    </div>
  )
}

export default NavBar
