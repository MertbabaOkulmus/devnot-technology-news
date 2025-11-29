import Image from "next/image"
import Link from "next/link"

import addBanner from "@/assets/img/images/advertisement01.jpg";

const AdBanner = () => {
   return (
      <div className="ad-banner-area">
         <div className="container">
            <div className="ad-banner-img">
               <Link href="#">
                  <Image src={addBanner} alt="" />
               </Link>
            </div>
         </div>
      </div>
   )
}

export default AdBanner
