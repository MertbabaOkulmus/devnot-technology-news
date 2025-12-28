import { Metadata } from "next";
import HeaderThree from "@/layouts/headers/HeaderThree";
import FooterOne from "@/layouts/footers/FooterOne";

export const metadata: Metadata = {
  title: "Hakkımızda | Devnot - Yazılımcıların Bilgi Paylaşım Platformu",
  description:
    "Devnot, Türkiye'deki yazılım ekosistemine yön veren, geliştiricilerin teknik yetkinliklerini artıran bağımsız bir yayın platformudur.",
  openGraph: {
    title: "Devnot Hakkında",
    description: "Yazılım dünyasındaki güncel gelişmeleri ve teknik deneyimleri paylaşıyoruz.",
  },
};

const AboutPage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <HeaderThree />
      <main style={{ backgroundColor: "#fcfcfc", flex: "1 0 auto" }}>
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
                      }}
                    >
                      Devnot Nedir?
                    </h2>
                    <p style={{ fontSize: "19px", lineHeight: "1.8", color: "#333" }}>
                      <strong>Devnot</strong>, yazılım geliştirme süreçlerine odaklanan,
                      güncel teknolojileri ve mühendislik pratiklerini odağına alan
                      profesyonel bir içerik platformudur. Amacımız, bilginin paylaşılarak
                      çoğaldığı bir ortamda Türkiye&apos;deki yazılımcıların küresel
                      standartlarda içeriklere erişmesini sağlamaktır.
                    </p>
                  </section>

                  {/* Vizyon & Misyon Kartları */}
                  <div className="row mb-60">
                    <div className="col-md-6 mb-20">
                      <div
                        className="p-4 h-100"
                        style={{
                          backgroundColor: "#fff",
                          border: "1px solid #e1e1e1",
                          borderRadius: "15px",
                        }}
                      >
                        <h4 className="fw-bold mb-3 text-primary">Misyonumuz</h4>
                        <p style={{ color: "#555" }}>
                          Teknik derinliği olan, doğrulanmış ve pratik değeri yüksek
                          içeriklerle yazılım topluluğunun gelişimine öncülük etmek.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-20">
                      <div
                        className="p-4 h-100"
                        style={{ backgroundColor: "#111", color: "#fff", borderRadius: "15px" }}
                      >
                        <h4 className="fw-bold mb-3 text-white">Vizyonumuz</h4>
                        <p style={{ color: "#ccc" }}>
                          Türkiye&apos;nin yazılım alanındaki en güvenilir referans noktası ve
                          en büyük bilgi paylaşım üssü olmak.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tematik İçerik Alanı */}
                  <section className="content-features mb-60">
                    <h3 className="mb-25 fw-bold">Neler Paylaşıyoruz?</h3>
                    <div className="row">
                      {[
                        "Mimari Tasarımlar ve Design Patterns",
                        "Yapay Zeka ve Veri Bilimi",
                        "Backend ve Frontend Teknolojileri",
                        "DevOps ve Bulut Bilişim Çözümleri",
                        "Sektörel Haberler ve Etkinlikler",
                        "Kariyer ve Mühendislik Yönetimi",
                      ].map((item, idx) => (
                        <div key={idx} className="col-md-6 mb-15 d-flex align-items-start">
                          <span className="me-3" style={{ color: "#28a745", fontSize: "20px" }}>
                            ✓
                          </span>
                          <span style={{ fontSize: "16px", fontWeight: "500" }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterOne style={false} style_2={true} />
    </div>
  );
};

export default AboutPage;