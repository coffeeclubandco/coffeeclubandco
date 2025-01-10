import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_id', // Replace with EmailJS Service ID
      'template_id', // Replace with EmailJS Template ID
      formData,
      'user_id' // Replace with EmailJS User ID 
    ).then(
      () => setStatus('Message sent successfully!'),
      () => setStatus('Failed to send message.')
    );
  };

  return (
    <form onSubmit={handleSubmit} className="feedback-form">
      <h2>Send Feedback</h2>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button type="submit">Send</button>
      {status && <p>{status}</p>}
    </form>
  );
};

export default FeedbackForm;