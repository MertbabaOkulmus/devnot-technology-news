export const dynamic = "force-dynamic";

import BlogTwo from "@/components/blogs/blog-two";
import Wrapper from "@/layouts/Wrapper";
import { fetchUpcomingEvents } from "@/services/homethree.service";
import type { Metadata } from "next";

const PAGE_URL = "https://devnot.com/events";

export const metadata: Metadata = {
  title: "Etkinlikler | Devnot",
  description: "Gelecek etkinlikler ve en güncel etkinlik listesi.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: "Etkinlikler | Devnot",
    description: "Gelecek etkinlikler ve en güncel etkinlik listesi.",
    url: PAGE_URL,
    siteName: "Devnot",
    type: "website",
    // Liste sayfasında özel OG görselin yoksa boş bırakmak en güvenlisi
    images: [],
  },

  twitter: {
    // Görsel yoksa summary daha mantıklı; varsa summary_large_image yaparız
    card: "summary",
    title: "Etkinlikler | Devnot",
    description: "Gelecek etkinlikler ve en güncel etkinlik listesi.",
    images: [],
  },
};

export default async function Page() {
  const upcomingEvents = await fetchUpcomingEvents();

  return (
    <Wrapper>
      <BlogTwo initialEvents={upcomingEvents} />
    </Wrapper>
  );
}