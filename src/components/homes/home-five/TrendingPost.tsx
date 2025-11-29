import SectionTitle from "@/components/common/SectionTitle"
import home_5_data from "@/data/HomeFiveData"
import Image from "next/image"
import Link from "next/link"

const TrendingPost = () => {
   return (
      <section className="trending-post-area-three">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="section-title-wrap mb-30">
                     <div className="section-title white-title">
                        <h2 className="title">Trending News</h2>
                     </div>
                     <div className="view-all-btn view-all-btn-two">
                        <Link href="/blog" className="link-btn">View All
                           <span className="svg-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="none">
                                 <path d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z" fill="currentColor" />
                                 <path d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z" fill="currentColor" />
                              </svg>
                           </span>
                        </Link>
                     </div>
                     <div className="section-title-line black-line"></div>
                  </div>
               </div>
            </div>

            <div className="row">
               {home_5_data.filter((items) => items.page === "tranding_post").slice(0, 2).map((item) => (
                  <div key={item.id} className="col-lg-6">
                     <div className="overlay-post-five">
                        <div className="overlay-post-thumb-five">
                           <Link href="/blog-details"><Image src={item.thumb} alt="" /></Link>
                        </div>
                        <div className="overlay-post-content-five">
                           <Link href="/blog" className="post-tag post-tag-three">{item.tag}</Link>
                           <h2 className="post-title bold-underline"><Link href="/blog-details">{item.title}</Link></h2>
                           <div className="blog-post-meta white-blog-meta">
                              <ul className="list-wrap">
                                 <li><i className="flaticon-calendar"></i>{item.date}</li>
                                 <li><i className="flaticon-history"></i>{item.time}</li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}

               {home_5_data.filter((items) => items.page === "tranding_post").slice(2, 5).map((item) => (
                  <div key={item.id} className="col-xl-4 col-lg-6">
                     <div className="horizontal-post-three">
                        <div className="horizontal-post-thumb-three">
                           <Link href="/blog-details"><Image src={item.thumb} alt="" /></Link>
                        </div>
                        <div className="horizontal-post-content-three">
                           <Link href="/blog" className="post-tag post-tag-three">{item.tag}</Link>
                           <h2 className="post-title"><Link href="/blog-details">{item.title}</Link></h2>
                           <div className="blog-post-meta white-blog-meta">
                              <ul className="list-wrap">
                                 <li><i className="flaticon-calendar"></i>{item.date}</li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default TrendingPost
