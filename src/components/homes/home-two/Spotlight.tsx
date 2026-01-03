import spotlight_data from "@/data/SpotlightData"
import Image from "next/image"
import Link from "next/link"
import PopularArea from "./PopularArea"
import SpotlightSidebar from "./SpotlightSidebar"

const Spotlight = () => {
   return (

      <section className="spotlight-post-area pt-70 pb-60">
         <div className="spotlight-post-inner-wrap">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-70">
                     <div className="spotlight-post-item-wrap">
                        <div className="section-title-wrap-three mb-30">
                           <div className="section-title-three">
                              <h6 className="title">Today’s Spotlight
                                 <span className="section-title-svg">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 246 40" fill="none" preserveAspectRatio="none">
                                       <path d="M10.1448 2.85061C10.6524 1.15867 12.2097 0 13.9761 0H241.624C244.303 0 246.225 2.58294 245.455 5.14939L235.855 37.1494C235.348 38.8413 233.79 40 232.024 40H4.37612C1.69667 40 -0.225117 37.4171 0.544817 34.8506L10.1448 2.85061Z" fill="currentcolor" />
                                    </svg>
                                 </span>
                              </h6>
                              <div className="section-title-line-three"></div>
                           </div>
                        </div>

                        <div className="row">
                           <div className="col-57">
                              {spotlight_data.filter((items) => items.page === "home_2").slice(0,1).map((item) => (
                                 <div key={item.id} className="spotlight-post big-post">
                                    <div className="spotlight-post-thumb">
                                       <Link href="/blog-details"><Image src={item.thumb} alt="" /></Link>
                                    </div>
                                    <div className="spotlight-post-content">
                                       <Link href="/haber" className="post-tag-two">{item.tag}</Link>
                                       <h2 className="post-title bold-underline"><Link href="/blog-details">{item.title}</Link></h2>
                                       <div className="blog-post-meta">
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

                           <div className="col-43">
                              {spotlight_data.filter((items) => items.page === "home_2").slice(1,4).map((item) => (
                                 <div key={item.id} className="spotlight-post small-post">
                                    <div className="spotlight-post-thumb">
                                       <Link href="/blog-details"><Image src={item.thumb} alt="" /></Link>
                                    </div>
                                    <div className="spotlight-post-content">
                                       <Link href="/haber" className="post-tag-two">{item.tag}</Link>
                                       <h2 className="post-title"><Link href="/blog-details">{item.title}</Link></h2>
                                       <div className="blog-post-meta">
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

                     <PopularArea />
                  </div>

                  <SpotlightSidebar />
               </div>
            </div>
         </div>
      </section>
   )
}

export default Spotlight
