"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import VideoPopup from "@/modals/VideoPopup"

// Varsayılan resimler
import blogThumb_1 from "@/assets/img/blog/blog_details01.jpg"
// İç içerik resimleri (Dinamik veri yoksa statik kalır)
import blogThumb_2 from "@/assets/img/blog/blog_details02.jpg"

// Gelen featuredArticleDetail verisinin yapısı için arayüz (tüm yapıyı kapsayacak şekilde)
interface ArticleDetail {
    id: number;
    title: string;
    slug: string;
    content: string; // HTML içeriği
    summary: string | null;
    publishedAt: string;
    viewCount: number;
    user: {
        id: number;
        name: string;
        avatarUrl: string | null;
    };
    category: {
        id: number;
        name: string;
    };
    articleTags: Array<{
        tag: {
            name: string;
            slug: string;
        };
    }>;
}

interface BlogDetailsContentProps {
    featuredArticleDetail: ArticleDetail;
}

// Tarih formatlama yardımcı fonksiyonu
const formatPublishedDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('tr-TR', options);
}

const BlogDetailsContent = ({ featuredArticleDetail }: BlogDetailsContentProps) => {

    const [isVideoOpen, setIsVideoOpen] = useState(false);
    
    // Veri kontrolü
    if (!featuredArticleDetail) {
        return <div>Makale detayı bulunamadı.</div>; 
    }

    const item = featuredArticleDetail;
    const authorName = item.user?.name || "Admin";
    const categoryName = item.category?.name || "Genel";
    const publishedDate = formatPublishedDate(item.publishedAt);
    const mainImage = item.imageUrl || blogThumb_1; 
    const summaryText = item.summary || item.content.substring(0, 150) + '...'; // Özet yoksa içeriğin başını kullan

    // Not: Yorum sayısı ve okuma süresi verinizde bulunmadığı için statik/tahmini bırakılmıştır.

    return (
        <>
            <div className="blog-details-content">
                <div className="blog-details-content-top">
                    {/* Kategori Etiketi */}
                    <Link href="/blog" className="post-tag">{categoryName}</Link>
                    {/* Başlık */}
                    <h2 className="title">{item.title}</h2>
                    <div className="bd-content-inner">
                        <div className="blog-post-meta">
                            <ul className="list-wrap">
                                {/* Yazar Adı */}
                               
                                {/* Yayın Tarihi */}
                                <li><i className="flaticon-calendar"></i>{publishedDate}</li>
                                <li><i className="flaticon-user"></i>{authorName}</li>
                                {/* Yorumlar (Statik bırakıldı, veri yok) */}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Ana Resim */}
                <div className="blog-details-thumb">
                    <Image 
                        src={mainImage} 
                        alt={item.title} 
                        // Resim dinamik URL veya statik import objesi olabilir
                        // Next.js Image için varsayılan boyutları kullanın
                        width={850} 
                        height={500} 
                        priority 
                        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                    />
                </div>

                {/* Özet/Giriş Paragrafı (Eski kodun ilk paragrafına karşılık) */}
                {item.summary && <p className="first-info">{item.summary}</p>}

                {/* === ANA İÇERİK (HTML Injection) === */}
                {/* DİKKAT: Content alanı HTML içerdiği için dangerouslySetInnerHTML kullanmak ZORUNLUDUR. */}
                <div 
                    className="blog-main-content" 
                    dangerouslySetInnerHTML={{ __html: item.content }} 
                />
                {/* Not: Orijinal HTML yapınızda bulunan <blockquote>, .blog-details-inner, .blog-details-video 
                     gibi elemanlar, content stringi içinde gelmediği için burada otomatik olarak görünmeyecektir.
                     Eğer bu elemanların görünmesini istiyorsanız, content stringine HTML olarak eklenmeleri gerekir.
                     Şimdilik statik olan bu bölümleri, içeriğin dinamikliği bozulmasın diye kaldırıyorum.
                     Ancak tasarımda o alanların kaybolmaması için, alt yapıyı koruyarak bir yorum satırı ekliyorum.
                */}
                
                {/* --- STATİK/EK İÇERİK BÖLÜMLERİ (Örnek Tasarımda vardı, veri gelmiyor) --- */}
                {/* <p>Statik metin 1</p> */}
                {/* <blockquote>...</blockquote> */}
                
                <div className="blog-details-inner">
                     {/* İçerik içi dinamik resim ve metin olmadığından, bu bölümü statik bırakıyorum veya kaldırıyorum */}
                  <div className="row align-items-center">
                     <div className="col-md-6">
                        <div className="blog-details-inner-img">
                           {/* Bu resim veri modelinizde yok, statik kalacak */}
                           <Image src={blogThumb_2} alt="" /> 
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="blog-details-inner-content">
                           <h3 className="title-two">Ek Detay Başlığı</h3>
                           <p>Bu metin ve liste dinamik içerikte gelmediği için statik bırakıldı.</p>
                           <ul className="list-wrap">
                              <li><i className="fas fa-check"></i>Dinamik Yapı Kontrolü</li>
                              <li><i className="fas fa-check"></i>Tasarım Bütünlüğü</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
               
               {/* <div className="blog-details-video">
                  <Image src={blogThumb_3} alt="" />
                  <a style={{ cursor: "pointer" }} onClick={() => setIsVideoOpen(true)} className="paly-btn popup-video"><i className="fas fa-play"></i></a>
               </div> */}
               {/* --- STATİK/EK İÇERİK BÖLÜMLERİ SONU --- */}


               {item.articleTags.length>0 && <div className="blog-details-bottom">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="post-tags">
                                <h5 className="title">Tags:</h5>
                                {/* Dinamik Etiketler */}
                                <ul className="list-wrap">
                                    {item.articleTags?.map((articleTag, index) => (
                                        <li key={index}>
                                            <Link href={`#`}>{articleTag.tag.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
            {/* Video Modal (Statik bırakıldı) */}
            <VideoPopup
                isOpen={isVideoOpen}
                onClose={() => setIsVideoOpen(false)}
                videoId="Ml4XCF-JS0k"
            />
        </>
    );
};

export default BlogDetailsContent;