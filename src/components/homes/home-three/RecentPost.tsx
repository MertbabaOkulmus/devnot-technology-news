import SectionTitle from "@/components/common/SectionTitle"
import home_3_data from "@/data/HomeThreeData"
import Image from "next/image"
import Link from "next/link"

const RecentPost = () => {
   return (
      <div className="recent-post-wrap">
         <SectionTitle title="Recent Posts" />
         <div className="row">
            <div className="col-54">
               {home_3_data.filter((items) => items.page === "recent_post").slice(0, 1).map((item) => (
                  <div key={item.id} className="overlay-post-two">
                     <div className="overlay-post-thumb">
                        <Link href="/blog-details"><Image src={item.thumb} alt="" /></Link>
                     </div>
                     <div className="overlay-post-content">
                        <Link href="/blog" className="post-tag">{item.tag}</Link>
                        <h2 className="post-title"><Link href="/blog-details">{item.title}</Link></h2>
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

            <div className="col-46">
               {home_3_data.filter((items) => items.page === "recent_post").slice(1, 4).map((item) => (
                  <div key={item.id} className="horizontal-post-two">
                     <div className="horizontal-post-thumb">
                        <Link href="/blog-details"><Image src={item.thumb} alt="" /></Link>
                     </div>
                     <div className="horizontal-post-content">
                        <Link href="/blog" className="post-tag">{item.tag}</Link>
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
   )
}

export default RecentPost
