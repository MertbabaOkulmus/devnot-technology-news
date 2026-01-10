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

  try {
    const data: any = await fetchArticleCategorySlug(slug);

    // API kategori adı döndürüyorsa onu kullan
    const categoryTitle =
      data?.category?.title ||
      data?.category?.name ||
      slugToTitle(slug);

    return {
      title: `${categoryTitle} Kategorisi | Devnot`,
      description: `${categoryTitle} kategorisindeki en güncel yazılar ve haberler.`,
      openGraph: {
        title: `${categoryTitle} | Devnot`,
        description: `${categoryTitle} kategorisindeki içerikleri keşfedin.`,
      },
    };
  } catch (error) {
    const fallbackTitle = slugToTitle(slug);

    return {
      title: `${fallbackTitle} Kategorisi | Devnot`,
      description: `${fallbackTitle} kategorisindeki içerikler.`,
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