"use client"
import Image, { StaticImageData } from "next/image"
import Link from "next/link";
import Slider from "react-slick";

import img_1 from "@/assets/img/instagram/insta_img01.jpg"
import img_2 from "@/assets/img/instagram/insta_img02.jpg"
import img_3 from "@/assets/img/instagram/insta_img03.jpg"
import img_4 from "@/assets/img/instagram/insta_img04.jpg"
import img_5 from "@/assets/img/instagram/insta_img05.jpg"
import img_6 from "@/assets/img/instagram/insta_img06.jpg"
import img_7 from "@/assets/img/instagram/insta_img07.jpg"
import img_8 from "@/assets/img/instagram/insta_img08.jpg"

const insta_data: StaticImageData[] = [img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8, img_5];


const setting = {
   infinite: true,
   autoplaySpeed: 3000,
   dots: false,
   speed: 1000,
   autoplay: true,
   arrows: false,
   slidesToShow: 8,
   slidesToScroll: 1,
   responsive: [
      {
         breakpoint: 1200,
         settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
         }
      },
      {
         breakpoint: 992,
         settings: {
            slidesToShow: 4,
            slidesToScroll: 1
         }
      },
      {
         breakpoint: 767,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
         }
      },
      {
         breakpoint: 575,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
         }
      },
   ]
}

const Instagram = () => {
   return (
      <div className="instagram-area">
         <div className="instagram-inner-wrap">
            <Slider {...setting} className="row instagram-active">
               {insta_data.map((item, i) => (
                  <div key={i} className="col">
                     <div className="instagram-item">
                        <Link href="#"><Image src={item} alt="" /></Link>
                     </div>
                  </div>
               ))}
            </Slider>
         </div>
      </div>
   )
}

export default Instagram
