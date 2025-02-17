import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { firstName, lastName, email, phone, message } = await req.json();

    if (!process.env.FROM_EMAIL || !process.env.TO_EMAIL) {
      return NextResponse.json({ error: "Email configuration is missing" }, { status: 500 });
    }

    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL, // Ensure this is a verified domain
      to: [process.env.TO_EMAIL],
      reply_to: email, 
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
