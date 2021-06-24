import React from 'react'
import Navigator from '../Navigator'
import axios from 'axios'
import { useState} from 'react'
import vid1 from '../../images/SIS_LOGO_p7bvb5.mp4'
import aboutData from './AboutData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Form from '../resuables/Form'
import Isoblock from '../resuables/Isoblock'
import Download from '../resuables/Download'

function About() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)
  const [isLoading, setisLoading] = useState(false)
  const data = {name,email,phone,message}

  const handleSubmit = async(e)=>{




      console.log(data);
      e.preventDefault()
      setisLoading(true)

      setTimeout(() => {
      axios({
          method: "POST", 
          url:"https://burjtech-api.herokuapp.com/send", 
          data:  data,    
          headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
        }).then(() => {
          setSent(true)      
          setisLoading(false)
          setName('')
          setPhone('')
          setEmail('')
          setMessage('')
        })
      }, 2000);
  }

  return (
    <div>
      <Navigator route='About Us'/>
      <div className="about-grid">
        <div className="getquote">
          <h1>GET QUOTE</h1>
          <Form color='red' />
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
