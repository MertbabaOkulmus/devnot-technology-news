import category_data from "@/data/CategoryData"
import Image from "next/image"
import Link from "next/link"

const Category = () => {
   return (
      <section className="categories-area-two pt-70 pb-40">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="section-title-wrap-three text-center mb-40">
                     <div className="section-title-three">
                        <h6 className="title">Exciting Categories
                           <span className="section-title-svg">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 246 40" fill="none" preserveAspectRatio="none">
                                 <path d="M10.1448 2.85061C10.6524 1.15867 12.2097 0 13.9761 0H241.624C244.303 0 246.225 2.58294 245.455 5.14939L235.855 37.1494C235.348 38.8413 233.79 40 232.024 40H4.37612C1.69667 40 -0.225117 37.4171 0.544817 34.8506L10.1448 2.85061Z" fill="currentcolor" />
                              </svg>
                           </span>
                        </h6>
                        <div className="section-title-line-three"></div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="categories-item-wrap-two">
               <div className="row">
                  {category_data.filter((item) => item.page === "home_2").map((item) => (
                     <div key={item.id} className="col-lg-2 col-md-4 col-6">
                        <div className="categories-item-two">
                           <div className="categories-img-two">
                              <Link href="/blog">
                                 <Image src={item.thumb} alt="" />
                              </Link>
                           </div>
                           <div className="categories-content-two">
                              <Link href="/blog" className="post-tag">{item.tag}</Link>
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

export default Category
