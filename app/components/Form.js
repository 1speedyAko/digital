"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form() {
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    from_tel: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const maxLength = 50;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleMessageChange = (e) => {
    const value = e.target.value.slice(0, maxLength);
    setMessage(value);
    setFormData((prevState) => ({ ...prevState, message: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setIsSuccess(true);
        setFormData({
          from_name: "",
          from_email: "",
          from_tel: "",
          message: ""
        });
        setMessage("");
      } else {
        const error = await response.json();
        toast.error(error.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-3 py-10">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center p-4 border-4 w-[350px] bg-neutral-200"
      >
        <div className="grid grid-cols-1 gap-5 bg-neutral-200">
          <h2 className="font-bold text-3xl">Request a Quote</h2>

          <input
            type="text"
            name="from_name"
            value={formData.from_name}
            placeholder="Name*"
            onChange={handleChange}
            className="w-full p-3 text-base border border-gray-300 rounded"
            required
          />

          <input
            type="email"
            name="from_email"
            value={formData.from_email}
            placeholder="Email*"
            onChange={handleChange}
            className="w-full p-3 text-base border border-gray-300 rounded"
            required
          />

          <input
            type="tel"
            name="from_tel"
            value={formData.from_tel}
            placeholder="Phone*"
            onChange={handleChange}
            className="w-full p-3 text-base border border-gray-300 rounded"
            pattern="^\+?[0-9]{7,15}$"
            title="Please enter a valid phone number (7 to 15 digits, optional '+' prefix)"
            required
          />

          <textarea
            name="message"
            placeholder="Message*"
            value={message}
            onChange={handleMessageChange}
            className="w-full h-24 p-3 text-base border border-gray-300 rounded resize-none"
            required
          />
          <div>
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
          </div>
        </div>
      </form>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default Form;