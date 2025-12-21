"use client"
import Category from "@/components/common/Category"
import SocialIcon from "@/components/common/SocialIcon"
import Image from "next/image"
import Link from "next/link";
import sidebarThumb from "@/assets/img/blog/blog_rc_post.jpg";
import { useEffect, useState } from 'react';
import { fetchLatestArticles, NewsArticle } from '@/services';

const BlogSidebar = () => {
   const [featuredLatest, setFeaturedLatest] = useState<NewsArticle[]>([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      const loadArticles = async () => {
         try {
            setLoading(true);
            const latestArticles = await fetchLatestArticles();
            setFeaturedLatest(latestArticles.slice(0, 3));
         } catch (err) {
            console.error('Error fetching articles:', err);
            setError(err instanceof Error ? err.message : 'Failed to load articles');
         } finally {
            setLoading(false);
         }
      };

      loadArticles();
   }, []);

   // Tarih formatlamak için yardımcı fonksiyon
   const formatDate = (dateString: string) => {
      return new Date(dateString).toLocaleDateString('tr-TR', {
         day: 'numeric',
         month: 'long',
         year: 'numeric'
      });
   };

   return (
      <div className="col-30">
         <div className="sidebar-wrap">
            <div className="sidebar-widget sidebar-widget-two">
               <Category />
            </div>

            <div className="sidebar-widget sidebar-widget-two">
               <div className="widget-title mb-25">
                  <h2 className="title">Bizi Takip Et</h2>
                  <div className="section-title-line"></div>
               </div>
               <div className="sidebar-social-wrap">
                  <SocialIcon />
               </div>
            </div>

            <div className="sidebar-widget sidebar-widget-two">
               <div className="widget-title mb-30">
                  <h6 className="title">Son Haberler</h6>
                  <div className="section-title-line"></div>
               </div>
               <div className="hot-post-wrap">
                  {loading && <p>Yükleniyor...</p>}
                  {error && <p>Haberler yüklenemedi.</p>}
                  
                  {!loading && !error && featuredLatest.map((article) => (
                     <div className="hot-post-item" key={article.id}>
                        {/* Sadece ilk haberde görsel gösterilsin istersen veya hepsinde varsa gösterilsin: */}
                        {article.imageUrl && (
                           <div className="hot-post-thumb">
                              <Link href={`/blog/${article.slug}`}>
                                 <Image 
                                    src={article.imageUrl || sidebarThumb} 
                                    alt={article.title} 
                                    width={100} 
                                    height={30} 
                                    style={{ objectFit: 'cover' }}
                                 />
                              </Link>
                           </div>
                        )}
                        <div className="hot-post-content">
                           <Link href={`/category/${article.category?.slug}`} className="post-tag">
                              {article.category?.name}
                           </Link>
                           <h4 className="post-title">
                              <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                           </h4>
                           <div className="blog-post-meta">
                              <ul className="list-wrap">
                                 <li><i className="flaticon-calendar"></i>{formatDate(article.publishedAt)}</li>
                                 {/* Veride okuma süresi yoksa görüntülenme sayısını koyabiliriz */}
                                 <li><i className="flaticon-user"></i>{article.user.name}</li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default BlogSidebar