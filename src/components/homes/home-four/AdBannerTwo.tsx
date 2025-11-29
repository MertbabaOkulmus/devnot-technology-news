import Image from "next/image"
import Link from "next/link"

import bannerThumb from "@/assets/img/images/advertisement09.jpg"

const AdBannerTwo = () => {
   return (
      <div className="ad-banner-area pt-80">
         <div className="container">
            <div className="ad-banner-img ad-banner-img-two text-center">
               <Link href="#">
                  <Image src={bannerThumb} alt="" />
               </Link>
            </div>
         </div>
      </div>
   )
}

export default AdBannerTwo
