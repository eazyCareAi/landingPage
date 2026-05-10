import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, useCase, country, source, message } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    }

    const to = process.env.LEAD_EMAIL_TO;
    if (!to) {
      return NextResponse.json(
        { error: "Lead email not configured" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const subject = source
      ? `New Lead: ${source} — ${email}`
      : `New EazyCare AI Lead — ${email}`;

    const html = `
      <h2>New EazyCare AI Lead</h2>
      <table border="0" cellpadding="8" style="font-family:sans-serif">
        <tr><td><strong>Name</strong></td><td>${name || "N/A"}</td></tr>
        <tr><td><strong>Email</strong></td><td>${email}</td></tr>
        <tr><td><strong>Use Case</strong></td><td>${useCase || "N/A"}</td></tr>
        <tr><td><strong>Country</strong></td><td>${country || "N/A"}</td></tr>
        <tr><td><strong>Source</strong></td><td>${source || "N/A"}</td></tr>
        <tr><td><strong>Message</strong></td><td>${message || "N/A"}</td></tr>
        <tr><td><strong>Time</strong></td><td>${new Date().toISOString()}</td></tr>
      </table>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject,
      html,
      text: `New Lead\nName: ${name || "N/A"}\nEmail: ${email}\nUse Case: ${useCase || "N/A"}\nCountry: ${country || "N/A"}\nSource: ${source || "N/A"}\nMessage: ${message || "N/A"}`,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Lead capture error:", err);
    return NextResponse.json(
      { error: "Failed to send lead", detail: err?.message || String(err) },
      { status: 500 }
    );
  }
}
