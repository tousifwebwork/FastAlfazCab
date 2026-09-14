
const resend = require("../config/resend");
const { contactSchema } = require("../middleware/zod.js"); 

require("dotenv").config();

exports.ContactController = async (req, res) => {
  try {
    const result = contactSchema.safeParse(req.body);

     if (!result.success) {
      return res.status(400).json({ message: "Invalid input",   errors: result.error.issues,});
    }
    
    const { name, email, message } = result.data;

    if (!name || !email || !message) {
      return res.status(400).json({  message: "All fields are required"  });
    }   

     const { data, error } = await resend.emails.send({
      from: "Website Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact Message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    if (error) {
      console.error(error);
      return res.status(500).json({ message: "Failed to send email" });
    }

    res.status(200).json({  message: "Contact form submitted successfully"});

  } catch (err) {
    res.status(500).json({
      message: "Server Side Error"
    });
  }
};



exports.CarsController = (req,res)=>{
    res.status(200).json({message:"This is from Car Controller"})
}