import Image from "next/image"
import Link from "next/link"
import { NewsArticle } from "@/services"

interface BannerProps {
   featuredArticles?: NewsArticle[]
}

const Banner = ({ featuredArticles = [] }: BannerProps) => {
   const mainArticle = featuredArticles[0];
   const sideArticles = featuredArticles.slice(1, 4);

   return (
      <section className="banner-post-area-two pt-50 pb-30">
         <div className="container">
            <div className="banner-post-inner">
               <div className="row">
                  <div className="col-70">
                     {mainArticle && (
                        <div className="banner-post-two big-post">
                           <div className="banner-post-thumb-two">
                              <Link href={`/blog-details/${mainArticle.slug}`}>
                                 <Image 
                                    src={mainArticle.media?.[0]?.url || '/placeholder.jpg'} 
                                    alt={mainArticle.title}
                                    width={500}
                                    height={300}
                                 />
                              </Link>
                           </div>
                           <div className="banner-post-content-two">
                              <Link href={`/blog?category=${mainArticle.category.slug}`} className="post-tag">
                                 {mainArticle.category.name}
                              </Link>
                              <h2 className="post-title bold-underline">
                                 <Link href={`/blog-details/${mainArticle.slug}`}>{mainArticle.title}</Link>
                              </h2>
                              <div className="blog-post-meta white-blog-meta">
                                 <ul className="list-wrap">
                                    <li><i className="flaticon-user"></i>by<Link href={`/author/${mainArticle.user.id}`}>{mainArticle.user.name}</Link></li>
                                    <li><i className="flaticon-calendar"></i>{new Date(mainArticle.publishedAt).toLocaleDateString()}</li>
                                    <li><i className="flaticon-history"></i>{mainArticle.viewCount} views</li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     )}
                  </div>

                  <div className="col-30">
                     {sideArticles.map((item) => (
                        <div key={item.id} className="banner-post-two small-post">
                           <div className="banner-post-thumb-two">
                              <Link href={`/blog-details/${item.slug}`}>
                                 <Image 
                                    src={item.media?.[0]?.url || '/placeholder.jpg'} 
                                    alt={item.title}
                                    width={250}
                                    height={150}
                                 />
                              </Link>
                           </div>
                           <div className="banner-post-content-two">
                              <Link href={`/blog?category=${item.category.slug}`} className="post-tag">
                                 {item.category.name}
                              </Link>
                              <h2 className="post-title">
                                 <Link href={`/blog-details/${item.slug}`}>{item.title}</Link>
                              </h2>
                              <div className="blog-post-meta white-blog-meta">
                                 <ul className="list-wrap">
                                    <li><i className="flaticon-calendar"></i>{new Date(item.publishedAt).toLocaleDateString()}</li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Banner
