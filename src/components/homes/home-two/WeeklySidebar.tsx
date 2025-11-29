import Image from "next/image";
import Link from "next/link";

import weeklyThumb_1 from "@/assets/img/blog/g_hot_post.jpg";
import weeklyThumb_2 from "@/assets/img/images/sidebar_img01.jpg";

const WeeklySidebar = () => {
   return (
      <div className="col-30">
         <div className="sidebar-wrap sidebar-wrap-two">
            <div className="sidebar-widget sidebar-widget-two">
               <div className="widget-title-two mb-30">
                  <h6 className="title">Hot News
                     <span className="section-title-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 246 40" fill="none" preserveAspectRatio="none">
                           <path d="M10.1448 2.85061C10.6524 1.15867 12.2097 0 13.9761 0H241.624C244.303 0 246.225 2.58294 245.455 5.14939L235.855 37.1494C235.348 38.8413 233.79 40 232.024 40H4.37612C1.69667 40 -0.225117 37.4171 0.544817 34.8506L10.1448 2.85061Z" fill="currentcolor" />
                        </svg>
                     </span>
                  </h6>
                  <div className="section-title-line-three"></div>
               </div>
               <div className="hot-post-wrap">
                  <div className="hot-post-item">
                     <div className="hot-post-thumb">
                        <Link href="/blog-details"><Image src={weeklyThumb_1} alt="" /></Link>
                     </div>
                     <div className="hot-post-content">
                        <Link href="/blog" className="post-tag-two">Fighter</Link>
                        <h4 className="post-title"><Link href="/blog-details">Racing Games Browned Buttadert Cookies Daily Breakfast</Link></h4>
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
                        <Link href="/blog" className="post-tag-two">Action</Link>
                        <h4 className="post-title"><Link href="/blog-details">The Anatomy Of Themed Design System Components</Link></h4>
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
                        <Link href="/blog" className="post-tag-two">Story</Link>
                        <h4 className="post-title"><Link href="/blog-details">Taking The Stress Out Of Design System Management</Link></h4>
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
            <div className="sidebar-widget">
               <div className="sidebar-img">
                  <Link href="#">
                     <Image src={weeklyThumb_2} alt="" />
                  </Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default WeeklySidebar
