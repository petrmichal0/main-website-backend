const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

// Odesílání emailu s pomocí Nodemailer
router.post("/contact", async (req, res) => {
  const { email, message } = req.body;

  if (!email || !message) {
    return res
      .status(400)
      .json({ message: "Please provide both email and message" });
  }

  try {
    // Vytvoření Nodemailer transportéru
    let transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: true, // true pro port 465, false pro porty jako 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Obsah emailu
    let mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Sem se odešle email
      subject: "New contact message from your portfolio",
      text: `From: ${email}\n\nMessage: ${message}`,
    };

    // Odeslání emailu
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sending email" });
  }
});

module.exports = router;
