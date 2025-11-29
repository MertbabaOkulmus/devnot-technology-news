"use client"
import home_3_data from "@/data/HomeThreeData"
import Image from "next/image"
import Link from "next/link"
import Slider from "react-slick";
import React, { useRef } from "react";

const setting = {
   infinite: true,
   speed: 1000,
   slidesToShow: 3,
   slidesToScroll: 1,
   centerMode: true,
   centerPadding: '0',
   dots: false,
   arrows: false,
   autoplay: false,
   autoplaySpeed: 3000,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
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

const EditorPost = () => {

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
      <section className="editor-post-area pt-50">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="section-title-wrap mb-30">
                     <div className="section-title">
                        <h2 className="title">Editors Choice</h2>
                     </div>
                     <div className="editor-nav">
                        <button onClick={handlePrevClick} type="button" className="slick-prev-btn slick-arrow">
                           <i className="fas fa-arrow-left"></i>
                        </button>
                        <button onClick={handleNextClick} type="button" className="slick-next-btn slick-arrow">
                           <i className="fas fa-arrow-right"></i>
                        </button>
                     </div>
                     <div className="section-title-line"></div>
                  </div>
               </div>
            </div>
            <div className="editor-post-wrap">
               <Slider {...setting} ref={sliderRef} className="row editor-post-active">
                  {home_3_data.filter((items) => items.page === "editor_post").map((item) => (
                     <div key={item.id} className="col-lg-4">
                        <div className="editor-post-item">
                           <div className="editor-post-thumb">
                              <Link href="/blog-details"><Image src={item.thumb} alt="" /></Link>
                           </div>
                           <div className="editor-post-content">
                              <Link href="/blog" className="post-tag-two">{item.tag}</Link>
                              <h2 className="post-title"><Link href="/blog-details">{item.title}</Link></h2>
                              <div className="blog-post-meta">
                                 <ul className="list-wrap">
                                    <li><i className="flaticon-calendar"></i>{item.date}</li>
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

export default EditorPost
