import React, { useState } from "react";
import "../pages/Contact.css"; // Import your CSS file
import Header from "../components/Header";

const Contact = () => {
  // State to handle form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We will get back to you soon.");
    // Here you can implement form submission logic (like sending the form data to your server)
  };

  return (
    <div className="contact-container">
      <section className="contact-section">
        <div className="contact-content">
          <h2>Contact Us</h2>
          <p>
            We’d love to hear from you! If you have any questions or feedback,
            feel free to reach out to us. Fill out the form below or use our
            contact details.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit" className="contact-btn">
              Submit
            </button>
          </form>
        </div>

        <div className="contact-info">
          <h3>Our Contact Details</h3>
          <p>Email: support@foodieexpress.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Foodie Street, Food Town, 12345</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
