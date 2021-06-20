import React from 'react'
import Landing from './landing'
import Certifications from './Certifications/Certifications'
import Isostandards from './Isostandards/Isostandards'
import Services from './services/Services'
import Stats from './Stats'

function Home() {
  return (
    <div>
      <Landing/>
      <Certifications/>
      <Isostandards/>
      <Services/>
      <Stats/>
    </div>
  )
}

export default Home
