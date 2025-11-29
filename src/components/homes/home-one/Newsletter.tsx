"use client"
import Image from "next/image"

import img_1 from "@/assets/img/images/newsletter_shape01.png";
import img_2 from "@/assets/img/images/newsletter_shape02.png";

const Newsletter = () => {
   return (
      <section className="newsletter-area">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="newsletter-wrap">
                     <div className="newsletter-content">
                        <h2 className="title">Want to Get New Food New Daily?</h2>
                     </div>
                     <div className="newsletter-form">
                        <form onSubmit={(e) => e.preventDefault()}>
                           <div className="form-grp">
                              <input type="text" placeholder="Name" />
                           </div>
                           <div className="form-grp">
                              <input type="email" placeholder="E-mail" />
                           </div>
                           <button type="submit" className="btn">Submit Now</button>
                        </form>
                     </div>
                     <div className="newsletter-shape-wrap">
                        <Image src={img_1} alt="" />
                        <Image src={img_2} alt="" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Newsletter
