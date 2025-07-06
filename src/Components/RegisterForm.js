import React, { useState } from 'react';
import './Register.css';
import { FaUser, FaEnvelope, FaComment } from 'react-icons/fa'; 

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Sending form data to backend API endpoint
    const response = await fetch('https://aegservices.in/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message Submitted!");
      // / Scroll back to the form after submission
    const formElement = document.querySelector('.form-container');
    formElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      alert("Failed to send message!");
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="form-container">
          <h2 className="form-heading">Contact Us</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <FaUser className="input-icon" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <FaComment className="input-icon" />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>

        <div className="location-container">
          <h2 className="location-heading">OUR VENUE</h2>

          {/* Map with an exact location */}
          <div className="map-container">
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11770.46082762983!2d77.4185331882464!3d23.277311130827758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c66997de617cf%3A0x93005d0fa7cfa9cf!2s329%20Kalpana%20Nagar%2C%20BHEL%2C%20Bhopal%2C%20Madhya%20Pradesh%20462022!5e0!3m2!1sen!2sin!4v1695123456789!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Clickable Map */}
          <div className="map-clickable" onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=Sahara+By+Pass,+Raisen+Road,+near+New+SOS+Balgram,+Madhya+Pradesh+462021')}>
            <p>Click to open location in Google Maps</p>
          </div>

          <div className="contact-details">
            <p> Address:Near New SOS Balgram, Sahara By Pass,
Raisen Road Bhopal, MP, INDIA </p>
            <p>Pin No.:462021</p>
            {/* <p>Website: http://www.vidhyapeethbhopal.ac.in/</p> */}
            <p>Contact No.: 09981999370</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
