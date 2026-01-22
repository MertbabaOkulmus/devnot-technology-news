export const dynamic = "force-dynamic";

import BlogTwo from "@/components/blogs/blog-two";
import Wrapper from "@/layouts/Wrapper";
import { fetchArticleCategorySlug } from "@/services/homethree.service";
import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string[] }>;
};

/**
 * slug → okunur başlık
 * yapay-zeka => Yapay Zeka
 */
const slugToTitle = (slug: string) =>
  slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

/**
 * 🔥 SEO için dinamik metadata
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await params;
  const slug = p.id?.[0];

  if (!slug) {
    return {
      title: "Kategoriler | Devnot",
      description: "Devnot kategori içerikleri.",
    };
  }

  const url = `https://devnot.com/haber/${slug}`;
  const fallbackTitle = slugToTitle(slug);

  try {
    const data: any = await fetchArticleCategorySlug(slug);
    const categoryTitle =
      data?.category?.title ||
      data?.category?.name ||
      fallbackTitle;

    const title = `${categoryTitle} Kategorisi | Devnot`;
    const description = `${categoryTitle} kategorisindeki en güncel yazılar ve haberler.`;

    const image =
      data?.category?.imageUrl ||
      "https://devnot.com/og/default-category.png";

    return {
      title,
      description,

      alternates: {
        canonical: url,
      },

      openGraph: {
        title,
        description,
        url,
        siteName: "Devnot",
        type: "website",
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: categoryTitle,
          },
        ],
      },

      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image],
      },
    };
  } catch (error) {
    return {
      title: `${fallbackTitle} Kategorisi | Devnot`,
      description: `${fallbackTitle} kategorisindeki içerikler.`,
      alternates: {
        canonical: url,
      },
    };
  }
}

export default async function Page({ params }: Props) {
  const p = await params;
  const { id } = p;
  const categorySlug = id[0];

  const categoryData: any = await fetchArticleCategorySlug(categorySlug);

  return (
    <Wrapper>
      <BlogTwo initialEvents={categoryData} />
    </Wrapper>
  );
}