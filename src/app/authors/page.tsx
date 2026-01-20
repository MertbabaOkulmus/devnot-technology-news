export const dynamic = "force-dynamic";

import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { fetchAuthorList } from "@/services/homethree.service";
import HeaderThree from "@/layouts/headers/HeaderThree";
import FooterOne from "@/layouts/footers/FooterOne";

// Varsayılan Avatar
import defaultAvatar from "@/assets/img/images/author_img.png";

const PAGE_URL = "https://devnot.com/authors"; // TODO: route farklıysa değiştir
const OG_IMAGE: string | null = null; // örn: "https://devnot.com/og/authors.png" (gerçekten varsa)

// --- TİP TANIMLAMALARI ---
interface AuthorItem {
  id: number;
  name: string;
  avatarUrl: string | null;
}

// --- SEO METADATA ---
export const metadata: Metadata = {
  title: "Yazarlar | Devnot",
  description: "Gündeme ve yazılım geliştirme süreçlerine dair güncel haberler yayınlayan Devnot yazarları",

  alternates: {
    canonical: PAGE_URL,
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Devnot Yazarları",
    description: "Sektörün önde gelen yazılımcılarını ve içerik üreticilerini keşfedin.",
    url: PAGE_URL,
    siteName: "Devnot",
    type: "website",
    images: OG_IMAGE
      ? [
          {
            url: OG_IMAGE,
            width: 1200,
            height: 630,
            alt: "Devnot Yazarları",
          },
        ]
      : [],
  },

  twitter: {
    card: OG_IMAGE ? "summary_large_image" : "summary",
    title: "Devnot Yazarları",
    description: "Sektörün önde gelen yazılımcılarını ve içerik üreticilerini keşfedin.",
    images: OG_IMAGE ? [OG_IMAGE] : [],
    site: "@devnotcom", // TODO: varsa kendi hesabınla değiştir
  },
};

// Resim URL Çözümleyici
const resolveImageUrl = (path: string | null, base: string = "https://api.devnot.com/uploads/") => {
  if (!path) return null;
  if (path.startsWith("http")) return path;
  return `${base}${path}`;
};

const AuthorsPage = async () => {
  let authors: AuthorItem[] = [];

  try {
    authors = (await fetchAuthorList()) as unknown as AuthorItem[];
  } catch (error) {
    console.error("Yazar listesi çekilirken hata oluştu:", error);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <HeaderThree />

      <main style={{ backgroundColor: "var(--authors-bg)", flex: "1 0 auto" }}>
        <section className="authors-list-area pt-80 pb-80">
          <div className="container">
            {/* Başlık */}
            <div className="row mb-50">
              <div className="col-lg-8">
                <h1 className="fw-bold mb-2" style={{ fontSize: "36px", color: "var(--authors-title)" }}>
                  Yazarlar
                </h1>
                <p className="text-muted"></p>
              </div>
            </div>

            {authors.length > 0 ? (
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4">
                {authors.map((author) => {
                  const avatarSrc = resolveImageUrl(author.avatarUrl) || defaultAvatar;

                  return (
                    <div key={author.id} className="col">
                      <Link href={`/author?id=${author.id}`} className="text-decoration-none">
                        <div
                          className="author-card h-100 text-center p-4"
                          style={{
                            backgroundColor: "var(--authors-card-bg)",
                            border: "1px solid var(--authors-card-border)",
                            borderRadius: "16px",
                            transition: "all 0.3s ease",
                            position: "relative",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
                          }}
                        >
                          {/* Avatar */}
                          <div
                            className="mx-auto mb-3 position-relative"
                            style={{
                              width: "120px",
                              height: "120px",
                              borderRadius: "50%",
                              overflow: "hidden",
                              border: "3px solid var(--authors-avatar-border)",
                            }}
                          >
                            <Image
                              src={avatarSrc}
                              alt={author.name}
                              fill
                              style={{ objectFit: "cover" }}
                              sizes="(max-width: 768px) 120px, 120px"
                            />
                          </div>

                          {/* İsim */}
                          <h3
                            className="author-name mb-1"
                            style={{
                              fontSize: "20px",
                              fontWeight: "700",
                              color: "var(--authors-name)",
                            }}
                          >
                            {author.name}
                          </h3>

                          <span className="d-block mb-3" style={{ fontSize: "14px", color: "var(--authors-muted)" }}>
                            Yazar
                          </span>

                          {/* Aksiyon */}
                          <div className="mt-auto">
                            <span
                              className="btn-text"
                              style={{
                                color: "var(--authors-link)",
                                fontWeight: "600",
                                fontSize: "14px",
                                display: "inline-flex",
                                alignItems: "center",
                              }}
                            >
                              Profili İncele{" "}
                              <i className="fas fa-arrow-right ms-2" style={{ fontSize: "12px" }}></i>
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-5">
                <div className="mb-3" style={{ fontSize: "40px", color: "var(--authors-muted)" }}>
                  <i className="far fa-user"></i>
                </div>
                <h3 style={{ color: "var(--authors-muted)" }}>Yazar listesi şu an yüklenemedi.</h3>
              </div>
            )}

            {/* CTA */}
            <div className="row justify-content-center mt-100">
              <div className="col-lg-10">
                <div
                  className="cta-box p-5 text-center text-white"
                  style={{
                    background: "var(--authors-cta-bg)",
                    borderRadius: "24px",
                  }}
                >
                  <h2 className="fw-bold mb-3 text-white">Yazar Kadromuza Katılın</h2>
                  <p className="mb-4" style={{ color: "var(--authors-cta-text)", fontSize: "18px" }}>
                    Teknik bilgilerinizi paylaşarak Türkiye yazılım ekosistemine katkıda bulunun.
                  </p>
                  <Link
                    href="mailto:bilgi@devnot.com"
                    className="btn btn-light btn-lg px-5 fw-bold"
                    style={{ borderRadius: "50px" }}
                  >
                    Başvur
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hover + Theme */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --authors-bg: #fcfcfc;
                --authors-title: #1a1a1a;
                --authors-name: #2d3748;
                --authors-muted: #718096;

                --authors-card-bg: #ffffff;
                --authors-card-border: #edf2f7;
                --authors-avatar-border: #f8f9fa;

                --authors-link: #007bff;

                --authors-cta-bg: linear-gradient(90deg, #111111 0%, #333333 100%);
                --authors-cta-text: #cccccc;
              }

              [tg-theme="dark"] {
                --authors-bg: #0b0e14;
                --authors-title: #ffffff;
                --authors-name: #ffffff;
                --authors-muted: #a1a1a1;

                --authors-card-bg: #161b22;
                --authors-card-border: #30363d;
                --authors-avatar-border: #30363d;

                --authors-link: #3b82f6;

                --authors-cta-bg: linear-gradient(90deg, #0d1117 0%, #161b22 100%);
                --authors-cta-text: #b5b5b5;
              }

              .author-card:hover {
                transform: translateY(-8px);
                box-shadow: 0 15px 35px rgba(0,0,0,0.25) !important;
                border-color: var(--authors-link) !important;
              }

              .author-card:hover .author-name {
                color: var(--authors-link) !important;
              }
            `,
          }}
        />
      </main>

      <FooterOne style={false} style_2={true} />
    </div>
  );
};

export default AuthorsPage;