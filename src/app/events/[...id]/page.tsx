import { notFound } from "next/navigation";
import BlogDetailsArea from "@/components/blogs/blog-details/BlogDetailsArea";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";
import { fetchEventSlug } from '@/services';
import { Metadata } from "next";

// 1. Dinamik SEO Ayarları (generateMetadata)
// Bu fonksiyon sunucu tarafında çalışır ve arama motorları için title/description üretir.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const { id } = params;
   const eventId = id[0];
   const eventData = await fetchEventSlug(eventId);

   if (!eventData) {
      return {
         title: "Etkinlik Bulunamadı",
      };
   }

   return {
      title: `${eventData.title} | Devnot`,
      description: eventData.summary || `${eventData.title} hakkında detaylı bilgi.`, // Varsa özet, yoksa title kullanır
      openGraph: {
         title: eventData.title,
         description: eventData.summary,
         images: eventData.image ? [{ url: eventData.image }] : [],
      },
   };
}

type Props = {
   params: { id: string[] };
};

// 2. Sayfa Bileşeni (Server Component)
// 'use client' kaldırıldığı için artık 'async' kullanabiliriz.
export default async function Page({ params }: Props) {
   const { id } = params;
   const eventId = id[0];

   // Veriyi doğrudan sunucu tarafında çekiyoruz
   const featuredEventDetail = await fetchEventSlug(eventId);

   // Eğer veri yoksa Next.js'in otomatik 404 sayfasına yönlendirir
   if (!featuredEventDetail) {
      notFound();
   }

   return (
      <Wrapper>
         <HeaderThree />
         <main className="fix">
            <BlogDetailsArea 
               style={false} 
               isEventPage={true} 
               featuredEventDetail={featuredEventDetail} 
            />
         </main>
         <FooterOne style={false} style_2={true} />
      </Wrapper>
   );
}