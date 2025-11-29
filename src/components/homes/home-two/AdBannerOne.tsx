import Image from "next/image"
import Link from "next/link";

import addThumb_1 from "@/assets/img/images/advertisement03.jpg";

const AdBannerOne = () => {
  return (
    <div className="ad-banner-area">
      <div className="container">
        <div className="ad-banner-img text-center">
          <Link href="#">
            <Image src={addThumb_1} alt="" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AdBannerOne;
