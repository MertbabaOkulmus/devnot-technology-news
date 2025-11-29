import addBannerthumb_1 from '@/assets/img/images/advertisement06.jpg'
import Image from 'next/image'
import Link from 'next/link'

const AdBannerTwo = () => {
   return (
      <div className="ad-banner-img ad-banner-img-two text-center">
         <Link href="#">
            <Image src={addBannerthumb_1} alt="" />
         </Link>
      </div>
   )
}

export default AdBannerTwo
