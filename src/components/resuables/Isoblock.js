import React from 'react'
import aboutData from '../about/AboutData'

function Isoblock() {
  return (
         <div className="isoblock">
          <h1>ISO STANDARDS</h1>
          <ul>
            {aboutData.isoStandards.map((iso,index)=>{
              return(
                <li key={index}><a href="#">{iso}</a></li>
              )
            })}
          </ul>
        </div>
  )
}

export default Isoblock
