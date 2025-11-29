import Category from "@/components/common/Category"
import Newsletter from "@/components/common/Newsletter"
import SocialIcon from "@/components/common/SocialIcon"
import home_3_data from "@/data/HomeThreeData"
import Image from "next/image"
import Link from "next/link"

const TrandingSidebar = () => {
   return (
      <div className="col-30">
         <div className="sidebar-wrap">
            <div className="sidebar-widget sidebar-widget-two">
               <div className="widget-title mb-30">
                  <h6 className="title">Subscribe & Followers</h6>
                  <div className="section-title-line"></div>
               </div>
               <div className="sidebar-social-wrap">
                  <SocialIcon />
               </div>
            </div>

            <div className="sidebar-widget sidebar-widget-two">
               <Newsletter />
            </div>

            <div className="sidebar-widget sidebar-widget-two">
               <Category />
            </div>
            <div className="sidebar-widget sidebar-widget-two">
               <div className="widget-title mb-30">
                  <h6 className="title">Popular Posts</h6>
                  <div className="section-title-line"></div>
               </div>
               {home_3_data.filter((items) => items.page === "tranding_popular").map((item) => (
                  <div key={item.id} className="popular-post">
                     <div className="thumb">
                        <Link href="/blog-details"><Image src={item.thumb} alt="" /></Link>
                     </div>
                     <div className="content">
                        <Link href="/blog" className="post-tag-two">{item.tag}</Link>
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

export default TrandingSidebar;
