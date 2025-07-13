const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
require('dotenv').config(); // Load environment variables

// Create a transporter using Gmail and App Password
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// API endpoint to handle registration submissions
router.post('/send-registration', (req, res) => {
  const { name, email, phone, affiliation } = req.body;

  // Validate input
  if (!name || !email || !phone || !affiliation) {
    return res.status(400).send('All fields are required');
  }

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_USER,
    subject: `New Registration from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nAffiliation: ${affiliation}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Failed to send registration');
    }
    console.log('Registration email sent:', info.response);
    res.status(200).send('Registration submitted successfully');
  });
});

module.exports = router;
