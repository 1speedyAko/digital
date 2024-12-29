import React from 'react'
import Form from '../components/Form'

function quote() {
  return (
    <div className='grid md:grid-cols-2'>
      <div>
        <h3>heading</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam excepturi accusamus rerum illo.</p>
      </div>
      <div>
        <Form/>

      </div>
    </div>
  )
}

export default quote