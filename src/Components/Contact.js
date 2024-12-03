import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">
        We’d love to hear from you! Reach out to us anytime, and we’ll get back to you as soon as possible.
      </p>
      <div className="contact-cards">
        <div className="contact-card">
          <h2>HR Department</h2>
          <p>Email: hr@nirmaan.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
        <div className="contact-card">
          <h2>Support Team</h2>
          <p>Email: support@nirmaan.com</p>
          <p>Phone: +1 987 654 321</p>
        </div>
        <div className="contact-card">
          <h2>General Queries</h2>
          <p>Email: info@nirmaan.com</p>
          <p>Phone: +1 456 789 012</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
