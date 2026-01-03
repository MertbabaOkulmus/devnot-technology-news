import SectionTitle from "@/components/common/SectionTitle"
import home_4_data from "@/data/HomeFourData"
import Image from "next/image"
import Link from "next/link"
import SocialIcon from "@/components/common/SocialIcon";

import thumb_1 from "@/assets/img/blog/tr_latest_post01.jpg";
import thumb_2 from "@/assets/img/images/avatar_img02.png";

const LatestPost = () => {
   return (
      <section className="latest-post-area-two pt-60 pb-60">
         <div className="container">
            <div className="latest-post-inner-wrap">
               <div className="row">
                  <div className="col-70">
                     <SectionTitle title="Explore Latest Places" />
                     <div className="latest-post-item-wrap">
                        <div className="row">
                           <div className="col-34">
                              <div className="latest-post-wrap">
                                 {home_4_data.filter((items) => items.page === "latest_post").map((item) => (
                                    <div key={item.id} className="featured-post-item latest-post-item small-post">
                                       <div className="featured-post-thumb">
                                          <Link href="/blog-details"><Image src={item.thumb} alt="" /></Link>
                                       </div>
                                       <div className="featured-post-content">
                                          <Link href="/haber" className="post-tag">{item.tag}</Link>
                                          <h2 className="post-title"><Link href="/blog-details">{item.title}</Link></h2>
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

                           <div className="col-66">
                              <div className="featured-post-item latest-post-item big-post">
                                 <div className="featured-post-thumb">
                                    <Link href="/blog-details"><Image src={thumb_1} alt="" /></Link>
                                 </div>
                                 <div className="featured-post-content">
                                    <Link href="/haber" className="post-tag">Travel</Link>
                                    <h2 className="post-title bold-underline"><Link href="/blog-details">What Leonardo Da Vinci Can Teach Us <br /> About Web Design</Link></h2>
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
                        </div>
                     </div>
                  </div>

                  <div className="col-30">
                     <div className="sidebar-wrap">
                        <div className="sidebar-widget">
                           <div className="sidebar-avatar-two">
                              <div className="sidebar-avatar-thumb">
                                 <Image src={thumb_2} alt="" />
                              </div>
                              <div className="sidebar-avatar-content">
                                 <h2 className="title">Kelly Rosse</h2>
                                 <p>myhen an unknown printer took Ahen known printer toalley etype specimen book.</p>
                                 <div className="avatar-social">
                                    <ul className="list-wrap">
                                       <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                                       <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                                       <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
                                       <li><Link href="#"><i className="fab fa-youtube"></i></Link></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="sidebar-widget">
                           <div className="widget-title mb-25">
                              <h2 className="title">Bizi Takip Et</h2>
                              <div className="section-title-line"></div>
                           </div>
                           <div className="sidebar-social-wrap sidebar-social-two">
                              <SocialIcon />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default LatestPost
