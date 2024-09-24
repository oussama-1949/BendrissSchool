require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", (req, res) => {
  const { formData } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail", // Use your email provider
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: formData.parentEmail,
    subject: "New Registration Form Submission",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="color: #333;">Registration Details</h2>
        <ul style="list-style-type: none; padding: 0;">
          <li style="padding: 5px 0;"><strong>First Name:</strong> ${formData.firstName}</li>
          <li style="padding: 5px 0;"><strong>Last Name:</strong> ${formData.lastName}</li>
          <li style="padding: 5px 0;"><strong>Birth Date:</strong> ${formData.birthDate}</li>
          <li style="padding: 5px 0;"><strong>Address:</strong> ${formData.address}</li>
          <li style="padding: 5px 0;"><strong>Nationality:</strong> ${formData.nationality}</li>
          <li style="padding: 5px 0;"><strong>Grade:</strong> ${formData.grade}</li>
          <li style="padding: 5px 0;"><strong>Parent Name:</strong> ${formData.parentName}</li>
          <li style="padding: 5px 0;"><strong>Parent Phone:</strong> ${formData.parentPhone}</li>
          <li style="padding: 5px 0;"><strong>Parent Email:</strong> ${formData.parentEmail}</li>
        </ul>
        <p style="color: #555;">Thank you for your submission!</p>
      </div>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Email sent: " + info.response);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
