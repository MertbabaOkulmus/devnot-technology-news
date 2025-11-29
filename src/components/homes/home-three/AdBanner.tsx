import Image from "next/image"
import Link from "next/link"

import addBannerThumb_1 from "@/assets/img/images/advertisement05.jpg"

const AdBanner = () => {
   return (
      <div className="ad-banner-area">
         <div className="container">
            <div className="ad-banner-img ad-banner-img-two text-center">
               <Link href="#">
                  <Image src={addBannerThumb_1} alt="" />
               </Link>
            </div>
         </div>
      </div>
   )
}

export default AdBanner
