import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "SKY Holding <onboarding@resend.dev>",
      to: ["info@sky.eg"],
      subject: `Contact Form: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 40px 0;">
              <tr>
                <td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <tr>
                      <td style="background-color: #001233; padding: 40px; text-align: center;">
                        <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 300; letter-spacing: 1px;">SKY HOLDING</h1>
                        <p style="margin: 10px 0 0; color: #ffffff; font-size: 14px; opacity: 0.9;">New Contact Form Submission</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 40px;">
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding-bottom: 20px;">
                              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f9fa; border-left: 4px solid #001233; padding: 15px;">
                                <tr>
                                  <td style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; padding-bottom: 5px;">Name</td>
                                </tr>
                                <tr>
                                  <td style="color: #333; font-size: 16px; font-weight: 500;">${name}</td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding-bottom: 20px;">
                              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f9fa; border-left: 4px solid #001233; padding: 15px;">
                                <tr>
                                  <td style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; padding-bottom: 5px;">Email</td>
                                </tr>
                                <tr>
                                  <td style="color: #333; font-size: 16px; font-weight: 500;">
                                    <a href="mailto:${email}" style="color: #001233; text-decoration: none;">${email}</a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding-bottom: 20px;">
                              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f9fa; border-left: 4px solid #001233; padding: 15px;">
                                <tr>
                                  <td style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; padding-bottom: 5px;">Subject</td>
                                </tr>
                                <tr>
                                  <td style="color: #333; font-size: 16px; font-weight: 500;">${subject}</td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f9fa; border-left: 4px solid #001233; padding: 15px;">
                                <tr>
                                  <td style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; padding-bottom: 5px;">Message</td>
                                </tr>
                                <tr>
                                  <td style="color: #333; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${message}</td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="background-color: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e0e0e0;">
                        <p style="margin: 0; color: #666; font-size: 12px;">This email was sent from the SKY Holding contact form</p>
                        <p style="margin: 10px 0 0; color: #999; font-size: 11px;">© ${new Date().getFullYear()} SKY Holding. All rights reserved.</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
