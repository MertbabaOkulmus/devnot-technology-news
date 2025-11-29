"use client"
import spotlight_data from "@/data/SpotlightData"
import Image from "next/image"
import Link from "next/link"
import VideoPopup from '@/modals/VideoPopup';
import { useState } from "react";

import bg_img from "@/assets/img/bg/video_post_bg.jpg"

const VideoPost = () => {

   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
         <section className="video-post-area video-post-bg" style={{ backgroundImage: `url(${bg_img.src})` }}>
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="section-title-wrap-three mb-40">
                        <div className="section-title-three black-title">
                           <h6 className="title">Trending Gaming News
                              <span className="section-title-svg">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 246 40" fill="none" preserveAspectRatio="none">
                                    <path d="M10.1448 2.85061C10.6524 1.15867 12.2097 0 13.9761 0H241.624C244.303 0 246.225 2.58294 245.455 5.14939L235.855 37.1494C235.348 38.8413 233.79 40 232.024 40H4.37612C1.69667 40 -0.225117 37.4171 0.544817 34.8506L10.1448 2.85061Z" fill="currentcolor" />
                                 </svg>
                              </span>
                           </h6>
                           <div className="section-title-line-three"></div>
                        </div>
                        <div className="view-all-btn view-all-btn-two">
                           <Link href="/blog" className="link-btn">View All
                              <span className="svg-icon">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="none">
                                    <path d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z" fill="currentColor" />
                                    <path d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z" fill="currentColor" />
                                 </svg>
                              </span>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="row">
                  <div className="col-lg-6">
                     {spotlight_data.filter((items) => items.page === "video_post").slice(0, 1).map((item) => (
                        <div key={item.id} className="video-post-item big-post">
                           <div className="video-post-thumb">
                              <Link href="/blog-details"><Image src={item.thumb} alt="" /></Link>
                              <a style={{ cursor: "pointer" }} onClick={() => setIsVideoOpen(true)} className="play-btn popup-video"><i className="fas fa-play"></i></a>
                           </div>
                           <div className="video-post-content">
                              <Link href="/blog" className="post-tag post-tag-three">{item.tag}</Link>
                              <h2 className="post-title bold-underline"><Link href="/blog-details">{item.title}</Link></h2>
                              <div className="blog-post-meta white-blog-meta">
                                 <ul className="list-wrap">
                                    <li><i className="flaticon-user"></i>by<Link href="/author">Admin</Link></li>
                                    <li><i className="flaticon-calendar"></i>{item.date}</li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>

                  <div className="col-lg-6">
                     <div className="video-small-post-wrap">
                        {spotlight_data.filter((items) => items.page === "video_post").slice(1, 4).map((item) => (
                           <div key={item.id} className="video-post-item small-post">
                              <div className="video-post-thumb">
                                 <Link href="/blog-details"><Image src={item.thumb} alt="" /></Link>
                                 <a onClick={() => setIsVideoOpen(true)} style={{cursor:"pointer"}} className="play-btn popup-video"><i className="fas fa-play"></i></a>
                              </div>
                              <div className="video-post-content">
                                 <Link href="/blog" className="post-tag post-tag-three">{item.tag}</Link>
                                 <h2 className="post-title"><Link href="/blog-details">{item.title}</Link></h2>
                                 <div className="blog-post-meta white-blog-meta">
                                    <ul className="list-wrap">
                                       <li><i className="flaticon-user"></i>by<a href="/author">Admin</a></li>
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
         </section>
         {/* video modal start */}
         <VideoPopup
            isOpen={isVideoOpen}
            onClose={() => setIsVideoOpen(false)}
            videoId="Ml4XCF-JS0k"
         />
         {/* video modal end */}
      </>
   )
}

export default VideoPost
