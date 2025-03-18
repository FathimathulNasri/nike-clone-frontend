// components/ContactPage.js
import React, { useState } from 'react';
import '../css/ContactPage.css'; // Import the CSS file for styling

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would handle the form submission (e.g., send to backend or email service)
    console.log('Form submitted', formData);
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-content">
        <p className="contact-description">
          Have a question or need assistance? Get in touch with us below! Our team is always happy to help.
        </p>

        <h2>Store Information</h2>
        <p>
          <strong>Email:</strong> support@nikestore.com
        </p>
        <p>
          <strong>Phone:</strong> +1 800-123-4567
        </p>

        <h2>Send Us a Message</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
