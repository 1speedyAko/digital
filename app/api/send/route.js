// app/api/send/route.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { from_name, from_email, from_tel, message } = body;

    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      reply_to: from_email,
      subject: `New Quote Request from ${from_name}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${from_name}</p>
        <p><strong>Email:</strong> ${from_email}</p>
        <p><strong>Phone:</strong> ${from_tel}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}