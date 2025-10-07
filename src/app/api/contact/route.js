import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const data = await req.json();
        console.log("Received data:", data); // Debug log

        // Validate environment variables
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error("Missing email credentials");
            return new Response(
                JSON.stringify({
                    success: false,
                    message: "Email configuration missing",
                }),
                { status: 500 }
            );
        }

        // Transporter setup
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Verify transporter configuration
        try {
            await transporter.verify();
            console.log("Email transporter verified successfully");
        } catch (verifyError) {
            console.error("Transporter verification failed:", verifyError);
            return new Response(
                JSON.stringify({
                    success: false,
                    message: "Email configuration error",
                }),
                { status: 500 }
            );
        }

        let emailSubject = "";
        let emailHtml = "";

        // Check if it's a meeting scheduling request
        if (data.date && data.time) {
            // Meeting scheduling email
            const meetingDate = data.date
                ? new Date(data.date).toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                })
                : "Not specified";

            emailSubject = `📅 New Meeting Scheduled with ${data.firstName} ${data.lastName}`;
            emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #000; text-align: center; border-bottom: 2px solid #000; padding-bottom: 10px;">New Meeting Scheduled! 🗓️</h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #000; margin-top: 0;">Meeting Details</h3>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">Client Name:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.firstName
                } ${data.lastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;">
                  <a href="mailto:${data.email
                }" style="color: #007bff; text-decoration: none;">${data.email
                }</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.phone
                }</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold;">Date:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${meetingDate}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold;">Time:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.time
                } (${data.timezone})</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold;">Additional Info:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.additionalInfo || "None"
                }</td>
              </tr>
            </table>
          </div>
          
          <p style="color: #666; font-size: 14px; text-align: center;">
            This meeting was scheduled through your booking system.
          </p>
        </div>
      `;
        }
        // Check if it's a contact form request
        else if (data.name && data.email) {
            // Contact form email
            emailSubject = `📧 New Contact Form Submission from ${data.name}`;
            emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #000; text-align: center; border-bottom: 2px solid #000; padding-bottom: 10px;">New Contact Request! ✉️</h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #000; margin-top: 0;">Contact Information</h3>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">Name:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.name
                }</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;">
                  <a href="mailto:${data.email
                }" style="color: #007bff; text-decoration: none;">${data.email
                }</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold;">Message:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.message || "No message provided"
                }</td>
              </tr>
            </table>
          </div>
          
          <p style="color: #666; font-size: 14px; text-align: center;">
            This message was sent through your contact form.
          </p>
        </div>
      `;
        } else {
            console.error("Invalid data received:", data);
            return new Response(
                JSON.stringify({
                    success: false,
                    message: "Invalid data format",
                }),
                { status: 400 }
            );
        }

        // Send email
        try {
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_USER, // Send to yourself
                subject: emailSubject,
                html: emailHtml,
            };

            console.log("Sending email with options:", mailOptions);

            const result = await transporter.sendMail(mailOptions);
            console.log("Email sent successfully:", result.messageId);

            return new Response(
                JSON.stringify({
                    success: true,
                    message: "Email sent successfully",
                }),
                { status: 200 }
            );
        } catch (emailError) {
            console.error("Error sending email:", emailError);
            return new Response(
                JSON.stringify({
                    success: false,
                    message: `Failed to send email: ${emailError.message}`,
                }),
                { status: 500 }
            );
        }
    } catch (error) {
        console.error("General API error:", error);
        return new Response(
            JSON.stringify({
                success: false,
                message: `Server error: ${error.message}`,
            }),
            { status: 500 }
        );
    }
}
