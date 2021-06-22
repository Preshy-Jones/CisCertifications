import React from 'react'
import { useState} from 'react'
import axios from 'axios'

function Enquiry() {


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [sent, setSent] = useState(false)
  const [isLoading, setisLoading] = useState(false)
  const data = {name,email,phone}

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
          
        })
      }, 2000);
  }


  return (
    <div className='showcase6'>
      <h1>For Quick Call Fill Out The Enquiry Form</h1>
      <form 
      onSubmit={handleSubmit}
      className="form-2">
          <div className="form-group-2">
              <input 
              name="name" 
              type="text" 
              required
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="form-box-2" 
              placeholder="Your Name*"/>
          </div>
          <div className="form-group-2">
              <input 
              name="phone" 
              type="text" 
              required
              value={phone}
              onChange={(e)=>setPhone(e.target.value)} 
              className="form-box-2" placeholder="Mobile No.*"/>
          </div>
          <div className="form-group-2">
              <input 
              name="email" 
              type="text"
              required
              value={email}
              onChange={(e)=>setEmail(e.target.value)} 
              className="form-box-2" placeholder="Email"/>
          </div>

          <div className="form-group-2">
              <input type="submit" value="Send" className="submit-2"/>
          </div>
      </form>
    </div>
  )
}

export default Enquiry
