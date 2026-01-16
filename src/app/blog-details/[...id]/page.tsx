import { notFound } from "next/navigation";
import type { Metadata } from "next";

import BlogDetailsArea from "@/components/blogs/blog-details/BlogDetailsArea";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import inner_blog_data from "@/data/InnerBlogData";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";

type Props = {
  params: Promise<{ id: string[] }>;
};

const SITE_URL = "https://devnot.com";

/**
 * Basit HTML temizleyici (gerekirse)
 */
const stripHtml = (text: string) =>
  text
    .replace(/<[^>]*>?/gm, " ")
    .replace(/\s+/g, " ")
    .trim();

/**
 * 🔥 SEO / Social için dinamik metadata
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await params;
  const blogId = p.id?.[0];

  const blog_data = inner_blog_data.filter((items) => items.page === "blog_1");
  const single_blog = blog_data.find((item) => String(item.id) === blogId);

  if (!single_blog) {
    return { title: "Blog Bulunamadı | Devnot" };
  }

  // ✅ URL'yi kendi route'una göre düzenle (örnek olarak /blogs/[id] dedim)
  const url = `${SITE_URL}/blogs/${blogId}`;

  const title =
    (single_blog as any)?.title
      ? `${(single_blog as any).title} | Devnot`
      : "Blog | Devnot";

  const rawDesc =
    (single_blog as any)?.desc ||
    (single_blog as any)?.description ||
    (single_blog as any)?.content ||
    "";

  const description =
    (rawDesc ? stripHtml(String(rawDesc)) : "Blog detayı ve içerik.").slice(0, 160);

  // ✅ inner_blog_data içindeki görsel alanı neyse burayı ona göre tek satırda düzelt:
  // örn: (single_blog as any).img || (single_blog as any).image || (single_blog as any).thumb
  const image = (single_blog as any)?.img || (single_blog as any)?.image || null;

  return {
    title,
    description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: (single_blog as any)?.title || "Devnot",
      description,
      url,
      siteName: "Devnot",
      type: "article",
      images: image
        ? [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: (single_blog as any)?.title || "Devnot",
            },
          ]
        : [],
    },

    twitter: {
      card: image ? "summary_large_image" : "summary",
      title: (single_blog as any)?.title || "Devnot",
      description,
      images: image ? [image] : [],
    },
  };
}

export default async function Page({ params }: Props) {
  const p = await params;
  const blogId = p.id?.[0];

  const blog_data = inner_blog_data.filter((items) => items.page === "blog_1");
  const single_blog = blog_data.find((item) => String(item.id) === blogId);

  if (!single_blog) {
    notFound();
  }

  return (
    <Wrapper>
      <>
        <HeaderOne />
        <main className="fix">
          <Breadcrumbs page="blogs" style={true} />
          <BlogDetailsArea
            style={false}
            single_blog={single_blog}
            key={single_blog?.id}
          />
        </main>
        <FooterOne style={false} style_2={true} />
      </>
    </Wrapper>
  );
}