import React from 'react'
import Navigator from '../Navigator'
import img1 from '../../images/Combined-SIS-all-1-1.jpg'
import accreditationData from './AccreditationData'
import Form from '../resuables/Form'
import Isoblock from '../resuables/Isoblock'

function Accreditation() {
  return (
    <div>
      <Navigator route='Accreditation' />
      <div className="accreditation-grid">
      <div className="getquote">
          <h1>GET QUOTE</h1>
          <Form/>
      </div>
      <Isoblock/>
      <div className="headers1">
        <div className="accreditation">
          <h1>ACCREDITATION</h1>
          <p>{accreditationData.accreditation}</p>
        </div>
        <div className="whoaccredited">
          <h1>Who we are accredited by ?</h1>
          <p>{accreditationData.whowe}</p>
        </div>
      </div>
      <div className="download-certificate">
        <div className="ioas">
          <h5>IOAS (International Organization for Accreditation Services)</h5>
          <button>Download IOAS Certificate</button>
        </div>
        <div className="ias">
          <h5>IOAS (International Organization for Accreditation Services)</h5>
          <button>Download IOAS Certificate</button>
        </div>
      </div>
      <div className="img-accr">
        <img src={img1} />
        <p>
How to Get ISO 9001, ISO 14001, OH&S 18001, ISO 22000, ISO 13485, ISO 27001 and Other Certifications Easily?</p>
      </div>
      <div className="headers2">
        {accreditationData.infos.map(info=>{
          return(
          <div className="info-block">
            <h2>{info.name}</h2>
            <p>{info.body}</p>
        </div>
          )
        })}
      </div>

      </div>
    </div>
  )
}

export default Accreditation
