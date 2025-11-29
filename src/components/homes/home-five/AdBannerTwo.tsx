import Image from "next/image"
import Link from "next/link"
import adBannerThumb from "@/assets/img/images/advertisement11.jpg";

const AdBannerTwo = () => {
   return (
      <div className="ad-banner-area pt-70">
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
