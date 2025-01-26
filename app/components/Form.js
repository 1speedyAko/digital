"use client";
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";

function Form() {
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const formRef = useRef(null); // Ref for the form

  const maxLength = 50;

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  // Handle message input change with length limit
  const handleMessageChange = (e) => {
    setMessage(e.target.value.slice(0, maxLength));
    setFormData((prevState) => ({ ...prevState, message: e.target.value.slice(0, maxLength) }));
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_0w14lae", // Replace with your Email.js service ID
        "template_7wqwpw9", // Replace with your Email.js template ID
        formRef.current, // Pass the form reference
        "O51SQiTTN5iLK4MaT" // Replace with your Email.js public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSuccess(true);
          setFormData({ name: "", email: "", phone: "", message: "" });
          setMessage("");
          setIsSubmitting(false);
        },
        (err) => {
          console.error("FAILED...", err);
          setIsSubmitting(false);
        }
      );
  };

  const styles = {
    form: {
      maxWidth: "500px",
      margin: "0",
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
  };

  return (
    <div className="p-3 py-10">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex justify-center p-4 border-4 w-[350px] bg-neutral-200"
      >
        <div className="grid grid-cols-1 gap-5 bg-neutral-200">
          <h3>Request a Quote</h3>

          <label>
            <input
              type="text"
              name="from_name"
              value={formData.name}
              placeholder="Name*"
              onChange={handleChange}
              style={styles.input}
              required
            />
          </label>

          <label>
            <input
              type="email"
              name="from_email"
              value={formData.email}
              placeholder="Email*"
              onChange={handleChange}
              style={styles.input}
              required
            />
          </label>

          <label>
            <input
              type="tel"
              name="from_tel"
              value={formData.phone}
              placeholder="Phone*"
              onChange={handleChange}
              style={styles.input}
              required
            />
          </label>

          <label>
            <textarea
              name="message"
              placeholder="Message*"
              value={message}
              onChange={handleMessageChange}
              style={styles.textarea}
              required
            />
          </label>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>

          {isSuccess && <p className="text-green-500">Message sent successfully!</p>}
        </div>
      </form>
    </div>
  );
}

export default Form;
