import React from 'react'
import FooterData from './FooterData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Footer() {
  return (
    <div className='showcase8'>
      <div className="footer-box">
        <h1>{FooterData[0].name}</h1>
        <p>{FooterData[0].body}</p>
      </div>
      <div className="footer-box">
        <h1>{FooterData[1].name}</h1>
        {FooterData[1].terms.map(term=>{
          return(
          <div>
            <ul>
              <li>  
                <FontAwesomeIcon className='right-arrow' icon={['fas', 'caret-right']} />
                    <a href="#">{term}</a>
                </li>
            </ul>
          </div>
          )
        })}
      </div>
      <div className="footer-box">
        <h1>{FooterData[2].name}</h1>
        {FooterData[2].isos.map(iso=>{
          return(
          <div>
            <ul>
              <li>  
                <FontAwesomeIcon className='right-arrow' icon={['fas', 'caret-right']} />
                    <a href="#">{iso}</a>
                </li>
            </ul>
          </div>
          )
        })}
      </div>
      <div className="footer-box">
        <h1>{FooterData[3].name}</h1>
        {FooterData[3].infos.map(info=>{
          return(
          <div>
            <ul>
                <li>  
                  {info.icon}
                  <a href="#">{info.info}</a>
                </li>
            </ul>
          </div>
          )
        })}
      </div>
      
    </div>
  )
}

export default Footer
