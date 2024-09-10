import React, { useState, useEffect } from "react";
import "../styles/style.css";
import axios from "axios";
// const config = require("./config.json");

const DonateForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
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
      amount: amount,
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/donate-money`,
        formData
      );
      // console.log("This is my response please: ", response.data);

      if (response.status === 200) {
        setName("");
        setEmail("");
        setAmount("");
        setFormStatus({
          success: true,
          message: "thank you for donating!! It's life changing.",
        });
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setFormStatus({
          success: false,
          message: `Error: ${error.response.data}`,
        });
        // setAlertMessage(`Error: ${error.response.data}`);
      } else {
        setFormStatus({
          success: false,
          message:
            "There was an error donating money. Try contacting us through email for help.",
        });
      }
    }
  };
  return (
    <div
      className="site-section bg-image overlay-primary"
      style={{ backgroundImage: "url('images/img_1.jpg')" }}
    >
      <div className="container">
        {formStatus.message && (
          <div
            className={
              formStatus.success ? "alert alert-success" : "alert alert-danger"
            }
          >
            {formStatus.message}
          </div>
        )}
        <div className="row align-items-stretch">
          <div className="col-md-6">
            <img
              src="assets/images/supporting-hand--giving-hope--help--gratitude.jpg"
              alt="Supporting Hand"
              className="img-fluid shadow"
            />
          </div>

          <div className="col-md-6">
            <div className="bg-white h-100 p-4 shadow border">
              <h3 className="mb-4 text-cursive">Donate Now</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Amount in dollars"
                    id="amount"
                    name="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                  />
                </div>
                {/* <div className="form-group"> */}
                <button type="submit" className="btn btn-primary">
                  Donate Now
                </button>
                {/* </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateForm;
