"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import ReactPaginate from "react-paginate";
import BlogSidebar from "../common-blog/BlogSidebar"
import { NewsArticle } from '@/services/homethree.service'
import placeholder from "@/assets/img/blog/video_post03.jpg";


interface StyleType {
   style: boolean;
   blogs: NewsArticle[]; // Artık senin tipini kullanıyoruz
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

   // HTML taglarını temizlemek için yardımcı fonksiyon
   const stripHtml = (html: string) => {
      if (!html) return "";
      return html.replace(/<[^>]*>?/gm, '');
   };

   // Tarih formatlama
   const formatDate = (dateString: string) => {
      if (!dateString) return "";
      return new Date(dateString).toLocaleDateString('tr-TR', {
         day: 'numeric',
         month: 'long',
         year: 'numeric'
      });
   };

   const formatTime = (dateString: string) => {
      if (!dateString) return "";
      return new Date(dateString).toLocaleTimeString('tr-TR', {
         hour: '2-digit',
         minute: '2-digit'
      });
   };

   // Medya dizisinden görsel URL'ini alma fonksiyonu
   // NOT: Media objesinin içinde url veya path nerede duruyorsa burayı ona göre güncellemelisin.
   const getImageUrl = (item: NewsArticle) => {
      if (item.media && item.media.length > 0) {
         // Örnek: item.media[0].url veya item.media[0].path olabilir.
         // Burayı kendi API dönüşüne göre kontrol et.
         return item.media[0]?.url || item.media[0]?.path || null;
      }
      return null;
   };

   return (
      <section className="blog-area pt-60 pb-60">
         <div className="container">
            <div className={`${style ? "author-inner-wrap" : "author-inner-wrap blog-inner-wrap"}`}>
               <div className="row justify-content-center">
                  <div className={style ? "col-70" : "col-70 order-0 order-xl-2"}>
                     <div className="weekly-post-item-wrap">
                        {currentItems.map((item) => {
                           const imageUrl = getImageUrl(item);

                           return (
                              <div key={item.id} className="weekly-post-item weekly-post-four">
                                 <div className="weekly-post-thumb">
                                    <Link href={`/events/${item.slug}`}>
                                       <Image
                                          src={placeholder}
                                          alt={item.title}
                                          width={800}
                                          height={500}
                                          style={{ objectFit: 'cover' }}
                                       />
                                    </Link>
                                 </div>
                                 <div className="weekly-post-content">
                                    <div className="mb-3 d-flex align-items-center gap-2">
                                       {/* Etkinlik Durumu (isActive kontrolü) */}
                                       {item.isActive !== undefined && (
                                          <span
                                             className="post-tag"
                                             style={{
                                                backgroundColor: item.isActive ? '#0ea5e9' : '#64748b', // Mavi (Aktif) veya Gri (Pasif)
                                                color: '#fff',
                                                marginLeft: '10px'
                                             }}
                                          >
                                             {item.isActive ? "Yaklaşan Etkinlik" : "Geçmiş Etkinlik"}
                                          </span>
                                       )}
                                    </div>

                                    <h2 className="post-title">
                                       <Link href={`/events/${item.slug}`}>{item.title}</Link>
                                    </h2>

                                    <div className="blog-post-meta">
                                       <ul className="list-wrap">
                                          {/* PublishedAt kullanıldı */}
                                          <li><i className="flaticon-calendar"></i>{formatDate(item.date || '')}</li>

                                          <li>
                                             <svg
                                                className="flaticon-location"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                             >
                                                <path d="M12 2C8.686 2 6 4.686 6 8c0 4.418 6 12 6 12s6-7.582 6-12c0-3.314-2.686-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
                                             </svg>
                                             {item.location}
                                          </li>


                                       </ul>
                                    </div>

                                    {/* Özet varsa özet, yoksa içerikten kırpılmış metin */}
                                    <p>
                                       {
                                          stripHtml(item.description).substring(0, 260) + "..."
                                       }
                                    </p>

                                    <div className="view-all-btn">
                                       <Link href={`/events/${item.slug}`} className="link-btn">
                                          Read More
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

                     {blogs.length === 0 && <p className="text-center mt-4">Henüz yayınlanmış bir haber yok.</p>}

                     <div className="pagination-wrap mt-60">
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

                  <BlogSidebar />
               </div>
            </div>
         </div>
      </section>
   )
}

export default BlogArea