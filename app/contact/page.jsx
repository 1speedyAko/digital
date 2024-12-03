export default function Contact() {
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-6">Get in Touch</h1>
        <p className="text-center text-gray-600 mb-12">
          We're here to help. Fill out the form below or contact us directly.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <form className="bg-white p-8 shadow-lg rounded-lg">
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" id="name" className="mt-1 block w-full border border-gray-300 rounded-md p-2" required />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md p-2" required />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <select id="subject" className="mt-1 block w-full border border-gray-300 rounded-md p-2">
                <option>General Inquiry</option>
                <option>Request a Quote</option>
                <option>Support</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" rows="5" className="mt-1 block w-full border border-gray-300 rounded-md p-2" required></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Submit</button>
          </form>

          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-semibold">Contact Information</h2>
              <p className="text-gray-200">Phone: +1 (800) 123-4567</p>
              <p className="text-gray-200">Email: contact@yourwebsite.com</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Location</h2>
              <p className="text-gray-200">123 Main Street, New York, NY 10001</p>
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
