import React from 'react'

function Navlist(props) {
  return (
      <li className='nav-item'>
            <a href={data.link} onClick={handleClick} >
            {data.name}
            </a>
            
      </li>
  )
}

export default Navlist
