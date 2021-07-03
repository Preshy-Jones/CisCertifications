import React from 'react'
import servicesdata from './servicesdata'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Services() {
  return (
    <div className='showcase4'>
      <h1>OUR SERVICES</h1>
      <div className="services">
      {servicesdata.map(service=>{
        return(
          <div className="service-box" 
          /* style={{background:`url(${service.image}) no-repeat center center/cover`}} */
          >
          <img src={service.image} alt="" />
            <div className="service">
              <h3>{service.name}</h3>
              <FontAwesomeIcon className='i'  icon={['fas', 'chevron-right']} />
            </div>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default Services
