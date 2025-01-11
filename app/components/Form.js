"use client"
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

function Form() {
  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const maxLength = 50

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  // Handle message input change with length limit
  const handleMessageChange = (e) => {
    setMessage(e.target.value.slice(0, maxLength))
  }

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    // Here you can process the form data, like sending it to an API or storing it
  }

  const styles = {
    form: {
      maxWidth: '500px',
      margin: '0'
    },
    input: {
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
    <div className="p-3 py-10">
      <form onSubmit={handleSubmit} className="flex justify-center p-4 border-4 w-[350px] bg-neutral-200">
        <div className="grid grid-cols-1 gap-5 bg-neutral-200">
          <h3>Request a Quote</h3>

          <label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="Name*"
              onChange={handleChange}
              style={styles.input}
            />
          </label>

          <label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email*"
              onChange={handleChange}
              style={styles.input}
            />
          </label>

          <label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              placeholder="Phone*"
              onChange={handleChange}
              style={styles.input}
            />
          </label>

          <label>
            <textarea
              name="message"
              placeholder="Message*"
              value={message}
              onChange={handleMessageChange}
              style={styles.textarea}
            />
          </label>

          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  )
}

export default Form
