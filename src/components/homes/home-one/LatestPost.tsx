import Image from "next/image"
import Link from "next/link"
import latest_post_data from "@/data/LatestPostData";
import LatestPostSidebar from "@/components/common/LatestPostSidebar";

import latestThumb_1 from "@/assets/img/blog/latest_post01.jpg";
import SectionTitle from "@/components/common/SectionTitle";

const LatestPost = () => {
   return (
      <section className="latest-post-area pt-60 pb-60">
         <div className="container">
            <div className="latest-post-inner-wrap">
               <div className="row">
                  <div className="col-70">
                     <SectionTitle title="Explore Latest Recipes" />
                     <div className="latest-post-item-wrap">
                        <div className="row">
                           <div className="col-66">
                              <div className="featured-post-item latest-post-item big-post">
                                 <div className="featured-post-thumb">
                                    <Link href="/blog-details"><Image src={latestThumb_1} alt="" /></Link>
                                 </div>
                                 <div className="featured-post-content">
                                    <Link href="/blog" className="post-tag">Appetizer</Link>
                                    <h2 className="post-title bold-underline"><Link href="/blog-details">Favorite Browned Butter Chocolate <br /> Cookies Daily Breakfast</Link></h2>
                                    <div className="blog-post-meta">
                                       <ul className="list-wrap">
                                          <li><i className="flaticon-user"></i>by<Link href="/author">Admin</Link></li>
                                          <li><i className="flaticon-calendar"></i>27 August, 2024</li>
                                          <li><i className="flaticon-history"></i>20 Mins</li>
                                       </ul>
                                    </div>
                                    <p>Browned butter and brown sugar caramelly goodness, crispy edges thick and soft centers and melty little puddles of chocolate My first favorite thing about these browned butter.</p>
                                 </div>
                              </div>
                           </div>
                           <div className="col-34">
                              <div className="latest-post-wrap">
                                 {latest_post_data.filter((items) => items.page === "home_1").map((item) => (
                                    <div key={item.id} className="featured-post-item latest-post-item small-post">
                                       <div className="featured-post-thumb">
                                          <Link href="/blog-details"><Image src={item.thumb} alt="" /></Link>
                                       </div>
                                       <div className="featured-post-content">
                                          <Link href="/blog" className="post-tag">{item.tag}</Link>
                                          <h2 className="post-title"><Link href="/blog-details">{item.title}</Link>
                                          </h2>
                                          <div className="blog-post-meta">
                                             <ul className="list-wrap">
                                                <li><i className="flaticon-user"></i>by<Link href="/author">Admin</Link></li>
                                                <li><i className="flaticon-calendar"></i>{item.date}</li>
                                             </ul>
                                          </div>
                                       </div>
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <LatestPostSidebar />
               </div>
            </div>
         </div>
      </section>
   )
}

export default LatestPost
