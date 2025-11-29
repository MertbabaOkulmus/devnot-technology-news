import home_3_data from "@/data/HomeThreeData"
import Image from "next/image"
import Link from "next/link"

const Banner = () => {
   return (
      <section className="banner-post-area-two pt-50 pb-30">
         <div className="container">
            <div className="banner-post-inner">
               <div className="row">
                  <div className="col-70">
                     {home_3_data.filter((items) => items.page === "home_3_banner").slice(0, 1).map((item) => (
                        <div key={item.id} className="banner-post-two big-post">
                           <div className="banner-post-thumb-two">
                              <Link href="/blog-details"><Image src={item.thumb} alt="" /></Link>
                           </div>
                           <div className="banner-post-content-two">
                              <Link href="/blog" className="post-tag">{item.tag}</Link>
                              <h2 className="post-title bold-underline"><Link href="/blog-details">{item.title}</Link></h2>
                              <div className="blog-post-meta white-blog-meta">
                                 <ul className="list-wrap">
                                    <li><i className="flaticon-user"></i>by<Link href="/author">Admin</Link></li>
                                    <li><i className="flaticon-calendar"></i>{item.date}</li>
                                    <li><i className="flaticon-history"></i>{item.time}</li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>

                  <div className="col-30">
                     {home_3_data.filter((items) => items.page === "home_3_banner").slice(1, 4).map((item) => (
                        <div key={item.id} className="banner-post-two small-post">
                           <div className="banner-post-thumb-two">
                              <Link href="/blog-details"><Image src={item.thumb} alt="" /></Link>
                           </div>
                           <div className="banner-post-content-two">
                              <Link href="/blog" className="post-tag">{item.tag}</Link>
                              <h2 className="post-title"><Link href="/blog-details">{item.title}</Link></h2>
                              <div className="blog-post-meta white-blog-meta">
                                 <ul className="list-wrap">
                                    <li><i className="flaticon-calendar"></i>{item.date}</li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Banner
