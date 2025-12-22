import Image from "next/image";
import Link from "next/link";
import bannerThumb_1 from "@/assets/img/blog/t_banner_post01.jpg"
import { NewsArticle } from "@/services"

// Hata veren satır KALDIRILDI: import { Intl } from "next/dist/compiled/intl-messageformat";

// === Arayüz Tanımlamaları ===

// Servisten gelen makale yapısı
/*export interface Article {
   id: number;
   title: string;
   slug: string;
   publishedAt: string;
   user: {
      name: string | null;
   };
   category: {
      name: string;
   };
   articleTags?: Array<{
      tag: { name: string }
   }>;
   media?: Array<{
      url: string
   }>;
}

// Bileşene gelen prop yapısı
interface BannerProps {
   featuredArticles: Article[];
}*/

// === Yardımcı Fonksiyon ===

// 'article' parametresine tür ataması yapıldı (Article)
const mapArticleToBannerItem = (article: NewsArticle) => {

   // Tarih formatlama opsiyonları 
   // Tipi artık Node.js'in veya tarayıcının GLOBAL 'Intl' nesnesinden alınmıştır.
   const dateOptions: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
   };

   const date = new Date(article.publishedAt);
   const formattedDate = date.toLocaleDateString('tr-TR', dateOptions).replace(/\.$/, '');
   // Etiket (Tag): Kategori adı veya ilk etiket adı
   const tag = article.category?.name || article.articleTags?.[0]?.tag?.name || "Gündem";

   return {
      id: article.id,
      title: article.title,
      imageUrl: article.imageUrl,
      tag: tag,
      date: formattedDate,
      slug: article.slug,
      authorName: article.user.name || "Admin",
   };
};

// === Bileşen ===

// Bileşen prop'larına tür ataması yapıldı


const Banner = ({ featuredArticles = [] }: { featuredArticles?: NewsArticle[] }) => {

   const mappedData = featuredArticles.map(mapArticleToBannerItem);

   const bigPost = mappedData.slice(0, 1)[0];
   const smallPosts = mappedData.slice(1, 4);

   return (
      <section className="banner-post-area-two pb-30">
         <div className="container">
            <div className="banner-post-inner">
               <div className="row">
                  {/* Sol Taraf - Büyük Resim (Col-70) */}
                  <div className="col-70">
                     {bigPost && (
                        <div key={bigPost.id} className="banner-post-two big-post">
                           <div className="banner-post-thumb-two">
                              <Link href={`/blog/${bigPost.slug}`}>
                                 <Image
                                    src={bigPost.imageUrl || bannerThumb_1}
                                    alt={bigPost.title}
                                    width={750}
                                    height={500}
                                    priority
                                 />
                              </Link>
                           </div>
                           <div className="banner-post-content-two">
                              <Link href="/blog" className="post-tag">{bigPost.tag}</Link>
                              <h2 className="post-title bold-underline">
                                 <Link href={`/blog/${bigPost.slug}`}>{bigPost.title}</Link>
                              </h2>
                              <div className="blog-post-meta white-blog-meta">
                                 <ul className="list-wrap">
                                    <li><i className="flaticon-calendar"></i>{bigPost.date}</li>
                                    <Link href={`/author?id=${bigPost.id}`}>
                                       <li>

                                          <i className="flaticon-user"></i>
                                          <>{bigPost.authorName}</>

                                       </li>
                                    </Link>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     )}
                  </div>

                  {/* Sağ Taraf - Küçük Resimler (Col-30) */}
                  <div className="col-30">
                     {smallPosts.map((item) => (
                        <div key={item.id} className="banner-post-two small-post">
                           <div className="banner-post-thumb-two">
                              <Link href={`/blog/${item.slug}`}>
                                 <Image
                                    src={item.imageUrl || bannerThumb_1}
                                    alt={item.title}
                                    width={300}
                                    height={200}
                                 />
                              </Link>
                           </div>
                           <div className="banner-post-content-two">
                              <Link href="/blog" className="post-tag">{item.tag}</Link>
                              <h2 className="post-title">
                                 <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                              </h2>
                              <div className="blog-post-meta white-blog-meta">
                                 <ul className="list-wrap">
                                    <li><i className="flaticon-calendar"></i>{item.date}</li>
                                    <Link href={`/author?id=${item.id}`}>
                                       <li>
                                          <i className="flaticon-user"></i>
                                          <>{item.authorName}</>
                                       </li>
                                    </Link>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section >
   );
};

export default Banner;