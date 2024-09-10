// src/components/FormPart.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/style.css";

const FormPart = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState({ success: false, message: "" });

  useEffect(() => {
    if (formStatus.message) {
      const timer = setTimeout(() => {
        setFormStatus({ success: false, message: "" });
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [formStatus]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: name,
      email: email,
      message: message,
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/send-email`,
        formData
      );
      console.log(response.data);

      if (response.status === 200) {
        setName("");
        setEmail("");
        setMessage("");
        setFormStatus({ success: true, message: "Message sent successfully!" });
      }
    } catch (error) {
      // console.error('There was an error sending the message:', error);
      setFormStatus({
        success: false,
        message: "There was an error sending the message. Please try again.",
      });
    }
  };

  return (
    <div className="col-md-4 form-part">
      <h2>Talk to Us</h2>
      {formStatus.message && (
        <div
          className={
            formStatus.success ? "alert alert-success" : "alert alert-danger"
          }
        >
          {formStatus.message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary send">
          Send
        </button>
      </form>
    </div>
  );
};

export default FormPart;
