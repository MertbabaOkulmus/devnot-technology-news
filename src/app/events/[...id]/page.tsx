import { notFound } from "next/navigation";
import BlogDetailsArea from "@/components/blogs/blog-details/BlogDetailsArea";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";
import { fetchEventSlug, NewsArticle } from "@/services";
import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string[] }>;
};

type EventWithImage = NewsArticle & { image?: string | null };

// 1. Dinamik SEO Ayarları (generateMetadata)
// Bu fonksiyon sunucu tarafında çalışır ve arama motorları için title/description üretir.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await params;
  const { id } = p;
  const eventId = id[0];

  const eventData = (await fetchEventSlug(eventId)) as unknown as EventWithImage;

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
      description: eventData.summary ?? undefined,
      images: eventData.image ? [{ url: eventData.image }] : [],
    },
  };
}

// 2. Sayfa Bileşeni (Server Component)
// 'use client' kaldırıldığı için artık 'async' kullanabiliriz.
export default async function Page({ params }: Props) {
  const p = await params;
  const { id } = p;
  const eventId = id[0];

  // Veriyi doğrudan sunucu tarafında çekiyoruz
  const featuredEventDetail = (await fetchEventSlug(eventId)) as unknown as EventWithImage;

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