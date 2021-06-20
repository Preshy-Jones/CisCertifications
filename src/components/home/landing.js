import React from 'react'
import bg1 from  '../../images/bg1.jpg'
import {useState} from 'react'
import axios from 'axios'

function Landing() {

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
    <div className='showcase1' style={{background: `url(${bg1}) no-repeat center center/cover`}}>
      <form 
      onSubmit={handleSubmit}
      className="form-1">
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
  )
}

export default Landing
