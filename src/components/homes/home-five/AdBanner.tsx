import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import adThumb from "@/assets/img/images/advertisement10.jpg";

const AdBanner = () => {
   return (
      <div className="ad-banner-area">
         <div className="container">
            <div className="ad-banner-img ad-banner-img-two text-center">
               <Link href="#">
                  <Image src={adThumb} alt="" />
               </Link>
            </div>
         </div>
      </div>
   )
}

export default AdBanner
