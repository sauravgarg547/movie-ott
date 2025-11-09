import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    console.log("[v0] Email API called")

    const body = await request.json()
    const { name, email, phone, serviceType, projectDetails } = body

    console.log("[v0] Form data received:", { name, email, phone, serviceType })

    const gmailUser = process.env.GMAIL_USER
    const gmailPassword = process.env.GMAIL_APP_PASSWORD
    const adminEmail = process.env.ADMIN_EMAIL

    if (!gmailUser || !gmailPassword) {
      console.log("[v0] Missing email credentials:", { hasUser: !!gmailUser, hasPassword: !!gmailPassword })
      return Response.json(
        {
          message:
            "Server configuration error: Email credentials not configured. Please add GMAIL_USER and GMAIL_APP_PASSWORD to environment variables.",
          details: "Check your environment variables in the Vars section",
        },
        { status: 500 },
      )
    }

    console.log("[v0] Creating transporter with Gmail user:", gmailUser)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPassword,
      },
    })

    console.log("[v0] Sending emails...")

    const adminMailTo = adminEmail || gmailUser
    console.log("[v0] Admin email will be sent to:", adminMailTo)

    const adminMailOptions = {
      from: gmailUser,
      to: adminMailTo,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #ff4757 0%, #6c5ce7 100%); padding: 30px; border-radius: 10px 10px 0 0; color: white;">
            <h1 style="margin: 0; font-size: 28px;">New Contact Form Submission</h1>
          </div>
          
          <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
            <div style="margin-bottom: 20px;">
              <h2 style="color: #333; margin-bottom: 10px; font-size: 18px;">Client Information</h2>
              <p style="margin: 8px 0; color: #555;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 8px 0; color: #555;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #ff4757; text-decoration: none;">${email}</a></p>
              <p style="margin: 8px 0; color: #555;"><strong>Phone:</strong> <a href="tel:${phone}" style="color: #ff4757; text-decoration: none;">${phone}</a></p>
            </div>

            <div style="margin-bottom: 20px; border-top: 2px solid #ddd; padding-top: 20px;">
              <h2 style="color: #333; margin-bottom: 10px; font-size: 18px;">Project Details</h2>
              <p style="margin: 8px 0; color: #555;"><strong>Service Type:</strong> ${serviceType.replace(/-/g, " ").toUpperCase()}</p>
              <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #ff4757;">
                <p style="margin: 0; color: #555; line-height: 1.6; word-wrap: break-word; white-space: pre-wrap;">${projectDetails}</p>
              </div>
            </div>

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #ddd;">
              <p style="color: #999; font-size: 12px;">Received on ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </div>
      `,
    }

    const customerMailOptions = {
      from: gmailUser,
      to: email,
      subject: "We received your message!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #ff4757 0%, #6c5ce7 100%); padding: 30px; border-radius: 10px 10px 0 0; color: white;">
            <h1 style="margin: 0; font-size: 28px;">Thank You for Reaching Out!</h1>
          </div>
          
          <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
            <p style="color: #555; margin-bottom: 15px;">Hi ${name},</p>
            <p style="color: #555; margin-bottom: 15px; line-height: 1.6;">
              Thank you for contacting us! We've received your inquiry about <strong>${serviceType.replace(/-/g, " ")}</strong> and will get back to you shortly.
            </p>
            
            <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #ff4757; margin-bottom: 20px;">
              <p style="margin: 0; color: #555; line-height: 1.6; word-wrap: break-word; white-space: pre-wrap;"><strong>Your Message:</strong><br>${projectDetails}</p>
            </div>

            <p style="color: #555; margin-bottom: 15px; line-height: 1.6;">
              Our team will review your requirements and reach out within 24 business hours.
            </p>

            <p style="color: #555; margin-bottom: 15px;">Best regards,<br><strong>TechCorp Team</strong></p>

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #ddd;">
              <p style="color: #999; font-size: 12px;">© 2025 TechCorp. All rights reserved.</p>
            </div>
          </div>
        </div>
      `,
    }

    console.log("[v0] Sending admin email...")
    const adminResult = await transporter.sendMail(adminMailOptions)
    console.log("[v0] Admin email sent successfully:", adminResult.messageId)

    console.log("[v0] Sending customer email...")
    const customerResult = await transporter.sendMail(customerMailOptions)
    console.log("[v0] Customer email sent successfully:", customerResult.messageId)

    return Response.json({ message: "Email sent successfully!" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Email error:", error)
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred"
    console.log("[v0] Full error:", JSON.stringify(error))
    return Response.json({ message: `Failed to send email: ${errorMessage}` }, { status: 500 })
  }
}
