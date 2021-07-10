import React from 'react'
import { useState} from 'react'
import axios from 'axios'


function Form(props) {



  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [location, setLocation] = useState('')
  const [requirement, setRequirement] = useState('')
  const [sent, setSent] = useState(false)
  
  const [isLoading, setisLoading] = useState(false)
  const data = {name,email,phone,message,location,requirement}

  const keyState = {
    'name':{
      state: name,
      setState: setName
    },
    'email':{
      state: email,
      setState: setEmail
    },
    'phone':{
      state: phone,
      setState: setPhone
    },
    'location':{
      state: location,
      setState: setLocation
    },
  }  

  

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
          setLocation('')
        })
      }, 2000);
  }

  return (
    <div className ={props.center && 'center-form'}>
    <form 
            onSubmit={handleSubmit}
            className={props.class}>
            {
              props.data.map((present,index)=>{
                return(
                  <div key={index} className={props.group}>
                    <input 
                    name={present.name} 
                    type={present.type} 
                    required
                    value={keyState[present.name].state}
                    onChange={(e)=>keyState[present.name].setState(e.target.value)}
                    className={props.box} 
                    placeholder={present.placeholder}/>
                </div>
                )
              })
            }  

            {props.select && <div className="form-group-3 requirement">
            <select className='form-box-3'>
            <option value="ISO Certification">Select Your Requirement</option>
              <option value="ISO Certification">ISO Certification</option>
              <option value="ISO Training">ISO Training</option>
              <option value="Other Services">Other Services</option>
          </select>
              </div> 
              }

{ props.requirement &&         <div className={props.group}  >
              <textarea 
              name="requirement" 
              id="requirement"
              required
              value={message}
              onChange={(e)=>setRequirement(e.target.value)}  
              rows="7" placeholder="Your Requirement"></textarea>
          </div>
}
{
  props.message &&  <div className="message">
    <textarea 
                name="message" 
                id="message"
                required
                value={message}
                onChange={(e)=>setRequirement(e.target.value)} 
                cols='40' 
                rows="10" placeholder="Write Your Message...">
    </textarea>
   </div>
}

          <div className={props.group}>
              <input type="submit" value="Send" className={props.submit}/>
          </div>
      </form>
    </div>    
  )
}

export default Form
