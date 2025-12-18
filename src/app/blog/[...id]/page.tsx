'use client'; // <-- BU İFADE KALMALI

import { notFound } from "next/navigation";
import BlogDetailsArea from "@/components/blogs/blog-details/BlogDetailsArea";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import { fetchArticleSlug, NewsArticle } from '@/services';
import { useEffect, useState } from "react";
import HeaderThree from "@/layouts/headers/HeaderThree";

// Props tipi async olmadığı için Promise kaldırıldı
type Props = {
   // `params` prop'u artık doğrudan veriyi içeriyor
   params: { id: string[] }; 
};

// Bileşen artık `async` OLMAMALI
export default function Page({ params }: Props) {
   
   // Durum değişkenleri burada tanımlanır
   const [featuredArticleDetail, setFeaturedArticleDetail] = useState<NewsArticle | null>(null);
   const [loading, setLoading] = useState(true);

   // `params` objesinden id'yi alın
   const { id } = params;
   const blogId = id[0];
   
   // Blog verisini sadece Client tarafında yüklemek için useEffect kullanılır.
   useEffect(() => {
     if (!blogId) {
        setLoading(false);
        return; // ID yoksa işlemi durdur
     }
     
     const loadArticleData = async () => {
       try {          
         setLoading(true);
         
         // Veriyi servisten çekme
         const articleData = await fetchArticleSlug(blogId);
         
         if (!articleData) {
             console.log('Makale bulunamadı.');
             notFound(); // Next.js'in notFound fonksiyonunu çağırabilirsiniz
         }
         
         setFeaturedArticleDetail(articleData);
       }
         catch (err) {
             console.error('Hata: Makale verisi çekilemedi:', err);
             // Hata durumunda da yüklemeyi sonlandır
         }
         finally {
             setLoading(false);
         }
       };
       loadArticleData();
       
   // Bağımlılık dizisine blogId eklendi ki sadece ilk render'da çalışsın (veya ID değişirse)
   }, [blogId]); 
   
   // Yükleniyor veya veri yoksa gösterilecekler
   if (loading) {
       return <Wrapper><p style={{textAlign: 'center', padding: '100px'}}>Yükleniyor...</p></Wrapper>;
   }
   
   // Makale bulunamazsa veya featuredArticle null ise
   if (!featuredArticleDetail) {
       // Bu kısma notFound() yerine özel bir 404 bileşeni de koyabilirsiniz
       return <Wrapper><p style={{textAlign: 'center', padding: '100px'}}>Makale bulunamadı.</p></Wrapper>;
   }
   
   return (
      <Wrapper>
         <>
            <HeaderThree />
            <main className="fix">
              {/* <Breadcrumbs page={featuredArticleDetail.title} style={true} /> */}
               <BlogDetailsArea style={false} isEventPage={false} featuredArticleDetail={featuredArticleDetail}/>
            </main>
            <FooterOne style={false} style_2={true} />
         </>
      </Wrapper>
   )
}