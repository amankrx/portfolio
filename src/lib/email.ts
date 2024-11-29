// lib/email.ts
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function sendEmail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `Portfolio Contact by ${name}`,
      text: `
You have received a new message via your portfolio contact form:

Name: ${name}
Email: ${email}

Message:
${message}
      `.trim(),
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 20px; border-radius: 8px; color: #333;">
  <h2 style="color: #4CAF50; margin-bottom: 20px;">New Contact Message</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #4CAF50;">${email}</a></p>
  <p><strong>Message:</strong></p>
  <div style="background: #fff; padding: 15px; border: 1px solid #ddd; border-radius: 5px; white-space: pre-wrap; color: #555;">
    ${message}
  </div>
</div>
      `.trim(),
    };

    const info = await transporter.sendMail(mailOptions);
    return { success: true, data: info };
  } catch (error) {
    console.error('Email error:', error);
    return { success: false, error };
  }
}
