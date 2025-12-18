// page.tsx (veya index.tsx)
import BlogTwo from "@/components/blogs/blog-two";
import Wrapper from "@/layouts/Wrapper";
import { fetchArticleCategorySlug } from '@/services/homethree.service';
import { Metadata } from "next";

// Dinamik veya Statik Metadata
export const metadata: Metadata = {
  title: "Kategoriler | Devnot News",
  description: "Gelecek etkinlikler ve en güncel haberler listesi.",
};

type Props = {
   params: { id: string[] };
};


export default async function Page({ params }: Props) {
  const { id } = params;
   const eventId = id[0];
  const upcomingEvents = await fetchArticleCategorySlug(eventId);
  console.log('first', upcomingEvents)

  return (
    <Wrapper>
      {/* Veriyi prop olarak geçiyoruz */}
      <BlogTwo initialEvents={upcomingEvents} />
    </Wrapper>
  );
}