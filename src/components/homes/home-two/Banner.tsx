import blogThumb_1 from "@/assets/img/blog/g_banner_post01.jpg";
import blogThumb_2 from "@/assets/img/blog/g_banner_post02.jpg"
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
   return (
      <section className="banner-post-area">
         <div className="container-fluid p-0">
            <div className="row g-0">
               <div className="col-lg-6">
                  <div className="banner-post-item">
                     <div className="banner-post-thumb">
                        <Link href="/"><Image src={blogThumb_1} alt="" /></Link>
                     </div>
                     <div className="banner-post-content">
                        <Link href="/blog" className="post-tag">Fighter</Link>
                        <h2 className="post-title"><Link href="/blog-details">Mobile Apple Planning Big Mac Redesign <br /> ander Nigh HalfMacShare</Link></h2>
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
               
               <div className="col-lg-6">
                  <div className="banner-post-item">
                     <div className="banner-post-thumb">
                        <Link href="/blog-details"><Image src={blogThumb_2} alt="" /></Link>
                     </div>
                     <div className="banner-post-content">
                        <Link href="/blog" className="post-tag">Action</Link>
                        <h2 className="post-title"><Link href="/blog-details">How To Build A Magazine Layout With <br /> CSS Grid Areas</Link></h2>
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
