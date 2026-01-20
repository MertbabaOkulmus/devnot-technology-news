export const dynamic = "force-dynamic";

import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { fetchAuthorDetail } from "@/services/homethree.service";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";

// Varsayılan (Fallback) Resimler
import defaultAvatar from "@/assets/img/images/author_img.png";
import defaultPostThumb from "@/assets/img/blog/blog_post01.jpg";

// --- TİP TANIMLAMALARI ---
interface Article {
  title: string;
  slug: string;
  imageUrl: string | null;
}

interface Author {
  id: number;
  name: string;
  bio: string | null;
  avatarUrl: string | null;
  linkedinUrl: string | null;
  twitterUrl: string | null;
}

interface AuthorDetailResponse {
  author: Author;
  articles: Article[];
}

type SearchParams = { [key: string]: string | string[] | undefined };

interface AuthorPageProps {
  searchParams: Promise<SearchParams>;
}

const resolveImageUrl = (path: string | null, base: string = "https://api.devnot.com/uploads/") => {
  if (!path) return null;
  if (path.startsWith("http")) return path;
  return `${base}${path}`;
};

const stripHtml = (text: string) =>
  text
    .replace(/<[^>]*>?/gm, " ")
    .replace(/\s+/g, " ")
    .trim();

const truncate = (text: string, max: number) => {
  const t = stripHtml(text || "");
  if (t.length <= max) return t;
  return `${t.slice(0, max - 1).trimEnd()}…`;
};

// --- SEO AYARLARI ---
export async function generateMetadata({ searchParams }: AuthorPageProps): Promise<Metadata> {
  const sp = await searchParams;
  const id = sp.id ? Number(sp.id) : 1;

  // canonical URL (query paramlı sayfa)
  const url = `https://devnot.com/author?id=${id}`;

  try {
    const data = (await fetchAuthorDetail(id)) as unknown as AuthorDetailResponse;

    const authorName = data?.author?.name || "Yazar";
    const rawBio =
      data?.author?.bio ||
      `${authorName} tarafından kaleme alınan teknoloji makaleleri.`;

    const description = truncate(rawBio, 170);

    const avatar = resolveImageUrl(data?.author?.avatarUrl) || undefined;

    const title = `${authorName} - Yazar Profili | Devnot`;

    return {
      title,
      description,

      alternates: {
        canonical: url,
      },

      robots: {
        index: true,
        follow: true,
      },

      openGraph: {
        title,
        description,
        url,
        siteName: "Devnot",
        type: "profile",
        images: avatar
          ? [
              {
                url: avatar,
                width: 1200,
                height: 630,
                alt: authorName,
              },
            ]
          : [],
      },

      twitter: {
        card: avatar ? "summary_large_image" : "summary",
        title,
        description,
        images: avatar ? [avatar] : [],
        site: "@devnotcom", // TODO: varsa kendi hesabınla değiştir
      },
    };
  } catch (error) {
    return {
      title: "Yazar Profili | Devnot",
      alternates: {
        canonical: url,
      },
      robots: {
        index: true,
        follow: true,
      },
    };
  }
}

