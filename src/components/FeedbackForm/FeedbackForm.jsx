import React, { useState } from 'react';
import './FeedbackForm.css';
import emailjs from 'emailjs-com';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({ from_name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_5cl2jdh',
      'template_j1ru3gx',
      formData,
      'P9__WuIOPfVIP78-H'
    ).then(
      () => {
        setStatus('Message sent successfully!');
        setIsSubmitted(true); // Collapse form on success
      },
      () => setStatus('Failed to send message.')
    );
  };

  return (
    <div className={`feedback-container ${isSubmitted ? 'collapsed' : ''}`}>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="feedback-form">
          <h2>Send Feedback</h2>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            value={formData.from_name}
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
      ) : (
        <div className="thank-you-message">
          <h2>Thank You!</h2>
          <p>Your feedback has been submitted successfully.</p>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
