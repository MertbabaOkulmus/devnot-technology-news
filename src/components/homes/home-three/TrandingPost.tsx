import Link from "next/link"
import AdBannerTwo from "./AdBannerTwo"
import RecentPost from "./RecentPost"
import home_3_data from "@/data/HomeThreeData"
import Image from "next/image"
import TrandingSidebar from "./TrandingSidebar"
import SectionTitle from "@/components/common/SectionTitle"

const TrandingPost = () => {
   return (

      <section className="trending-post-area pt-60 pb-60">
         <div className="container">
            <div className="trending-post-inner">
               <div className="row justify-content-center">
                  <div className="col-70">
                     <RecentPost />
                     <AdBannerTwo />

                     <div className="trending-post-wrap">
                        <SectionTitle title="Trending News" />

                        <div className="row justify-content-center">
                           <div className="col-lg-12">
                              {home_3_data.filter((items) => items.page === "tranding_post").slice(0, 1).map((item) => (
                                 <div key={item.id} className="trending-post">
                                    <div className="trending-post-thumb">
                                       <Link href="/blog-details"><Image src={item.thumb} alt="" /></Link>
                                    </div>
                                    <div className="trending-post-content">
                                       <Link href="/haber" className="post-tag">{item.tag}</Link>
                                       <h2 className="post-title bold-underline"><Link href="/blog-details">{item.title}</Link></h2>
                                       <div className="blog-post-meta">
                                          <ul className="list-wrap">
                                             <li><i className="flaticon-user"></i>by<Link href="author">Admin</Link></li>
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

                           {home_3_data.filter((items) => items.page === "tranding_post").slice(1, 4).map((item) => (
                              <div key={item.id} className="col-lg-4 col-md-6">
                                 <div className="trending-post-two">
                                    <div className="trending-post-thumb-two">
                                       <Link href="/blog-details"><Image src={item.thumb} alt="" /></Link>
                                       <Link href="/haber" className="post-tag">{item.tag}</Link>
                                    </div>
                                    <div className="trending-post-content-two">
                                       <h2 className="post-title"><Link href="/blog-details">{item.title}</Link></h2>
                                       <div className="blog-post-meta">
                                          <ul className="list-wrap">
                                             <li><i className="flaticon-user"></i>by<Link href="/author">Admin</Link></li>
                                             <li><i className="flaticon-calendar"></i>{item.date}</li>
                                          </ul>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>

                  <TrandingSidebar />
               </div>
            </div>
         </div>
      </section>
   )
}

export default TrandingPost