const AuthorPage = async ({ searchParams }: AuthorPageProps) => {
  const sp = await searchParams;
  const authorId = sp.id ? Number(sp.id) : 1;

  let data: AuthorDetailResponse | null = null;

  try {
    data = (await fetchAuthorDetail(authorId)) as unknown as AuthorDetailResponse;
  } catch (error) {
    console.error("Yazar verisi çekilemedi:", error);
  }

  if (!data) {
    return (
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <HeaderThree />
        <main style={{ flex: "1 0 auto" }} className="d-flex align-items-center justify-content-center">
          <div className="text-center py-5" style={{ color: "var(--author-muted)" }}>
            Yazar bulunamadı.
          </div>

          <style
            dangerouslySetInnerHTML={{
              __html: `
                :root {
                  --author-muted: #6b7280;
                }
                [tg-theme="dark"] {
                  --author-muted: #d1d5db;
                }
              `,
            }}
          />
        </main>
        <FooterOne style={false} style_2={true} />
      </div>
    );
  }

  const { author, articles } = data;
  const avatarSrc = resolveImageUrl(author.avatarUrl) || defaultAvatar;

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <HeaderThree />

      <main style={{ backgroundColor: "var(--author-bg)", flex: "1 0 auto" }}>
        {/* --- ÜST PROFİL BÖLÜMÜ (Hero) --- */}
        <section
          className="author-hero pt-80 pb-60"
          style={{
            background: "var(--author-hero-bg)",
            borderBottom: "1px solid var(--author-hero-border)",
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-9">
                <div className="author-header d-flex flex-column flex-md-row align-items-center align-items-md-start gap-4 text-center text-md-start">
                  {/* Avatar */}
                  <div className="author-avatar-wrapper position-relative">
                    <div
                      style={{
                        padding: "5px",
                        backgroundColor: "var(--author-avatar-shell)",
                        borderRadius: "50%",
                        boxShadow: "var(--author-avatar-shadow)",
                        width: "160px",
                        height: "160px",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={avatarSrc}
                        alt={author.name}
                        fill
                        style={{ objectFit: "cover", borderRadius: "50%" }}
                        priority
                      />
                    </div>
                  </div>

                  {/* Profil Bilgileri */}
                  <div className="author-info flex-grow-1 mt-2 mt-md-0">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-2">
                      <div>
                        <h1 className="fw-bold mb-1" style={{ color: "var(--author-title)", fontSize: "2.5rem" }}>
                          {author.name}
                        </h1>
                        <p className="mb-0 fw-medium" style={{ color: "var(--author-accent)", fontSize: "1.1rem" }}>
                          Devnot Yazarı
                        </p>
                      </div>
                    </div>

                    <p
                      className="mt-3 mb-4"
                      style={{
                        fontSize: "1.05rem",
                        lineHeight: "1.7",
                        color: "var(--author-text)",
                        maxWidth: "800px",
                      }}
                    >
                      {author.bio ||
                        "Teknoloji dünyasındaki gelişmeleri takip eden ve deneyimlerini Devnot okurlarıyla paylaşan değerli yazarımız."}
                    </p>

                    <div
                      className="d-flex flex-column flex-sm-row align-items-center justify-content-between pt-3"
                      style={{ borderTop: "1px solid var(--author-divider)" }}
                    >
                      <div className="d-flex gap-4 mb-3 mb-sm-0">
                        <div className="text-center text-sm-start">
                          <span
                            className="d-block fw-bold text-dark"
                            style={{ fontSize: "1.2rem", color: "var(--author-title)" }}
                          >
                            {articles.length}
                          </span>
                          <span
                            className="d-block text-muted"
                            style={{ fontSize: "0.85rem", color: "var(--author-muted)" }}
                          >
                            Makale
                          </span>
                        </div>
                      </div>

                      <div className="social-links d-flex gap-3">
                        {author.linkedinUrl && (
                          <Link
                            href={author.linkedinUrl}
                            target="_blank"
                            className="text-secondary hover-primary"
                            aria-label="LinkedIn"
                            style={{ color: "var(--author-social)" }}
                          >
                            <i className="fab fa-linkedin-in fa-lg"></i>
                          </Link>
                        )}
                        {author.twitterUrl && (
                          <Link
                            href={author.twitterUrl}
                            target="_blank"
                            className="text-secondary hover-primary"
                            aria-label="Twitter"
                            style={{ color: "var(--author-social)" }}
                          >
                            <i className="fab fa-twitter fa-lg"></i>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* /Profil Bilgileri */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- MAKALELER BÖLÜMÜ (Grid) --- */}
        <section className="author-articles pt-60 pb-80">
          <div className="container">
            <div className="row justify-content-center mb-40">
              <div className="col-lg-10 col-xl-9">
                <h3 className="fw-bold text-dark mb-0" style={{ color: "var(--author-title)" }}>
                  Son Yayınlananlar
                </h3>
                <div className="section-title-line mt-20" style={{ maxWidth: "60px" }}></div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-9">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                  {articles.map((item, index) => {
                    const postImage = resolveImageUrl(item.imageUrl) || defaultPostThumb;
                    return (
                      <div key={index} className="col">
                        <article
                          className="h-100 p-0 bg-white shadow-sm"
                          style={{
                            backgroundColor: "var(--author-card-bg)",
                            border: "1px solid var(--author-card-border)",
                            borderRadius: "12px",
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <div className="position-relative" style={{ height: "240px", width: "100%" }}>
                            <Link href={`/haber/${item.slug}`}>
                              <Image src={postImage} alt={item.title} fill style={{ objectFit: "cover" }} />
                            </Link>
                          </div>

                          <div className="p-4 d-flex flex-column flex-grow-1">
                            <h2 className="mb-3" style={{ fontSize: "1.25rem", fontWeight: "700", lineHeight: "1.4" }}>
                              <Link
                                href={`/haber/${item.slug}`}
                                className="text-dark text-decoration-none hover-primary"
                                style={{ color: "var(--author-title)" }}
                              >
                                {item.title}
                              </Link>
                            </h2>

                            <div
                              className="mt-auto pt-3 border-top w-100"
                              style={{ borderColor: "var(--author-card-border)" }}
                            >
                              <Link
                                href={`/haber/${item.slug}`}
                                className="fw-bold text-primary text-decoration-none"
                                style={{ fontSize: "0.9rem" }}
                              >
                                Haberi Oku <i className="fas fa-arrow-right ms-1"></i>
                              </Link>
                            </div>
                          </div>
                        </article>
                      </div>
                    );
                  })}
                </div>

                {articles.length === 0 && (
                  <div className="text-center py-5" style={{ color: "var(--author-muted)" }}>
                    Bu yazar henüz bir makale yayınlamamış.
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --author-bg: #fdfdfd;

                --author-hero-bg: linear-gradient(180deg, #f4f7fa 0%, #ffffff 100%);
                --author-hero-border: #edf2f7;

                --author-title: #1a202c;
                --author-text: #4a5568;
                --author-muted: #6b7280;
                --author-accent: #007bff;

                --author-divider: #e2e8f0;

                --author-avatar-shell: #ffffff;
                --author-avatar-shadow: 0 8px 24px rgba(0,0,0,0.08);

                --author-social: #6b7280;

                --author-card-bg: #ffffff;
                --author-card-border: #e2e8f0;
              }

              [tg-theme="dark"] {
                --author-bg: #0b0e14;

                --author-hero-bg: linear-gradient(180deg, #0d1117 0%, #0b0e14 100%);
                --author-hero-border: #30363d;

                --author-title: #ffffff;
                --author-text: #e5e7eb;
                --author-muted: #d1d5db;   /* Makale / text-muted daha açık */
                --author-accent: #3b82f6;

                --author-divider: #30363d;

                --author-avatar-shell: #161b22;
                --author-avatar-shadow: 0 10px 28px rgba(0,0,0,0.55);

                --author-social: #e5e7eb;  /* ikonlar daha açık */

                --author-card-bg: #161b22;
                --author-card-border: #30363d;
              }

              /* ✅ Bootstrap'in .text-muted ve .text-secondary renkleri !important ile bastırdığı durumlar için
                 sadece BU sayfa kapsamında dark mod override */
              [tg-theme="dark"] .author-hero .text-muted,
              [tg-theme="dark"] .author-articles .text-muted {
                color: var(--author-muted) !important;
              }

              [tg-theme="dark"] .author-hero .text-secondary,
              [tg-theme="dark"] .author-hero .social-links a {
                color: var(--author-social) !important;
              }
            `,
          }}
        />
      </main>

      <FooterOne style={false} style_2={true} />
    </div>
  );
};

export default AuthorPage;