"use client"
import SocialIcon from "@/components/common/SocialIcon"
import Image from "next/image"
import Link from "next/link"

import miningSidebar_1 from "@/assets/img/blog/cr_banner_post01.jpg"
import miningSidebar_2 from "@/assets/img/images/sidebar_img04.jpg"

const MiningSidebar = () => {
   return (
      <div className="col-30">
         <div className="sidebar-wrap">
            <div className="sidebar-widget sidebar-widget-two">
               <div className="widget-title mb-30">
                  <h6 className="title">Follow Us On</h6>
                  <div className="section-title-line"></div>
               </div>
               <div className="sidebar-social-wrap">
                  <SocialIcon />
               </div>
            </div>

            <div className="sidebar-widget sidebar-widget-two">
               <div className="sidebar-newsletter">
                  <div className="icon"><i className="flaticon-envelope"></i></div>
                  <h4 className="title">Daily Newsletter</h4>
                  <p>Get all the top stories from Blogs to keep track.</p>
                  <div className="sidebar-newsletter-form-two">
                     <form onSubmit={(e) => e.preventDefault()}>
                        <div className="form-grp">
                           <input type="text" placeholder="Enter your e-mail" />
                           <button type="submit" className="btn">Subscribe Now</button>
                        </div>
                        <div className="form-check">
                           <input type="checkbox" className="form-check-input" id="checkbox" />
                           <label htmlFor="checkbox">I agree to the terms & conditions</label>
                        </div>
                     </form>
                  </div>
               </div>
            </div>

            <div className="sidebar-widget sidebar-widget-two">
               <div className="widget-title mb-30">
                  <h6 className="title">Popular News</h6>
                  <div className="section-title-line"></div>
               </div>
               <div className="hot-post-wrap">
                  <div className="hot-post-item">
                     <div className="hot-post-thumb">
                        <Link href="blog-details"><Image src={miningSidebar_1} alt="" /></Link>
                     </div>
                     <div className="hot-post-content">
                        <Link href="/blog" className="post-tag-two">News</Link>
                        <h4 className="post-title"><Link href="/blog-details">Inspiring Web Design And UX Showcases</Link></h4>
                        <div className="blog-post-meta">
                           <ul className="list-wrap">
                              <li><i className="flaticon-calendar"></i>27 August, 2024</li>
                              <li><i className="flaticon-history"></i>20 Mins</li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="hot-post-item">
                     <div className="hot-post-content">
                        <Link href="/blog" className="post-tag-two">Crypto</Link>
                        <h4 className="post-title"><Link href="/blog-details">Getting Internationalization (i18n) Right With Remix And</Link></h4>
                        <div className="blog-post-meta">
                           <ul className="list-wrap">
                              <li><i className="flaticon-calendar"></i>27 August, 2024</li>
                              <li><i className="flaticon-history"></i>20 Mins</li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="hot-post-item">
                     <div className="hot-post-content">
                        <Link href="/blog" className="post-tag-two">Economy</Link>
                        <h4 className="post-title"><Link href="/blog-details">A Step-By-Step Guide To Building Accessible Carousels</Link></h4>
                        <div className="blog-post-meta">
                           <ul className="list-wrap">
                              <li><i className="flaticon-calendar"></i>27 August, 2024</li>
                              <li><i className="flaticon-history"></i>20 Mins</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="sidebar-widget sidebar-widget-two">
               <div className="sidebar-img">
                  <Link href="#">
                     <Image src={miningSidebar_2} alt="" />
                  </Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default MiningSidebar
