import React from 'react'
import Landing from './landing'
import Certifications from './Certifications/Certifications'
import Isostandards from './Isostandards/Isostandards'
import Services from './services/Services'
import Stats from './Stats'
import Enquiry from './Enquiry'
import Carousel from './Carousel'


function Home() {
  return (
    <div>
      <Landing/>
      <Certifications/>
      <Isostandards/>
      <Services/>
      <Stats/>
      <Enquiry/>
      <Carousel/>
    </div>
  )
}

export default Home
