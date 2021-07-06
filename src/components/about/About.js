import React from 'react'
import Navigator from '../Navigator'
import vid1 from '../../images/SIS_LOGO_p7bvb5.mp4'
import aboutData from './AboutData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Form from '../resuables/Form'
import Isoblock from '../resuables/Isoblock'
import Download from '../resuables/Download'
import accreditationData from '../accreditation/AccreditationData'

function About() {


  return (
    <div>
      <Navigator route='About'/>
      <div className="about-grid">
        <div className="getquote">
          <h1>GET QUOTE</h1>
          <Form class ='form-3' group= "form-group" box ="form-box" center={true} submit='submit' requirement={true} data={accreditationData.form} />
        </div>
        <div className="welcome">
          <h1>WELCOME TO SIS CERTIFICATIONS</h1>
          <div className="twoblock">
            <p>{aboutData.welcome.paragraph}</p>
            <video className='video'  autoPlay='autoplay' controls='controls' height='240' width='auto'>
              <source src ={vid1}  type="video/mp4"/>
            </video>
          </div>
        </div>
        <Isoblock/>
        <div className="whychoose-2">
        <h1>WHY CHOOSE US</h1>
          <p>{aboutData.whychoose.paragraph}</p>
        </div>
        <Download/>
        <div className="misvis">
          {
            aboutData.mischoose.map(data=>{
              return(
                <div>
                  <h1>{data.section.name}</h1>
                  <div className="bullets">
                  {data.section.text.map(paragraph=>{
                    return(
                        <div className='misvisblock'>
                        <FontAwesomeIcon className='misvisicon' icon={['fas', 'check']} />
                        <p>{paragraph}</p>
                        </div>
                    )
                  })}
                  </div>
                </div>
              )
            })
          }
        </div>
        
      </div>
    </div>
  )
}

export default About
