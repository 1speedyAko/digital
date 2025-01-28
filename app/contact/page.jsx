"use client";
import React, { useState, useEffect ,useRef} from "react";
import { useLoading } from "../components/LoadingContext";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { setIsLoading } = useLoading();
  const [isSubmitting,setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });
  const [errors, setErrors] = useState({ email: "", phone: "" });
  const [isSuccess, setIsSuccess] = useState(false)
  const formRef = useRef()
  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate loading for 2 seconds

    return () => clearTimeout(timer);
  }, [setIsLoading]);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10,15}$/; // Accepts 10-15 digit phone numbers
    return phoneRegex.test(phone);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    if (id === "email" && value) {
      setErrors((prev) => ({
        ...prev,
        email: validateEmail(value) ? "" : "Invalid email address",
      }));
    }

    if (id === "phone" && value) {
      setErrors((prev) => ({
        ...prev,
        phone: validatePhone(value) ? "" : "Invalid phone number",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
        setFormData({ from_name: "", from_email: "", from_tel: "", message: "" });
        setMessage("");
        setIsSubmitting(false);
      },
      (err) => {
        console.error("FAILED...", err);
        setIsSubmitting(false);
      }
    );
    // Final validation before submission
    const emailValid = validateEmail(formData.email);
    const phoneValid = validatePhone(formData.phone);

    if (!emailValid || !phoneValid) {
      setErrors({
        email: emailValid ? "" : "Invalid email address",
        phone: phoneValid ? "" : "Invalid phone number",
      });
      return;
    }

    // Submit the form (can integrate emailjs or other logic here)
    console.log("Form submitted successfully", formData);
  };

  const notify = () => toast("message sent!")
  
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-6 heading">Get in Touch</h1>
        <p className="text-center text-gray-600 mb-12 primary">
          We&apos;re here to help. Fill out the form below or contact us directly.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <form
            className="bg-white p-8 shadow-lg rounded-lg"
            onSubmit={handleSubmit}
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`mt-1 block w-full border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md p-2`}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`mt-1 block w-full border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } rounded-md p-2`}
                required
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <select
                id="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              >
                <option>General Inquiry</option>
                <option>Request a Quote</option>
                <option>Support</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md group hover:bg-blue-700"
              onClick={notify}
            >
              <ToastContainer/>
              Submit
            </button>
            {isSuccess && <p className=" bg-green-500">message is sent successfully </p>}
          </form>

          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-semibold heading">Contact Information</h2>
              <p className="text-gray-600">Phone: +1 (800) 123-4567</p>
              <p className="text-gray-600">Email: contact@yourwebsite.com</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold heading">Location</h2>
              <p className="text-gray-600">123 Main Street, New York, NY 10001</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63948.78546979284!2d34.688615232812465!3d-0.09170224925494462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178101bca3df0ad7%3A0x94c15a96d8d75837!2sKisumu%2C%20Kenya!5e0!3m2!1sen!2sus!4v1696247974567!5m2!1sen!2sus"
                className="w-full h-48 border-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
