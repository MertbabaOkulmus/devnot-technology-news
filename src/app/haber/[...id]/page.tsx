export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import BlogDetailsArea from "@/components/blogs/blog-details/BlogDetailsArea";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import { fetchArticleSlug } from "@/services";
import HeaderThree from "@/layouts/headers/HeaderThree";
import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string[] }>;
};

/** * SEO için Meta Verilerini Oluşturan Fonksiyon
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await params;
  const blogId = p.id[0];

  const articleData = await fetchArticleSlug(blogId);

  if (!articleData) {
    return {
      title: "Makale Bulunamadı",
    };
  }

  return {
    title: articleData.title + " | Devnot", // Servisten gelen başlık
    description: articleData.summary || "Makale detayı ve içerik.", // Varsa özet, yoksa default
    openGraph: {
      title: articleData.title,
      images: [articleData.imageUrl || ""], // Varsa makale görseli
    },
  };
}

/** * Ana Sayfa Bileşeni (Server Component)
 */
export default async function Page({ params }: Props) {
  const p = await params;
  const blogId = p.id[0];

  // Veriyi doğrudan sunucuda çekiyoruz
  const featuredArticleDetail = await fetchArticleSlug(blogId);

  // Veri yoksa anında 404 sayfasına yönlendirir
  if (!featuredArticleDetail) {
    notFound();
  }

  return (
    <Wrapper>
      <HeaderThree />
      <main className="fix">
        <BlogDetailsArea
          style={false}
          isEventPage={false}
          featuredArticleDetail={featuredArticleDetail}
        />
      </main>
      <FooterOne style={false} style_2={true} />
    </Wrapper>
  );
}