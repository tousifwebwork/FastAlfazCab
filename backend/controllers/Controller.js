const resend = require("../config/email.js");
const { contactSchema } = require("../middleware/zod.js");

require("dotenv").config();

function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

exports.ContactController = async (req, res) => {
  try {
    const result = contactSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        message: "Invalid input",
        errors: result.error.issues,
      });
    }

    const { name, email, message } = result.data;

    if (!name || !email || !message) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");
    const dateStr = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // swap once your domain is verified
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New Contact Message from ${safeName}`,
      html: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0; padding:0; background-color:#f4f5f7;" bgcolor="#f4f5f7">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#f4f5f7" style="background-color:#f4f5f7;">
  <tr>
    <td align="center" style="padding:32px 16px;">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" style="background-color:#ffffff; border:1px solid #e5e7eb; max-width:600px;">
        <tr>
          <td bgcolor="#111827" style="background-color:#111827; padding:24px 32px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td align="left" style="color:#ffffff; font-size:18px; font-weight:bold; font-family:Arial, Helvetica, sans-serif;">New Contact Message</td>
                <td align="right" style="color:#9ca3af; font-size:12px; font-family:Arial, Helvetica, sans-serif;">${dateStr}</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 32px 0 32px; font-family:Arial, Helvetica, sans-serif; color:#374151; font-size:14px; line-height:20px;">
            You've received a new message from your website contact form.
          </td>
        </tr>
        <tr>
          <td style="padding:20px 32px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid #e5e7eb;">
              <tr>
                <td style="padding:16px 20px; border-bottom:1px solid #e5e7eb; font-family:Arial, Helvetica, sans-serif;">
                  <span style="display:block; font-size:11px; text-transform:uppercase; letter-spacing:0.5px; color:#9ca3af; font-weight:bold; margin-bottom:4px;">Name</span>
                  <span style="font-size:14px; color:#111827;">${safeName}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:16px 20px; border-bottom:1px solid #e5e7eb; font-family:Arial, Helvetica, sans-serif;">
                  <span style="display:block; font-size:11px; text-transform:uppercase; letter-spacing:0.5px; color:#9ca3af; font-weight:bold; margin-bottom:4px;">Email</span>
                  <a href="mailto:${safeEmail}" style="font-size:14px; color:#2563eb; text-decoration:none;">${safeEmail}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:16px 20px; font-family:Arial, Helvetica, sans-serif;">
                  <span style="display:block; font-size:11px; text-transform:uppercase; letter-spacing:0.5px; color:#9ca3af; font-weight:bold; margin-bottom:8px;">Message</span>
                  <span style="font-size:14px; color:#111827; line-height:22px;">${safeMessage}</span>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:0 32px 28px 32px;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td bgcolor="#111827" style="background-color:#111827;">
                  <a href="mailto:${safeEmail}" style="display:inline-block; padding:12px 24px; font-family:Arial, Helvetica, sans-serif; font-size:14px; font-weight:bold; color:#ffffff; text-decoration:none;">Reply to ${safeName}</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td bgcolor="#f9fafb" style="background-color:#f9fafb; padding:16px 32px; border-top:1px solid #e5e7eb;">
            <p style="margin:0; font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#9ca3af; line-height:18px;">
              This message was sent automatically from your website's contact form. Please do not reply directly to this notification — use the button above.
            </p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`,
    });

    if (error) {
      console.log("Email sent unsuccessfully", error);
      return res.status(500).json({ message: "Server Side Error" });
    }

    console.log("Email sent successfully", data);
    res.status(200).json({
      message: "Contact form submitted successfully",
    });
  } catch (err) {
    console.log("Email sent unsuccessfully", err);
    res.status(500).json({
      message: "Server Side Error",
    });
  }
};

exports.CarsController = (req, res) => {
  res.status(200).json({ message: "This is from Car Controller" });
};