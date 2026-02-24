import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "All fields required" }),
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to YOU
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    // Confirmation Email to USER
    await transporter.sendMail({
      from: `"Listiq Support" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We have received your message",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 30px;">
          <h2 style="color: #000;">Hello ${name},</h2>
          <p>
            Thank you for reaching out to Listiq.
            We have successfully received your message.
          </p>
          <p>
            Our team will review your inquiry and get back to you as soon as possible.
          </p>
          <div style="margin: 30px 0;">
            <a href="${process.env.SITE_URL}" 
               style="background: #000; color: white; padding: 12px 24px; 
               text-decoration: none; border-radius: 30px; font-weight: bold;">
              Visit Listiq
            </a>
          </div>
          <p style="color: #666; font-size: 14px;">
            This is an automated confirmation email. Please do not reply to this message.
          </p>
        </div>
      `,
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to send email" }),
      { status: 500 }
    );
  }
}