"use client"
import feature_data from "@/data/FeaturesData"
import Image from "next/image"
import Link from "next/link"
import Slider from "react-slick";
import React, { useRef } from "react";

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

const Feature = () => {

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

      <section className="featured-post-area pt-60 pb-30">
         <div className="container">
            <div className="featured-post-wrap p-relative">
               <Slider {...setting} ref={sliderRef} className="row featured-post-active">
                  {feature_data.filter((items) => items.page === "home_1").map((item) => (
                     <div key={item.id} className="col-lg-3">
                        <div className="featured-post-item">
                           <div className="featured-post-thumb">
                              <Link href="/blog-details"><Image src={item.thumb} alt="" /></Link>
                           </div>
                           <div className="featured-post-content">
                              <Link href="/blog" className="post-tag">{item.tag}</Link>
                              <h2 className="post-title"><Link href="/blog-details">{item.title}</Link></h2>
                              <div className="blog-post-meta">
                                 <ul className="list-wrap">
                                    <li><i className="flaticon-user"></i>by<Link href="/author">Admin</Link></li>
                                    <li><i className="flaticon-calendar"></i>{item.date}</li>
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
      </section>
   )
}

export default Feature
