'use client'; // <-- BU İFADE KALMALI

import { notFound } from "next/navigation";
import BlogDetailsArea from "@/components/blogs/blog-details/BlogDetailsArea";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";
import { fetchEventSlug, NewsArticle } from '@/services';
import { useEffect, useState } from "react";

// Props tipi async olmadığı için Promise kaldırıldı
type Props = {
   // `params` prop'u artık doğrudan veriyi içeriyor
   params: { id: string[] }; 
};

// Bileşen artık `async` OLMAMALI
export default function Page({ params }: Props) {
   
   // Durum değişkenleri burada tanımlanır
   const [featuredEventDetail, setFeaturedEventDetail] = useState<NewsArticle | null>(null);
   const [loading, setLoading] = useState(true);

   // `params` objesinden id'yi alın
   const { id } = params;
   const eventId = id[0];
   
   // Blog verisini sadece Client tarafında yüklemek için useEffect kullanılır.
   useEffect(() => {
     if (!eventId) {
        setLoading(false);
        return; // ID yoksa işlemi durdur
     }
     
     const loadArticleData = async () => {
       try {          
         setLoading(true);
         
         // Veriyi servisten çekme
         const eventData = await fetchEventSlug(eventId);
         
         if (!eventData) {
             console.log('Etkinlik bulunamadı.');
             notFound(); // Next.js'in notFound fonksiyonunu çağırabilirsiniz
         }
         
         setFeaturedEventDetail(eventData);
       }
         catch (err) {
             console.error('Hata: Etkinlik verisi çekilemedi:', err);
             // Hata durumunda da yüklemeyi sonlandır
         }
         finally {
             setLoading(false);
         }
       };
       loadArticleData();
       
   // Bağımlılık dizisine eventId eklendi ki sadece ilk render'da çalışsın (veya ID değişirse)
   }, [eventId]); 
   
   // Yükleniyor veya veri yoksa gösterilecekler
   if (loading) {
       return <Wrapper><p style={{textAlign: 'center', padding: '100px'}}>Yükleniyor...</p></Wrapper>;
   }
   
   // Etkinlik bulunamazsa veya featuredEventDetail null ise
   if (!featuredEventDetail) {
       // Bu kısma notFound() yerine özel bir 404 bileşeni de koyabilirsiniz
       return <Wrapper><p style={{textAlign: 'center', padding: '100px'}}>Etkinlik bulunamadı.</p></Wrapper>;
   }
   
   return (
      <Wrapper>
         <>
           <HeaderThree />
            <main className="fix">
               <Breadcrumbs page={featuredEventDetail.title} style={true} />
               <BlogDetailsArea style={false} isEventPage={true} featuredEventDetail={featuredEventDetail} />
            </main>
            <FooterOne style={false} style_2={true} />
         </>
      </Wrapper>
   )
}