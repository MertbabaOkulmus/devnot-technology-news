import home_4_data from "@/data/HomeFourData"
import Image from "next/image"
import Link from "next/link"

const EditPost = () => {
   return (
      <section className="editor-post-area-two pb-30">
         <div className="container">
            <div className="editor-post-wrap">
               <div className="row">
                  {home_4_data.filter((items) => items.page === "edit_post").map((item) => (
                     <div key={item.id} className="col-xl-4 col-lg-6">
                        <div className="editor-post-item editor-post-two">
                           <div className="editor-post-thumb">
                              <Link href="/blog-details"><Image src={item.thumb} alt="" /></Link>
                           </div>
                           <div className="editor-post-content">
                              <Link href="/blog" className="post-tag-two">{item.tag}</Link>
                              <h2 className="post-title"><Link href="/blog-details">{item.title}</Link></h2>
                              <div className="blog-post-meta">
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
      </section>
   )
}

export default EditPost
