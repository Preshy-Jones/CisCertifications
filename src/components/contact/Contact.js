import React from 'react'
import Navigator from '../Navigator'
import contactData from './ContactData'
import { useState } from 'react'
import axios from 'axios'
import Form from '../resuables/Form'

function Contact() {

  return (
    <div>
      <Navigator route='Contact'/>
      <div className="contact-grid">
        <div className="contact-block">
          <h2>CONTACT DETAILS</h2>
          {contactData.address.map((contact,index)=>{
            return(
              <div key={index} className="contact">
                {contact.icon}
                <p>{contact.body}</p>
              </div>
            )
          })}
        </div>
        <div className="form-block">
          <h2>SEND REQUEST FOR SERVICE</h2>
          <Form class ='form-4' group= "form-group-3" box ="form-box-3" submit='submit-3' message={true}  center={false} select={true}  requirement={false} data={contactData.form} />
        </div>
      </div>
    </div>
  )
}

export default Contact
