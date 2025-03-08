import { contactFormSchema } from "@/utils/contactSchema";
import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "email-smtp.us-east-2.amazonaws.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SES_SMTP_USERNAME,
    pass: process.env.SES_SMTP_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const input = await request.json();
    contactFormSchema.parse(input);

    const { email, name, message } = input;

    const sendingOptions = {
      from: process.env.MY_EMAIL,
      to: email,
      subject: "Thanks for reaching out!",
      text: `Hi there, thanks for filling out the form! It really means a lot to have caught your interest. I'll be sure to reply back as soon as I can, looking forward to getting connected!\n \n Jeeho Lee`,
    };

    const receivingOptions = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      subject: `Portfolio Form Contact- ${name}`,
      text: message,
    };

    await transporter.verify();

    await transporter.sendMail(sendingOptions);
    await transporter.sendMail(receivingOptions);

    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out!",
    });
  } catch (error) {
    console.error("Email send error: ", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Message failed to send.",
      },
      { status: 500 }
    );
  }
}
