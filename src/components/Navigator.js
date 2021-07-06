import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navigator(props) {
  return (
    <div className="presentroute">
          <h3>
              <a id='navHome' href="/">
                Home <span>&#62;</span>

              </a>
          </h3>
          <h3><a href="/">{props.route}</a></h3>
          <button>APPLY NOW</button>
      </div>
  )
}

export default Navigator
