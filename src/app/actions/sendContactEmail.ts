'use server'
import nodemailer from 'nodemailer'

export async function sendContactEmail(formData: FormData) {
   const user_name = formData.get('user_name') as string
   const user_email = formData.get('user_email') as string
   const user_phone = formData.get('user_phone') as string
   const user_company = formData.get('user_company') as string
   const message = formData.get('message') as string

   const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
         user: process.env.EMAIL_USER!,
         pass: process.env.EMAIL_PASS!,
      },
   })

   const mailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO!,
      subject: `New message from ${user_name}`,
      html: `
      <p><strong>Name:</strong> ${user_name}</p>
      <p><strong>Email:</strong> ${user_email}</p>
      <p><strong>Phone:</strong> ${user_phone}</p>
      <p><strong>Company:</strong> ${user_company}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `,
   }

   try {
      await transporter.sendMail(mailOptions)
      return { success: true }
   } catch (err: any) {
      console.error('Email send error:', err)
      return { success: false, error: err.message }
   }
}

export async function handleContactFormAction(
   _: any,
   formData: FormData
) {
   return await sendContactEmail(formData)
}
