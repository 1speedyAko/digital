import React from 'react'
import Form from '../components/Form'

function quote() {
  return (
    <div className='grid md:grid-cols-2 mt-20 place-content-center pt-9'>
      <div className='mt-10 '>
        <h2 className='text-5xl font-bold ml-2 tracking-wide'>Request a quote today</h2>
        <p className='ml-2 text-neutral-200 tracking-wide pt-3'>Be among thousands of small and medium enterprises in the digital space.</p>
        <p className='ml-2 text-neutral-200 tracking-wide pt-3'> Get started today by requesting a quote. Welcome to the freeworld</p>
      </div>
      <div>
        <Form/>

      </div>
    </div>
  )
}

export default quote