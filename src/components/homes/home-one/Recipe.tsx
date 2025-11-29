import SectionTitle from "@/components/common/SectionTitle"
import recipe_data from "@/data/RecipeData"
import Image from "next/image"
import Link from "next/link"

const Recipe = () => {
   return (

      <section className="recipe-area pt-70 pb-40">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <SectionTitle title="Weekly Best Recipes" />
               </div>
            </div>
            <div className="row">
               <div className="col-xl-6">
                  {recipe_data.filter((items) => items.page === "home_1_recipe_1").slice(0, 1).map((item) => (
                     <div key={item.id} className="ta-overlay-post">
                        <div className="overlay-post-thumb">
                           <Link href="/blog-details">
                              <Image src={item.thumb} alt="" />
                           </Link>
                        </div>
                        <div className="overlay-post-content">
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
                  ))}
               </div>

               <div className="col-xl-6">
                  {recipe_data.filter((items) => items.page === "home_1_recipe_1").slice(1, 4).map((item) => (
                     <div key={item.id} className="ta-horizontal-post">
                        <div className="horizontal-post-thumb">
                           <Link href="/blog-details"><Image src={item.thumb} alt="" /></Link>
                        </div>
                        <div className="horizontal-post-content">
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
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}

export default Recipe
