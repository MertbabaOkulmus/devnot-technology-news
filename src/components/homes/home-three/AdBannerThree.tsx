import Image from "next/image"
import Link from "next/link"
import adBanner from "@/assets/img/images/advertisement07.jpg";

const AdBannerThree = () => {
   return (
      <div className="ad-banner-area pb-60">
         <div className="container">
            <div className="ad-banner-img">
               <Link href="#">
                  <Image src={adBanner} alt="" />
               </Link>
            </div>
         </div>
      </div>
   )
}

export default AdBannerThree
