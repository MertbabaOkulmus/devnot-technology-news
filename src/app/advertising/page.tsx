import Link from "next/link";
import { Metadata } from "next";
import HeaderThree from "@/layouts/headers/HeaderThree";
import FooterOne from "@/layouts/footers/FooterOne";

export const metadata: Metadata = {
  title: "Reklam ve Sponsorluk | Devnot",
  description:
    "Devnot platformunda markanızı binlerce yazılımcı ve teknoloji profesyoneli ile buluşturun. Sponsorluk modellerimiz hakkında bilgi alın.",
};

const AdvertisingPage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <HeaderThree />

      <main style={{ backgroundColor: "var(--adv-bg)", flex: "1 0 auto" }}>
        {/* Ana İçerik */}
        <section className="advertising-details pt-100 pb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-10">
                {/* İstatistikler / Neden Devnot? */}
                <div className="row mb-80 text-center">
                  <div className="col-md-3 mb-30">
                    <h2 className="fw-bold text-primary">40K+</h2>
                    <p className="fw-medium" style={{ color: "var(--adv-text)" }}>
                      Aylık Tekil Ziyaretçi
                    </p>
                  </div>
                  <div className="col-md-3 mb-30">
                    <h2 className="fw-bold text-primary">5+</h2>
                    <p className="fw-medium" style={{ color: "var(--adv-text)" }}>
                      Üst Düzey Konferans
                    </p>
                  </div>
                  <div className="col-md-3 mb-30">
                    <h2 className="fw-bold text-primary">10K+</h2>
                    <p className="fw-medium" style={{ color: "var(--adv-text)" }}>
                      E-Bülten Abonesi
                    </p>
                  </div>
                  <div className="col-md-3 mb-30">
                    <h2 className="fw-bold text-primary">%100</h2>
                    <p className="fw-medium" style={{ color: "var(--adv-text)" }}>
                      Teknoloji Odaklı Kitle
                    </p>
                  </div>
                </div>

                {/* İş Birliği Modelleri */}
                <section className="mb-80">
                  <h2 className="mb-40 fw-bold text-center" style={{ color: "var(--adv-title)" }}>
                    İş Birliği Modellerimiz
                  </h2>
                  <div className="row">
                    {[
                      {
                        title: "İçerik Sponsorluğu",
                        desc: "Teknoloji ürününüzü veya markanızı tanıtan profesyonel inceleme yazıları ve teknik içerikler.",
                        icon: "📝",
                      },
                      {
                        title: "Etkinlik Sponsorluğu",
                        desc: "Düzenlenen konferans, fiziki veya online etkinliklerde markanızla topluluk önünde olun.",
                        icon: "🎙️",
                      },
                      {
                        title: "Newsletter/Bülten Reklamları",
                        desc: "Binlerce yazılımcının gelen kutusuna düşen e-bültenlerimizde yerinizi alın.",
                        icon: "📧",
                      },
                      {
                        title: "Banner & Display",
                        desc: "Devnot.com'un stratejik noktalarda görsel reklamlarınızla görünürlüğünüzü artırın.",
                        icon: "🖼️",
                      },
                      
                    ].map((model, idx) => (
                      <div key={idx} className="col-md-6 mb-30">
                        <div
                          className="p-4 h-100"
                          style={{
                            border: "1px solid var(--adv-card-border)",
                            borderRadius: "15px",
                            transition: "all 0.3s ease",
                            backgroundColor: "var(--adv-card-bg)",
                          }}
                        >
                          <div style={{ fontSize: "32px" }} className="mb-3">
                            {model.icon}
                          </div>
                          <h4 className="fw-bold mb-2" style={{ color: "var(--adv-title)" }}>
                            {model.title}
                          </h4>
                          <p className="mb-0" style={{ color: "var(--adv-muted)" }}>
                            {model.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Kurumsal Bilgi */}
                <section
                  className="mb-60 p-5"
                  style={{
                    backgroundColor: "var(--adv-dark-bg)",
                    color: "var(--adv-dark-title)",
                    borderRadius: "20px",
                    border: "1px solid var(--adv-dark-border)",
                  }}
                >
                  <h3 className="mb-20 text-white">Etkili ve Nitelikli Erişim</h3>
                  <p className="mb-20" style={{ color: "var(--adv-dark-text)", lineHeight: "1.8" }}>
                    Devnot kitlesi; yazılım mimarları, kıdemli geliştiriciler ve teknoloji karar vericilerinden oluşur.
                    Reklamlarınız sadece &nbsp;&quot;görüntülenmez&quot;, hedeflediğiniz doğru profesyonellere ulaşır.
                    Sektörel güvenilirliğimiz, markanızın imajına değer katar.
                  </p>
                </section>

                {/* İletişim CTA */}
                <div className="text-center mt-60">
                  <div
                    className="p-5"
                    style={{
                      border: "2px dashed var(--adv-dashed)",
                      borderRadius: "25px",
                      backgroundColor: "var(--adv-cta-bg)",
                    }}
                  >
                    <h3 className="mb-15">Detaylı Bilgi Talep Edin</h3>
                    <p className="mb-35">
                      Detaylı istatistikler ve bilgiler için bizimle iletişime geçin.
                    </p>
                    <Link
                      href="mailto:reklam@devnot.com"
                      className="btn btn-primary btn-lg px-5"
                      style={{
                        borderRadius: "50px",
                        maxWidth: "100%",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        whiteSpace: "normal",
                        textAlign: "center",
                        lineHeight: 1.25,
                        wordBreak: "break-word",
                        paddingLeft: 24,
                        paddingRight: 24,
                      }}
                    >
                      bilgi@devnot.com adresine e-posta gönderin
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --adv-bg: #fcfcfc;

                --adv-title: #1a1a1a;
                --adv-text: #1a1a1a;
                --adv-muted: #666666;

                --adv-card-bg: transparent;
                --adv-card-border: #eeeeee;

                --adv-dark-bg: #111111;
                --adv-dark-border: transparent;
                --adv-dark-title: #ffffff;
                --adv-dark-text: #cccccc;

                --adv-dashed: #007bff;
                --adv-cta-bg: transparent;
              }

              [tg-theme="dark"] {
                --adv-bg: #0b0e14;

                --adv-title: #ffffff;
                --adv-text: #d7d7d7;
                --adv-muted: #a1a1aa;

                --adv-card-bg: #161b22;
                --adv-card-border: #30363d;

                --adv-dark-bg: #0d1117;
                --adv-dark-border: #30363d;
                --adv-dark-title: #ffffff;
                --adv-dark-text: #b5b5b5;

                --adv-dashed: #3b82f6;
                --adv-cta-bg: rgba(255,255,255,0.02);
              }
            `,
          }}
        />
      </main>

      <FooterOne style={false} style_2={true} />
    </div>
  );
};

export default AdvertisingPage;
