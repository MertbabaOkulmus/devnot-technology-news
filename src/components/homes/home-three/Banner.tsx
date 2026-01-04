import Image from "next/image";
import Link from "next/link";
import bannerThumb_1 from "@/assets/img/blog/t_banner_post01.jpg";
import { NewsArticle } from "@/services";

// === Yardımcı Fonksiyon ===
const mapArticleToBannerItem = (article: NewsArticle) => {
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const date = new Date(article.publishedAt);
  const formattedDate = date.toLocaleDateString("tr-TR", dateOptions).replace(/\.$/, "");
  const tag = article.category?.name || article.articleTags?.[0]?.tag?.name || "Gündem";

  return {
    id: article.id,
    title: article.title,
    imageUrl: article.imageUrl,
    tag: tag,
    date: formattedDate,
    slug: article.slug,
    authorName: article.user?.name || "Admin",
  };
};

type BannerProps = {
  featuredArticles?: NewsArticle[];
  isLoading?: boolean;
};

const Banner = ({ featuredArticles = [], isLoading = false }: BannerProps) => {
  const mappedData = featuredArticles.map(mapArticleToBannerItem);

  const bigPost = mappedData.slice(0, 1)[0];
  const smallPosts = mappedData.slice(1, 4);

  return (
    <section className="banner-post-area-two pb-30">
      <div className="container">
        <div className="banner-post-inner">
          <div className="row">
            {/* Sol Taraf - Büyük Resim (Col-70) */}
            <div className="col-70">
              {isLoading ? (
                <div className="banner-post-two big-post skeleton-card" aria-busy="true" aria-label="Yükleniyor">
                  <div className="banner-post-thumb-two skeleton-media" />
                  <div className="banner-post-content-two">
                    <div className="skeleton-line skeleton-tag" />
                    <div className="skeleton-line skeleton-title-lg" />
                    <div className="skeleton-line skeleton-meta" />
                  </div>
                </div>
              ) : (
                bigPost && (
                  <div key={bigPost.id} className="banner-post-two big-post">
                    <div className="banner-post-thumb-two">
                      <Link href={`/haber/${bigPost.slug}`}>
                        <Image
                          src={bigPost.imageUrl || bannerThumb_1}
                          alt={bigPost.title}
                          width={750}
                          height={500}
                          priority
                        />
                      </Link>
                    </div>
                    <div className="banner-post-content-two">
                      <Link href="/haber" className="post-tag">
                        {bigPost.tag}
                      </Link>
                      <h2 className="post-title bold-underline">
                        <Link href={`/haber/${bigPost.slug}`}>{bigPost.title}</Link>
                      </h2>
                      <div className="blog-post-meta white-blog-meta">
                        <ul className="list-wrap">
                          <li>
                            <i className="flaticon-calendar"></i>
                            {bigPost.date}
                          </li>
                          <Link href={`/author?id=${bigPost.id}`}>
                            <li>
                              <i className="flaticon-user"></i>
                              <>{bigPost.authorName}</>
                            </li>
                          </Link>
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Sağ Taraf - Küçük Resimler (Col-30) */}
            <div className="col-30">
              {isLoading ? (
                <>
                  {Array.from({ length: 3 }).map((_, idx) => (
                    <div key={`sk-${idx}`} className="banner-post-two small-post skeleton-card" aria-busy="true">
                      <div className="banner-post-thumb-two skeleton-media" />
                      <div className="banner-post-content-two">
                        <div className="skeleton-line skeleton-tag" />
                        <div className="skeleton-line skeleton-title-sm" />
                        <div className="skeleton-line skeleton-meta" />
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                smallPosts.map((item) => (
                  <div key={item.id} className="banner-post-two small-post">
                    <div className="banner-post-thumb-two">
                      <Link href={`/haber/${item.slug}`}>
                        <Image
                          src={item.imageUrl || bannerThumb_1}
                          alt={item.title}
                          width={300}
                          height={200}
                        />
                      </Link>
                    </div>
                    <div className="banner-post-content-two">
                      <Link href="/haber" className="post-tag">
                        {item.tag}
                      </Link>
                      <h2 className="post-title">
                        <Link href={`/haber/${item.slug}`}>{item.title}</Link>
                      </h2>
                      <div className="blog-post-meta white-blog-meta">
                        <ul className="list-wrap">
                          <li>
                            <i className="flaticon-calendar"></i>
                            {item.date}
                          </li>
                          <Link href={`/author?id=${item.id}`}>
                            <li>
                              <i className="flaticon-user"></i>
                              <>{item.authorName}</>
                            </li>
                          </Link>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Skeleton CSS (tasarımı bozmadan, sadece yüklenirken görünür) */}
      <style jsx global>{`
        .skeleton-card {
          position: relative;
          overflow: hidden;
        }

        .skeleton-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.12) 45%,
            rgba(255, 255, 255, 0) 85%
          );
          transform: translateX(-100%);
          animation: skeleton-shimmer 1.25s infinite linear;
          pointer-events: none;
        }

        @keyframes skeleton-shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        /* Görsel alanı placeholder */
        .skeleton-media {
          width: 100%;
          height: 100%;
          min-height: 200px;
          background: rgba(255, 255, 255, 0.08);
        }

        /* Büyük kart görseli yüksek olsun */
        .big-post.skeleton-card .skeleton-media {
          min-height: 500px;
        }

        /* Metin çizgileri */
        .skeleton-line {
          width: 100%;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.12);
          margin-bottom: 10px;
        }

        .skeleton-tag {
          width: 90px;
          height: 18px;
        }

        .skeleton-title-lg {
          width: 90%;
          height: 28px;
        }

        .skeleton-title-sm {
          width: 95%;
          height: 20px;
        }

        .skeleton-meta {
          width: 55%;
          height: 14px;
          margin-bottom: 0;
        }

        /* Mobilde büyük görsel çok uzamasın */
        @media (max-width: 767px) {
          .big-post.skeleton-card .skeleton-media {
            min-height: 320px;
          }
        }
      `}</style>
    </section>
  );
};

export default Banner;
