import SectionTitle from "@/components/common/SectionTitle"
import home_5_data from "@/data/HomeFiveData"
import Image from "next/image"
import Link from "next/link"
import RecentSidebar from "./RecentSidebar"

const RecentPost = () => {
   return (
      <section className="recent-post-area-two pt-60 pb-60">
         <div className="container">
            <div className="recent-post-inner-wrap">
               <div className="row justify-content-center">
                  <div className="col-70">
                     <SectionTitle title="Recent Posts" />
                     <div className="popular-post-item-wrap">
                        <div className="row">
                           {home_5_data.filter((items) => items.page === "recent_post").map((item) => (
                              <div key={item.id} className={item.class_name}>
                                 <div className="ta-overlay-post-two">
                                    <div className="overlay-post-thumb-two">
                                       <Link href="/blog-details"><Image src={item.thumb} alt="" /></Link>
                                    </div>
                                    <div className="overlay-post-content-two">
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
                  </div>
                  <RecentSidebar />
               </div>
            </div>
         </div>
      </section>
   )
}

export default RecentPost
