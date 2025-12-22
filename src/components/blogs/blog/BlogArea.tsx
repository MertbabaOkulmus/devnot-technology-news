"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import ReactPaginate from "react-paginate";
import BlogSidebar from "../common-blog/BlogSidebar"
import placeholder from "@/assets/img/blog/video_post03.jpg";

interface StyleType {
   style: boolean;
   blogs: any[]; // Her iki servisten gelen datayı da kabul etmesi için
}

const BlogArea = ({ style, blogs }: StyleType) => {
   const itemsPerPage = 6;
   const [itemOffset, setItemOffset] = useState(0);
   const endOffset = itemOffset + itemsPerPage;
   const currentItems = blogs.slice(itemOffset, endOffset);
   const pageCount = Math.ceil(blogs.length / itemsPerPage);

   const handlePageClick = (event: { selected: number }) => {
      const newOffset = (event.selected * itemsPerPage) % blogs.length;
      setItemOffset(newOffset);
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };

   const stripHtml = (html: string) => {
      if (!html) return "";
      return html.replace(/<[^>]*>?/gm, '');
   };

   const formatDate = (dateString: string) => {
      if (!dateString) return "";
      return new Date(dateString).toLocaleDateString('tr-TR', {
         day: 'numeric', month: 'long', year: 'numeric'
      });
   };

   return (
      <section className="blog-area pt-60 pb-60">
         <div className="container">
            <div className={`${style ? "author-inner-wrap" : "author-inner-wrap blog-inner-wrap"}`}>
               <div className="row justify-content-center">
                  <div className={style ? "col-70" : "col-70 order-0 order-xl-2"}>
                     <div className="weekly-post-item-wrap">
                        {currentItems.map((item) => {
                           const imageUrl = item.imageUrl || placeholder;
                           // Dinamik Link: Eğer location varsa etkinliktir, yoksa haberdir (veya tip kontrolü)
                           const detailPath = item.location ? `/events/${item.slug}` : `/blog/${item.slug}`;

                           return (
                              <div key={item.id} className="weekly-post-item weekly-post-four">
                                 <div className="weekly-post-thumb">
                                    <Link href={detailPath}>
                                       <Image
                                          src={imageUrl}
                                          alt={item.title}
                                          width={800}
                                          height={500}
                                          style={{ objectFit: 'cover' }}
                                          unoptimized={!!item.thumbnailImageUrl} // Harici URL'ler için
                                       />
                                    </Link>
                                 </div>
                                 <div className="weekly-post-content">
                                    <div className="mb-3 d-flex align-items-center gap-2">
                                       {/* Kategori veya Etkinlik Durumu */}
                                       {item.category && (
                                          <span className="post-tag" style={{ backgroundColor: '#0ea5e9', color: '#fff' }}>
                                             {item.category.name}
                                          </span>
                                       )}
                                       {item.isActive !== undefined && item.location && (
                                          <span className="post-tag" style={{ backgroundColor: item.isActive ? '#10b981' : '#64748b', color: '#fff' }}>
                                             {item.isActive ? "Yaklaşan" : "Geçmiş"}
                                          </span>
                                       )}
                                    </div>

                                    <h2 className="post-title">
                                       <Link href={detailPath}>{item.title}</Link>
                                    </h2>

                                    <div className="blog-post-meta">
                                       <ul className="list-wrap">
                                          <li><i className="flaticon-calendar"></i>{formatDate(item.publishedAt || item.date)}</li>
                                          
                                          {/* Sadece etkinlikse lokasyon göster */}
                                          {item.location && (
                                             <li>
                                                <i className="flaticon-location"></i> {item.location}
                                             </li>
                                          )}
                                          
                                          {/* Haberse yazar göster */}
                                          {item.user && (
                                             <Link href={`/author?id=${item.user.id}`}><li><i className="flaticon-user"></i> {item.user.name}</li></Link>
                                          )}
                                       </ul>
                                    </div>

                                    <p>{item.summary || (stripHtml(item.content || item.description).substring(0, 180) + "...")}</p>

                                    <div className="view-all-btn">
                                       <Link href={detailPath} className="link-btn">
                                          Devamını Oku
                                          <span className="svg-icon">
                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="none">
                                                <path d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z" fill="currentColor" />
                                             </svg>
                                          </span>
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                           )
                        })}
                     </div>

                     {blogs.length === 0 && <p className="text-center mt-4">Henüz bir içerik bulunamadı.</p>}

                     <div className="pagination-wrap mt-60">
                        <nav aria-label="Page navigation">
                           <ReactPaginate
                              breakLabel="..."
                              nextLabel=""
                              onPageChange={handlePageClick}
                              pageRangeDisplayed={3}
                              pageCount={pageCount}
                              previousLabel=""
                              className="pagination list-wrap"
                           />
                        </nav>
                     </div>
                  </div>
                  <BlogSidebar />
               </div>
            </div>
         </div>
      </section>
   )
}

export default BlogArea;