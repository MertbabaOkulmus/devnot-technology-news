export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import BlogDetailsArea from "@/components/blogs/blog-details/BlogDetailsArea";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import { fetchArticleSlug } from "@/services";
import HeaderThree from "@/layouts/headers/HeaderThree";
import type { Metadata } from "next";

type PageParams = { id?: string[] };
type Props = { params: Promise<PageParams> };

/**
 * SEO için Meta Verilerini Oluşturan Fonksiyon
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await params;
  const blogId = p?.id?.[0];

  if (!blogId) {
    return { title: "Makale Bulunamadı | Devnot" };
  }

  const url = `https://devnot.com/haber/${blogId}`;

  try {
    const articleData: any = await fetchArticleSlug(blogId);

    if (!articleData) {
      return { title: "Makale Bulunamadı | Devnot" };
    }

    const title = `${articleData.title} | Devnot`;

    const description =
      articleData.summary ||
      articleData.content?.replace(/<[^>]*>?/gm, "").slice(0, 160) ||
      "Makale detayı ve içerik.";

    const image =
      articleData.imageUrl || "https://devnot.com/og/default-article.png";

    return {
      title,
      description,

      alternates: {
        canonical: url,
      },

      openGraph: {
        title: articleData.title,
        description,
        url,
        siteName: "Devnot",
        type: "article",
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: articleData.title,
          },
        ],
      },

      twitter: {
        card: "summary_large_image",
        title: articleData.title,
        description,
        images: [image],
      },
    };
  } catch {
    return { title: "Makale Bulunamadı | Devnot" };
  }
}

/**
 * Ana Sayfa Bileşeni (Server Component)
 */
export default async function Page({ params }: Props) {
  const p = await params;
  const blogId = p?.id?.[0];

  if (!blogId) {
    notFound();
  }

  try {
    // Veriyi doğrudan sunucuda çekiyoruz
    const featuredArticleDetail = await fetchArticleSlug(blogId);

    // Veri yoksa 404
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
  } catch {
    // fetchArticleSlug throw ederse 500 yerine 404
    notFound();
  }
}
