"use client"
import React,{useState} from 'react'
import { Button } from '@/components/ui/button'

function Form() {
  const [ message, setMessage ] = useState('')
  const maxLength = 50
  // const[formData, setFormData] = useState({
  //   name:"",
  //   email:"",
  //   message:"",
  //   phone:"",
  //  })
  
  // const handleChange = (e)=>{
  //   const {name, value} = e.target
  //   setFormData((setPrev)=>({...setPrev ,[name]:value}))
  // }
  const handleMessageChange = (e )=>{
    setMessage(e.value.target.slice(0,maxLength))
  }

  const styles = {
    form:{
      maxWidth:'500px',
      margin:'0'
    },
    input:{
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxSizing: "border-box",
    },
    textarea: {
      width: "100%",
      height: "100px",
      padding: "12px",
      fontSize: "16px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      resize: "none",
      boxSizing: "border-box",
    },
  }

  return (
    <div className=' p-3' >
      <form className=' flex justify-center p-4 border-4  w-[350px] bg-neutral-200 '>
        
        <div className='grid grid-cols-1 gap-5 bg-neutral-200'>
        <h3>request a quote</h3>
          <label>
            <input type='text' id='name' name='name' placeholder='Name*' style={styles.input}/>
          </label>
          <label>
            <input type='email' name='email' placeholder='Email*' style={styles.input}/>
          </label>
          <label>
            <input type='tel' name='number' placeholder='Phone*' style={styles.input}/>
          </label>
          <label>
            <textarea
              name='message'
              placeholder='message*'
              value={message}
              onChange={handleMessageChange}
              style={styles.textarea}
            />
          </label>
          <Button>Submit</Button>
        </div>
        
      </form>
    </div>
  )
}

export default Form