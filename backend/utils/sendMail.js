const nodeMailer = require("nodemailer");

const sendMail = async (options) => {
  const transporter = nodeMailer.createTransport({
    service: "hotmail",
    auth: {
      user: "rijeshtamang011@outlook.com",
      pass: "@Tamang123",
    },
  });

  const mailOptions = {
    from: ' "Petrol Pump"<rijeshtamang011@outlook.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendMail;
