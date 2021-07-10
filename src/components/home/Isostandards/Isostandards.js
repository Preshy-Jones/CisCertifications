import React from 'react'
import isodata from './isodata'
function Isostandards() {
  return (
    <div className='showcase3'>
      <h1>ISO Standards</h1>
      <div className="isocards">
      {isodata.map((iso,index)=>{
        return(
        <div key={index}className="iso-card">
          <div className="iso">
            {iso.name}
          </div>
      <p>{iso.job}</p>
      <p className='summary'>{iso.summary} <span><a href="#">Read More</a></span></p>
      </div>
        )
      })}
      </div>


 
    </div>
  )
}

export default Isostandards
