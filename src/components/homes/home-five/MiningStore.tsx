import SectionTitle from "@/components/common/SectionTitle"
import home_5_data from "@/data/HomeFiveData"
import Image from "next/image"
import Link from "next/link"
import AdBannerThree from "./AdBannerThree"
import WeeklyPost from "./WeeklyPost"
import MiningSidebar from "./MiningSidebar"

const MiningStore = () => {
   return (
      <section className="mining-post-area pt-70 pb-70">
         <div className="container">
            <div className="mining-post-inner">
               <div className="row justify-content-center">
                  <div className="col-70">
                     <div className="mining-post-wrap mb-40">
                        <div className="section-title-wrap mb-30">
                           <div className="section-title">
                              <h2 className="title">Mining Stories</h2>
                           </div>
                           <div className="section-title-line"></div>
                        </div>

                        <div className="row">
                           {home_5_data.filter((items) => items.page === "mining_store").map((item) => (
                              <div key={item.id} className="col-lg-4 col-md-6 col-sm-6">
                                 <div className="featured-post-item healthy-post">
                                    <div className="featured-post-thumb">
                                       <Link href="/blog-details"><Image src={item.thumb} alt="" /></Link>
                                    </div>
                                    <div className="featured-post-content">
                                       <Link href="/blog" className="post-tag">{item.tag}</Link>
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

                     <AdBannerThree />
                     <WeeklyPost />
                  </div>
                  <MiningSidebar />
               </div>
            </div>
         </div>
      </section>
   )
}

export default MiningStore
