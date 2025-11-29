import SectionTitle from "@/components/common/SectionTitle"
import home_5_data from "@/data/HomeFiveData"
import Image from "next/image"
import Link from "next/link"

const WeeklyPost = () => {
   return (
      <>
         <SectionTitle title="Weekly Best News" />
         <div className="weekly-post-item-wrap-three">
            <div className="row">
               {home_5_data.filter((items) => items.page === "weekly_post").map((item) => (
                  <div key={item.id} className="col-md-6">
                     <div className="weekly-post-three">
                        <div className="weekly-post-thumb">
                           <Link href="/blog-details"><Image src={item.thumb} alt="" /></Link>
                           <Link href="/blog" className="post-tag">{item.tag}</Link>
                        </div>
                        <div className="weekly-post-content">
                           <h2 className="post-title"><Link href="/blog-details">{item.title}</Link></h2>
                           <div className="blog-post-meta">
                              <ul className="list-wrap">
                                 <li><i className="flaticon-calendar"></i>{item.date}</li>
                                 <li><i className="flaticon-history"></i>{item.time}</li>
                              </ul>
                           </div>
                           <p>{item.desc}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </>
   )
}

export default WeeklyPost
