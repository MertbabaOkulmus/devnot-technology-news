export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import BlogDetailsArea from "@/components/blogs/blog-details/BlogDetailsArea";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";
import { fetchEventSlug, NewsArticle } from "@/services";
import type { Metadata } from "next";

type Props = {
  params: { id?: string[] };
};

type EventWithImage = NewsArticle & { image?: string | null };

// 1) Dinamik SEO Ayarları (generateMetadata)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const eventId = params?.id?.[0];

  if (!eventId) {
    return { title: "Etkinlik Bulunamadı | Devnot" };
  }

  try {
    const eventData = (await fetchEventSlug(eventId)) as unknown as EventWithImage;

    if (!eventData) {
      return { title: "Etkinlik Bulunamadı | Devnot" };
    }

    return {
      title: `${eventData.title} | Devnot`,
      description: eventData.summary || `${eventData.title} hakkında detaylı bilgi.`,
      openGraph: {
        title: eventData.title,
        description: eventData.summary ?? undefined,
        images: eventData.image ? [{ url: eventData.image }] : [],
      },
    };
  } catch {
    // API 404/500/throw durumunda SSR 500 vermesin, metadata fallback dönsün
    return { title: "Etkinlik Bulunamadı | Devnot" };
  }
}

// 2) Sayfa Bileşeni (Server Component)
export default async function Page({ params }: Props) {
  const eventId = params?.id?.[0];

  if (!eventId) {
    notFound();
  }

  try {
    const featuredEventDetail = (await fetchEventSlug(eventId)) as unknown as EventWithImage;

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
  } catch {
    // fetchEventSlug throw ederse 500 yerine 404
    notFound();
  }
}