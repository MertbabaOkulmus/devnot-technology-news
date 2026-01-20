export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import BlogDetailsArea from "@/components/blogs/blog-details/BlogDetailsArea";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";
import { fetchEventSlug, NewsArticle } from "@/services";
import type { Metadata } from "next";

type PageParams = { id?: string[] };
type Props = { params: Promise<PageParams> };

type EventWithImage = NewsArticle & { image?: string | null };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await params;
  const eventId = p?.id?.[0];

  if (!eventId) return { title: "Etkinlik Bulunamadı | Devnot" };

  const url = `https://devnot.com/events/${eventId}`;

  try {
    const eventData = (await fetchEventSlug(eventId)) as unknown as EventWithImage;

    if (!eventData) return { title: "Etkinlik Bulunamadı | Devnot" };

    const title = `${eventData.title} | Devnot`;

    const description =
      eventData.summary ||
      `${eventData.title} hakkında detaylı bilgi.`;

    const image =
      eventData.image || "https://devnot.com/og/default-event.png";

    return {
      title,
      description,

      alternates: {
        canonical: url,
      },

      openGraph: {
        title: eventData.title,
        description,
        url,
        siteName: "Devnot",
        type: "website",
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: eventData.title,
          },
        ],
      },

      twitter: {
        card: "summary_large_image",
        title: eventData.title,
        description,
        images: [image],
      },
    };
  } catch {
    return { title: "Etkinlik Bulunamadı | Devnot" };
  }
}

export default async function Page({ params }: Props) {
  const p = await params;
  const eventId = p?.id?.[0];

  if (!eventId) notFound();

  try {
    const featuredEventDetail = (await fetchEventSlug(eventId)) as unknown as EventWithImage;

    if (!featuredEventDetail) notFound();

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
    notFound();
  }
}
