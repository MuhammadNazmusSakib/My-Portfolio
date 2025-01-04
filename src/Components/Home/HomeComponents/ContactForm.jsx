import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

function ContactForm() {
  const formRef = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gwhj06b", // EmailJS service ID
        "template_6odejfk", //  EmailJS template ID
        formRef.current,
        "boogY9cyFET4o6ny4" //  EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatusMessage("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setStatusMessage("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div className="flex justify-center items-center py-10 bg-gray-900" id="contact">
      <div className="w-11/12 max-w-7xl mx-auto p-4 sm:p-6 lg:p-10 bg-gray-800 shadow-lg rounded-lg">
        <h2 className="text-5xl font-bold mb-10 text-center text-white">CONTACT FORM</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 font-medium mb-2">Name</label>
            <input
              type="text"
              name="user_name"
              className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 font-medium mb-2">Email Address</label>
            <input
              type="email"
              name="user_email"
              className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email Address"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 font-medium mb-2">Message</label>
            <textarea
              name="message"
              className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-3 px-4 rounded hover:bg-indigo-600 transition duration-300"
          >
            Send Mail
          </button>
        </form>
        {statusMessage && (
          <p className="mt-4 text-center text-gray-400">{statusMessage}</p>
        )}
      </div>
    </div>
  );
}

export default ContactForm;
