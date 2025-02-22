import React from 'react'
import Form from '../components/Form'

function quote() {
  return (
    <div className='grid md:grid-cols-2 mt-20 place-content-center'>
      <div className='mt-10 '>
        <h2 className='text-3xl font-bold ml-2'>Request a quote today</h2>
        <p className='ml-2 text-neutral-200'>Be among thousands of small and medium enterprises in the digital world.</p>
      </div>
      <div>
        <Form/>

      </div>
    </div>
  )
}

export default quote