import React from 'react';
import logo from '../../images/sislogo.png';
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavBarData from './NavBarData'
import DropDown from './DropDown/DropDown';


function NavBar() {


  const [state, setState] = useState({clicked: false})
  const [dropdown, setDropdown] = useState({
    'About Us':false,
    'Services':false
  }
    )

  const handleClick = ()=>{
    setState({clicked: !state.clicked})
  }

  const onMouseEnter = (name)=>{
    // const test2 = Object.keys(dropdown)[0]
    
    if(window.innerWidth<773){
      setDropdown({'Services':false,
      'About Us':false});
    } else{
      if(name==='Services'){
        setDropdown((prevState) =>{
          return {...prevState, 'Services':true}
        })
      } else if(name === 'About Us'){
        setDropdown((prevState) =>{
          return {...prevState, 'About Us':true}
        })
      }
    
      
    }
  }

  const onMouseLeave = (name)=>{
    if(window.innerWidth<773){
      setDropdown({'Services':false,
      'About Us':false});
    } else{
      if(name==='Services'){
        setDropdown((prevState) =>{
          return {...prevState, 'Services':false}
        })
      } else if(name === 'About Us'){
        setDropdown((prevState) =>{
          return {...prevState, 'About Us':false}
        })
      }
    
      
    }
  }

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="menu-icon" onClick={handleClick} >
            {state.clicked ?<FontAwesomeIcon className='times' icon={['fas', 'times']} /> : <FontAwesomeIcon className='bars' icon={['fas', 'bars']} /> }
        </div>
        <ul className= {state.clicked? 'navbar-list active':'navbar-list'} >
          {NavBarData.map((data,index)=>{
            return(
            <li key={index} className='nav-item'
            

            onMouseEnter={()=> data.dropdown && onMouseEnter(data.name)}
            onMouseLeave={()=> data.dropdown && onMouseLeave(data.name)}
            >

              

              <a href={data.link} onClick={handleClick} >
              {data.name}
              {data.dropdown && <FontAwesomeIcon className='caret-down'  icon={['fas', 'caret-down']} /> }
              </a>
              {data.dropdown && dropdown[data.name]?<DropDown cName={data.cName} about={data.about} data={data.name}/>:null}
            </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default NavBar
