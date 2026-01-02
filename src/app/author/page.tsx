export const dynamic = "force-dynamic";

import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
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

// --- SEO AYARLARI ---
export async function generateMetadata({ searchParams }: AuthorPageProps): Promise<Metadata> {
  const sp = await searchParams;
  const id = sp.id ? Number(sp.id) : 1;

  try {
    const data = (await fetchAuthorDetail(id)) as unknown as AuthorDetailResponse;
    return {
      title: `${data.author.name} - Yazar Profili | Devnot`,
      description: data.author.bio || `${data.author.name} tarafından kaleme alınan teknoloji makaleleri.`,
    };
  } catch (error) {
    return { title: "Yazar Profili | Devnot" };
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
          <div className="text-center py-5">Yazar bulunamadı.</div>
        </main>
        <FooterOne style={false} style_2={true} />
      </div>
    );
  }

  const { author, articles } = data;
  const avatarSrc = resolveImageUrl(author.avatarUrl) || defaultAvatar;

  return (
    // Sticky Footer için dış kapsayıcı
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <HeaderThree />

      {/* flex: '1 0 auto' sayesinde içerik az olsa bile footer'ı aşağı itecek */}
      <main style={{ backgroundColor: "#fdfdfd", flex: "1 0 auto" }}>
        {/* --- ÜST PROFİL BÖLÜMÜ (Hero) --- */}
        <section
          className="author-hero pt-80 pb-60"
          style={{
            background: "linear-gradient(180deg, #f4f7fa 0%, #ffffff 100%)",
            borderBottom: "1px solid #edf2f7",
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
                        backgroundColor: "#fff",
                        borderRadius: "50%",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
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
                        <h1 className="fw-bold mb-1" style={{ color: "#1a202c", fontSize: "2.5rem" }}>
                          {author.name}
                        </h1>
                        <p className="mb-0 fw-medium" style={{ color: "#007bff", fontSize: "1.1rem" }}>
                          Devnot Yazarı
                        </p>
                      </div>
                    </div>

                    <p
                      className="mt-3 mb-4"
                      style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "#4a5568", maxWidth: "800px" }}
                    >
                      {author.bio ||
                        "Teknoloji dünyasındaki gelişmeleri takip eden ve deneyimlerini Devnot okurlarıyla paylaşan değerli yazarımız."}
                    </p>

                    <div
                      className="d-flex flex-column flex-sm-row align-items-center justify-content-between pt-3"
                      style={{ borderTop: "1px solid #e2e8f0" }}
                    >
                      <div className="d-flex gap-4 mb-3 mb-sm-0">
                        <div className="text-center text-sm-start">
                          <span className="d-block fw-bold text-dark" style={{ fontSize: "1.2rem" }}>
                            {articles.length}
                          </span>
                          <span className="d-block text-muted" style={{ fontSize: "0.85rem" }}>
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
                          >
                            <i className="fab fa-twitter fa-lg"></i>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
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
                <h3 className="fw-bold text-dark mb-0">Son Yayınlananlar</h3>
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
                            border: "1px solid #e2e8f0",
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
                              <Link href={`/haber/${item.slug}`} className="text-dark text-decoration-none hover-primary">
                                {item.title}
                              </Link>
                            </h2>
                            <div className="mt-auto pt-3 border-top w-100">
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
                  <div className="text-center py-5 text-muted">Bu yazar henüz bir makale yayınlamamış.</div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterOne style={false} style_2={true} />
    </div>
  );
};

export default AuthorPage;