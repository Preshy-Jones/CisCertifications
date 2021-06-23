import React from 'react'
import Navigator from '../Navigator'
import axios from 'axios'
import { useState} from 'react'
import vid1 from '../../images/SIS_LOGO_p7bvb5.mp4'
import aboutData from './AboutData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
          <form 
            onSubmit={handleSubmit}
            className="form-3">
          <div className="form-group">
              <input 
              name="name" 
              type="text" 
              required
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="form-box" 
              placeholder="Your Full Name"/>
          </div>
          <div className="form-group">
              <input 
              name="email" 
              type="text"
              required
              value={email}
              onChange={(e)=>setEmail(e.target.value)} 
              className="form-box" placeholder="Email"/>
          </div>
          <div className="form-group">
              <input 
              name="phone" 
              type="text" 
              required
              value={phone}
              onChange={(e)=>setPhone(e.target.value)} 
              className="form-box" placeholder="Your Mobile Number"/>
          </div>
          <div className="form-group">
              <textarea 
              name="message" 
              id="requirement"
              required
              value={message}
              onChange={(e)=>setMessage(e.target.value)}  
              rows="7" placeholder="Your Requirement"></textarea>
          </div>
          <div className="form-group">
              <input type="submit" value="Send" className="submit"/>
          </div>
      </form>
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
        <div className="isoblock">
          <h1>ISO STANDARDS</h1>
          <ul>
            {aboutData.isoStandards.map(iso=>{
              return(
                <li><a href="#">{iso}</a></li>
              )
            })}
          </ul>
        </div>
        <div className="whychoose-2">
        <h1>WHY CHOOSE US</h1>
          <p>{aboutData.whychoose.paragraph}</p>
        </div>
        <div className="download">
          <h2>DOWNLOAD</h2>
          <div className='download-box'>
            <FontAwesomeIcon className='download-icons' icon={['fas', 'download']} />
            <p><a href="#">Application Form</a></p>
            <FontAwesomeIcon className='download-icons' icon={['fas', 'file-pdf']} />
          </div>
          <div className='download-box'>
            <FontAwesomeIcon className='download-icons' icon={['fas', 'download']} />
            <p><a href="#">Company's Profile</a></p>
            <FontAwesomeIcon className='download-icons' icon={['fas', 'file-pdf']} />
          </div>
          <div className='download-box'>
            <FontAwesomeIcon className='download-icons' icon={['fas', 'download']} />
            <p><a href="#">Logo Use Regulations</a></p>
            <FontAwesomeIcon className='download-icons' icon={['fas', 'file-pdf']} />
          </div>          
        </div>
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
