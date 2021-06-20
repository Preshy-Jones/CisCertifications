import React from 'react'
import { useState, useEffect} from 'react'

function Stats() {

  const [state, setState] = useState({
    countries:5,
    customers:1000,
    auditors:50,
    experts:50
  });

  function increment(){
    setState(prevState=>{
      return {
        countries: prevState.countries+5,
        customers: prevState.customers+1000,
        auditors:prevState.auditors+50,
        experts:prevState.experts+50
      }
    })
   }

 useEffect(() => {
  setInterval( increment(), 1000);
 
 }, [])

  return (
    <div className='showcase5' onScroll={increment}>
      <div>
        <h1>{state.countries}+</h1>
        <h3>COUNTRIES</h3>
      </div>
      <div>
        <h1>{state.customers}+</h1>
        <h3>SATISFIED CUSTOMERS</h3>
      </div>
      <div>
        <h1>{state.auditors}+</h1>
        <h3>AUDITORS</h3>
      </div>
      <div>
        <h1>{state.experts}+</h1>
        <h3>TECHNICAL EXPERTS</h3>
      </div>
    </div>
  )
}

export default Stats
