import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY!);

    const formData = await req.formData();

    const name    = formData.get("name")    as string;
    const company = formData.get("company") as string;
    const email   = formData.get("email")   as string;
    const phone   = formData.get("phone")   as string;
    const message = formData.get("message") as string;
    const file    = formData.get("file")    as File | null;

    const attachments: { filename: string; content: string }[] = [];

    if (file && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: buffer.toString("base64"),
      });
    }

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["tharunbindhu7090@gmail.com"],
      replyTo: email,
      subject: `New message from ${name}${company ? ` @ ${company}` : ""}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>New Contact Form Submission</title>
        </head>
        <body style="margin:0;padding:0;background:#0a0a0a;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#111111;border-radius:16px;border:1px solid #222222;overflow:hidden;">

                  <!-- Header -->
                  <tr>
                    <td style="background:#111111;padding:36px 40px 28px;border-bottom:1px solid #222222;">
                      <p style="margin:0 0 8px;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#666666;">Portfolio Contact</p>
                      <h1 style="margin:0;font-size:28px;font-weight:300;color:#ffffff;letter-spacing:-0.5px;">New Message Received</h1>
                    </td>
                  </tr>

                  <!-- Body -->
                  <tr>
                    <td style="padding:32px 40px;">

                      <!-- Fields -->
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding-bottom:20px;">
                            <p style="margin:0 0 4px;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#555555;">Name</p>
                            <p style="margin:0;font-size:16px;color:#ffffff;font-weight:500;">${name}</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding-bottom:20px;">
                            <p style="margin:0 0 4px;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#555555;">Email</p>
                            <p style="margin:0;font-size:16px;color:#ffffff;">
                              <a href="mailto:${email}" style="color:#ffffff;text-decoration:underline;text-underline-offset:3px;">${email}</a>
                            </p>
                          </td>
                        </tr>
                        ${phone ? `
                        <tr>
                          <td style="padding-bottom:20px;">
                            <p style="margin:0 0 4px;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#555555;">Phone</p>
                            <p style="margin:0;font-size:16px;color:#ffffff;">
                              <a href="tel:${phone}" style="color:#ffffff;text-decoration:underline;text-underline-offset:3px;">${phone}</a>
                            </p>
                          </td>
                        </tr>` : ""}
                        ${company ? `
                        <tr>
                          <td style="padding-bottom:20px;">
                            <p style="margin:0 0 4px;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#555555;">Company</p>
                            <p style="margin:0;font-size:16px;color:#ffffff;">${company}</p>
                          </td>
                        </tr>` : ""}
                        ${file && file.size > 0 ? `
                        <tr>
                          <td style="padding-bottom:20px;">
                            <p style="margin:0 0 4px;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#555555;">Attachment</p>
                            <p style="margin:0;font-size:14px;color:#888888;">📎 ${file.name}</p>
                          </td>
                        </tr>` : ""}
                      </table>

                      <!-- Divider -->
                      <div style="height:1px;background:#222222;margin:8px 0 28px;"></div>

                      <!-- Message -->
                      <p style="margin:0 0 12px;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#555555;">Message</p>
                      <div style="background:#0d0d0d;border:1px solid #222222;border-radius:10px;padding:20px 24px;">
                        <p style="margin:0;font-size:15px;line-height:1.7;color:#cccccc;white-space:pre-wrap;">${message}</p>
                      </div>

                      <!-- Reply CTA -->
                      <div style="margin-top:32px;text-align:center;">
                        <a href="mailto:${email}?subject=Re: Your message" style="display:inline-block;padding:14px 32px;background:#ffffff;color:#000000;font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;text-decoration:none;border-radius:8px;">
                          Reply to ${name.split(" ")[0]}
                        </a>
                      </div>

                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding:20px 40px 28px;border-top:1px solid #1a1a1a;">
                      <p style="margin:0;font-size:11px;color:#444444;text-align:center;">
                        Sent from your portfolio contact form &bull; ${new Date().toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                          timeZone: "Asia/Kolkata",
                        })}
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      attachments,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false });
  }
}