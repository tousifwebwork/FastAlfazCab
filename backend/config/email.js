const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,

  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },

  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 10000,
});

module.exports = transporter;