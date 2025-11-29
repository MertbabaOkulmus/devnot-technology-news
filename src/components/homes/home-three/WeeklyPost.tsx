import SectionTitle from "@/components/common/SectionTitle"
import home_3_data from "@/data/HomeThreeData"
import Image from "next/image"
import Link from "next/link"
import WeeklySidebar from "./WeeklySidebar"

const WeeklyPost = () => {
   return (
      <section className="weekly-post-area-two pt-60 pb-30">
         <div className="container">
            <div className="weekly-post-inner-wrap">
               <div className="row justify-content-center">
                  <div className="col-70">
                     <SectionTitle title="Weekly Best News" />

                     <div className="weekly-post-item-wrap-two">
                        {home_3_data.filter((items) => items.page === "weekly_post").map((item) => (
                           <div key={item.id} className="weekly-post-item weekly-post-two">
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
