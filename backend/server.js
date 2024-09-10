// backend/server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const config = require(`./config.production.json`);

const app = express();
const port = process.env.PORT || 5000;

//const corsOptions = {
//  origin: ["https://www.erinahuganda.com",],
//};

//app.use(cors(corsOptions));
app.use(cors());
app.use(bodyParser.json());

//! Root route for testing
app.get("/", (req, res) => {
  res.send("Backend server is running!");
});

//! route for sending an email
app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: config.emailService,
    host: config.emailHost,
    port: config.emailPort,
    secure: true,
    auth: {
      user: config.emailUser,
      pass: config.emailPass,
    },
  });

  const mailOptions = {
    from: email,
    to: config.emailUser,
    subject: `Website: Message from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    // console.log('Email sent: ' + info.response);
    res.status(200).send(info.response);
  });
});

//! route for donating money
app.post("/donate-money", (req, res) => {
  const { name, email, amount } = req.body;
  // check if amount is a number
  if (isNaN(amount)) {
    return res.status(400).send("Amount must be a number");
  }
  // check if amount is greater than 0
  if (amount <= 0) {
    return res.status(400).send("Amount must be greater than 0");
  }

  // console.log(
  //   `User ${name} with ${email} donated ${amount} to the organization.`
  // );

  return res
    .status(400)
    .send("Currently under maintenance. Please try again later.");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
