"use client"
import home_3_data from "@/data/HomeThreeData"
import Image from "next/image"
import Link from "next/link"
import Slider from "react-slick";
import React, { useRef } from "react";

const setting = {
   infinite: true,
   speed: 1000,
   slidesToShow: 4,
   slidesToScroll: 1,
   centerMode: true,
   centerPadding: '0',
   dots: false,
   arrows: false,
   autoplay: true,
   autoplaySpeed: 3000,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: false,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			}
		},
	]
}

const OverlayPost = () => {
   return (
      <section className="overlay-post-area fix">
         <div className="container-fluid p-0">
            <div className="overlay-post-item-wrap">
               <Slider {...setting} className="row overlay-post-active">
                  {home_3_data.filter((items) => items.page === "overlay_post").map((item) => (
                     <div key={item.id} className="col-lg-3">
                        <div className="overlay-post-three">
                           <div className="overlay-post-thumb-three">
                              <Link href="/blog-details"><Image src={item.thumb} alt="" /></Link>
                           </div>
                           <div className="overlay-post-content-three">
                              <a href="/blog" className="post-tag">{item.tag}</a>
                              <h2 className="post-title bold-underline"><Link href="/blog-details">{item.title}</Link></h2>
                              <div className="blog-post-meta white-blog-meta">
                                 <ul className="list-wrap">
                                    <li><i className="flaticon-user"></i>by<Link href="/author">Admin</Link></li>
                                    <li><i className="flaticon-calendar"></i>{item.date}</li>
                                    <li><i className="flaticon-history"></i>{item.time}</li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </Slider>
            </div>
         </div>
      </section>
   )
}

export default OverlayPost
