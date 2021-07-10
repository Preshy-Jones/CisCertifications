import React, { useRef } from 'react'
import { useState, useEffect} from 'react'
import CountUp, { useCountUp } from 'react-countup';

function Stats() {
  const {countUp, start, pauseResume, reset, update} = useCountUp({
    duration:5,
    end: 10000,
   // startOnMount:false
  })
 

  // const [state, setState] = useState(0)

  // function startCounter(){
  //   if(window.scrollY>=1800){
  //       setState(<CountUp end={10000} duration={5}/>)
  //   }
  // }

  // window.addEventListener('scroll', startCounter);

  return (
    <div className='showcase5'>
      <div>
        <h1><CountUp end={30} duration={5}/>+</h1>
        <h3>COUNTRIES</h3>
      </div>
      <div>
        <h1 onClick={start}>{countUp}+</h1>
        {/* <h1>{state}+</h1> */}
        <h3>SATISFIED CUSTOMERS</h3>
      </div>
      <div>
        <h1><CountUp end={500} duration={5} />+</h1>
        <h3>AUDITORS</h3>
      </div>
      <div>
        <h1><CountUp end={250} duration={5}/>+</h1>
        <h3>TECHNICAL EXPERTS</h3>
      </div>
    </div>
  )
}

export default Stats
