import React from 'react'
import img1 from '../../../images/SIS_Accreditation_mybru1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import reasons from './reasons'
import certificates from './certificates'

function Certifications() {
  return (
    <div className='showcase2'>
      <div className="accredited">
      <h1>WHO ARE WE ACCREDITED BY ?</h1>
      <p>SIS Certifications is Accredited by IOAS (Grenadian Government Board) and IAS (U.S. Board)</p>
      <img src={img1} alt="" />
      <h2>We Can Issue the Following Certificates:</h2>
        <div className="certificates">
          {certificates.map(certificate=>{
            return(
              <div className="certificate">
                <FontAwesomeIcon  icon={['fas', 'certificate']} />
                <h2>{certificate.certificate}</h2>
              </div>
            )
          })}

        </div>
      </div>
      <div className="whychoose">
          <h1>WHY CHOOSE SIS</h1>
          <h2>We Do Not Sell, We Certify !!!</h2>
          <div className="reasons">
            {reasons.map(reason=>{
              return(
                <div className="reason">
                <FontAwesomeIcon className='i' icon={['fas', 'check']} />
                <p>{reason.reason}</p>
                </div>
              )
            })}
          </div>
      </div>
    </div>
  )
}

export default Certifications
