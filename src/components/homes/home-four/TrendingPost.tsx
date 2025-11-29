"use client"
import SectionTitle from "@/components/common/SectionTitle"
import home_4_data from "@/data/HomeFourData"
import Image from "next/image"
import Link from "next/link"
import Slider from "react-slick";
import React, { useRef } from "react";

import shape_1 from "@/assets/img/images/trending_shape01.png"
import shape_2 from "@/assets/img/images/trending_shape02.png"

const setting = {
   infinite: true,
   speed: 300,
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
            slidesToShow: 3
         }
      },
      {
         breakpoint: 992,
         settings: {
            slidesToShow: 2
         }
      },
      {
         breakpoint: 500,
         settings: {
            slidesToShow: 1
         }
      }
   ]
}

const TrendingPost = () => {

   const sliderRef = useRef<Slider | null>(null);

   const handlePrevClick = () => {
      if (sliderRef.current) {
         sliderRef.current.slickPrev();
      }
   };

   const handleNextClick = () => {
      if (sliderRef.current) {
         sliderRef.current.slickNext();
      }
   };

   return (
      <section className="trending-post-area-two">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <SectionTitle title="Trending Places" />
               </div>
            </div>

            <div className="trending-post-wrapper">
            <div className="trending-post-active">
               <Slider {...setting} ref={sliderRef} className="row">
                  {home_4_data.filter((items) => items.page === "tranding_data").map((item) => (
                     <div key={item.id} className="col-lg-4">
                        <div className="overlay-post-three overlay-post-four">
                           <div className="overlay-post-thumb-three">
                              <Link href="/blog-details"><Image src={item.thumb} alt="" /></Link>
                           </div>
                           <div className="overlay-post-content-three">
                              <Link href="/blog" className="post-tag">{item.tag}</Link>
                              <h2 className="post-title"><Link href="/blog-details">{item.title}</Link></h2>
                              <div className="blog-post-meta white-blog-meta">
                                 <ul className="list-wrap">
                                    <li><i className="flaticon-calendar"></i>{item.date}</li>
                                    <li><i className="flaticon-history"></i>{item.time}</li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </Slider>
               <button onClick={handlePrevClick} type="button" className="slick-prev-btn slick-arrow"><i className="flaticon-next"></i></button>
               <button onClick={handleNextClick} type="button" className="slick-next-btn slick-arrow"><i className="flaticon-next"></i></button>
            </div>
            </div>
         </div>
         <div className="trending-shape-wrap">
            <Image src={shape_1} alt="" />
            <Image src={shape_2} alt="" />
         </div>
      </section>
   )
}

export default TrendingPost
