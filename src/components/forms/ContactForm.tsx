'use client'
import { handleContactFormAction } from '@/app/actions/sendContactEmail'
import React, { useActionState } from 'react'

export default function ContactForm() {
   const [state, formAction] = useActionState(handleContactFormAction, { success: false })

   return (
      <form action={formAction}>
         <div className="row">
            <div className="col-md-6">
               <div className="form-grp">
                  <input type="text" name="user_name" placeholder="Name*" required />
               </div>
            </div>
            <div className="col-md-6">
               <div className="form-grp">
                  <input type="email" name="user_email" placeholder="E-mail*" required />
               </div>
            </div>
         </div>
         <div className="form-grp">
            <input type="number" name="user_phone" placeholder="Phone*" required />
         </div>
         <div className="form-grp">
            <textarea name="message" placeholder="Message*" required></textarea>
         </div>
         <button type="submit" className="btn btn-two">Submit Now</button>
         {state.success && <p className="text-success mt-2">✅ Message sent successfully!</p>}
         {state.error && <p className="text-danger mt-2">❌ Error: {state.error}</p>}
      </form>
   )
}
