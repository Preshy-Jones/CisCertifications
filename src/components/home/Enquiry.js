import React from 'react'
import { useState} from 'react'
import axios from 'axios'
import Form from '../resuables/Form'
import accreditationData from '../accreditation/AccreditationData'

function Enquiry() {


 

  return (
    <div className='showcase6'>
      <h1>For Quick Call Fill Out The Enquiry Form</h1>
      <Form class='form-2' group='form-group-2' box='form-box-2' requirement={false} submit='submit-2' data={accreditationData.form} />
    </div>
  )
}

export default Enquiry
