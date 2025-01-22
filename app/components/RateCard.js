import React from 'react'

const cardDetails = [
    {"one":"one"},
    {"two":"two"},
    {"three":"three"},
]


function RateCard({details}) {
   
  return (
  <div>
    <h1> our rates </h1>
    <div className='grid grid-cols-3 gap-8 px-5 '>
     <div className='border'> 
      </div>
      <div className='border'> two </div>
      <div className='border'> three </div>
    </div>
  </div>
  
  )
}

export default RateCard

