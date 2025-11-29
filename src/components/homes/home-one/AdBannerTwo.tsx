import Image from "next/image"
import Link from "next/link"

import adBannerThumb_1 from "@/assets/img/images/advertisement02.jpg"

const AdBannerTwo = () => {
   return (
      <div className="ad-banner-area pb-90">
         <div className="container">
            <div className="ad-banner-img">
               <Link href="#">
                  <Image src={adBannerThumb_1} alt="" />
               </Link>
            </div>
         </div>
      </div>
   )
}

export default AdBannerTwo
