import Image from "next/image"
import Link from "next/link";

import adBannerThumb from "@/assets/img/images/advertisement04.jpg";

const AdBannerTwo = () => {
   return (
      <div className="ad-banner-area pb-70">
         <div className="container">
            <div className="ad-banner-img">
               <Link href="#">
                  <Image src={adBannerThumb} alt="" />
               </Link>
            </div>
         </div>
      </div>
   )
}

export default AdBannerTwo
