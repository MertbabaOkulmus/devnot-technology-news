export const dynamic = "force-dynamic";

import BlogTwo from "@/components/blogs/blog-two";
import Wrapper from "@/layouts/Wrapper";
import { fetchUpcomingEvents } from '@/services/homethree.service';
import { Metadata } from "next";

// Dinamik veya Statik Metadata
export const metadata: Metadata = {
  title: "Etkinlikler | Devnot",
  description: "Gelecek etkinlikler ve en güncel haberler listesi.",
};

export default async function Page() {
  const upcomingEvents = await fetchUpcomingEvents();

  return (
    <Wrapper>
      {/* Veriyi prop olarak geçiyoruz */}
      <BlogTwo initialEvents={upcomingEvents} />
    </Wrapper>
  );
}