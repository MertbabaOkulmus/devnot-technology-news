import home_3_data from "@/data/HomeThreeData"
import Image from "next/image"
import Link from "next/link"

import thumb_1 from "@/assets/img/images/sidebar_img02.jpg"
import thumb_2 from "@/assets/img/blog/so_post01.jpg"

const WeeklySidebar = () => {
   return (
      <div className="col-30">
         <div className="sidebar-wrap no-sticky">
            <div className="sidebar-widget sidebar-widget-two">
               <div className="sidebar-img">
                  <Link href="#"><Image src={thumb_1} alt="" /></Link>
               </div>
            </div>
            <div className="sidebar-widget sidebar-widget-two">
               <div className="widget-title mb-30">
                  <h6 className="title">Popular Tech</h6>
                  <div className="section-title-line"></div>
               </div>
               <div className="sidebar-overlay-post">
                  <div className="so-post-thumb">
                     <Link href="/blog-details"><Image src={thumb_2} alt="" /></Link>
                  </div>
                  <div className="so-post-content">
                     <Link href="/blog" className="post-tag">Technology</Link>
                     <h4 className="post-title"><Link href="/blog-details">Racing Games Browned ae
                        Cookies Daily Breakfast</Link></h4>
                     <div className="blog-post-meta white-blog-meta">
                        <ul className="list-wrap">
                           <li><i className="flaticon-calendar"></i>27 August, 2024</li>
                           <li><i className="flaticon-history"></i>20 Mins</li>
                        </ul>
                     </div>
                  </div>
               </div>

               {home_3_data.filter((items) => items.page === "weekly_sidebar").map((item) => (
                  <div key={item.id} className="popular-post">
                     <div className="thumb">
                        <Link href="/blog-details"><Image src={item.thumb} alt="" /></Link>
                     </div>
                     <div className="content">
                        <Link href="/blog" className="post-tag-two">Mobile</Link>
                        <h2 className="post-title"><Link href="/blog-details">Effective For Everyday Meetings</Link></h2>
                        <div className="blog-post-meta">
                           <ul className="list-wrap">
                              <li><i className="flaticon-calendar"></i>27 August, 2024</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default WeeklySidebar
