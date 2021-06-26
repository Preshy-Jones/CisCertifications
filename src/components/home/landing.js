import React from 'react'
import bg1 from  '../../images/bg1.jpg'
import {useState} from 'react'
import axios from 'axios'
import Form from '../resuables/Form'
import accreditationData from '../accreditation/AccreditationData'


function Landing() {


  return (
    <div className='showcase1' style={{background: `url(${bg1}) no-repeat center center/cover`}}>
    <Form class='form-1' group='form-group' box='form-box' submit='submit' center={true} requirement={true} data={accreditationData.form} />
    </div>
  )
}

export default Landing
