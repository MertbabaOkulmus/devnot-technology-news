import footer_data from "@/data/FooterData"
import Image from "next/image"
import Link from "next/link"

import footerLogo from "@/assets/img/logo/devnot-logo-white.png";
import bg_img from "@/assets/img/images/footer_shape.png"

interface StyleType {
   style: boolean;
   style_2: boolean;
}

const FooterOne = ({ style, style_2 }: StyleType) => {
   return (
      <footer>
         <div className={`footer-area ${style ? "" : style_2 ? "" : "footer-area-two"}`}>
            <div className="footer-top">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-3 col-md-7">
                        <div className="footer-widget">
                           <div className="fw-logo">
                              <Link href="/"><Image src={footerLogo} alt="" /></Link>
                           </div>
                           <div className="footer-content">
                              <p></p>
                           </div>
                        </div>
                     </div>
                     {footer_data.map((item) => (
                        <div key={item.id} className={`${item.class_name} col-sm-6`}>
                           <div className="footer-widget">
                              <h4 className="fw-title">{item.title}</h4>
                              <div className="footer-link-wrap">
                                 <ul className="list-wrap">
                                    {item.footer_link.map((link, i) => (
                                       <li key={i}><Link target="_blank" href={link.link}>{link.title}</Link></li>
                                    ))}
                                 </ul>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               {style && <div className="footer-shape" style={{ backgroundImage: `url(${bg_img.src})` }}></div>}
            </div>

            <div className="footer-bottom">
               <div className="container">
                  <div className="row">
                     <div className="col-md-6">
                        <div className="footer-bottom-menu">
                           <ul className="list-wrap">
                              <li><Link href="/">Privacy Policy & Terms</Link></li>
                              <li><Link href="/">Site Credits</Link></li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="copyright-text">
                           <p>© 2025 All Rights Reserved</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default FooterOne
