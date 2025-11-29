import Image from "next/image"
import Link from "next/link"

import bannerThumb from "@/assets/img/blog/tr_banner_post.jpg"

const Banner = () => {
   return (
      <section className="banner-post-area-three pb-40">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="banner-post-three">
                     <div className="banner-post-thumb-three">
                        <Link href="/blog-details"><Image src={bannerThumb} alt="" /></Link>
                     </div>
                     <div className="banner-post-content-three">
                        <Link href="/blog" className="post-tag">Culture</Link>
                        <h2 className="post-title bold-underline"><Link href="/blog-details">The Potentially Dangerous Non-Accessibility Of <br /> Cookie Notices</Link></h2>
                        <div className="blog-post-meta white-blog-meta">
                           <ul className="list-wrap">
                              <li><i className="flaticon-user"></i>by<Link href="/author">Admin</Link></li>
                              <li><i className="flaticon-calendar"></i>27 August, 2024</li>
                              <li><i className="flaticon-history"></i>20 Mins</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Banner
