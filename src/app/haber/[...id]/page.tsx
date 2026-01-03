export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import BlogDetailsArea from "@/components/blogs/blog-details/BlogDetailsArea";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import { fetchArticleSlug } from "@/services";
import HeaderThree from "@/layouts/headers/HeaderThree";
import type { Metadata } from "next";

type PageParams = {
  id?: string[];
};

/**
 * SEO için Meta Verilerini Oluşturan Fonksiyon
 */
export async function generateMetadata(
  { params }: { params: PageParams }
): Promise<Metadata> {
  const blogId = params?.id?.[0];

  if (!blogId) return { title: "Makale Bulunamadı | Devnot" };

  try {
    const articleData = await fetchArticleSlug(blogId);

    if (!articleData) return { title: "Makale Bulunamadı | Devnot" };

    return {
      title: `${articleData.title} | Devnot`,
      description: articleData.summary || "Makale detayı ve içerik.",
      openGraph: {
        title: articleData.title,
        images: articleData.imageUrl ? [articleData.imageUrl] : [],
      },
    };
  } catch {
    return { title: "Makale Bulunamadı | Devnot" };
  }
}

/**
 * Ana Sayfa Bileşeni (Server Component)
 */
export default async function Page({ params }: { params: PageParams }) {
  const blogId = params?.id?.[0];
  if (!blogId) notFound();

  try {
    const featuredArticleDetail = await fetchArticleSlug(blogId);
    if (!featuredArticleDetail) notFound();

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
  } catch {
    notFound();
  }
}
