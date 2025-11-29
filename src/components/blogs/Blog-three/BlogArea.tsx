"use client"
import inner_blog_data from "@/data/InnerBlogData"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import ReactPaginate from "react-paginate";
import BlogSidebar from "../common-blog/BlogSidebar"

const BlogArea = () => {

   const blog = inner_blog_data.filter(items => items.page === "blog_2");

   const itemsPerPage = 10;
   const [itemOffset, setItemOffset] = useState(0);
   const endOffset = itemOffset + itemsPerPage;
   const currentItems = blog.slice(itemOffset, endOffset);
   const pageCount = Math.ceil(blog.length / itemsPerPage);
   // click to request another page.
   const handlePageClick = (event: { selected: number }) => {
      const newOffset = (event.selected * itemsPerPage) % blog.length;
      setItemOffset(newOffset);
   };

   return (
      <section className="blog-area pt-60 pb-60">
         <div className="container">
            <div className="author-inner-wrap">
               <div className="row justify-content-center">
                  <div className="col-70">
                     <div className="weekly-post-item-wrap-three">
                        <div className="row">
                           {currentItems.map((item) => (
                              <div key={item.id} className="col-md-6">
                                 <div className="weekly-post-three">
                                    <div className="weekly-post-thumb">
                                       <Link href={`/blog-details-two/${item.id}`}><Image src={item.thumb} alt="" /></Link>
                                       <Link href="/blog" className="post-tag">{item.tag}</Link>
                                    </div>
                                    <div className="weekly-post-content">
                                       <h2 className="post-title"><Link href={`/blog-details-two/${item.id}`}>{item.title}</Link></h2>
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

                        <div className="pagination-wrap mt-30">
                           <nav aria-label="Page navigation example">
                              <ReactPaginate
                                 breakLabel="..."
                                 nextLabel=""
                                 onPageChange={handlePageClick}
                                 pageRangeDisplayed={3}
                                 pageCount={pageCount}
                                 previousLabel=""
                                 renderOnZeroPageCount={null}
                                 className="pagination list-wrap"
                              />
                           </nav>
                        </div>
                     </div>
                  </div>
                  <BlogSidebar />
               </div>
            </div>
         </div>
      </section>
   )
}

export default BlogArea
