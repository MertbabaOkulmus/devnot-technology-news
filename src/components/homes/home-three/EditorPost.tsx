"use client"
import Image from "next/image"
import Link from "next/link"
import Slider from "react-slick";
import React, { useRef } from "react";
import { NewsArticle } from "@/services" 

// Varsayılan resim import'u
import defaultEditorThumb from "@/assets/img/blog/t_banner_post01.jpg"; 

// ... (setting sabitleri aynı kalıyor) ...
const setting = {
   infinite: true,
   speed: 1000,
   slidesToShow: 3,
   slidesToScroll: 1,
   centerMode: true,
   centerPadding: '0',
   dots: false,
   arrows: false,
   autoplay: false,
   autoplaySpeed: 3000,
   responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true, } },
      { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 767, settings: { slidesToShow: 2, slidesToScroll: 1, arrows: false, } },
      { breakpoint: 575, settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false, } },
   ]
}
// ... (mapArticleToEditorItem fonksiyonu aynı kalıyor) ...

const mapArticleToEditorItem = (article: NewsArticle) => {
    const dateOptions: Intl.DateTimeFormatOptions = { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    };
    const date = new Date(article.publishedAt);
    const formattedDate = date.toLocaleDateString('tr-TR', dateOptions).replace(/\.$/, ''); 
    
    const thumbPath = article.media?.[0]?.url || defaultEditorThumb;
    const tag = article.category?.name || article.articleTags?.[0]?.tag?.name || "Gündem";
    
    return {
        id: article.id,
        title: article.title,
        thumb: thumbPath, 
        tag: tag,
        date: formattedDate,
        slug: article.slug,
    };
};

const EditorPost = ({ featuredLatest = [] }: { featuredLatest?: NewsArticle[] }) => {

   const sliderRef = useRef<Slider | null>(null);
   const mappedData = featuredLatest.map(mapArticleToEditorItem);

   const handlePrevClick = () => { if (sliderRef.current) { sliderRef.current.slickPrev(); } };
   const handleNextClick = () => { if (sliderRef.current) { sliderRef.current.slickNext(); } };

   return (
      <section className="editor-post-area pt-50">
         <div className="container">
            {/* Başlık ve Navigasyon Bölümü (Aynı Kalıyor) */}
            <div className="row">
               <div className="col-lg-12">
                  <div className="section-title-wrap mb-30">
                     <div className="section-title">
                        <h2 className="title">Editors Choice</h2>
                     </div>
                     <div className="editor-nav">
                        <button onClick={handlePrevClick} type="button" className="slick-prev-btn slick-arrow">
                           <i className="fas fa-arrow-left"></i>
                        </button>
                        <button onClick={handleNextClick} type="button" className="slick-next-btn slick-arrow">
                           <i className="fas fa-arrow-right"></i>
                        </button>
                     </div>
                     <div className="section-title-line"></div>
                  </div>
               </div>
            </div>

            <div className="editor-post-wrap">
               {mappedData.length > 0 ? (
                  <Slider {...setting} ref={sliderRef} className="row editor-post-active">
                     {mappedData.map((item) => (
                        <div key={item.id} className="col-lg-4">
                           {/* === KART DÜZENLEMESİ BAŞLANGIÇ === */}
                           <div 
                              className="editor-post-item custom-editor-card" 
                              // Kart Boyutu: Genişlik 410px, Yükseklik 160px (Flex yapısı uygulandı)
                              style={{ width: '410px', height: '160px', display: 'flex', alignItems: 'center', margin: '0 10px' }}
                           >
                              {/* RESİM KISMI */}
                              <div 
                                 className="editor-post-thumb custom-editor-thumb"
                                 // Resim Boyutu: 160px x 160px Kare
                                 style={{ width: '160px', height: '160px', flexShrink: 0 }}
                              >
                                 <Link href={`/blog/${item.slug}`} >
                                     <Image 
                                         src={item.thumb} 
                                         alt={item.title} 
                                         width={160} 
                                         height={160} 
                                         style={{ objectFit: 'cover' }}
                                     />
                                 </Link>
                              </div>
                              
                              {/* İÇERİK/YAZI KISMI */}
                              <div 
                                 className="editor-post-content custom-editor-content"
                                 // İçerik hizalama: Dikeyde justify-content: space-between kullanılarak etiket üste, tarih alta itildi.
                                 style={{ 
                                    flexGrow: 1, 
                                    height: '100%', 
                                    padding: '10px 15px', 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    justifyContent: 'space-between',
                                    textAlign: 'left' // Yazı hizalaması
                                 }}
                              >
                                 {/* 1. ETİKET (Üstte) */}
                                 <Link href="/blog" className="post-tag-two">{item.tag}</Link>
                                 
                                 {/* 2. BAŞLIK (Ortada - Kesme Uygulandı) */}
                                 <h2 className="post-title" style={{ margin: '5px 0' }}>
                                     <Link 
                                        href={`/blog/${item.slug}`}
                                        // Uzun başlıklar için kesme (ellipsis) stili
                                        style={{ 
                                            display: '-webkit-box',
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 3, // Maksimum 3 satır göster
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            lineHeight: '1.2em', // Satır yüksekliği
                                            maxHeight: '3.6em', // 3 satır * 1.2em = 3.6em
                                        }}
                                     >
                                         {item.title}
                                     </Link>
                                 </h2>
                                 
                                 {/* 3. TARİH (Altta) */}
                                 <div className="blog-post-meta">
                                    <ul className="list-wrap">
                                       <li><i className="flaticon-calendar"></i>{item.date}</li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           {/* === KART DÜZENLEMESİ BİTİŞ === */}
                        </div>
                     ))}
                  </Slider>
               ) : (
                   <p className="text-center pt-50 pb-50">Düzenleyenlerin Seçimi makalesi bulunmamaktadır.</p>
               )}
            </div>
         </div>
      </section>
   )
}

export default EditorPost