const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 4200; // or any other port you prefer

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'outlook ',
  auth: {
    user: 'brahim.houssemeddine@outlook.fr', // your email
    pass: 'Agence2018' // your password
  }
});

// POST route for sending emails
app.post('/book-table', (req, res) => {
  const { name, email, phone, date, time, people, message } = req.body;

  const mailOptions = {
    from: 'brahim.houssemeddine@outlook.fr',
    to: email,
    subject: 'Reservation Confirmation',
    html: `<p>Hello ${name},</p><p>Your reservation for ${people} people on ${date} at ${time} is confirmed. We look forward to serving you!</p><p>${message}</p>`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
