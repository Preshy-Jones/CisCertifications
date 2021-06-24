import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Download() {
  return (
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
  )
}

export default Download
