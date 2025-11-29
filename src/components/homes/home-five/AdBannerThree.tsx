import Image from "next/image"
import Link from "next/link"
import adbannerThumb from "@/assets/img/images/advertisement12.jpg"

const AdBannerThree = () => {
   return (
      <div className="ad-banner-area mb-70">
         <div className="ad-banner-img ad-banner-img-two text-center">
            <Link href="#">
               <Image src={adbannerThumb} alt="" />
            </Link>
         </div>
      </div>
   )
}

export default AdBannerThree
