import recipe_data from "@/data/RecipeData"
import Image from "next/image"
import Link from "next/link"

const Healthy = () => {
   return (
      <section className="healthy-area pt-60 pb-30">
         <div className="container">
            <div className="healthy-inner-wrap">
               <div className="row">
                  <div className="col-70">
                     <div className="section-title-wrap mb-30">
                        <div className="section-title">
                           <h2 className="title">Healthy Recipes</h2>
                        </div>
                        <div className="section-title-line"></div>
                     </div>

                     <div className="row">
                        {recipe_data.filter((items) => items.page === "home_1_healthy").map((item) => (
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
                  <div className="col-30">
                     <div className="sidebar-wrap no-sticky">
                        <div className="sidebar-widget">
                           <div className="widget-title mb-25">
                              <h2 className="title">Popular Recipes</h2>
                              <div className="section-title-line"></div>
                           </div>
                           <div className="popular-post-wrap">
                              {recipe_data.filter((items) => items.page === "home_1_popular").map((item) => (
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
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Healthy
