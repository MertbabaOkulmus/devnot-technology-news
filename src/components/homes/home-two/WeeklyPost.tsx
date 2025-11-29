import blog_data from "@/data/BlogData"
import Image from "next/image"
import Link from "next/link"
import WeeklySidebar from "./WeeklySidebar"

const WeeklyPost = () => {
   return (
      <section className="weekly-post-area pt-80 pb-80">
         <div className="container">
            <div className="weekly-post-inner-wrap">
               <div className="row justify-content-center">
                  <div className="col-70">
                     <div className="section-title-wrap-three mb-40">
                        <div className="section-title-three">
                           <h6 className="title">Weekly Best News
                              <span className="section-title-svg">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 246 40" fill="none" preserveAspectRatio="none">
                                    <path d="M10.1448 2.85061C10.6524 1.15867 12.2097 0 13.9761 0H241.624C244.303 0 246.225 2.58294 245.455 5.14939L235.855 37.1494C235.348 38.8413 233.79 40 232.024 40H4.37612C1.69667 40 -0.225117 37.4171 0.544817 34.8506L10.1448 2.85061Z" fill="currentcolor" />
                                 </svg>
                              </span>
                           </h6>
                           <div className="section-title-line-three"></div>
                        </div>
                     </div>

                     <div className="weekly-post-item-wrap">
                        {blog_data.filter((items) => items.page === "home_2").map((item) => (
                           <div key={item.id} className="weekly-post-item">
                              <div className="weekly-post-thumb">
                                 <Link href="/blog-details"><Image src={item.thumb} alt="" /></Link>
                              </div>
                              <div className="weekly-post-content">
                                 <Link href="/blog" className="post-tag">{item.tag}</Link>
                                 <h2 className="post-title"><Link href="/blog-details">{item.title}</Link></h2>
                                 <div className="blog-post-meta">
                                    <ul className="list-wrap">
                                       <li><i className="flaticon-calendar"></i>{item.date}</li>
                                       <li><i className="flaticon-history"></i>{item.time}</li>
                                    </ul>
                                 </div>
                                 <p>{item.desc}</p>
                                 <div className="view-all-btn">
                                    <Link href="/blog-details" className="link-btn">Read More
                                       <span className="svg-icon">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="none">
                                             <path d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z" fill="currentColor" />
                                             <path d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z" fill="currentColor" />
                                          </svg>
                                       </span>
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  <WeeklySidebar />
               </div>
            </div>
         </div>
      </section>
   )
}

export default WeeklyPost
