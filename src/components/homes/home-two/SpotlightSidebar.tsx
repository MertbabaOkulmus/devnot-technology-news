"use client"
import Newsletter from "@/components/common/Newsletter"
import SocialIcon from "@/components/common/SocialIcon"
import spotlight_data from "@/data/SpotlightData"
import Image from "next/image"
import Link from "next/link"

const SpotlightSidebar = () => {
   return (
      <div className="col-30">
         <div className="sidebar-wrap no-sticky">
            <div className="sidebar-widget sidebar-widget-two">
               <div className="widget-title-two mb-30">
                  <h6 className="title">Follow Us
                     <span className="section-title-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 246 40" fill="none" preserveAspectRatio="none">
                           <path d="M10.1448 2.85061C10.6524 1.15867 12.2097 0 13.9761 0H241.624C244.303 0 246.225 2.58294 245.455 5.14939L235.855 37.1494C235.348 38.8413 233.79 40 232.024 40H4.37612C1.69667 40 -0.225117 37.4171 0.544817 34.8506L10.1448 2.85061Z" fill="currentcolor" />
                        </svg>
                     </span>
                  </h6>
                  <div className="section-title-line-three"></div>
               </div>
               <div className="sidebar-social-wrap">
                  <SocialIcon />
               </div>
            </div>
            <div className="sidebar-widget sidebar-widget-two">
               <Newsletter />
            </div>
            <div className="sidebar-widget sidebar-widget-two">
               <div className="widget-title-two mb-30">
                  <h6 className="title">Recent Posts
                     <span className="section-title-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 246 40" fill="none" preserveAspectRatio="none">
                           <path d="M10.1448 2.85061C10.6524 1.15867 12.2097 0 13.9761 0H241.624C244.303 0 246.225 2.58294 245.455 5.14939L235.855 37.1494C235.348 38.8413 233.79 40 232.024 40H4.37612C1.69667 40 -0.225117 37.4171 0.544817 34.8506L10.1448 2.85061Z" fill="currentcolor" />
                        </svg>
                     </span>
                  </h6>
                  <div className="section-title-line-three"></div>
               </div>
               <div className="rc-post-wrap">
                  {spotlight_data.filter((items) => items.page === "popular_recent").map((item) => (
                     <div key={item.id} className="popular-post">
                        <div className="thumb">
                           <Link href="/blog-details"><Image src={item.thumb} alt="" /></Link>
                        </div>
                        <div className="content">
                           <Link href="/blog" className="post-tag-two">{item.tag}</Link>
                           <h2 className="post-title"><Link href="/blog-details">{item.title}</Link></h2>
                           <div className="blog-post-meta">
                              <ul className="list-wrap">
                                 <li><i className="flaticon-calendar"></i>{item.date}</li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default SpotlightSidebar
