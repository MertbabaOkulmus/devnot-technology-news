import { Metadata } from "next";
import HeaderThree from "@/layouts/headers/HeaderThree";
import FooterOne from "@/layouts/footers/FooterOne";

export const metadata: Metadata = {
  title: "Hakkında | Devnot - Yazılımcıların Bilgi Paylaşım Platformu",
  description:
    "Devnot, Türkiye'deki yazılım ekosistemine yön veren, geliştiricilerin teknik yetkinliklerini artıran bağımsız bir platformudur.",
  openGraph: {
    title: "Devnot Hakkında",
    description: "Yazılım dünyasındaki güncel gelişmeleri ve teknik deneyimleri paylaşıyoruz.",
  },
};

const AboutPage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <HeaderThree />

      <main style={{ backgroundColor: "var(--about-bg)", flex: "1 0 auto" }}>
        {/* Ana İçerik Alanı */}
        <section className="about-details-area pt-100 pb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-10">
                <div className="about-content-wrap">
                  {/* Giriş Bölümü */}
                  <section className="about-section mb-60">
                    <h2
                      className="mb-30"
                      style={{
                        fontWeight: "700",
                        borderLeft: "5px solid #007bff",
                        paddingLeft: "20px",
                        color: "var(--about-title)",
                      }}
                    >
                      Devnot Nedir?
                    </h2>
                    <p style={{ fontSize: "19px", lineHeight: "1.8", color: "var(--about-text)" }}>
                      <strong>Devnot</strong>, yazılım geliştirme süreçlerine odaklanan, güncel teknolojileri ve
                      mühendislik pratiklerini odağına alan profesyonel bir içerik platformudur. Amacımız, bilginin
                      paylaşılarak çoğaldığı bir ortamda Türkiye&apos;deki yazılımcıların küresel standartlarda
                      içeriklere erişmesini sağlamaktır.
                    </p>
                  </section>

                  {/* Vizyon & Misyon Kartları */}
                  <div className="row mb-60">
                    <div className="col-md-6 mb-20">
                      <div
                        className="p-4 h-100"
                        style={{
                          backgroundColor: "var(--about-card-bg)",
                          border: "1px solid var(--about-card-border)",
                          borderRadius: "15px",
                        }}
                      >
                        <h4 className="fw-bold mb-3 text-primary">Misyonumuz</h4>
                        <p style={{ color: "var(--about-muted)" }}>
                          Teknik derinliği olan, doğrulanmış ve pratik değeri yüksek içeriklerle yazılım topluluğunun
                          gelişimine öncülük etmek.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6 mb-20">
                      <div
                        className="p-4 h-100"
                        style={{
                          backgroundColor: "var(--about-invert-bg)",
                          color: "var(--about-invert-text)",
                          borderRadius: "15px",
                          border: "1px solid var(--about-invert-border)",
                        }}
                      >
                        <h4 className="fw-bold mb-3 text-white">Vizyonumuz</h4>
                        <p style={{ color: "#ccc" }}>
                          Türkiye&apos;nin yazılım alanındaki referans noktalarından ve
                          en güvenilir bilgi paylaşım platformlarından biri olmak.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tematik İçerik Alanı */}
                  <section className="content-features mb-60">
                    <h3 className="mb-25 fw-bold" style={{ color: "var(--about-title)" }}>
                      Neler Paylaşıyoruz?
                    </h3>
                    <div className="row">
                      {[
                        "Güncel Yazılım ve Teknoloji Haberleri",
                        "Yazılım Mimarisi",
                        "Modern Yazılım Yaklaşımları ve Araçları",
                        "Yapay Zeka ve Veri Bilimi",
                        "Backend, Frontend ve Mobile Teknolojileri",
                        "DevOps ve Bulut Bilişimi",
                        "Sektörel Haberler ve Etkinlikler",
                        "Kariyer ve Mühendislik Yönetimi",
                      ].map((item, idx) => (
                        <div key={idx} className="col-md-6 mb-15 d-flex align-items-start">
                          <span className="me-3" style={{ color: "var(--about-check)", fontSize: "20px" }}>
                            ✓
                          </span>
                          <span style={{ fontSize: "16px", fontWeight: "500", color: "var(--about-title)" }}>
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>

        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --about-bg: #fcfcfc;
                --about-title: #1a1a1a;
                --about-text: #333333;
                --about-muted: #555555;

                --about-card-bg: #ffffff;
                --about-card-border: #e1e1e1;

                /* Vizyon kartı (light mode'da zaten koyu) */
                --about-invert-bg: #111111;
                --about-invert-text: #ffffff;
                --about-invert-muted: #cccccc;
                --about-invert-border: transparent;

                --about-check: #28a745;
              }

              [tg-theme="dark"] {
                --about-bg: #0b0e14;
                --about-title: #ffffff;
                --about-text: #d7d7d7;
                --about-muted: #a9a9a9;

                --about-card-bg: #161b22;
                --about-card-border: #30363d;

                /* Vizyon kartı: dark mode'da da koyu kalabilir ama border ile ayıralım */
                --about-invert-bg: #0d1117;
                --about-invert-text: #ffffff;
                --about-invert-muted: #b5b5b5;
                --about-invert-border: #30363d;

                --about-check: #3ddc84;
              }
            `,
          }}
        />
      </main>

      <FooterOne style={false} style_2={true} />
    </div>
  );
};

export default AboutPage;