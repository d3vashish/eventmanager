const sgMail = require("@sendgrid/mail");
require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

function sendEmail(to, subject, text) {
    const msg = {
        to,
        from: "devashish@gmail.com",
        subject,
        text,
    };

    return sgMail.send(msg);
}

module.exports = sendEmail;